const filterGoods = (state) => state.goods.map(item => {
  item.favorite = state.favorites.includes(item.id)
  item.paid = state.paid.includes(item.id)
  item.basket = state.basket.includes(item.id)
  return item
})

export const state = () => ({
  goods: [], // все товары
  
  favorites: [], // id'шники
  basket: [], // id'шники
  paid: [], // id'шники
})

export const getters = {
  getAllGoods(state) {
    return filterGoods(state).filter(goods => !goods.basket)
  },

  getFavoriteGoods(state) {
    return filterGoods(state).filter(goods => goods.favorite)
  },

  getBasketGoods(state) {
    return filterGoods(state).filter(goods => goods.basket)
  },
}

export const mutations = {
  SET_GOODS(state, goods) {
    state.goods = goods
  },

  SET_FAVORITE(state, id) {
    const goods = new Set(state.favorites)
    goods.add(id)
    state.favorites = [...goods]
  },

  UNSET_FAVORITE(state, id) {
    const goods = new Set(state.favorites)
    goods.delete(id)
    state.favorites = [...goods]
  },

  SET_BASKET(state, id) {
    const goods = new Set(state.basket)
    goods.add(id)
    state.basket = [...goods]
  },

  SET_PAID(state, id) {
    const goods = new Set(state.paid)
    goods.add(id)
    state.paid = [...goods]
  },
}

export const actions = {
  async REQUEST_GET_GOODS({ state, commit }) {
    const { default: goods } = await import('@/assets/db.json')
    commit('SET_GOODS', goods)
  }
}

