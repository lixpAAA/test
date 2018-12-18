<template>
  <div>
    <step-switch @prev="prev" @next="next" :title="monthTxt"/>
    <echarts :options="option" style='width: 100%;height:15rem;'/>
    <h3 v-show="item">点击事件被触发了</h3>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { Component, Prop, Watch } from 'vue-property-decorator'
  import echarts from 'echarts'
  import { dateFormat } from 'vux'
  import StepSwitch from './step-switch'

  @Component({
    components: {
      StepSwitch
    },
    filters: {
      dateFormat
    }
  })
  export default class calendarPanel extends Vue {
    @Prop()
    data
    monthTxt = dateFormat(new Date(), 'YYYY-MM')
    option = {}

    item = false
    @Watch('monthTxt')
    changeDatas () {
      setTimeout(() => {
        this.getOption()
      }, 1000)
    }
    created () {
      var myChart = echarts.init(document.getElementById('main'));
      setTimeout(() => {
        this.getOption()
      }, 1000)
    }
    getDayData () {
      let dateText = new Date(this.monthTxt)
      let year = dateText.getFullYear()
      let month = parseInt(dateText.getMonth() + 1)
      var end = ''
      let mon = parseInt(dateText.getMonth() + 1) < 10 ? '0' + parseInt(dateText.getMonth() + 1) : parseInt(dateText.getMonth() + 1)
      var date = Date.parse(year + '-' + mon + '-01')
      if (month === 2) {
        end = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0) ? Date.parse(year + '-' + mon + '-29') : Date.parse(year + '-' + mon + '-28')
      } else if (month > 7) {
        if (month % 2 === 0) {
          end = Date.parse(year + '-' + mon + '-31')
        } else {
          end = Date.parse(year + '-' + mon + '-30')
        }
      } else if (month <= 7) {
        if (month % 2 === 0) {
          end = Date.parse(year + '-' + mon + '-30')
        } else {
          end = Date.parse(year + '-' + mon + '-31')
        }
      }
      var dayTime = 3600 * 24 * 1000
      var data = []
      for (var time = date; time <= end; time += dayTime) {
        let obj = [2]
        obj[0] = echarts.format.formatTime('yyyy-MM-dd', time)
        obj[1] = Math.floor(Math.random()*2)
        data.push([obj[0], obj[1]])
      }
      return data
    }

   // echarts 配置
    getOption () {
      this.option = {
        tooltip: {
          formatter: function (params) {
            return '事项' + params.value[1]
          }
        },
        calendar: [{
          left: 'center',
          top: 'middle',
          cellSize: [50, 30],
          yearLabel: { show: false },
          orient: 'vertical',
          backgroundColor: 'transparent',
          splitLine: {
            lineStyle: {
              color: 'transparent'
            }
          },
          itemStyle: {
            normal: {
              color: '#73f8ff',
              borderWidth: 0
            }
          },
          dayLabel: {
            textStyle: {
              color: '#63a5ff',
              fontSize: 16
            },
            firstDay: 1,
            nameMap: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
          },
          monthLabel: {
            show: false
          },
          range: this.monthTxt
        }],
        series: [
          {
          type: 'scatter',
          coordinateSystem: 'calendar',
          symbolSize: [44, 3],
          symbol: 'rect',
          symbolOffset: [0, '300%'],
          hoverAnimation: true,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          // data: this.getDatas(),
          data: this.getDayData(),
          itemStyle: {
            normal: {
              color (val) {
                if (val.value[1]===0) {
                  return 'transparent'
                }
                else  {
                  return '#1f2aff'
                }

              }
            }
          }
        },
          {
          type: 'scatter',
          coordinateSystem: 'calendar',
          symbolSize: 2,
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                var d = echarts.number.parseDate(params.value[0])
                return d.getDate()
              },
              textStyle: {
                color: '#1d64ff',
                fontSize: 14
              }
            }
          },
          data: this.getDayData(),
        }
        ]
      }
    }

    next () {
      let month = new Date(this.monthTxt)
      let temp = dateFormat(new Date(), 'YYYY-MM')
      // if (month < new Date(temp)) {
        month.setMonth(month.getMonth() + 1)
        this.monthTxt = dateFormat(new Date(month), 'YYYY-MM')
        this.$emit('changed', this.monthTxt)
      // }
    }

    prev () {
      let month = new Date(this.monthTxt)
      month.setMonth(month.getMonth() - 1)
      this.monthTxt = dateFormat(new Date(month), 'YYYY-MM')
      this.$emit('changed', this.monthTxt)
    }

  }
</script>
<style scoped>
  .legend {
    width: 14px;
    height: 14px;
    float: left;
    margin-top: 5px;
    margin-right: 10px;
    border-radius: 7px;
    color: #63a5ff;
  }
  .span-count {
    float: right;
    color: #fff;
  }
  .div-span {
    margin-left: 1.3rem;padding-right: 1.3rem;
    padding-left: 10px;
    margin-right: 1.3em;
    border-radius: 20px;
    margin-bottom: 6px;
  }
  .span-level {
   color: #63a5ff
  }
  .count-title {
    font-size: 1.0rem;
    margin-left: 1.3rem;
    margin-top: -2rem;
    color: #63a5ff;
    margin-bottom: 5px;
  }
  .div-divider{
    border-bottom: 1px solid #fff;
    margin-bottom: 10px;
  }
</style>
