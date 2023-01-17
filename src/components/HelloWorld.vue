<template>
  <div class="hello">
    <h1>Choose tokens to wrap/unwrap...</h1>
    <div class="assets  ">
      <AssetItem v-for="asset in assets" :key="asset.id" :asset="asset" @customChange="logChange"/>
    </div>
    <button @click="wrapTokens">Wrap Tokens</button>
    <button @click="unwrapTokens">Unwrap Tokens</button>
    <div class="error" v-if="error">
      <p>{{error}}</p>
    </div>
    <div class="success" v-if="success">
      <p>{{success}}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ethers} from "ethers";
import {TokenBundler__factory} from "../types/ethers-contracts/factories/TokenBundler__factory";
import {MultiToken} from "../types/ethers-contracts/TokenBundler";
import {Basic1155__factory} from "../types/ethers-contracts/factories/Basic1155__factory";
import {Basic721__factory} from "../types/ethers-contracts/factories/Basic721__factory";
import AssetItem from './AssetItem.vue';
import moralisApiKey from "../.env";
import {ref} from "vue";
import {OpenseaAsset} from "@/types/OpenseaAsset";
import {MoralisAsset} from "@/types/MoralisAsset";
import {Erc20__factory} from "@/types/ethers-contracts";

interface Token{
  asset: OpenseaAsset | MoralisAsset;
  amount: number;
}
const TokenBundlerAddress = "0xA0610921062f99D720710d9763EE8cb1fCF7a845";

if (!window.ethereum){
  // Give user information about how to install metamask
}
const provider = new ethers.providers.Web3Provider(window.ethereum)
await provider.send("eth_requestAccounts", []);
const signer = await provider.getSigner();
const tokensToWrap: Array<Token> = [];
const error = ref<string | null>(null);
const success = ref<string | null>(null);

// Receive tokens from OpenSea and Moralis
const options = {method: 'GET'};
const options2 = {method: 'GET', headers: {'X-API-Key': moralisApiKey}};
const signerAddress: string = await signer.getAddress();

const openseaRes = await fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${signerAddress}&order_direction=desc&offset=0&limit=20&include_orders=false`, options)
const moralisRes = await fetch(`https://deep-index.moralis.io/api/v2/${signerAddress}/erc20?chain=goerli`, options2)

let jsonAssets = await openseaRes.json()
let assets : Array<OpenseaAsset | MoralisAsset> = jsonAssets.assets
jsonAssets = await moralisRes.json();
jsonAssets.map((asset: MoralisAsset) => {assets.push(asset)})

async function handleToken(token: Token, tokensToWrapMultiToken){
  if(!token.asset.asset_contract){
    // Token is from Moralis
    const tokenContract = Erc20__factory.connect(token.asset.token_address, signer);
    const balance = await tokenContract.balanceOf(signerAddress);

    // todo: make amount type of BigNumber and check if it is greater than balance
    const amount = token.amount * 10 ** token.asset.decimals;
    await tokenContract.approve(TokenBundlerAddress, amount.toString());
    tokensToWrapMultiToken.push({
      category: 0,
      assetAddress: token.asset.token_address,
      id: 0,
      amount: amount.toString()
    })
  }

  else if (token.asset.asset_contract.schema_name === "ERC1155"){
    const tokenContract = Basic1155__factory.connect(token.asset.asset_contract.address, signer);
    await tokenContract.setApprovalForAll(TokenBundlerAddress, true);
    tokensToWrapMultiToken.push({
      category: 2,
      assetAddress: token.asset.asset_contract.address,
      id: token.asset.token_id,
      amount: 1
    })
  }

  else if (token.asset.asset_contract.schema_name === "ERC721"){
    const tokenContract = Basic721__factory.connect(token.asset.asset_contract.address, signer);
    await tokenContract.setApprovalForAll(TokenBundlerAddress, true);
    tokensToWrapMultiToken.push({
      category: 1,
      assetAddress: token.asset.asset_contract.address,
      id: token.asset.token_id,
      amount: 1
    })
  }
}

async function wrapTokens(){
  const tokenBundlerContract = TokenBundler__factory.connect(TokenBundlerAddress, signer);
  let tokensToWrapMultiToken: Array<MultiToken.AssetStruct> = []

  await Promise.all(tokensToWrap.map( token => handleToken(token, tokensToWrapMultiToken)))

  // Mint bundle token and transfer MultiToken struct to Bundler contract.
  await tokenBundlerContract.create(tokensToWrapMultiToken, {gasLimit: 1000000}).then(() => {
    error.value = null;
    success.value = "Tokens wrapped successfully! Reload the page to see new token.";
  }).catch(() => { error.value = "Error wrapping tokens"})
}

function logChange({asset, amount, add}) {
  if (add)
    tokensToWrap.push({asset, amount})
  else
    tokensToWrap.splice(tokensToWrap.findIndex(token => token.asset.id === asset.id), 1)
}

async function unwrapTokens(){
  if (tokensToWrap.length === 1 && tokensToWrap[0].asset.asset_contract &&
      tokensToWrap[0].asset.asset_contract.address.toUpperCase() === TokenBundlerAddress.toUpperCase()){
    const tokenBundlerContract = TokenBundler__factory.connect(TokenBundlerAddress, signer);
    await tokenBundlerContract.unwrap(tokensToWrap[0].asset.token_id, {gasLimit: 500000}).then(() => {
      error.value = null;
      success.value = "Tokens unwrapped successfully! Reload the page to see new token.";
      // reload the page
      window.location.reload();
    }).catch(() => { error.value = "Error unwrapping tokens"})
  } else {
    if (tokensToWrap.length !== 1)
      error.value = "Please select only one token to unwrap"
    else
      error.value = "Please select a token bundle to unwrap"
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  color: #2c3e50;
  margin-top: 60px;
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
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.error {
  color: red;
}
.success {
  color: green;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
