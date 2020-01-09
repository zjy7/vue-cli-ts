<template>
  <div class="hello">
    <h1>parentValue is {{parentValue}}</h1>
    <button @click='onTwoClick(msg)'>Plus msg To parentValue</button>
    <button @click='onTwoClick(0-msg)'>Minus msg To parentValue</button>
    <hr>
    <h1>msg is {{ msg }}</h1>
    <h1>comMsg is {{ comMsg}}</h1>
    <button @click='onClick'>Plus msg</button>
    <br>
    <hr>
    <h1>name is {{ name}}</h1>
    <h1>item.n is {{item.n}}</h1>
    <button @click='setName'>setName</button>
    <button @click='setItemn'>setItemn</button>
    <hr>
    <test-model v-model='isChecked' @change='changeTestModel'/>
    <hr>
    <test-provide />
    <hr>
    <test-vuex />
  </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue, Watch, Emit} from 'vue-property-decorator';
import TestModel from './TestModel.vue'
import TestProvide from './TestProvide.vue'
import TestVuex from './TestVuex.vue'
interface KeyValue {
  c: string
  n: string
}

@Component({
  components:{
    TestModel, TestProvide, TestVuex
  }
})
export default class ChildComponent extends Vue {
  // https://github.com/Microsoft/TypeScript-Vue-Starter#using-decorators-to-define-a-component
  @Prop({default:0})
  parentValue!: number

  msg: number = 0
  item: KeyValue = {
    c: '',
    n: ''
  }

  isChecked:boolean = true
  
  changeTestModel(b: Boolean):void{
    console.log(b)
    console.log(this.isChecked)
  }


  onClick (): void{
    this.msg++
  }
  @Emit()
  onTwoClick (n:number){
  }
  setName (): void{
    this.name = '123'
  }
  setItemn ():void{
    this.item.n = '456'
  }
  // computed
  get comMsg():number{
    return this.msg + 10
  }

  get name(): string {
    return this.item.n
  }
  // 注意，这里不能标返回值类型，就算写void也不行
  set name(val: string) {
    this.item.n = val
  }

  @Watch('msg',{deep: true})
  watchMsg(newVal: number, oldVal: number): void {
    console.log(`in watch msg is ${newVal}`)
  }
}
</script>