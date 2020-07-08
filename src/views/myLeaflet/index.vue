<template>
  <div id='myleaflet'>
  </div>
</template>

<script>
import $ from 'jquery'
import L from 'leaflet'
import 'leaflet.chinatmsproviders'
import 'leaflet/dist/leaflet.css'
console.log(L.version)
export default {
  data(){
    return {

    }
  },
  mounted(){
    this.init()

  },
  methods:{
    init(){
      let self = this
      this.functionaltilelayer()
      var normalm = L.tileLayer.chinaProvider('GaoDe.Normal.Map', {
          maxZoom: 18,
          minZoom: 5
      });
      var imgm = L.tileLayer.chinaProvider('GaoDe.Satellite.Map', {
          maxZoom: 18,
          minZoom: 5
      });
      var imga = L.tileLayer.chinaProvider('GaoDe.Satellite.Annotion', {
          maxZoom: 18,
          minZoom: 5
      });
      var glayer = L.tileLayer.chinaProvider('Geoq.Normal.PurplishBlue',{
        maxZoom: 16,
        minZoom: 5
      })

      var normal = L.layerGroup([normalm]),
          image = L.layerGroup([imgm, imga]);

      var map = L.map("myleaflet", {
        attributionControl: false,
        center: [30.830134404094473, 120.9259343147278],
        zoom: 12,
        //layers: [normal],
        zoomControl: false,
        doubleClickZoom: false,
      });
        
      normalm.addTo(map)

      self.map = map

    },
    functionaltilelayer(){
      L.TileLayer.Functional = L.TileLayer.extend({

        _tileFunction: null,

        initialize: function (tileFunction, options) {
          this._tileFunction = tileFunction;
          L.TileLayer.prototype.initialize.call(this, null, options);
        },

        getTileUrl: function (tilePoint) {
          var map = this._map,
            crs = map.options.crs,
            tileSize = this.options.tileSize,
            zoom = tilePoint.z,
            nwPoint = tilePoint.multiplyBy(tileSize),
            sePoint = nwPoint.add(new L.Point(tileSize, tileSize)),
            nw = crs.project(map.unproject(nwPoint, zoom)),
            se = crs.project(map.unproject(sePoint, zoom)),
            bbox = [nw.x, se.y, se.x, nw.y].join(',');

          // Setup object to send to tile function.
          var view = {
            bbox: bbox,
            width: tileSize,
            height: tileSize,
            zoom: zoom,
            tile: {
              row: this.options.tms ? this._tileNumBounds.max.y - tilePoint.y : tilePoint.y,
              column: tilePoint.x
            },
            subdomain: this._getSubdomain(tilePoint)
          };

          return this._tileFunction(view);
        },

        _loadTile: function (tile, tilePoint) {
          tile._layer = this;
          tile.onload = this._tileOnLoad;
          tile.onerror = this._tileOnError;

          this._adjustTilePoint(tilePoint);
          var tileUrl = this.getTileUrl(tilePoint);

          if (typeof tileUrl === 'string') {
            tile.src = tileUrl;
            this.fire('tileloadstart', {
              tile: tile,
              url: tile.src
            });
          } else if (typeof tileUrl.then === 'function') {
            // Assume we are dealing with a promise.
            var self = this;
            tileUrl.then(function (tileUrl) {
              tile.src = tileUrl;
              self.fire('tileloadstart', {
                tile: tile,
                url: tile.src
              });
            });
          }
        }
      });

      L.tileLayer.functional = function (tileFunction, options) {
        return new L.TileLayer.Functional(tileFunction, options);
      };
    },
  }
}
</script>
<style lang="stylus" scoped>
#myleaflet
  width 100%
  height 100%
  background #aaa
  display flex
  flex-direction columns
  align-items center
  justify-content center

</style>