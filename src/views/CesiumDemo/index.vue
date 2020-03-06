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
        let viewer = new Cesium.Viewer('cesiumContainer');
      }
   }
 }
</script>
<style lang="stylus" scoped>
#cesiumContainer
  height 800px
</style>