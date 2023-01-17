<template>
  <div v-if=asset.asset_contract class="asset">
    <img class="token__image" :src=asset.image_preview_url>
    <p class="description"> {{asset.asset_contract.name}} </p>
    <form v-if="hasInput" @submit.prevent="sendChange">
      <label class="label" for="amount">Amount</label>
      <input class="input" name="amount"/>
      <button type="submit" class="button" name="btn">Add token</button>
    </form>
    <button v-else class="button" @click="sendChange">Add token</button>
  </div>
  <!-- TEMPLATE FOR ERC20 -->
  <div v-else class="asset">
    <img class="token__image" :src=asset.thumbnail>
    <p class="description"> {{asset.name}} </p>
    <form v-if="hasInput" @submit.prevent="sendChange">
      <label class="label" for="amount">Amount</label>
      <input class="input" name="amount"/>
      <button type="submit" class="button" name="btn">Add token</button>
    </form>
    <button v-else class="button" @click="sendChange">Add token</button>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{asset: Record<string, unknown>}>()
const emit = defineEmits<{(e: 'customChange', asset: Record<string, unknown>): void}>()

console.log(props.asset)

let hasInput = true
if (props.asset.asset_contract)
  hasInput = props.asset.asset_contract.schema_name === "ERC1155"

const sendChange = (event: unknown) => {
  // todo: check if amount is greater than balance
  if (event.target.btn){
    if(event.target.btn.innerText === "Add token"){
      if (hasInput){
        const amount = event.target.amount.value
        if (amount == ""){
          alert("Please enter a valid amount")
          return
        }
        emit('customChange', {asset: props.asset, amount: amount, add: true})
      } else {
        emit('customChange', {asset: props.asset, amount: -1, add: true})
      }
    }
    else {
      event.target.btn.innerText = "Add token"
      emit('customChange', {asset: props.asset, amount: -1, add: false})
    }
    event.target.btn.innerText = "Remove token"
    return
  }

  if (event.target.innerText === "Add token"){
    event.target.innerText = "Remove token"
    emit('customChange', {asset: props.asset, amount: -1, add: true})
  } else {
    event.target.innerText = "Add token"
    emit('customChange', {asset: props.asset, amount: -1, add: false})
  }
}

</script>

<style scoped>
.asset {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 300px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}
.token__image {
  width: 100px;
  height: 100px;
}
.button {
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
.input {
  width: 100px;
  height: 20px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
}


</style>
