<template>
  <div class="characteristics">
    <div
      v-for="item, i in list"
      :key="i"
      class="characteristics__item"
    >
      <span class="characteristics__label">{{ item.label }}</span>
      <span class="characteristics__content">{{ item.value }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBuyCharacteristics',
  props: {
    list: { type: Array, default: () => [] },
  },
}
</script>

<style lang="scss">

.characteristics {
  font-size: 13px;

  &__item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 11px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__label {
    font-size: 13px;
    color: #969DC3;
    margin-right: 3px;
  }

  &__content {
    color: #2D3B87;
  }
}

</style>
