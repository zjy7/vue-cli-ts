<template>
  <div class='keepalive'>
    <div class='topmenu'>
      <div v-for='(item,index) in menus' :key='index' class='menuitem' @click='clickMenu(item)'>
        {{item.label}}
      </div>
    </div>
    <div class='container'>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>

export default{
  computed:{
    menus(){
      return this.$store.state.keepalive2.menus
    }
  },
  data(){
    return{
      // menus:[
      //   {label:'首页',value:'shouye'},
      //   {label:'cp0',value:'cp0'},
      //   {label:'cp1',value:'cp1'},
      //   {label:'cp2',value:'cp2'},
      // ]
    }
  },
  methods:{
    clickMenu(item){
      this.$router.push({path:'/keepalive2/'+item.value})
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