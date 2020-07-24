<template>
  <div class="list"  >
    <el-table
      class="shzl-table area-table"
      ref="statisticTable"
      tooltip-effect="dark"
      style="width: 100%"
      :header-cell-style="{background:'#f5f6fa','text-align':'center'}"
      :cell-style="{'text-align':'center'}"
      :data="list"
      :default-sort = "{prop: 'date', order: 'descending'}"
      @sort-change="sortChange"
      >
      <el-table-column label="区域" prop="region"/>
      <el-table-column label="下辖待办事件" prop="waitCount" sortable>
        <template slot-scope='scope'>
          <span style='color:#3399FF; cursor:pointer;' >{{scope.row.waitCount}}</span>
        </template>
      </el-table-column>
      <el-table-column label="下辖办结事件" prop="handleCount" sortable >
        <template slot-scope='scope'>
          <span style='color:#3399FF; cursor:pointer;' >{{scope.row.handleCount}}</span>
        </template>
      </el-table-column>
      <el-table-column label="超时未办结" prop="overCount" sortable>
        <template slot-scope='scope'>
          <span style='color:#3399FF; cursor:pointer;' >{{scope.row.overCount}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import mock from './mock2'
// import ElTable from 'element-ui/packages/table'
// import ElTableColumn from 'element-ui/packages/table-column'

export default {
  components:{
    // ElTable,ElTableColumn
  },
  data () {
    return {
      list: JSON.parse(mock).data,
    }
  },
  mounted () {
  },
  methods: {
    sortChange ({ prop, order }) {
      // switch (prop) {
      //   case 'waitCount': this.params.sort = 'wait'; break
      //   case 'handleCount': this.params.sort = 'handle'; break
      //   case 'overCount': this.params.sort = 'over'; break
      // }
      // switch (order) {
      //   case 'ascending': this.params.order = 'asc'; break
      //   case 'descending': this.params.order = 'desc'; break
      // }
    }
  }
}
</script>
<style lang="less" scoped>
.list{
  background: #ffffff;
  min-height: calc(100% - 30px);
  box-sizing: border-box;
  .event-list{
    .select-state{
      margin-right: 14px;
    }
    .list{
      width: 100%;
      table-layout: fixed;
      border-collapse:collapse;
      margin-top: 20px;
      td{
        text-align: center;
        line-height: 24px;
        &.content{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          width: 180px;
          height: 30px;
          text-align: left;
          padding-left: 2em;
          margin: 10px auto;
        }
      }
      th{
        color: #626676;
        padding-top: 12px;
        padding-bottom: 12px;
        background-color: #f5f6fa;
        font-size: 16px;
      }
      th.clabel{
        text-align: left;
        text-indent: 1em;
      }
      tbody{
        border:1px solid #d5d5d5;
        tr{
          border:1px solid #d5d5d5;
        }
        td{
          color: #414141;
          padding-top: 18px;
          padding-bottom: 18px;
          font-size: 18px;
          .detail{
            color: #2183d8;
            cursor: pointer;
          }
        }
      }
    }
    .pagination{
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
  }
  .eventNum{
    text-align: left;
  }
  .eventContent{
    text-align: left;
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;      /* 可以显示的行数，超出部分用...表示*/
    -webkit-box-orient: vertical;
  }
  .auth{
    text-align: left;
    cursor: pointer;
    color: #2183d8;
    margin-top:10px;
  }
  .logo{
    margin: 5px auto;
    width: 80px;
    height: 30px;
    background: #f76262;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    font-size: 14px;
  }
}
</style>
