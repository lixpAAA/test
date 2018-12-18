<template>
  <div>
    <h1>router荣器</h1>
    <router-view class="content"/>
  </div>
</template>

<script>
  import Component from 'vue-class-component'
  import { Tabbar, TabbarItem } from 'vux'

  @Component({
    components: {}
  })

  export default class aqiIndex {
  }
</script>

<style scoped lang="less">
</style>
