<template>
  <div id="app">
    <div id="nav">
      <button
        style="margin:0 20px;"
        v-for="(item,index) in btnArr"
        :key='index.value'
        @click='clickBtn(item.value)'
        >
        {{item.label}}
      </button>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch, Emit} from 'vue-property-decorator';

enum MenuIndex {
  home=0,
  about,
  talk,
  ifr,
  cesium
}

@Component
export default class App extends Vue {
  btnArr: object[] = [
    {value:MenuIndex.home, label:'Home'},
    {value:MenuIndex.about, label:'About'},
    {value:MenuIndex.talk, label:'Talk'},
    {value:MenuIndex.ifr, label:'open iframe'},
    {value:MenuIndex.cesium, label:'open Cesium Dome'}
  ]

  clickBtn(value:MenuIndex):void{
    if(value===MenuIndex.home){
      this.$router.push('/')
    }else   if(value===MenuIndex.about){
      this.$router.push('/about')
    }else   if(value===MenuIndex.talk){
      this.$router.push('/talk')
    }else if(value===MenuIndex.ifr){
      this.$router.push('/popWindow')
    }else if(value===MenuIndex.cesium){
      this.$router.push('/cesiumDemo')
    }
  }

}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 15px
  #nav
    margin-bottom 10px
</style>
