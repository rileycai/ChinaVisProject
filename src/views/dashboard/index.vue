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
    <el-col :span="6" >
      <el-row>
            <department></department>
      </el-row>
    </el-col>
    <el-col :span="18" style="padding-right:10px;" >
      <organization></organization>
    </el-col>
  </el-row>
</div>
</template>

<script>
import { Department,Employee,Organization,Emailrel } from '@/views/dashboard/components'
import {Departmentcloudword} from '@/views/department/components'
import echarts from 'echarts'


export default {
  name: 'dashboard',
  components: {
    Department,
    Employee,
    Organization,
    Emailrel,
    Departmentcloudword

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
