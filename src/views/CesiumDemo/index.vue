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
        let viewer = new Cesium.Viewer('cesiumContainer',{
          terrainProvider: Cesium.createWorldTerrain(),
          timeline:false,
          baseLayerPicker:false, //BaseLayerPicker : 选择三维数字地球的底图（imagery and terrain）。
          navigationHelpButton:false,
          animation:false,
          fullscreenButton:false,
          // infoBox:false,
          // credit:'',
          // creditContainer:'creditContainer',
        });
        // console.log(viewer)
        // viewer._cesiumWidget._creditContainer.style.display = 'none'

        
        // var tileset = viewer.scene.primitives.add(
        //     new Cesium.Cesium3DTileset({
        //         url: Cesium.IonResource.fromAssetId(80007),
        //     })
        // );
        // viewer.zoomTo(tileset)
        
        // setTimeout(()=>{
        //   $(viewer.bottomContainer).hide()
        // },0)
        
        // var layer=new Cesium.OpenStreetMapImageryProvider({})
        // viewer.imageryLayers.addImageryProvider(layer)


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


        var tj = viewer.scene.primitives.add(new Cesium.Cesium3DTileset({
          // name: "qxmodel",
          url: 'http://localhost:7000/requestBuilding',
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
          console.log(tileset)
          viewer.camera.viewBoundingSphere(tileset.boundingSphere, new Cesium.HeadingPitchRange(0, -0.5, 0));
        })

        tj.style = new Cesium.Cesium3DTileStyle({
          color:"color('red')",
          show:true,
          // color: {
          //   conditions: [
          //     ['${floor} >= 300', 'rgba(45, 0, 75, 0.5)'],
          //     ['${floor} >= 200', 'rgb(102, 71, 151)'],
          //     ['${floor} >= 100', 'rgb(170, 162, 204)'],
          //     ['${floor} >= 50', 'rgb(224, 226, 238)'],
          //     ['${floor} >= 25', 'rgb(252, 230, 200)'],
          //     ['${floor} >= 10', 'rgb(248, 176, 87)'],
          //     ['${floor} >= 5', 'rgb(198, 106, 11)'],
          //     ['true', 'rgb(127, 59, 8)']
          //   ]
          // }
        })



        viewer.camera.setView({
            destination : Cesium.Cartesian3.fromDegrees(120.75, 30.7, 15000.0),
            // orientation : {
            //     direction : new Cesium.Cartesian3(-0.04231243104240401, -0.20123236049443421, -0.97862924300734),
            //     up : new Cesium.Cartesian3(-0.47934589305293746, -0.8553216253114552, 0.1966022179118339)
            // }
        });
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