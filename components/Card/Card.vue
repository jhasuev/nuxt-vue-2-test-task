<template>
  <div class="card">
    <CardImage class="card__img" :url="img" />
    
    <CardContent class="card__content" v-bind="$props" />
    
    <CardBuyBox
      class="card__buy-box"
      v-bind="$props"
      @add-to-deals="$emit('add-to-deals', id)"
      @add-to-favorite="$emit('add-to-favorite', id)"
      @remove-from-favorite="$emit('remove-from-favorite', id)"
      @pay="$emit('pay', id)"
    />
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    id: { type: Number, default: -1 },
    img: { type: String, default: '' },
    supheader: { type: String, default: '' },
    header: { type: String, default: '' },
    address: { type: String, default: '' },
    seller: { type: String, default: '' },
    goodsType: { type: String, default: '' },
    description: { type: String, default: '' },
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    priceForUnit: { type: Number, default: 0 },
    isInFavorite: { type: Boolean, default: false },
    isPaid: { type: Boolean, default: false },
  },
}
</script>

<style lang="scss">

.card {
  display: flex;
  grid-gap: 20px;

  border: 1px solid #E0E3EE;
  border-radius: 20px;

  &__img {
    margin: 20px;
    margin-right: 0;

    width: 256px;
    min-width: 256px;
    height: 256px;
  }

  &__content {
    margin: 20px 0;
  }

  &__buy-box {
    min-width: 314px;
  }

  @media all and (max-width: 992px) {
    padding: 15px;
    display: grid;
    grid-template-columns: 256px 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 15px;


    &__img {
      margin: 0;
      grid-area: 1 / 1 / 2 / 2;
    }

    &__content {
      margin: 0;
      grid-area: 1 / 2 / 2 / 3;
    }

    &__buy-box {
      margin: -15px;
      margin-top: 0;
      min-width: auto;
      min-height: 266px;
      grid-area: 2 / 1 / 3 / 3;
    }
  }

  @media all and (max-width: 768px) {
    padding: 15px;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 15px;


    &__img {
      grid-area: auto;
      
      width: 100%;
      min-width: 0;
      height: auto;
    }

    &__content {
      grid-area: auto;
    }

    &__buy-box {
      grid-area: auto;
    }
  }
}

</style>
