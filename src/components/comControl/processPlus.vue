<template>
  <div class="process-main">
    <div class="process-wrap" :style="getHeight()">
      <div class="process-inner" :style="getInnerStyle()"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProcessPlus',
    props: {
      data: {
        type: Number,
        default: 0
      },
      maxdata: {
        type: Number,
        default: 0
      },
      height: {
        type: Number,
        default: 10
      }
    },
    methods: {
      getInnerStyle () {
        let percent = (this.data / this.maxdata) * 100
        if (percent < 50) {
          return 'width:' + percent + '%;' + 'background:' + '#00deff'
        } else {
          return 'width:' + percent + '%;' + 'background:' + '#FFC000'
        }
      },
      getHeight () {
        return 'height: ' + this.height + 'px'
      }
    }
  }
</script>

<style scoped>
  .process-main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .process-wrap {
    width: 100%;
    background: #156ade;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    position: relative;
  }

  .process-inner {
    width: 80%;
    height: 100%;
    -webkit-border-radius: 100px;
    -moz-border-radius: 100px;
    border-radius: 100px;
    background: #00deff;
    position: absolute;
    left: 0;
    top: 0;
    -webkit-transition: ease 0.3s;
    -moz-transition: ease 0.3s;
    -ms-transition: ease 0.3s;
    -o-transition: ease 0.3s;
    transition: ease 0.3s;
  }
</style>
