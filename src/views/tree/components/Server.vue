<template>
<div class="server">
  <div id="chartServer" style="width:100%; height:500px;"></div>
</div>
</template>

<script>
import echarts from 'echarts'

require('echarts/theme/halloween')

export default {
  name: 'Server',
  data() {
    return {
      chartServer: "",
      depOption: {
        title: {
          text: '各研发部门访问服务器情况',
          x: 'left',
          padding: [10, 10]
        },
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: [{
          type: 'sankey',
          layout: 'none',
          top: '10%',
          data: [{
              "name": "10.5.71.60"
            },
            {
              "name": "10.50.50.26"
            },
            {
              "name": "10.50.50.27"
            },
            {
              "name": "10.50.50.28"
            },
            {
              "name": "10.50.50.29"
            },
            {
              "name": "10.50.50.30"
            },
            {
              "name": "10.50.50.31"
            },
            {
              "name": "10.50.50.33"
            },
            {
              "name": "10.50.50.34"
            },
            {
              "name": "10.50.50.35"
            },
            {
              "name": "10.50.50.36"
            },
            {
              "name": "10.50.50.37"
            },
            {
              "name": "10.50.50.38"
            },
            {
              "name": "10.50.50.39"
            },
            {
              "name": "10.50.50.40"
            },
            {
              "name": "10.50.50.41"
            },
            {
              "name": "10.50.50.42"
            },
            {
              "name": "10.50.50.43"
            },
            {
              "name": "10.50.50.44"
            },
            {
              "name": "10.50.50.45"
            },
            {
              "name": "10.50.50.46"
            },
            {
              "name": "10.50.50.47"
            },
            {
              "name": "10.50.50.48"
            },
            {
              "name": "10.50.50.49"
            },
            {
              "name": "10.63.120.70"
            },
            {
              "name": "10.7.133.15"
            },
            {
              "name": "10.7.133.16"
            },
            {
              "name": "10.7.133.17"
            },
            {
              "name": "10.7.133.18"
            },
            {
              "name": "10.7.133.19"
            },
            {
              "name": "10.7.133.20"
            },
            {
              "name": "10.7.133.21"
            },
            {
              "name": "10.7.133.22"
            },
            {
              "name": "研发1"
            },
            {
              "name": "研发2"
            },
            {
              "name": "研发3"
            }
          ],
          links: [{
              "source": "研发3",
              "target": "10.5.71.60",
              "value": 15
            },
            {
              "source": "研发3",
              "target": "10.50.50.45",
              "value": 73
            },
            {
              "source": "研发3",
              "target": "10.50.50.30",
              "value": 107
            },
            {
              "source": "研发3",
              "target": "10.7.133.22",
              "value": 161
            },
            {
              "source": "研发3",
              "target": "10.7.133.21",
              "value": 226
            },
            {
              "source": "研发3",
              "target": "10.50.50.35",
              "value": 377
            },
            {
              "source": "研发3",
              "target": "10.50.50.36",
              "value": 379
            },
            {
              "source": "研发3",
              "target": "10.50.50.31",
              "value": 338
            },
            {
              "source": "研发3",
              "target": "10.50.50.48",
              "value": 124
            },
            {
              "source": "研发3",
              "target": "10.50.50.38",
              "value": 322
            },
            {
              "source": "研发3",
              "target": "10.50.50.41",
              "value": 527
            },
            {
              "source": "研发3",
              "target": "10.50.50.44",
              "value": 472
            },
            {
              "source": "研发3",
              "target": "10.50.50.46",
              "value": 483
            },
            {
              "source": "研发3",
              "target": "10.50.50.33",
              "value": 255
            },
            {
              "source": "研发3",
              "target": "10.7.133.15",
              "value": 252
            },
            {
              "source": "研发3",
              "target": "10.50.50.43",
              "value": 521
            },
            {
              "source": "研发3",
              "target": "10.50.50.40",
              "value": 413
            },
            {
              "source": "研发3",
              "target": "10.7.133.16",
              "value": 557
            },
            {
              "source": "研发3",
              "target": "10.50.50.37",
              "value": 463
            },
            {
              "source": "研发3",
              "target": "10.50.50.29",
              "value": 2780
            },
            {
              "source": "研发3",
              "target": "10.50.50.28",
              "value": 2766
            },
            {
              "source": "研发3",
              "target": "10.50.50.26",
              "value": 4763
            },
            {
              "source": "研发2",
              "target": "10.63.120.70",
              "value": 22
            },
            {
              "source": "研发2",
              "target": "10.50.50.42",
              "value": 188
            },
            {
              "source": "研发2",
              "target": "10.50.50.39",
              "value": 245
            },
            {
              "source": "研发2",
              "target": "10.50.50.36",
              "value": 153
            },
            {
              "source": "研发2",
              "target": "10.50.50.47",
              "value": 567
            },
            {
              "source": "研发2",
              "target": "10.50.50.34",
              "value": 690
            },
            {
              "source": "研发2",
              "target": "10.7.133.19",
              "value": 258
            },
            {
              "source": "研发2",
              "target": "10.50.50.31",
              "value": 640
            },
            {
              "source": "研发2",
              "target": "10.50.50.48",
              "value": 453
            },
            {
              "source": "研发2",
              "target": "10.50.50.38",
              "value": 355
            },
            {
              "source": "研发2",
              "target": "10.50.50.41",
              "value": 517
            },
            {
              "source": "研发2",
              "target": "10.50.50.44",
              "value": 597
            },
            {
              "source": "研发2",
              "target": "10.50.50.46",
              "value": 158
            },
            {
              "source": "研发2",
              "target": "10.50.50.33",
              "value": 594
            },
            {
              "source": "研发2",
              "target": "10.7.133.20",
              "value": 718
            },
            {
              "source": "研发2",
              "target": "10.50.50.43",
              "value": 534
            },
            {
              "source": "研发2",
              "target": "10.50.50.49",
              "value": 760
            },
            {
              "source": "研发2",
              "target": "10.50.50.40",
              "value": 331
            },
            {
              "source": "研发2",
              "target": "10.7.133.16",
              "value": 105
            },
            {
              "source": "研发2",
              "target": "10.50.50.37",
              "value": 145
            },
            {
              "source": "研发2",
              "target": "10.50.50.29",
              "value": 3547
            },
            {
              "source": "研发2",
              "target": "10.50.50.28",
              "value": 3572
            },
            {
              "source": "研发2",
              "target": "10.50.50.26",
              "value": 6286
            },
            {
              "source": "研发1",
              "target": "10.5.71.60",
              "value": 5
            },
            {
              "source": "研发1",
              "target": "10.7.133.19",
              "value": 437
            },
            {
              "source": "研发1",
              "target": "10.7.133.18",
              "value": 973
            },
            {
              "source": "研发1",
              "target": "10.50.50.48",
              "value": 423
            },
            {
              "source": "研发1",
              "target": "10.50.50.38",
              "value": 352
            },
            {
              "source": "研发1",
              "target": "10.50.50.46",
              "value": 525
            },
            {
              "source": "研发1",
              "target": "10.50.50.33",
              "value": 349
            },
            {
              "source": "研发1",
              "target": "10.7.133.20",
              "value": 496
            },
            {
              "source": "研发1",
              "target": "10.7.133.15",
              "value": 1179
            },
            {
              "source": "研发1",
              "target": "10.50.50.43",
              "value": 455
            },
            {
              "source": "研发1",
              "target": "10.50.50.49",
              "value": 757
            },
            {
              "source": "研发1",
              "target": "10.50.50.40",
              "value": 795
            },
            {
              "source": "研发1",
              "target": "10.7.133.16",
              "value": 917
            },
            {
              "source": "研发1",
              "target": "10.50.50.37",
              "value": 1210
            },
            {
              "source": "研发1",
              "target": "10.50.50.29",
              "value": 4186
            },
            {
              "source": "研发1",
              "target": "10.50.50.28",
              "value": 4272
            },
            {
              "source": "研发1",
              "target": "10.50.50.26",
              "value": 7111
            },
            {
              "source": "10.63.120.70",
              "target": "10.7.133.15",
              "value": 4
            },
            {
              "source": "10.50.50.49",
              "target": "10.50.50.34",
              "value": 1
            },
            {
              "source": "10.50.50.49",
              "target": "10.7.133.16",
              "value": 1
            },
            {
              "source": "10.50.50.46",
              "target": "10.7.133.16",
              "value": 30
            },
            {
              "source": "10.50.50.44",
              "target": "10.7.133.17",
              "value": 30
            },
            {
              "source": "10.50.50.43",
              "target": "10.50.50.44",
              "value": 1
            },
            {
              "source": "10.50.50.37",
              "target": "10.50.50.46",
              "value": 1
            },
            {
              "source": "10.50.50.37",
              "target": "10.7.133.16",
              "value": 30
            },
            {
              "source": "10.50.50.31",
              "target": "10.7.133.19",
              "value": 30
            },
            {
              "source": "10.50.50.29",
              "target": "10.7.133.20",
              "value": 3
            },
            {
              "source": "10.50.50.28",
              "target": "10.7.133.18",
              "value": 3
            },
            {
              "source": "10.50.50.27",
              "target": "10.7.133.15",
              "value": 3
            },
            {
              "source": "10.50.50.26",
              "target": "10.7.133.21",
              "value": 30
            },
            {
              "source": "10.7.133.20",
              "target": "10.50.50.40",
              "value": 1
            },
            {
              "source": "10.5.71.60",
              "target": "10.7.133.16",
              "value": 4
            },


          ],
          layoutIterations: 50,
          draggable: true,
          color: [

            "#8c6ac4",
            "#715c87",


            "#ffee51",
            "#ff715e",

          ],
          label: {
            normal: {
              color: "#ffaf51"
            }
          },
          itemStyle: {
            normal: {
              borderWidth: 1,
              borderColor: '#aaa'
            }
          },
          lineStyle: {
            normal: {
              color: 'source',
              curveness: 0.5
            }
          }

        }]
      }

    }
  },
  mounted: function() {
    this.chartServer = echarts.init(document.getElementById('chartServer'), 'halloween')
    this.chartServer.setOption(this.depOption)

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.server {
    border: #ccc 1px solid;
    margin-right: 10px;
}
</style>
