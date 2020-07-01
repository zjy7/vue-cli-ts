<template>
  <div class='myclock'>
    <div>
      {{t0}}
    </div>
    <div>
      {{t1}}
    </div>
  </div>
</template>

<script>
import * as moment from 'moment'

export default {
  data(){
    return {
      t0:'',
      t1:''
    }
  },
  computed:{
    isShowHeader(){
      return this.$store.state.isShowHeader
    }
  },
  methods:{

  },
  created(){
    
    let q = this.$route.query
    if(q.fullscreen && q.fullscreen === '1'){
      this.$store.commit('setIsShowHeader',false)
    }
    const self = this
    this.timer = setInterval(()=>{
      // self.arr.splice(0,1,moment())
      // self.arr.splice(1,1,moment().format('ddd'))
      // self.arr.splice(2,1,moment().format('dddd'))
      // self.arr.splice(3,1,moment().format('hA'))
      // self.arr.splice(4,1,moment().format('dddd --- MMMM Do YYYY ,,, h:mm:ss a'))
      // self.arr.splice(5,1,moment().format('YYYY-MM-DD'))
      // self.arr.splice(6,1,moment([2020, 1, 22]).fromNow())
      // self.arr.splice(7,1,moment([2020, 1, 22]).fromNow(true))
      // self.arr.splice(8,1,moment([2020, 1, 22]).to(moment([2020,4,29])))
      // self.arr.splice(9,1,moment([2020, 1, 22]).diff(moment([2020,5,2]), 'days',true))
      // self.arr.splice(10,1,moment([2020, 1, 22]).diff(moment([2020,5,2]), 'days',false))
      self.t0 = moment().format('MM月DD日')
      self.t1 = moment().format('HH:mm:ss')
    },1000)
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
}
</script>
<style lang="stylus" scoped>
.myclock
  width 100%
  height 100%
  background-color rgb(24,46,95)
  color #fff
  display flex
  flex-direction column
  >div
    height 50%
    width 100%
    font-size 250px
    display flex
    align-items center
    justify-content center
    font-weight 700
    font-family 'Microsoft YaHei'
</style>
