<template>
  <div id="app">
    <div class='btnrb'>
      <el-button @click='clickHD' class='rtbtn'>
        {{isShowHeader ? 'Hide':'Display'}} Header
      </el-button>
    </div>

    <div id="nav" v-show='isShowHeader'>
      <el-button
        v-for='(item,index) in btnArr'
        :key='"btn"+index'
        @click='clickBtn(item)'
        >
        {{item.name}}
      </el-button>
      <div id='creditContainer' v-show='false'></div>


    </div>
    <div class='mainContent' :class='{isShowHeader:!isShowHeader}'>
      <router-view/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch, Emit} from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';

import {routes} from './router'
import _ from 'lodash'

import {RootState} from '@/store/types'

enum MenuIndex {
  a=0,b,c
}

@Component
export default class App extends Vue {
  // @State('state') state!: RootState;
  // get isShowHeader() {
  //     return this.state.isShowHeader
  // }
  @State('isShowHeader') isShowHeader!: boolean;

  btnArr: object[] = _.cloneDeep(routes)


  clickHD(){
    this.$store.commit('setIsShowHeader',!this.isShowHeader)
  }

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
  position relative
  .btnrb
    position absolute
    right 0
    top 0
    width 132px
    height 32px
    display flex
    justify-content flex-end
    .rtbtn
      display none
    &:hover
      .rtbtn
        display block
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
  .mainContent.isShowHeader
    height 100%
</style>
