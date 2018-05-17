<template>
<div class="dashboard-container">
  <el-row>
    <el-col :span="6" >
      <department></department>
    </el-col>
    <el-col :span="18" >
      <employee></employee>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
        <organization></organization>
    </el-col>
  </el-row>

</div>
</template>

<script>
import { Department,Employee,Organization } from '@/views/dashboard/components'
import echarts from 'echarts'
require('echarts/theme/westeros')
require('echarts/theme/walden')

export default {
  name: 'dashboard',
  components: {
    Department,
    Employee,
    Organization
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
        margin: 10px;
        height: auto;

    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
</style>
