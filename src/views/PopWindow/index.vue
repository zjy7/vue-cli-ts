<template>
  <div class="pop-window" v-show="showPopWindow"  >
    <div class="win" :style="'width:'+width">
      <iframe frameborder="0" :src="url" :style="'width:'+width"></iframe>
      <div class="btn-close" @click.stop="closeWindow"></div>
    </div>
  </div>
</template>

<script lang="ts">
// https://segmentfault.com/q/1010000011324515
// 为啥iframe里打开微博，会有一个遮罩层，点击会新打开一个登录界面？
import { Component, Prop, Vue, Watch, Emit} from 'vue-property-decorator';

@Component
export default class PopWindow extends Vue {
    showPopWindow:Boolean=false
    url:string=`${process.env.BASE_URL}empty.html`
    width:string='1920px'

    openWindow (urls:string):void {
      this.url = urls
      this.showPopWindow = true
    }
    closeWindow ():void {
      this.url = `${process.env.BASE_URL}empty.html`
      this.showPopWindow = false
    }

    created () {
        // this.$bus.on('openWindow', (url, width) => {
        //   this.width = width
        //   this.openWindow(url)
        // })
        
        this.openWindow('https://weibo.com/6022276417/IwS4wcCik')
    }
}


// export default {
//   name: 'popWindow',
//   data () {
//     return {
//       showPopWindow: false,
//       url: `${process.env.BASE_URL}empty.html`,
//       texts: null,
//       width: '1920px'
//     }
//   },
//   mounted () {
//     this.$bus.on('openWindow', (url, width) => {
//       this.width = width
//       this.openWindow(url)
//     })
//   },
//   methods: {
//     openWindow (urls) {
//       this.url = urls
//       this.showPopWindow = true
//     },
//     closeWindow () {
//       this.url = `${process.env.BASE_URL}empty.html`
//       this.showPopWindow = false
//     }
//   }
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="text/less" scoped>
.pop-window {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 9999999;
  justify-content:center;
  background: rgba(0, 0, 0, 0.4);
  .win {
    margin: 0;
    padding: 0;
    height: 100%;
    background: #0a1a25;
    z-index: 999;
    align-self:center;
    position: relative;
    &.unactive {
      background: rgba(0, 0, 0, 0.4)
    }
    iframe {
      width: 100%;
      height: 100%;
    }
    .pureText{
      width: 100%;
      height: 100%;
    }

     .btn-close {
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
        background: url("~@/assets/detail_close.png") no-repeat center;
        background-size: 100% 100%;
        opacity: 0;
        transition: all .3s;
        z-index: 999;
        cursor: pointer;
        &.btn-center {
          right: 0px;
        }
      }
      .btn-close:hover {
        opacity: 1;
      }
  }
}
</style>
