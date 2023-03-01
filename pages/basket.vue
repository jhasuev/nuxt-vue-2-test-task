<template>
  <goods
    :goods="$store.getters['goods/getBasketGoods']"
  />
</template>

<script>
export default {
  name: 'BasketPage',
  layout: 'goods',
}
</script>
