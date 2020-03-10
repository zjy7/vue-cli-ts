<template>
    <div id="cesiumContainerOne"></div>
</template>
<script lang="javascript">
// import Cesium from 'cesium/Source/Cesium'
// console.log(Cesium)
import Cesium from 'mycesium/Cesium' 
import 'mycesium/Widgets/widgets.css'
import $ from 'jquery'
// noinspection ES6UnusedImports
// import widget from 'cesium/Widgets/widgets.css'
// "export 'default' (imported as 'Cesium') was not found in 'cesium/Cesium'

  export default {
    name: "cesiumContainerOne",
    mounted () {
      this.$nextTick(() => {
        this.cesiumInit()
      })
    },
    methods: {
      cesiumInit(){
        var viewer = new Cesium.CesiumWidget('cesiumContainerOne',{
            animation: false,
            scene3DOnly: true,
            imageryProvider:new Cesium.UrlTemplateImageryProvider({
              //amap
              url: "http://webrd{s}.is.autonavi.com/appmaptile?size=1&scale=1&style=7&x={x}&y={y}&z={z}",
                    subdomains: ["01", "02", "03", "04"]
              
              //gmap image
              /**
              url: "http://mt{s}.google.cn/vt/lyrs=s&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}",
              subdomains: ["0", "1", "2", "3"]
              */
              //gmap
              /**
              url: "http://mt{s}.google.cn/vt/lyrs=t@131,r@227000000&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}",
                    subdomains: ["0", "1", "2", "3"]
              */
              //ags
              /**
              url: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
              */
                })
          });
          
          var scene = viewer.scene;
            scene.globe.baseColor = Cesium.Color.fromCssColorString("#303030");
            scene.screenSpaceCameraController.minimumZoomDistance = 500;
            scene.screenSpaceCameraController.maximumZoomDistance = 3e7;
          
          var ptDes, ptDir, ptUp;
          //①China
          //ptDes = new Cesium.Cartesian3.fromDegrees(102, 29, 20000000);
          //②Orlando
          //ptDes = new Cesium.Cartesian3.fromDegrees(-81.3783, 28.5425, 2500);
          //③NewYork
          //ptDes = new Cesium.Cartesian3.fromDegrees(-74, 40.7, 20000);
          //④Changshaxian
          ptDes = new Cesium.Cartesian3.fromDegrees(113.08, 28.25, 20000);
          
          //左右方向顺时针旋转角度
          // var ptHead = Cesium.Math.toRadians(0);
          // //前后方向旋转角度
          // var ptPitch = Cesium.Math.toRadians(-90);
          
          viewer.camera.flyTo({
            destination: ptDes,
            orientation: {
              heading : Cesium.Math.toRadians(0),
              pitch : Cesium.Math.toRadians(-90),
              roll : 0.0
            }
            });
          
          var tileset = new Cesium.Cesium3DTileset({
            //②Orlando
            url : '/one',
            //url: './Orlando_Cesium',
            //③NewWork
            //url: 'https://cesiumjs.org/NewYork/3DTilesGml',
            //④Changshaxian
            //url: '../csx_osgb/root',
            maximumScreenSpaceError: 2,
            maximumNumberOfLoadedTiles: 1000
          });
          scene.primitives.add(tileset);
          


      }
   }
 }
</script>
<style lang="stylus" scoped>
#cesiumContainerOne
  height 800px
</style>
<style lang="stylus">
// .cesium-widget-credits
//   display:none!important; 
//   visibility:hide!important; 
</style>