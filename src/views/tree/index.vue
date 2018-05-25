<template>
<div class="dashboard-container">
  <el-row>
    <el-col :span="16" >
        <checktime></checktime>
    </el-col>
    <el-col :span="8" >
    <server></server>

    </el-col>
  </el-row>
  <el-row style="margin-top:10px;">
    <el-col :span="8">
      <checkdep></checkdep>

    </el-col>
    <el-col :span="16">
         <tcplog></tcplog>
    </el-col>

  </el-row>
  <el-row style="margin-top:10px;">
    <el-col :span="12">
         <webclass></webclass>
    </el-col>
    <el-col :span="12">
         <loginError></loginError>
    </el-col>
  </el-row>


</div>
</template>

<script>
import { Checktime,Server,Webclass,Tcplog,LoginError,Checkdep } from '@/views/tree/components'
import echarts from 'echarts'
require('echarts/theme/westeros')
require('echarts/theme/walden')

export default {
  name: 'dashboard',
  components: {
    Checktime,
    Server,
    Webclass,
    Tcplog,
    LoginError,
    Checkdep
  },
  data() {
    return {


    }
  },
  mounted: function() {


  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
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
