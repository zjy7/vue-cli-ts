<template>
  <div class='kp2sy'>
    <div class='item' v-for='(item,index) in addMenuArr' :key='index'>
      <span @click='clickItem(item)'>
        {{item.label}}
      </span>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.kp2sy
  display flex
  width 100%
  height 100%
  flex-direction column
  .item
    height 100px
    display flex
    align-items center
    justify-content center
    span 
      cursor pointer
</style>
<script>
import _ from 'lodash'
export default{
  data(){
    return {
      addMenuArr:[
        {label:'add cp0',value:'/keepalive2/cp0'},
        {label:'add cp1',value:'/keepalive2/cp1'},
        {label:'add cp2',value:'/keepalive2/cp2'},
      ]
    }
  },
  methods:{
    clickItem(item){
      this.$store.commit('keepalive2/addMenu',_.clone(item))
    }
  }
}
</script>