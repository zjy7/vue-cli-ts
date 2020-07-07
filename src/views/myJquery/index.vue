<template>
  <div class='myjquery'>
    <div class='btnss'>
      <el-button type='primary' @click='toggleFunc0'>Toggle0</el-button>
      <el-button type='primary' @click='toggleFunc1'>Toggle1</el-button>
    </div>
    <div class='one'>
      111
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data(){
    return {

    }
  },
  mounted(){
  },
  methods:{
    toggleFunc0(){
      // $('.one').hide(1000)
      $('.one').fadeOut(1000)
    },
    toggleFunc1(){
      // $('.one').show(1000)
      $('.one').fadeIn(1000)
    }
  }
}
</script>
<style lang="stylus" scoped>
.myjquery
  width 100%
  height 100%
  background teal
  display flex
  flex-direction columns
  align-items center
  justify-content center
  position relative
  .btnss
    top 0
    right 100px
    position absolute
  .one
    width 100px
    height 100px
    background red
</style>