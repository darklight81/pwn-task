<template>
  <div class="hello">
    <div class="assets  ">
      <AssetItem v-for="asset in assets" :key="asset.id" :asset="asset" @customChange="logChange"/>
    </div>
    <button @click="wrapTokens">Wrap Tokens</button>
    <button @click="unwrapTokens">Unwrap Tokens</button>
  </div>
</template>

<script lang="ts" setup>
import {defineComponent, ref} from 'vue';
import {ethers} from "ethers";
import {TokenBundler__factory} from "../../types/ethers-contracts/factories/TokenBundler__factory";
import {MultiToken} from "../../types/ethers-contracts/TokenBundler";
import {Basic1155__factory} from "../../types/ethers-contracts/factories/Basic1155__factory";
import {Basic721__factory} from "../../types/ethers-contracts/factories/Basic721__factory";
// eslint-disable-next-line
// @ts-ignore
import AssetItem from './AssetItem.vue';
const ContractAddress = "0xA0610921062f99D720710d9763EE8cb1fCF7a845";
const AssetAddress = "0x326C977E6efc84E512bB9C30f76E30c160eD06FB";

    if (window.ethereum){
      // throw an error
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const tokensToWrap: Array<any> = [];

    const options = {method: 'GET'};
    const signerAddress: string = await signer.getAddress();
    const res = await fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${signerAddress}&order_direction=desc&offset=0&limit=20&include_orders=false`, options)
    let assets = await res.json()
    assets = assets.assets

    async function handleToken(token, tokensToWrapMultiToken){
      if (token.asset_contract.schema_name === "ERC1155"){
        const tokenContract = Basic1155__factory.connect(token.asset_contract.address, signer);
        tokenContract.setApprovalForAll(ContractAddress, true);
        tokensToWrapMultiToken.push({
          category: 2,
          assetAddress: token.asset_contract.address,
          id: token.id,
          amount: 1
        })
      }

      if (token.asset_contract.schema_name === "ERC721"){
        const tokenContract = Basic721__factory.connect(token.asset_contract.address, signer);
        tokenContract.setApprovalForAll(ContractAddress, true);
        tokensToWrapMultiToken.push({
          category: 1,
          assetAddress: token.asset_contract.address,
          id: token.id,
          amount: 1
        })
      }
    }
    async function wrapTokens(){
      const tokenBundlerContract = TokenBundler__factory.connect(ContractAddress, signer);
      let tokensToWrapMultiToken: Array<MultiToken.AssetStruct>
      console.log(tokensToWrap)
      await Promise.all(tokensToWrap.map( token => handleToken(token, tokensToWrapMultiToken)))

      console.log(tokensToWrapMultiToken)
      // Mint bundle token and transfer MultiToken struct to Bundler contract.
      await tokenBundlerContract.create(tokensToWrapMultiToken, {gasLimit: 5000000}).then((tx) => {
        console.log(tx)
      })
    }
    function logChange(event: any) {
      let addItem = true;
      tokensToWrap.forEach( token => {
        if (token.id === event.id)
          addItem = false;
      })

      if(addItem)
        tokensToWrap.push(event)

      console.log(tokensToWrap)
    }
    async function unwrapTokens(){
      console.log(assets)
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
