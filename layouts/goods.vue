<template>
  <div class="goods container">
    <TopSquere />

    <TopMenu class="goods__top-menu" />

    <Nuxt class="goods__content" />
  </div>
</template>

<script>
export default {
  name: 'LayoutGoods',
  created() {
    this.$store.dispatch('goods/REQUEST_GET_GOODS')
  },
}
</script>

<style lang="scss" scoped>

.goods {
  &__top-menu {
    margin-top: 20px;
  }
}

</style>
