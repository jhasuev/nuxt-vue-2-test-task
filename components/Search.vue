<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      :placeholder="placeholder"
      v-model="searchValue"
      @keydown.enter="submit(searchValue)"
      @blur="submit(searchValue)"
    >
    <Btn
      icon="search"
      class="search__btn"
      view="blue"
      @click="submit(searchValue)"
    />
  </div>
</template>

<script>
export default {
  name: 'Search',
  props: {
    value: { type: String, default: '' },
    placeholder: { type: String, default: 'Поиск...' },
  },
  data() {
    return {
      searchValue: '',
    }
  },
  mounted() {
    this.searchValue = this.value
  },
  methods: {
    submit(value) {
      if (value !== this.value) {
        this.$emit('input', value)
      }
    },
  },
}
</script>

<style lang="scss">

.search {
  display: flex;
  align-items: center;
  padding-right: 4px;

  height: 48px;

  background-color: #FFFFFF;
  
  border: 1px solid #E0E3EE;
  border-radius: 10px;
  overflow: hidden;

  &:focus-within {
    border-color: #aaa;
  }

  &__input {
    padding: 0 20px;
    height: 100%;
    width: 100%;
    display: block;
    border: none;
    background-color: transparent;
  }

  &__btn {
    font-size: 22px;
  }
}

</style>
