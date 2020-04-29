<template>
  <div>
    this is 动态路由
    <el-input
      v-model="value"
      >
    </el-input>
    id is {{id}}
  </div>
</template>
<script>
export default{
  name:'dyn',
  props: ['id'],
  data(){
    return {
      value:''
    }
  },
  watch:{
    id(newid,oldid){
      console.log(`new id is ${newid}`)
      console.log(`old id is ${oldid}`)
      this.renderVx()
    }
  },
  // deactivated(){
  //   this.$store.commit('keepalive2/setDynStore',{id:this.id,value:this.value})
  // },
  // activated(){
  //   let arr = this.$store.state.keepalive2.dynStore.filter(i=>i.id===this.id)
  //   if(arr.length>0){
  //     console.log('store已存在id，读取')
  //     this.value = arr[0].value
  //   }
  //   else{
  //     console.log('store不存在id，新增')
  //     this.$store.commit('keepalive2/setDynStore',{id:this.id,value:this.value})
  //   }
  // }
  deactivated(){
    console.log(`${this.id} deactive...`)
    this.saveVx()
  },
  activated(){
    console.log(`${this.id} activated...`)
    this.renderVx()
  },
  methods:{
    saveVx(){

    },
    renderVx(){

    }
  }
}
</script>