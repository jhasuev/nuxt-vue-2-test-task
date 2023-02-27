<template>
  <div class="tabs">
    <button
      v-for="item in list"
      :key="item.value"
      class="tabs__btn"
      :class="{ 'tabs__btn--active': item.value === value }"
      @click="$emit('input', item.value)"
    >{{ item.label }}</button>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  props: {
    list: { type: Array, default: () => [] },
    value: { type: String, default: '' },
  },
}
</script>

<style lang="scss">

.tabs {
  display: inline-flex;
  align-items: flex-start;
  padding: 12px;
  gap: 10px;

  min-height: 40px;

  background-color: #F4F5F9;

  border: 1px solid #E0E3EE;
  border-radius: 10px;

  &__btn {
    font-weight: 400;
    font-size: 15px;
    color: #969DC3;

    &--active {
      color: #2D3B87;
    }
  }
}

</style>
