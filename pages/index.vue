<template>
  <goods
    :goods="$store.getters['goods/getAllGoods']"
  />
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'goods',
}
</script>
