<template>
  <div class="goods">
    <div class="goods__header">
      <Tabs :list="tabs.list" v-model="tabs.current" />

      <Search v-model="search"/>
    </div>

    <div
      v-show="getFilteredGoods.length"
      class="goods__list"
    >
      <div
        v-for="item in getFilteredGoods"
        :key="item.id"
        class="goods__list-item"
      >
        <card
          v-bind="item"
          @add-to-basket="$store.commit('goods/SET_BASKET', $event)"
          @add-to-favorite="$store.commit('goods/SET_FAVORITE', $event)"
          @remove-from-favorite="$store.commit('goods/UNSET_FAVORITE', $event)"
          @pay="$store.commit('goods/SET_PAID', $event)"
        />
      </div>
    </div>

    <div v-show="!getFilteredGoods.length" class="goods__no-goods">
      <span v-show="goods.length">Ничего не найдено</span>
      <span v-show="!goods.length">Пусто</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Goods',
  props: {
    sellType: { type: String, default: '' },
    goods: { type: Array, default: () => [] },
  },
  data() {
    return {
      search: '',
      tabs: {
        current: '',
        list: [
          { value: '', label: 'Все типы' },
          { value: 'direct_sales', label: 'Прямые продажи' },
          { value: 'auction', label: 'Аукцион' },
        ],
      },
    }
  },
  computed: {
    getFilteredGoods() {
      let goods = this.goods;

      if (this.tabs.current) {
        goods = goods.filter(goods => goods.sellType === this.tabs.current)
      }

      if (this.search) {
        goods = goods.filter(goods => `${goods.header}${goods.description}`.match(
          new RegExp(this.search, 'ig')
        ))
      }

      return goods
    },
  },
  mounted() {
    console.log('mounted');
  },
}
</script>

<style lang="scss" scoped>
.goods {
  padding-bottom: 40px;

  &__header {
    margin-top: 77px;

    display: flex;
    justify-content: space-between;
    gap: 15px;

    @media all and (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__list {
    margin-top: 40px;

    &-item {
      margin-bottom: 15px;
  
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__no-goods {
    margin-top: 40px;
    text-align: center;
    font-size: 20px;
    color: #777;
  }
}
</style>
