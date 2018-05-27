<template>
<div class="checkdep">
  <div id="checkdep" style="width:100%; height:500px;"></div>
</div>
</template>

<script>
import echarts from 'echarts'

require('echarts/theme/halloween')

export default {
  name: 'Checkdep',
  data() {
    return {
      checkdep: "",
      checkOption: {
        title: {
          text: '11月各部门每日打卡人数',

          x: 'left',
          padding: [10, 10]
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['财务', '人力', '研发1', '研发2', '研发3'],
          top: 10,
          right: 10
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        yAxis: {
          type: 'value',
          name: '人次'
        },
        xAxis: {
          type: 'category',
          data: ['2017-11-01', '2017-11-02', '2017-11-03', '2017-11-04', '2017-11-05', '2017-11-06', '2017-11-07', '2017-11-08', '2017-11-09', '2017-11-10', '2017-11-11', '2017-11-12', '2017-11-13', '2017-11-14', '2017-11-15', '2017-11-16',
            '2017-11-17', '2017-11-18', '2017-11-19', '2017-11-20', '2017-11-21', '2017-11-22', '2017-11-23', '2017-11-24', '2017-11-25', '2017-11-26', '2017-11-27', '2017-11-28', '2017-11-29', '2017-11-30'
          ],
        },
        series: [{
            name: '财务',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                formatter: function(x) {
                  console.log(x);
                  if (x.data > 10) {
                    return x.data;
                  } else {
                    return "";
                  }
                }

              }
            },
            data: [22, 23, 23, 0, 2, 21, 24, 24, 24, 23, 0, 2, 24, 24, 24, 24, 24, 0, 15, 23, 21, 24, 24, 23, 20, 21, 23, 24, 23, 23],
          },
          {
            name: '人力',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                formatter: function(x) {
                  console.log(x);
                  if (x.data > 10) {
                    return x.data;
                  } else {
                    return "";
                  }
                }

              }
            },
            data: [18, 16, 17, 0, 5, 18, 16, 18, 18, 17, 0, 6, 18, 18, 18, 17, 17, 5, 4, 17, 17, 17, 17, 18, 3, 0, 16, 17, 15, 16],
          },
          {
            name: '研发1',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                formatter: function(x) {
                  console.log(x);
                  if (x.data > 10) {
                    return x.data;
                  } else {
                    return "";
                  }
                }

              }
            },
            data: [84, 87, 85, 3, 2, 86, 88, 86, 85, 84, 7, 0, 86, 87, 88, 85, 86, 11, 8, 88, 88, 88, 87, 86, 5, 8, 87, 88, 86, 87],
          },
          {
            name: '研发2',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                formatter: function(x) {
                  console.log(x);
                  if (x.data > 10) {
                    return x.data;
                  } else {
                    return "";
                  }
                }

              }
            },
            data: [105, 106, 105, 0, 0, 105, 104, 104, 105, 104, 0, 12, 104, 104, 105, 105, 106, 0, 4, 104, 103, 106, 106, 105, 3, 3, 100, 102, 100, 99],
          },
          {
            name: '研发3',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'insideRight',
                formatter: function(x) {
                  console.log(x);
                  if (x.data > 10) {
                    return x.data;
                  } else {
                    return "";
                  }
                }

              }
            },
            data: [62, 60, 61, 0, 6, 59, 61, 60, 61, 61, 7, 0, 61, 61, 62, 62, 62, 5, 0, 61, 60, 62, 62, 62, 3, 0, 62, 61, 61, 61],
          }
        ]
      }


    }
  },
  mounted: function() {





    this.checkdep = echarts.init(document.getElementById('checkdep'), 'halloween')

    this.checkdep.setOption(this.checkOption)



  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.checkdep {
    border: #ccc 1px solid;
    margin-right: 10px;
}
</style>
