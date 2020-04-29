<template>
  <div>
    this is 动态路由
    <el-input
      v-model="value"
      >
    </el-input>
  </div>
</template>
<script>
export default{
  name:'dyn',
  data(){
    return {
      value:''
    }
  }
}
</script>