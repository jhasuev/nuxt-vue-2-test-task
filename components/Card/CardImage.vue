<template>
  <div v-if="url" class="card-image">
    <img :src="url" class="card-image__img" >
  </div>
</template>

<script>
export default {
  name: 'CardImage',
  props: {
    url: { type: String, default: '' },
  },
}
</script>

<style lang="scss">

.card-image {
  overflow: hidden;
  border-radius: 10px;

  &__img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
}

</style>
