<template>
  <div class="top-menu">
    <nuxt-link
      v-for="link in links"
      v-slot="{ isExactActive, href, navigate }"
      :key="link.to"
      :to="link.to"
    >
      <btn
        @click="navigate(href)"
        :view="isExactActive ? 'gray' : ''"
        v-bind="link"
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'TopMenu',
  data() {
    return {
      links: [
        { to: '/favorites', icon: 'favorite', label: 'Избранное' },
        { to: '/', icon: 'widgets', label: 'Склад' },
        { to: '/deals', icon: 'local_mall', label: 'Сделки' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>

.top-menu {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
}

</style>
