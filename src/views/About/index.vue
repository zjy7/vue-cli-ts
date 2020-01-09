<template>
  <div class="about">
    <h1 ref='myRef'>{{msg}}</h1>
    <hr>
    <input type="text" ref='inputBox' v-model="msg">
    <button @click='blurInput'>blur input</button>
    <hr>
    arr is {{arr}}<br>
    arr ouShu is {{arr |oushu}}
    <hr>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Model, Emit, Prop, Inject, Ref} from 'vue-property-decorator';

@Component(
  {
    filters:{
      oushu(arr:number[]){
        return arr.filter(i=>i%2===0)
      }
    }
  }
)
export default class TestProvide extends Vue {
  arr:number[]=[1,2,3,4,5,6,7,8]

  msg:string='This is an about page'
  // @Ref() readonly myRef
  mounted(){
    this.$nextTick(()=>{
      console.log(this.$refs.myRef)
    })
  }
  blurInput () {
    this.$refs.inputBox.blur()
    // let i:HTMLInputElement=this.$refs.inputBox as HTMLInputElement
    // i.blur()
    // i.focus()
  }

  // 非空断言还是必须的
  $refs!:{
    inputBox:HTMLInputElement
    myRef:HTMLInputElement
  }
}
</script>