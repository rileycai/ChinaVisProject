<template>
<div class="dashboard-container">
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
import {Departmentcloudword} from '@/views/tree/components'
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
