<template>
    <div>
      <div>moment.js</div>
      <div v-for='(item,index) in arr' :key='"sss"+index'>{{item}}</div>
    </div>
</template>

<script>
import * as moment from 'moment'
// console.log(moment)
export default{
  data(){
    return{
      arr:[]
    }
  },
  created(){
    const self = this
    this.timer = setInterval(()=>{
      self.arr.splice(0,1,moment())
      self.arr.splice(1,1,moment().format('ddd'))
      self.arr.splice(2,1,moment().format('dddd'))
      self.arr.splice(3,1,moment().format('hA'))
      self.arr.splice(4,1,moment().format('dddd --- MMMM Do YYYY ,,, h:mm:ss a'))
      self.arr.splice(5,1,moment().format('YYYY-MM-DD'))
      self.arr.splice(6,1,moment([2020, 1, 22]).fromNow())
      self.arr.splice(7,1,moment([2020, 1, 22]).fromNow(true))
      self.arr.splice(8,1,moment([2020, 1, 22]).to(moment([2020,4,29])))
      self.arr.splice(9,1,moment([2020, 1, 22]).diff(moment([2020,5,2]), 'days',true))
      self.arr.splice(10,1,moment([2020, 1, 22]).diff(moment([2020,5,2]), 'days',false))
      
    },1000)
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
}
</script>