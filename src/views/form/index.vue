<template>
<div class="app-container">
  <el-row>
    <el-col :span="24">
      <div id="chartColumn" style="width:100%; height:800px;"></div>
    </el-col>
  </el-row>

</div>
</template>

<script>
import { getChart } from '@/api/form'
import echarts from 'echarts'
require('echarts/theme/westeros')
require('echarts/theme/walden')

export default {
  name: 'form',
  data() {
    return {
      option: {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '直接访问',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }]
      }

    }
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getChart().then(response => {
        this.option.xAxis[0].data = response.data.xData
        this.option.series[0].data = response.data.yData
        this.chartColumn = echarts.init(document.getElementById('chartColumn'),'walden')
        this.chartColumn.setOption(this.option)
      })
    }

  },
  mounted: function() {
    this.fetchData()
  }
}
</script>

<style scoped>
.line {
  text-align: center;
}
</style>
