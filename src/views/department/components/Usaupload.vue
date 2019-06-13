<template>
<div class="usaupload">
  <div id="usaupload" style="width:100%; height:500px;"></div>
</div>
</template>

<script>
import echarts from 'echarts'

require('echarts/theme/halloween')

export default {
  name: 'usaupload',
  data() {
    return {
      usaupload: "",
      depOption: {
        title: {
          text: "五人团伙泄密事件",
          padding: [10, 10]
        },

        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          type: 'piecewise',
          categories: ["1487", "1273", "1183", "1169", "1151"],
          dimension: 1,
          orient: 'horizontal',
          top: 10,
          textStyle: {
            color: "##333"
          },
          left: 'center',
          inRange: {
            color: ["#ff715e",
              "#ffaf51",
              "#ffee51",
              "#8c6ac4",
              "#715c87"
            ]
          },
          seriesIndex: [0]
        },
        parallel: {
          bottom: 20,
          left: 20,
          top: 70,
        },

        parallelAxis: [{
            dim: 0,
            name: '时间',
            type: 'category',
            data: ["17日14:50", "21日13:31", "24日12:44", "27日21:03", "30日17:19"]
          },
          {
            dim: 1,
            name: '用户',
            type: 'category',
            data: ["1487", "1273", "1183", "1169", "1151"]
          },
          {
            dim: 2,
            name: '源IP',
            type: 'category',
            data: ["10.64.105.4", "10.64.105.73", "10.64.105.165", "10.64.105.199", "10.64.105.244"]
          },

          {
            dim: 3,
            name: '跳板机1',
            type: 'category',
            data: ["10.7.133.20", "10.50.50.37", "10.50.50.43", "10.50.50.49"]
          },
          {
            dim: 4,
            name: '跳板机2',
            type: 'category',
            data: ["10.7.133.16", "10.50.50.34", "10.50.50.40", "10.50.50.44", "10.50.50.46"]
          },
          {
            dim: 5,
            name: '目的IP',
            type: 'category',
            data: ["13.250.177.223"]
          },
          {
            dim: 6,
            name: '上传流量',
            type: 'category',
            data: ["19MB", "572MB"]
          }
        ],
        series: {
          type: 'parallel',
          smooth: 0.2,

          lineStyle: {
            width: 3
          },
          data: [
            ["17日14:50", "1183", "10.64.105.165", "10.7.133.20", "10.50.50.40", "13.250.177.223", "19MB"],
            ["21日13:31", "1273", "10.64.105.244", "10.50.50.49", "10.50.50.34", "13.250.177.223", "19MB"],
            ["24日12:44", "1487", "10.64.105.4", "10.50.50.43", "10.50.50.44", "13.250.177.223", "572MB"],
            ["27日21:03", "1169", "10.64.105.199", "10.50.50.37", "10.50.50.46", "13.250.177.223", "19MB"],
            ["30日17:19", "1151", "10.64.105.73", "10.50.50.49", "10.7.133.16", "13.250.177.223", "19MB"]
          ]
        }
      }


    }
  },
  mounted: function() {
    this.usaupload = echarts.init(document.getElementById('usaupload'), 'halloween')
    this.usaupload.setOption(this.depOption)

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.usaupload {
    border: #ccc 1px solid;
    // margin-right: 10px;
}
</style>
