<template>
  <div class="asset" @click="sendChange">
    <img class="token__image" :src=asset.image_preview_url>
    <p class="description"> {{asset.asset_contract.name}} </p>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{asset: Record<string, unknown>}>()
const emit = defineEmits<{(e: 'customChange', asset: Record<string, unknown>): void}>()

console.log(props.asset)

function addItem(address: string){
  console.log(address)
}
const sendChange = (event: any) => {
  emit('customChange', props.asset);
}

</script>

<style scoped>
.token__image {
  width: 100px;
  height: 100px;
}
.asset{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
}
.description {
  width: 100px;
  height: 100px;
  overflow: hidden;
}


</style>
