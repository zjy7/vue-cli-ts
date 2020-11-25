<template>
  <div>
    <el-button @click="clickBtn">btn</el-button>
    <div v-for='(item,index) in arr' :key='index'>
      {{item}}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Model, Emit, Prop, Inject, Ref} from 'vue-property-decorator';
// /**
//  * @param {number} ms 毫秒数
//  * @description 节流装饰器
//  * 使用方法： @debounce() 或者 @debounce(2000) 代表2s执行一次
//  */
function debounce(ms:number = 1000) {
  let prev:number = 0;
  return function(target:any, name:any, descriptor:any) {
    const fn = descriptor.value;
    let timer:any = null
    descriptor.value = function() {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, ms);
    };
    return descriptor
  };
}

@Component({})
export default class DebounceKlass extends Vue {
  num:number=0
  arr:number[]=[]

  @debounce()
  clickBtn(){
    this.num++
    this.arr.push(this.num)
  }
}
</script>
