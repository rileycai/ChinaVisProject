<template>
  <div class="table-container">
    <el-row>
      <el-col :span="8"  style="height:500px;">

      </el-col>
      <el-col :span="16" >

      </el-col>
    </el-row>

  </div>
</template>

<script>
import { getList } from '@/api/table'
import request from '@/utils/request'

export default {
  data() {
    return {
      id:"1067",

    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true
      var url="/"+this.id;
      request({
        url: url,
        method: 'get'
      }).then(response => {
         console.log(response);
      })
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.table {
    &-container {
        margin: 10px 10px 10px -20px;
        height: auto;

    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
