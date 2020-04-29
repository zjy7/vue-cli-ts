<template>
  <div id="app">
    <div id="nav">
      <el-button
        v-for='(item,index) in btnArr'
        :key='"btn"+index'
        @click='clickBtn(item)'
        >
        {{item.name}}
      </el-button>
      <div id='creditContainer' v-show='false'></div>
    </div>
    <div class='mainContent'>
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch, Emit} from 'vue-property-decorator';
import {routes} from './router'
import _ from 'lodash'
// console.log(routes)
enum MenuIndex {
  a=0,b,c
}

@Component
export default class App extends Vue {
  btnArr: object[] = _.cloneDeep(routes)

  clickBtn(item:any):void{
    this.$router.push(item.path)
  }

}
</script>
<style lang="stylus">
html,body
  padding 0
  margin 0
  width 100%
  height 100%
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%
  #nav
    height 100px
    display flex
    justify-content center
    align-items center
    flex-wrap wrap
    background-color #ccc
    width 100%
    overflow-x auto
    overflow-y hidden
    .el-button
      margin 10px 15px
  .mainContent
    width 100%
    height calc(100% - 100px)
</style>
