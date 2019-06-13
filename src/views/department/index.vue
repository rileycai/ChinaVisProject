<template>
<div class="dashboard-container">
      <el-row style="margin: 10px 0;">
        <el-alert
          title="提示：点击员工节点可显示该员工的邮件收发词云图信息"
          type="warning"
          center
          show-icon>
        </el-alert>
      </el-row>
      <departmentcloudword></departmentcloudword>
      <el-row style="margin-top:10px;">
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
        <el-col :span="6">
             <webclass></webclass>
        </el-col>
        <el-col :span="6" style="padding-right:10px;">
          <playball></playball>

        </el-col>
        <el-col :span="12">
             <loginError></loginError>
        </el-col>
      </el-row>
      <el-row style="margin-top:10px;">
        <el-col :span="12" style="padding-right:10px;">
          <usaupload></usaupload>
        </el-col>
        <el-col :span="12" style="padding-right:10px;">
          <databaseerror></databaseerror>
        </el-col>
      </el-row>
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
  Departmentcloudword,
  Usaupload,
  Databaseerror,
  Playball
} from '@/views/department/components'
import echarts from 'echarts'
require('echarts/theme/halloween')
require('echarts-wordcloud')

export default {
  name: 'department',
  components: {
    Checktime,
    Server,
    Webclass,
    Tcplog,
    LoginError,
    Checkdep,
    Departmentcloudword,
    Usaupload,
    Databaseerror,
    Playball
  },
  data() {
    return {

    }
  },
  methods: {},
  watch: {}
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
