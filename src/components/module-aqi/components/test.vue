<template>
  <div>
   <h1>TEST</h1>
    <process-plus
    :data="60"
    :maxdata="100"
    :height="10"
    />
    <calendar-panel/>
  </div>
</template>

<script>
  import Component from 'vue-class-component'
  import Vue from 'vue'
  import ProcessPlus from '../../comControl/processPlus'
  import CalendarPanel from '../../comControl/calendar/calendar-panel'
  @Component({
    components: {
      ProcessPlus, CalendarPanel
    }
  })

  export default class Test extends Vue{
  }
</script>

<style scoped lang="less">
</style>
