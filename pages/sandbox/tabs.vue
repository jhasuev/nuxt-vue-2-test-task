<template>
  <div>
    <div>
      tabs1.current: {{ tabs1.current  }}<br />
      <tabs :list="tabs1.list" v-model="tabs1.current" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'sandbox',
  data() {
    return {
      tabs1: {
        current: 'all',
        list: [
          { value: 'all', label: 'Все типы' },
          { value: 'direct_sales', label: 'Прямые продажи' },
          { value: 'auction', label: 'Аукцион' },
        ],
      },
    }
  },
}
</script>

<style>

</style>
