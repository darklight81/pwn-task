<template>
  <div v-if="asset.asset_contract" class="asset">
    <img class="token__image" :src="asset.image_preview_url">
    <p class="description"> {{asset.asset_contract.name}} </p>
    <div v-if="hasInput">
      <label class="label" for="amount">Amount</label>
      <input class="input" name="amount" v-model="amount"/>
      <button ref="btn" type="submit" class="button" name="btn" @click="sendChange">Add token</button>
    </div>
    <button v-else ref="btn" class="button" @click="sendChange">Add token</button>
  </div>
  <!-- TEMPLATE FOR ERC20 -->
  <div v-else class="asset">
    <img class="token__image" :src=asset.thumbnail>
    <p class="description"> {{asset.name}} </p>
    <div v-if="hasInput">
      <label class="label" for="amount">Amount</label>
      <input class="input" name="amount" v-model="amount"/>
      <button ref="btn" type="submit" class="button" name="btn" @click="sendChange">Add token</button>
    </div>
    <button ref="btn" v-else class="button" @click="sendChange">Add token</button>
  </div>
</template>

<script lang="ts" setup>

import {OpenseaAsset} from "@/types/OpenseaAsset";
import {MoralisAsset} from "@/types/MoralisAsset";
import {ref} from "vue";

const props = defineProps<{asset: OpenseaAsset | MoralisAsset}>()
// todo: change name of the emit
const emit = defineEmits<{(e: 'changeTokens', asset: Record<string, unknown>): void}>()
const amount = ref<number>()
const btn = ref()

let hasInput = true
if (props.asset.asset_contract)
  hasInput = props.asset.asset_contract.schema_name === "ERC1155"

const sendChange = () => {
  if (hasInput && (amount.value === undefined || amount.value <= 0)) {
      alert("Please enter a valid amount")
      return
  }
  if (btn.value.innerText == "Add token"){
    btn.value.innerText = "Remove token"
    emit('changeTokens', {asset: props.asset, amount: amount.value? amount.value: -1, add: true})
  } else {
    btn.value.innerText = "Add token"
    emit('changeTokens', {asset: props.asset, amount: -1, add: false})
  }
}

</script>

<style scoped>
.asset {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 14rem;
  height: 20rem;
  border: 0.1rem solid black;
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 0.5rem;
}
.token__image {
  width: 100px;
  height: 100px;
}
.button {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 0.75rem 1.6rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 0.4rem 0.2rem;
  cursor: pointer;
}

.button:hover {
  background-color: #3e8e41;
}
.input {
  width: 6.25rem;
  height: 1.25rem;
  border: 0.06rem solid black;
  border-radius: 0.625rem;
  margin: 0.625rem;
  padding: 0.625rem;
}


</style>
