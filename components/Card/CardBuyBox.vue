<template>
  <div class="card-buy-box">
    <div class="card-buy-box__price">{{ price.toLocaleString() }} ₽</div>
    
    <CardBuyCharacteristics class="card-buy-box__characteristics" :list="getCharacters" />
    
    <div class="card-buy-box__actions">
      <template>
        <btn
          v-if="!isInFavorite"
          view="gray"
          full
          label="Добавить в сделки"
          @click="$emit('add-to-deals')"
        />
        <btn
          v-else-if="isPaid"
          disabled
          bordered
          full
          label="Оплачено"
        />
        <btn
          v-else
          view="green"
          full
          label="Оплатить"
          @click="$emit('pay')"
        />
      </template>
      
      <btn
        v-if="isInFavorite"
        view="blue"
        icon="favorite"
        @click="$emit('remove-from-favorite')"
      />
      <btn
        v-else
        view="gray"
        icon="favorite"
        @click="$emit('add-to-favorite')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBuyBox',
  props: {
    price: { type: Number, default: 0 },
    quantity: { type: Number, default: 0 },
    priceForUnit: { type: Number, default: 0 },
    isInFavorite: { type: Boolean, default: false },
    isPaid: { type: Boolean, default: false },
  },
  computed: {
    getCharacters() {
      return [
        { label: 'Количество', value: `${this.quantity} шт.` },
        { label: 'Стоимость за штуку', value: `${this.priceForUnit.toLocaleString()} ₽` },
      ]
    },
  },
}
</script>

<style lang="scss">

.card-buy-box {
  padding: 20px;

  display: flex;
  flex-direction: column;

  border: 1px solid #E0E3EE;
  border-radius: 20px;

  &__price {
    font-weight: 500;
    font-size: 20px;
    
    color: #2D3B87;
  }

  &__characteristics {
    margin-top: 13px;
  }


  &__actions {
    padding-top: 20px;
    margin-top: auto;

    display: flex;
    gap: 12px;
  }

  @media all and (max-width: 768px) {
    padding: 15px;
  }
}


</style>
