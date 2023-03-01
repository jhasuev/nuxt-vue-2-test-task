<template>
  <div>
    <div>
      search1: {{ search1  }}<br />
      <search v-model="search1" />
    </div>
    <div>
      search2: {{ search2  }}<br />
      <search v-model="search2" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search1: '',
      search2: 'Searching...',
    }
  },
}
</script>

<style>

</style>
