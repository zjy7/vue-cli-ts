<template>
  <div>
    <input 
      type="checkbox" 
      :checked='checked' 
      @change="changeModel"
    > 
    是否勾选{{checked?'true':'false'}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit, Prop} from 'vue-property-decorator';

@Component
export default class TestModel extends Vue {

  @Model ('change', {type: Boolean}) checked!: boolean
  // emit的第一种写法
  // change(ev:any){
  //   this.$emit('change',ev.target.checked)
  // }
  // emit的第二种写法
  @Emit('change')
  changeModel(e:any){
    return e.target.checked
  }

}
</script>