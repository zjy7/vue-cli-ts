<template>
<div class='ccc' ref='ccc'>

</div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
      const canvas = document.createElement('canvas')
      canvas.id = 'canvas'
      canvas.width = '170' // 单个水印的宽高
      canvas.height = '100'
      this.maskFullDiv = document.createElement('div')
      const ctx = canvas.getContext('2d')
      ctx.font = 'normal 14px Microsoft Yahei' // 设置样式
      // ctx.fillStyle = 'rgba(112, 113, 114, 0.25)' // 水印字体颜色
      ctx.fillStyle = 'red' // 水印字体颜色
      ctx.textAlign = 'center'
      ctx.rotate(-30 * Math.PI / 180) // 水印偏转角度
      ctx.fillText('shzl_zhang', 80, 90)
      ctx.fillText('2020-09-25', 80, 120)
      // ctx.fillText('shzl_zhang', 100, 50)
      // ctx.fillText('2020-09-25', 100, 80)
      const src = canvas.toDataURL('image/png')
      // this.maskFullDiv.style.position = 'fixed'
      this.maskFullDiv.style.zIndex = '9999'
      this.maskFullDiv.id = 'rightVideoFull' + 0
      // this.maskFullDiv.style.top = '0'
      // this.maskFullDiv.style.left = '0'
      this.maskFullDiv.style.height = '100%'
      this.maskFullDiv.style.width = '100%'
      this.maskFullDiv.style.pointerEvents = 'none'
      this.maskFullDiv.style.backgroundImage = 'URL(' + src + ')'
      // this.maskFullDiv.style.backgroundRepeat = 'no-repeat'
      this.maskFullDiv.style.backgroundPosition = '-0 0px'

      debugger
      this.$refs.ccc.appendChild(this.maskFullDiv)
  }
}
</script>
<style lang="less" scoped>
.ccc{
  width: 1920px;
  height: 700px;
  background: lightblue;
  // overflow: hidden;
}
</style>
