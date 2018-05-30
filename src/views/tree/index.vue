<template>
<div class="dashboard-container">
  <!-- <el-row>
    <el-col :span="16" >
        <checktime></checktime>
    </el-col>
    <el-col :span="8" >
    <server></server>

    </el-col>
  </el-row>
  <el-row style="margin-top:10px;">
    <el-col :span="10">
      <checkdep></checkdep>

    </el-col>
    <el-col :span="14">
         <tcplog></tcplog>
    </el-col>

  </el-row>

  <el-row style="margin-top:10px;">
    <el-col :span="8" style="padding-right:10px;margin-left:-10px;">
      <div id="emailSum" class="chartBox" style="height:500px;"></div>
    </el-col>
    <el-col :span="8" style="padding-right:10px;">
      <div id="positiontWord" class="chartBox" style="height:500px;"></div>
    </el-col>
    <el-col :span="8" style="padding-right:10px;">
      <div id="positiontWord2" class="chartBox" style="height:500px;"></div>
    </el-col>
  </el-row>
  <el-row style="margin-top:10px;">
    <el-col :span="12">
         <webclass></webclass>
    </el-col>
    <el-col :span="12">
         <loginError></loginError>
    </el-col>
  </el-row> -->


      <departmentcloudword></departmentcloudword>






</div>
</template>

<script>
import {
  Checktime,
  Server,
  Webclass,
  Tcplog,
  LoginError,
  Checkdep,
  Departmentcloudword
} from '@/views/tree/components'
import echarts from 'echarts'
require('echarts/theme/halloween')
require('echarts-wordcloud')

export default {
  name: 'dashboard',
  components: {
    Checktime,
    Server,
    Webclass,
    Tcplog,
    LoginError,
    Checkdep,
    Departmentcloudword
  },
  data() {
    return {

    }
  },
  methods: {},
  watch: {

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
.chartBox {
    width: 100%;
    border: #ccc 1px solid;
    margin: 0 10px;
}
</style>
