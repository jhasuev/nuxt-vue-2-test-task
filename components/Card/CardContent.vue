<template>
  <div class="card-content">
    <div class="card-content__supheader">
      {{ supheader }}
    </div>
    <div class="card-content__header">
      {{ header }}
    </div>
    <div class="card-content__address">
      <i class="material-symbols-outlined">location_on</i>
      {{ address }}
    </div>
    <div class="card-content__seller">
      <span class="card-content__seller-label">Продавец </span>
      <span class="card-content__seller-text">{{ seller }}</span>
    </div>
    <div class="card-content__goods-type">
      <div class="card-content__goods-type-label">Вид товара</div>
      <div class="card-content__goods-type-text">{{ goodsType }}</div>
    </div>
    <div class="card-content__description">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardContent',
  props: {
    supheader: { type: String, default: '' },
    header: { type: String, default: '' },
    address: { type: String, default: '' },
    seller: { type: String, default: '' },
    goodsType: { type: String, default: '' },
    description: { type: String, default: '' },
  },
}
</script>

<style lang="scss">

.card-content {
  font-size: 13px;

  &__supheader {
    line-height: 1;
    color: #969DC3;
  }

  &__header {
    margin-top: 15px;

    font-weight: 500;
    font-size: 15px;
    line-height: 1.25;
    
    color: #2D3B87;
  }

  &__address {
    margin-top: 30px;

    display: inline-flex;
    align-items: center;
    padding: 4px 8px;
    gap: 5px;

    background-color: #F4F5F9;
    border-radius: 5px;

    font-weight: 400;
    font-size: 13px;
    color: #616CA5;

    i {
      font-size: 18px;
    }
  }

  &__seller {
    margin-top: 12px;

    &-label {
      color: #969DC3;
    }

    &-text {
      color: #2D3B87;
    }
  }

  &__goods-type {
    margin-top: 12px;
    display: inline-flex;
    flex-direction: column;
    
    padding: 8px;

    background-color: #F4F5F9;
    border-radius: 10px;

    &-label {
      color: #969DC3;
    }

    &-text {
      margin-top: 6px;
      color: #616CA5;
    }
  }

  &__description {
    margin-top: 12px;
    line-height: 1.5;
    color: #2D3B87;
    
    max-height: 4.5em;
    overflow: hidden;
  }
}

</style>
