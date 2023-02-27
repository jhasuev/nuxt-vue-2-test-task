<template>
  <div>
    <btn icon="favorite" view="blue" />
    <btn icon="favorite" view="blue" label="Icon + Label" />

    <btn label="Btn Default" />
    <btn bordered label="Btn Bordered" />
    <btn bordered disabled label="Btn Bordered + Disabled" />
    <btn bordered disabled label="Btn Bordered + Disabled + Size" style="font-size: 30px" />

    <btn view="green" label="Btn Green" />
    <btn view="blue" label="Btn Blue" />
    <btn view="blue" full label="Btn Blue Full" />
    <btn view="gray" full label="Btn Gray Full" />
    
    <hr style="margin: 2em 0">

    <btn icon="favorite" view="gray" label="Избранное" />
    <btn icon="widgets" label="Склад" />
    <btn icon="local_mall" label="Сделки" />
    
    <hr style="margin: 2em 0">
    
    <btn icon="search" />
    
    <hr style="margin: 2em 0">
    
    <div style="display: flex; gap: 12px">
      <btn view="green" label="Оплатить" full />
      <btn view="blue" icon="favorite" />
    </div>
    
    <hr style="margin: 2em 0">
    
    <div style="display: flex; gap: 12px">
      <btn view="gray" full label="Добавить в сделки" />
      <btn view="gray" icon="favorite" />
    </div>

    <hr style="margin: 2em 0">

    <div style="display: flex; gap: 12px">
      <btn bordered disabled label="Оплачено" full />
      <btn view="blue" icon="favorite" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'sandbox'
}
</script>

<style>

</style>
