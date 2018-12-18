<template>
  <div class="app">
    <view-box>
      <h1>app</h1>
      <router-view/>
      <loading v-model="isLoading"/>
    </view-box>
  </div>
</template>

<script>
  import { XHeader, ViewBox, Loading } from 'vux'
  import Component from 'vue-class-component'
  import { mapState } from 'vuex'

  // component中可以包含的属性包括 name,components以及props
  @Component({
    name: 'app',
    components: {
      XHeader,
      ViewBox,
      Loading
    },
    computed: {
      ...mapState(
        { isLoading: state => state.isLoading }
      )
    },
    props: {}
  })
  export default class App {
    constructor () {
      console.log('App Component created')
    }

    get title () {
      return this.$store.state.title
    }
  }
</script>

<style lang="less">
</style>
