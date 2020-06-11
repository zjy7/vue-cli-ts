const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const debug = process.env.NODE_ENV !== 'production'
let cesiumSource = './node_modules/cesium/Source'
let cesiumWorkers = '../Build/Cesium/Workers'
console.log('running in vue.config.js')
module.exports = {
  publicPath: './',
  devServer: {
    port: 7000,
    proxy: {
      '/requestBuilding': {
        target:'http://127.0.0.1:80',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/requestBuilding': '/jxgl.json'
        }
      },
      '/one.json':{
        target:'https://d3h9zulrmcj1j6.cloudfront.net/Orlando_Cesium/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/one.json': '/root.json'
        }
      },
      '/eee':{
        target:'http://127.0.0.1:80',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/eee': '/eee'
        }
      },
      '/asset/get/s':{
        target:'https://gallerybox.echartsjs.com/asset/get/s',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/asset/get/s': '/'
        }
      },
    }
  },
  configureWebpack: {
    output: {
      sourcePrefix: ' ' // 1
    },
    amd: { // 2
      toUrlUndefined: true
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'mycesium': path.resolve(__dirname, cesiumSource) // 3
      }
    },
    plugins: [ // 4
      new CopyWebpackPlugin([ { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers'}]),
      new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'Assets'), to: 'Assets'}]),
      new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets'}]),
      new CopyWebpackPlugin([ { from: path.join(cesiumSource, 'ThirdParty/Workers'), to: 'ThirdParty/Workers'}]),
      new webpack.DefinePlugin({ // 5
        CESIUM_BASE_URL: JSON.stringify('./')
      })
    ],
    module: {
      unknownContextCritical: /^.\/.*$/,
      unknownContextCritical: false // 6
    }
  }
}