<template>
    <div id="cesiumContainer"></div>
</template>
<script lang="javascript">
// import Cesium from 'cesium/Source/Cesium'
// console.log(Cesium)
import Cesium from 'mycesium/Cesium' 
import 'mycesium/Widgets/widgets.css'

// console.log(cesium)
// noinspection ES6UnusedImports
// import widget from 'cesium/Widgets/widgets.css'
// "export 'default' (imported as 'Cesium') was not found in 'cesium/Cesium'

  export default {
    name: "cesiumContainer",
    mounted () {
      this.$nextTick(() => {
        this.cesiumInit()
      })
    },
    methods: {
      cesiumInit(){
        // console.log(Cesium)
        // Cesium.Ion.defaultAccessToken = 'your_access_token'
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMWYwZmE4Mi03NzliLTRhODItYTcxMy0wODBkM2NlMGE3ZWEiLCJpZCI6MjM1MjcsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODM0ODQxNzl9.8eX6ovIoXzUJxjoN59DxvG5LmvNdYSAk5U8iJi7yEWM';
        let viewer = new Cesium.Viewer('cesiumContainer');
      }
   }
 }
</script>
<style lang="stylus" scoped>
#cesiumContainer
  height 800px
</style>