<template>
  <goods
    :goods="$store.getters['goods/getFavoriteGoods']"
  />
</template>

<script>
export default {
  name: 'FavoritesPage',
  layout: 'goods',
}
</script>
