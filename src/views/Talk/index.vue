<template>
  <div class="talkindex">
    parentValue is {{parentValue}}
    <br>
    <hr>
    mixValue is <i><b>{{mixValue}}</b></i>
    <hr>
    id is {{id}}
    <br>
    {{users}}
    <br>
    <button @click='changeProvide'>change provide id</button>
    <hr>
    <child-component :parentValue='parentValue' @on-two-click='onTwoClick'/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch, Emit, Provide} from 'vue-property-decorator';
import ChildComponent from './ChildComponent.vue'
import myMixins from '@/mixins/mix'
@Component({
  components: {
    ChildComponent
  },
  mixins:[myMixins]
})
export default class Talk extends Vue {
  name:string = 'test-provide'
  id:number = 101
  parentValue: number = 100

  @Provide('uuu111')
  users = {
    name:this.name,
    id: this.id
  }


  onTwoClick(n:number):void{
    this.parentValue+=n
  }

  changeProvide():void{
    // 默认provide 改变后 inject不变
    //需要注意的是：provide 和 inject 绑定并不是可响应的。这是刻意为之的。
    // 然而，如果你传入了一个可监听的对象，那么其对象的属性还是可响应的 good good good
    this.id = parseInt((Math.random()*1000).toString())
    this.users.id = this.id
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
