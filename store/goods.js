const filterGoods = (state) => state.goods.map(item => {
  item.favorite = state.favorites.includes(item.id)
  item.paid = state.paid.includes(item.id)
  item.basket = state.basket.includes(item.id)
  return item
})

const toggleIdToState = (state, action, name, id) => {
  const goods = new Set(state[name])
  goods[action](id)
  state[name] = [...goods]
}

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
    toggleIdToState(state, 'add', 'favorites', id)
  },

  UNSET_FAVORITE(state, id) {
    toggleIdToState(state, 'delete', 'favorites', id)
  },

  SET_BASKET(state, id) {
    toggleIdToState(state, 'add', 'basket', id)
  },

  SET_PAID(state, id) {
    toggleIdToState(state, 'add', 'paid', id)
  },
}

export const actions = {
  async REQUEST_GET_GOODS({ commit }) {
    const { default: goods } = await import('@/assets/db.json')
    commit('SET_GOODS', goods)
  }
}

