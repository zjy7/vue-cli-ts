<template>
  <div class='keepalive'>
    <div class='topmenu'>
      <div v-for='(item,index) in menus' :key='index' class='menuitem' @click='clickMenu(item)'>
        {{item.label}}
      </div>
    </div>
    <div class='container'>
      <keep-alive :max="20" exclude="shouye">
        <component v-bind:is="currentComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import shouye from './shouye'
import component0 from './component0'
import component1 from './component1'
import component2 from './component2'
export default{
  data(){
    return{
      currentComponent:component0,
      menus:[
        {label:'首页',value:shouye},
        {label:'cp0',value:component0},
        {label:'cp1',value:component1},
        {label:'cp2',value:component2},
      ]
    }
  },
  methods:{
    clickMenu(item){
      debugger
      this.currentComponent = item.value
    }
  }
}
</script>
<style lang="stylus" scoped>
.keepalive
  width 100%
  height 900px
  background #eee
  display flex
  flex-direction column
  .topmenu
    width 100%
    height 88px
    background pink
    display flex
    align-items center
    justify-content flex-start
    font-size 30px
    .menuitem
      margin 0 20px
      padding 10px 25px
      border 1px solid green
      border-radius 5px
      cursor pointer
  .container
    width 100%
    height calc(900px - 88px)
</style>