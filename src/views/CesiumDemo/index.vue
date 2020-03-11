<template>
    <div id="cesiumContainer"></div>
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
    name: "cesiumContainer",
    data(){
      return {
        wapian:'openstreet',
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.cesiumInit()
      })
    },
    methods: {
      cesiumInit(){
        Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMWYwZmE4Mi03NzliLTRhODItYTcxMy0wODBkM2NlMGE3ZWEiLCJpZCI6MjM1MjcsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1ODM0ODQxNzl9.8eX6ovIoXzUJxjoN59DxvG5LmvNdYSAk5U8iJi7yEWM';
        let viewer = new Cesium.Viewer('cesiumContainer',{
          // terrainProvider: Cesium.createWorldTerrain(),
          timeline:false,
          baseLayerPicker:false, //BaseLayerPicker : 选择三维数字地球的底图（imagery and terrain）。
          navigationHelpButton:false,
          animation:false,
          fullscreenButton:false,
          scene3DOnly: true,
          // infoBox:false,
          // credit:'',
          // creditContainer:'creditContainer',
        });
        // console.log(viewer)

        
        // var tileset = viewer.scene.primitives.add(
        //     new Cesium.Cesium3DTileset({
        //         url: Cesium.IonResource.fromAssetId(80007),
        //     })
        // );
        // viewer.zoomTo(tileset)
        
   
        if(this.wapian === 'openstreet'){
          var layer=new Cesium.OpenStreetMapImageryProvider({})
          viewer.imageryLayers.addImageryProvider(layer)
        }
        else if (this.wapian === 'gaode'){
          viewer.imageryLayers.removeAll();
          var gaode = new Cesium.ImageryLayer(new Cesium.UrlTemplateImageryProvider({
              url: 'http://webrd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
              tilingScheme: new Cesium.WebMercatorTilingScheme(),
              minimumLevel: 1,
              maximumLevel: 20,
              credit: '',
          }),
          {
              show: true
          });
          viewer.imageryLayers.add(gaode);
        }

        var tj = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
          // name: "qxmodel",
          url: 'http://localhost:7000/eee/tileset.json',
          // maximumScreenSpaceError: isMobile.any() ? 8 : 1, // Temporary workaround for low memory mobile devices - Increase maximum error to 8.
          // maximumNumberOfLoadedTiles: isMobile.any() ? 10 : 1000 // Temporary workaround for low memory mobile devices - Decrease (disable) tile cache.
          // maximumScreenSpaceError:  1, // Temporary workaround for low memory mobile devices - Increase maximum error to 8.
          // maximumNumberOfLoadedTiles: 1000 // Temporary workaround for low memory mobile devices - Decrease (disable) tile cache. 
        }));
        tj.allTilesLoaded.addEventListener(function() {
            console.log('All tiles are loaded');
        })
        tj.initialTilesLoaded.addEventListener(function() {
          console.log('Initial tiles are loaded');
        })
        tj.readyPromise.then(function(tileset) {
          console.log(`tileset is ${tileset}`)
          // viewer.camera.viewBoundingSphere(tileset.boundingSphere, new Cesium.HeadingPitchRange(0, -0.5, 0));
        })

        tj.style = new Cesium.Cesium3DTileStyle({
          // color:"color('pink')",
          show:true,
          color: {
            conditions: [
              ['${height} >= 300', 'rgba(45, 0, 75, 0.5)'],
              ['${height} >= 200', 'rgb(102, 71, 151)'],
              ['${height} >= 100', 'rgb(170, 162, 204)'],
              ['${height} >= 50', 'rgb(224, 226, 238)'],
              ['${height} >= 25', 'rgb(252, 230, 200)'],
              ['${height} >= 10', 'rgb(248, 176, 87)'],
              ['${height} >= 5', 'rgb(198, 106, 11)'],
              ['true', 'rgb(127, 59, 8)']
            ]
          }
        })



        // 如果为真，则允许用户旋转相机。如果为假，相机将锁定到当前标题。此标志仅适用于2D和3D。
        viewer.scene.screenSpaceCameraController.enableRotate = false;
        // 如果为true，则允许用户平移地图。如果为假，相机将保持锁定在当前位置。此标志仅适用于2D和Columbus视图模式。
        // viewer.scene.screenSpaceCameraController.enableTranslate = false;
        // 如果为真，允许用户放大和缩小。如果为假，相机将锁定到距离椭圆体的当前距离
        // viewer.scene.screenSpaceCameraController.enableZoom = false;
        // 如果为真，则允许用户倾斜相机。如果为假，相机将锁定到当前标题。这个标志只适用于3D和哥伦布视图。
        // viewer.scene.screenSpaceCameraController.enableTilt = false;

        viewer.camera.setView({
            destination : Cesium.Cartesian3.fromDegrees(120.76, 30.75, 3000.0),
            // orientation : {
            //     direction : new Cesium.Cartesian3(-0.04231243104240401, -0.20123236049443421, -0.97862924300734),
            //     up : new Cesium.Cartesian3(-0.47934589305293746, -0.8553216253114552, 0.1966022179118339)
            // }
        });

        var handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
        handler.setInputAction(function(movement) {
          debugger
            // mousePosition = movement.endPosition;
        }, Cesium.ScreenSpaceEventType.LEFT_DOWN)
      }
   }
 }
</script>
<style lang="stylus" scoped>
#cesiumContainer
  height 800px
</style>
<style lang="stylus">
// .cesium-widget-credits
//   display:none!important; 
//   visibility:hide!important; 
</style>