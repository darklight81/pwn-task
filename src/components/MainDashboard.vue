<template>
  <div class="body" v-if="hasEthProvider">
    <h1>Choose tokens to wrap/unwrap...</h1>
    <div class="assets">
      <AssetItem v-for="asset in assets" :key="asset.id" :asset="asset" @changeTokens="changeTokens"/>
    </div>
    <button @click="wrapTokens">Wrap Tokens</button>
    <button @click="unwrapTokens">Unwrap Tokens</button>
    <div :class="{'error': message, 'success': message}">
      <p>{{ message }}</p>
    </div>
  </div>
  <div class="body" v-else>
    <h1>To use the application, download a wallet...</h1>
  </div>
</template>

<script lang="ts" setup>
import {BigNumber, ethers} from "ethers";
import {Basic1155__factory, Basic721__factory, Erc20__factory, TokenBundler__factory} from "@/types/ethers-contracts";
import {MultiToken} from "@/types/ethers-contracts/TokenBundler";
import AssetItem from './AssetItem.vue';
import {ref} from "vue";
import {OpenseaAsset} from "@/types/OpenseaAsset";
import {MoralisAsset} from "@/types/MoralisAsset";

interface Token{
  asset: OpenseaAsset | MoralisAsset;
  amount: number;
}
enum SchemaName {
  ERC20 = 0,
  ERC721 = 1,
  ERC1155 = 2
}
const TOKEN_BUNDLER_ADDRESS = "0xA0610921062f99D720710d9763EE8cb1fCF7a845";

const tokensToWrap: Array<Token> = [];
const message = ref<string | null>();
let assets = ref<Array<OpenseaAsset | MoralisAsset> >([]);

let signer: ethers.Signer;
let signerAddress: string;
let hasEthProvider = !!window.ethereum

if (hasEthProvider) {
  signer = await login()
  signerAddress = await signer.getAddress();
  assets.value = await fetchTokens(signerAddress);
}

async function login(){
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send("eth_requestAccounts", []);
  return provider.getSigner();
}

async function fetchTokens(signerAddress: string){
  const openSeaOptions = {method: 'GET'};
  const moralisOptions = {method: 'GET', headers: {'X-API-Key': `${process.env.VUE_APP_MORALIS_API_KEY}`}};

  let openSeaRes = fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${signerAddress}&order_direction=desc&offset=0&limit=20&include_orders=false`, openSeaOptions)
  let moralisRes = fetch(`https://deep-index.moralis.io/api/v2/${signerAddress}/erc20?chain=goerli`, moralisOptions)
  const [openSeaData, moralisData] = await Promise.all([openSeaRes, moralisRes])

  let jsonAssets = await openSeaData.json()
  let assets: Array<OpenseaAsset | MoralisAsset> = jsonAssets.assets
  jsonAssets = await moralisData.json();
  assets = assets.concat(jsonAssets)
  return assets
}

async function handleToken(token: Token, tokensToWrapMultiToken: Array<MultiToken.AssetStruct>){
  let amount: BigNumber = token.amount === -1 ? BigNumber.from(1) : BigNumber.from(token.amount);
  let category = SchemaName.ERC20;
  let address = ""

  if(!token.asset.asset_contract){
    address = token.asset.token_address;
    const tokenContract = Erc20__factory.connect(address, signer);

    amount = BigNumber.from(token.amount).mul(BigNumber.from(10).pow(token.asset.decimals));
    const allowance = await tokenContract.allowance(signerAddress, TOKEN_BUNDLER_ADDRESS);
    if(allowance < amount)
      await tokenContract.approve(TOKEN_BUNDLER_ADDRESS, amount);

  }
  else {
    address = token.asset.asset_contract.address;
    const schemaName = token.asset.asset_contract.schema_name;
    category = schemaName === "ERC721" ? SchemaName.ERC721 : SchemaName.ERC1155;
    const tokenContract = category === SchemaName.ERC721 ? Basic721__factory.connect(address, signer)
        :Basic1155__factory.connect(address, signer);
    const allowance = await tokenContract.isApprovedForAll(signerAddress, TOKEN_BUNDLER_ADDRESS);
    if(!allowance)
      await tokenContract.setApprovalForAll(TOKEN_BUNDLER_ADDRESS, true);
  }
  tokensToWrapMultiToken.push({
    category: category,
    assetAddress: address,
    id: category === SchemaName.ERC20 ? BigNumber.from(0) : BigNumber.from(1),
    amount: amount
  })
}

async function wrapTokens(){
  const tokenBundlerContract = TokenBundler__factory.connect(TOKEN_BUNDLER_ADDRESS, signer);
  let tokensToWrapMultiToken: Array<MultiToken.AssetStruct> = []
  await Promise.all(tokensToWrap.map( token => handleToken(token, tokensToWrapMultiToken)))

  try {
    await tokenBundlerContract.create(tokensToWrapMultiToken);
    message.value = "Tokens wrapped successfully! It may take a few minutes for the tokens to appear in your wallet.";
    assets.value = await fetchTokens(signerAddress);
  } catch (error) {
    console.log(error)
    message.value = "Error wrapping tokens";
  }
}

function changeTokens({asset, amount, add}) {
    if (add)
      tokensToWrap.push({asset, amount})
    else
      tokensToWrap.splice(tokensToWrap.findIndex(token => token.asset.id === asset.id), 1)
}

async function unwrapTokens(){
  if (tokensToWrap.length === 1 && tokensToWrap[0].asset.asset_contract &&
      tokensToWrap[0].asset.asset_contract.address.toUpperCase() === TOKEN_BUNDLER_ADDRESS.toUpperCase()){
    const tokenBundlerContract = TokenBundler__factory.connect(TOKEN_BUNDLER_ADDRESS, signer);

    try {
      await tokenBundlerContract.unwrap(tokensToWrap[0].asset.token_id);
      message.value = "Bundle unwrapped successfully! It may take a few minutes for the tokens to appear in your wallet.";
      assets.value = await fetchTokens(signerAddress);
    } catch (error) {
      message.value = "Error unwrapping bundle";
    }
    return
  }
  message.value = tokensToWrap.length !== 1 ? "Please select only one bundle to unwrap" : "Please select a bundle to unwrap";
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  color: #2c3e50;
  margin-top: 3.75rem;
}

.assets {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}
button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 1.5rem 2.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.6rem;
  margin: 0.4rem 0.2rem;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}

.error {
  color: red;
}
.success {
  color: green;
}
h3 {
  margin: 2.5rem 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0.625rem;
}
a {
  color: #42b983;
}
</style>
