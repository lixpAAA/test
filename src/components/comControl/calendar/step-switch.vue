<template>
  <div class="switch text-center">
    <a @click="prev"><i class="arrow arrow-left"/></a>
    <span style="margin-left: 20px" v-text="title"/>
    <a @click="next"><i class="arrow arrow-right"/></a>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    methods: {
      prev () {
        this.$emit('prev')
      },
      next () {
        this.$emit('next')
      }
    }
  }
</script>
<style>
  .switch {
    margin: 0rem 1rem 1rem 1rem;
    line-height: 1.5rem;
    font-size: 1.5rem;
  }

  .switch i.arrow-left, .switch i.arrow-right {
    width: .8rem;
    height: .8rem;
    border: solid #18e6fa;
  }

  .switch i.arrow-right {
    border-width: .2rem .2rem 0 0;
  }

  .switch i.arrow-left {
    border-width: 0 0 .2rem .2rem;
  }
  .text-center{
    text-align: center;
    color: #18e6fa;
  }
  /**左箭头和有箭头*/
  i.arrow-left, i.arrow-right {
    width: .5rem;
    height: .5rem;
    display: inline-block;
    border: solid;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    margin-top: -50%;
  }

  i.arrow-right {
    border-width: 2px 2px 0 0;
    margin-left: 4%;
  }

  i.arrow-left {
    border-width: 0 0 1px 1px;
  }
</style>
