<template>
<div class="loginError">
  <div id="loginError" style="width:100%; height:500px;"></div>
</div>
</template>

<script>
import echarts from 'echarts'

require('echarts/theme/halloween')

export default {
  name: 'LoginError',
  data() {
    return {
      loginError: "",
      depOption: {
        title: {
          text: '异常登录top10每日错误次数',
          padding:[10,10]
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['1487', '1210', '1417', '1344', '1224', '1254', '1151', '1172', '1252', '1106'],
          right: "10",
          top:"10"
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ["2017年11月1日", "2017年11月2日", "2017年11月3日", "2017年11月4日", "2017年11月5日", "2017年11月6日", "2017年11月7日", "2017年11月8日", "2017年11月9日", "2017年11月10日", "2017年11月11日", "2017年11月12日", "2017年11月13日", "2017年11月14日", "2017年11月15日", "2017年11月16日",
            "2017年11月17日", "2017年11月18日", "2017年11月19日", "2017年11月20日", "2017年11月21日", "2017年11月22日", "2017年11月23日", "2017年11月24日", "2017年11月25日", "2017年11月26日", "2017年11月27日", "2017年11月28日", "2017年11月29日", "2017年11月30日"
          ]
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} 次'
          },
          max:30
        },
        series: [{
            name: '1487',
            type: 'line',
            data: [0, 0, 24, 25, 0, 24, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],

            markPoint: {
              data: [{
                type: 'max',
                name: '最大值'
              }]
            },
            markLine: {
              data: [{
                type: 'average',
                name: '平均值'
              }]
            }
          },
          {
            name: '1210',
            type: 'line',
            data: [2, 1, 2, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 3, 1, 2, 0, 1, 0, 0, 2, 0, 1, 2]
          },
          {
            name: '1417',
            type: 'line',
            data: [1, 0, 2, 0, 0, 3, 1, 1, 1, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 1, 1, 1, 2]
          },
          {
            name: '1344',
            type: 'line',
            data: [2, 1, 1, 0, 0, 0, 1, 1, 1, 2, 0, 0, 2, 2, 1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 2]
          },
          {
            name: '1224',
            type: 'line',
            data: [1, 1, 2, 0, 0, 0, 1, 2, 0, 1, 0, 0, 1, 3, 2, 1, 1, 0, 0, 1, 0, 0, 3, 0, 0, 0, 2, 0, 1, 0]
          },
          {
            name: '1254',
            type: 'line',
            data: [0, 2, 2, 0, 0, 1, 3, 0, 1, 2, 0, 0, 2, 2, 2, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 0, 1, 1]
          },
          {
            name: '1151',
            type: 'line',
            data: [0, 1, 1, 0, 0, 0, 2, 1, 2, 2, 0, 0, 0, 2, 3, 2, 0, 0, 1, 0, 0, 1, 1, 1, 2, 0, 0, 1, 0, 0]
          },
          {
            name: '1172',
            type: 'line',
            data: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 1, 1, 2, 0, 0, 4, 3, 0, 0, 1, 0, 0, 2, 1, 0, 2]
          },
          {
            name: '1252',
            type: 'line',
            data: [3, 2, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 4, 0, 0, 0, 1, 1, 2, 1]
          },
          {
            name: '1106',
            type: 'line',
            data: [0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 2, 1, 0, 0, 1, 1, 0, 2, 0, 0, 2, 1, 1, 1, 2]
          },

          {
            name: '异常登录top10',
            type: 'pie',
            center: ['70%', '45%'],
            radius: '28%',
            z: 100,
            radius: [20, 140],

            roseType: 'area',
            data: [{
                value: 23,
                name: '1151'
              },
              {
                value: 24,
                name: '1344'
              },
              {
                value: 29,
                name: '1210'
              },
              {
                value: 21,
                name: '1106'
              },
              {
                value: 24,
                name: '1417'
              },
              {
                value: 22,
                name: '1252'
              },
              {
                value: 23,
                name: '1254'
              },
              {
                value: 76,
                name: '1487'
              },
              {
                value: 22,
                name: '1172'
              },
              {
                value: 23,
                name: '1224'
              },
            ],
          }
        ]
      }

    }
  },
  mounted: function() {
    this.loginError = echarts.init(document.getElementById('loginError'), 'halloween')
    this.loginError.setOption(this.depOption)

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.loginError {
    border: #ccc 1px solid;
    margin-right: 10px;
}
</style>
