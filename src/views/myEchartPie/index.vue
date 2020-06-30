<template>
  <div class='myEchartPie'>
  </div>
</template>

<script>
import echarts from 'echarts'
export default{
  data(){
      return {
          msg:'123'
      }
  },
  methods:{
    init(){

      this.chart = echarts.init(document.getElementsByClassName('myEchartPie')[0])
      let option = {
          title: {
              // text: '19年访客',
              text: '20年访客',
              subtext: '',
              left: 'center'
          },
          tooltip: {
              trigger: 'item',
              formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            bottom: 0
          },
          series: [
              {
                  name: '',
                  type: 'pie',
                  radius: '55%',
                  center: ['50%', '50%'],
                  data: [
                    // {name:'站内其他',value:12258},
                    // {name:'站内营销',value:11936},
                    // {name:'付费广告',value:3678},
                    // {name:'站内自然',value:7826},
                    // {name:'京东平台支持',value:337},
                    // {name:'京东站外',value:710},
                    {name:'站内自然',value:4705},
                    {name:'站内营销',value:4616},
                    {name:'付费广告',value:4230},
                    {name:'站内其他',value:826},
                    {name:'京东平台支持',value:2903},
                    {name:'京东站外',value:434},
                  ],
                  emphasis: {
                      itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  },
                  label:{
                    show:true,
                    formatter(v){
                      
                      return `${v.data.name}:${v.data.value} / ${v.percent}%`
                    }
                  }
              }
          ]
      };
      this.chart.setOption(option)
    }
  },
  created(){
    this.$nextTick(()=>{
      this.init()
    })
  }
}
</script>

<style lang="stylus" scoped>

.myEchartPie
  width 700px
  height 500px
</style>