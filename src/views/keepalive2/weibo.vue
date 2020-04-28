<template>
  <div class="addressWarnBox" @mouseenter="pause=true" @mouseleave="pause=false">
    <el-carousel 
      trigger="click" 
      indicator-position="none" 
      height="520px" 
      direction="vertical" 
      :loop="true" 
      v-if="list.length>0" 
      :autoplay="false" 
      ref="carousel"
      @change='changeCard'
      >
      <el-carousel-item  
        v-for="(item,index) in list" 
        :key="index"
        >
        <div 
          class="box" 
          v-for="(children,kindex) in item" 
          :key="'box'+kindex" 
          @click="gotoHandler(children)"
          >
          <div class="box-left">
            <div>
              <span>【{{children.source}}】</span>
              <span>转发量：{{children.transmitNumber}}</span>
            </div>
            <span>{{children.ctime.split(' ')[1]}}</span>
          </div>
          <div class="box-right">
            <span>{{children.summary}}</span>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="notInfo" v-else>
      <img src="@/assets/logo.png" />
      <p>暂无重点舆情预警</p>
    </div>
  </div>
</template>
<script>
import _ from 'lodash'
import WbData from '@/assets/weibo.json'
export default {
  name: '',
  data () {
    return {
      pause: false,
      intervalId: -1,
      list: [],
      AllData:[]
    }
  },
  watch: {
  },
  methods: {
    gotoHandler (item) {
      window.open(item.url,'_blank')
    },
    async getList () {
      clearInterval(this.intervalId)
      this.list = []
      setTimeout(()=>{
        const { status, data } = WbData
        if (status === 200 && data) {
          if (data.weiboOpinionOutDtoList.length > 10) {
            data.weiboOpinionOutDtoList.splice(10)
          }
          this.list = _.chunk(data.weiboOpinionOutDtoList, 4)
          this.AllData = _.cloneDeep(this.list)
          this.initLoop()
        }
      },1500)
    },

    initLoop () {
      this.$nextTick(() => {
        this.intervalId = setInterval(() => {
          if (!this.pause) {
            if (this.$refs.carousel) {
              this.$refs.carousel.next()
            }
          }
        }, 2000)
      })
    },
    changeCard(v){
      console.log(v)
    }
  },
  deactivated () {
    // this.list = []
  },
  activated () {
    // if(this.AllData.length===0){
    //   this.getList()
    // }else{
    //   this.list = _.cloneDeep(this.AllData)
    // }
  },
  beforeDestroy () {
    clearInterval(this.intervalId)
  },
  created () {

  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang="less">
.addressWarnBox{
  width: 390px;
  height: 520px;
  margin: 0 auto;
  .el-carousel{
    transform: translate3d(0,0,0)
  }
  /deep/.el-carousel__container{
    .el-carousel__item{
      display: flex;
      flex-direction: column;
    }
  }
  .notInfo{
      margin: 5px 0;
      width: 380px;
      height: 495px;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      img{
        width: 100px;
        height: 100px;
      }
    }

  .box{
    cursor: pointer;
    margin: 5px 0;
    height: 120px;
    background-color: #ffffff;
    box-shadow: 0px 3px 6px 0px
      rgba(0, 0, 0, 0.16);
    border: solid 1px #d5d5d5;
    display: flex;
    flex-direction: column;
    padding:12px 10px 10px 10px;
    box-sizing: border-box;
    .box-left{
      display: flex;
      justify-content: space-between;
      align-items: center;
      >div{
        display: flex;
        align-items: center;
        >span{
          font-size: 16px;
          color:#169BD5;
        }
      }
      span:last-child{
        font-size: 14px;
        color: #999999;
        height: 24px;
        line-height: 24px;
        box-sizing: border-box;
      }
    }
    .box-right{
      span{
        font-size: 20px;
        line-height: 34px;
        color: #414141;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
    }
  }
}
</style>
