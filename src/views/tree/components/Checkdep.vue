<template>
<div class="checkdep">
  <div id="checkdep" style="width:100%; height:500px;"></div>
</div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/westeros')
require('echarts/theme/walden')
require('echarts/theme/halloween')

export default {
  name: 'Checkdep',
  data() {
    return {
      checkdep: "",


    }
  },
  mounted: function() {

    var cellSize = [80, 80];
    var pieRadius = 30;


    function getPieSeries(scatterData, chart) {
      return echarts.util.map(scatterData, function(item, index) {

        var center = chart.convertToPixel('calendar', item);
        return {
          id: index + 'pie',
          type: 'pie',
          center: center,
          tooltip: {

          },
          label: {
            normal: {
              formatter: '{c}',
              position: 'inside'
            }
          },
          radius: pieRadius,
          data: [{
              name: '财务',
              value: item[1]
            },
            {
              name: '人力',
              value: item[2]
            },
            {
              name: '研发1',
              value: item[3]
            },
            {
              name: '研发2',
              value: item[4]
            },
            {
              name: '研发3',
              value: item[5]
            },
            {
              name: '未打卡',
              value: 298-item[1]-item[2]-item[3]-item[4]-item[5]
            },

          ]
        };
      });
    }

    function drawPie(params) {
      //  console.log(params);
      pieInitialized = true;
      params.setOption({
        series: getPieSeries(scatterData, params)
      });
    }


    var scatterData = [
      ["2017-11-01", 22, 18, 84, 105, 62],
      ["2017-11-02", 23, 16, 87, 106, 60],
      ["2017-11-03", 23, 17, 85, 105, 61],
      ["2017-11-04", 0, 0, 3, 0, 0],
      ["2017-11-05", 2, 5, 2, 0, 6],
      ["2017-11-06", 21, 18, 86, 105, 59],
      ["2017-11-07", 24, 16, 88, 104, 61],
      ["2017-11-08", 24, 18, 86, 104, 60],
      ["2017-11-09", 24, 18, 85, 105, 61],
      ["2017-11-10", 23, 17, 84, 104, 61],
      ["2017-11-11", 0, 0, 7, 0, 7],
      ["2017-11-12", 2, 6, 0, 12, 0],
      ["2017-11-13", 24, 18, 86, 104, 61],
      ["2017-11-14", 24, 18, 87, 104, 61],
      ["2017-11-15", 24, 18, 88, 105, 62],
      ["2017-11-16", 24, 17, 85, 105, 62],
      ["2017-11-17", 24, 17, 86, 106, 62],
      ["2017-11-18", 0, 5, 11, 0, 5],
      ["2017-11-19", 15, 4, 8, 4, 0],
      ["2017-11-20", 23, 17, 88, 104, 61],
      ["2017-11-21", 21, 17, 88, 103, 60],
      ["2017-11-22", 24, 17, 88, 106, 62],
      ["2017-11-23", 24, 17, 87, 106, 62],
      ["2017-11-24", 23, 18, 86, 105, 62],
      ["2017-11-25", 20, 3, 5, 3, 3],
      ["2017-11-26", 21, 0, 8, 3, 0],
      ["2017-11-27", 23, 16, 87, 100, 62],
      ["2017-11-28", 24, 17, 88, 102, 61],
      ["2017-11-29", 23, 15, 86, 100, 61],
      ["2017-11-30", 23, 16, 87, 99, 61]
    ];

    var option = {
      title: {
        text: "打卡人数日历图",
        padding: [10, 10]
      },
      tooltip: {},
      legend: {
        data: ['财务', '人力', '研发1', '研发2', '研发3','未打卡'],
        selected:{
          '未打卡':false
        },
        right: 10,
        top: 10
      },
      calendar: {
        // top: 'middle',
        left: 'center',
        orient: 'vertical',
        cellSize: cellSize,

        splitLine: {
          show: true,
          lineStyle: {
            color: '#ccc',
            width: 2,
            type: 'solid'
          }
        },
        yearLabel: {
          show: false,
          textStyle: {
            fontSize: 30
          }
        },
        dayLabel: {
          margin: 10,
          firstDay: 1,
          nameMap: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
          color: "#ffaf51",
        },
        monthLabel: {
          show: false
        },
        itemStyle: {
          normal: {
            color: 'rgba(0,0,0,0)',
            borderWidth: 1,
            borderColor: '#ccc'
          }
        },
        range: ['2017-11']
      },
      series: [{
        id: 'label',
        type: 'scatter',
        coordinateSystem: 'calendar',
        symbolSize: 1,
        label: {
          normal: {
            show: true,
            formatter: function(params) {
              return echarts.format.formatTime('dd', params.value[0]);
            },
            offset: [-cellSize[0] / 2 + 10, -cellSize[1] / 2 + 10],
            textStyle: {
              color: "#ff715e",
              fontSize: 14
            }
          }
        },
        data: scatterData
      }]
    };



    this.checkdep = echarts.init(document.getElementById('checkdep'), 'halloween')

    this.checkdep.setOption(option)

    if (!app.inNode) {
      var pieInitialized;
      setTimeout(drawPie(this.checkdep), 10);
    }

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.checkdep {
    border: #ccc 1px solid;
    margin-right: 10px;
}
</style>
