<template>
<div class="playball">
  <div id="playball" style="width:100%; height:500px;"></div>
</div>
</template>

<script>
import echarts from 'echarts'

require('echarts/theme/halloween')

export default {
  name: 'playball',
  data() {
    return {
      playball: "",
      depOption: {
        title: {
          text: '每周打球活动参与情况',
          padding: [10, 10]
        },


        legend: [{
          // selectedMode: 'single',
          data: ["员工", "活动"],
          right: 10,
          top: 10
        }],
        tooltip: {
          formatter: function(x) {
            //      console.log(x);

            if (x.data.source != undefined) {
              return "参加活动";
            } else if (x.data.category == "活动") {
              return x.data.name;
            } else {

              return "工号:" + x.data.name + "</br> 部门: " + x.data.position + "</br>";
            }

          }
        },
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [{
          name: 'Les Miserables',
          type: 'graph',
          legendHoverLink: true,
          hoverAnimation: true,
          focusNodeAdjacency: true,
          layout: 'force',
          circular: {
            rotateLabel: true
          },
          data: [{
              'category': '员工',
              'name': 1149,
              'symbolSize': 10,
              'id': 0,
              'position': '人力资源'
            },
            {
              'category': '员工',
              'name': 1261,
              'symbolSize': 10,
              'id': 1,
              'position': '研发2-2'
            },
            {
              'category': '员工',
              'name': 1313,
              'symbolSize': 10,
              'id': 2,
              'position': '研发2-6'
            },
            {
              'category': '员工',
              'name': 1330,
              'symbolSize': 10,
              'id': 3,
              'position': '研发3-6'
            },
            {
              'category': '员工',
              'name': 1352,
              'symbolSize': 10,
              'id': 4,
              'position': '研发2-6'
            },
            {
              'category': '员工',
              'name': 1376,
              'symbolSize': 10,
              'id': 5,
              'position': '研发2-4'
            },
            {
              'category': '员工',
              'name': 1383,
              'symbolSize': 10,
              'id': 6,
              'position': '研发2-2'
            },
            {
              'category': '员工',
              'name': 1389,
              'symbolSize': 10,
              'id': 7,
              'position': '研发2-9'
            },
            {
              'category': '员工',
              'name': 1487,
              'symbolSize': 10,
              'id': 8,
              'position': '研发2-11'
            },

            {
              'category': '活动',
              'name': "2日打球",
              'symbolSize': 20,
              'id': 9,
              'position': ''
            },
            {
              'category': '活动',
              'name': "9日打球",
              'symbolSize': 20,
              'id': 10,
              'position': ''
            },
            {
              'category': '活动',
              'name': "16日打球",
              'symbolSize': 20,
              'id': 11,
              'position': ''
            },
            {
              'category': '活动',
              'name': "23日打球",
              'symbolSize': 20,
              'id': 12,
              'position': ''
            },
            {
              'category': '活动',
              'name': "30日打球",
              'symbolSize': 20,
              'id': 13,
              'position': ''
            },

            {
              'category': '员工',
              'name': 1339,
              'symbolSize': 10,
              'id': 14,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1356,
              'symbolSize': 10,
              'id': 15,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1189,
              'symbolSize': 10,
              'id': 16,
              'position': ''
            },

            {
              'category': '员工',
              'name': 1165,
              'symbolSize': 10,
              'id': 17,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1268,
              'symbolSize': 10,
              'id': 18,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1348,
              'symbolSize': 10,
              'id': 19,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1359,
              'symbolSize': 10,
              'id': 20,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1371,
              'symbolSize': 10,
              'id': 21,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1411,
              'symbolSize': 10,
              'id': 22,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1471,
              'symbolSize': 10,
              'id': 23,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1473,
              'symbolSize': 10,
              'id': 24,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1474,
              'symbolSize': 10,
              'id': 25,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1475,
              'symbolSize': 10,
              'id': 26,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1139,
              'symbolSize': 10,
              'id': 27,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1169,
              'symbolSize': 10,
              'id': 28,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1265,
              'symbolSize': 10,
              'id': 29,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1314,
              'symbolSize': 10,
              'id': 30,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1333,
              'symbolSize': 10,
              'id': 31,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1338,
              'symbolSize': 10,
              'id': 32,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1424,
              'symbolSize': 10,
              'id': 33,
              'position': ''
            },
            {
              'category': '员工',
              'name': 1489,
              'symbolSize': 10,
              'id': 34,
              'position': ''
            }
          ],
          links: [{
              'id': 0,
              'target': 9,
              'source': 0,
              'value': 1
            },
            {
              'id': 1,
              'target': 9,
              'source': 1,
              'value': 1
            },
            {
              'id': 2,
              'target': 9,
              'source': 2,
              'value': 1
            },
            {
              'id': 3,
              'target': 9,
              'source': 3,
              'value': 1
            },
            {
              'id': 4,
              'target': 9,
              'source': 4,
              'value': 1
            },
            {
              'id': 5,
              'target': 9,
              'source': 5,
              'value': 1
            },
            {
              'id': 6,
              'target': 9,
              'source': 6,
              'value': 1
            },
            {
              'id': 7,
              'target': 9,
              'source': 7,
              'value': 1
            },
            {
              'id': 8,
              'target': 9,
              'source': 8,
              'value': 1
            },
            {
              'id': 9,
              'target': 9,
              'source': 9,
              'value': 1
            },

            {
              'id': 10,
              'target': 10,
              'source': 0,
              'value': 1
            },
            {
              'id': 11,
              'target': 10,
              'source': 1,
              'value': 1
            },
            {
              'id': 12,
              'target': 10,
              'source': 2,
              'value': 1
            },
            {
              'id': 13,
              'target': 10,
              'source': 3,
              'value': 1
            },
            {
              'id': 14,
              'target': 10,
              'source': 4,
              'value': 1
            },
            {
              'id': 15,
              'target': 10,
              'source': 5,
              'value': 1
            },
            {
              'id': 16,
              'target': 10,
              'source': 6,
              'value': 1
            },
            {
              'id': 17,
              'target': 10,
              'source': 7,
              'value': 1
            },
            {
              'id': 18,
              'target': 10,
              'source': 8,
              'value': 1
            },
            {
              'id': 19,
              'target': 10,
              'source': 9,
              'value': 1
            },

            {
              'id': 20,
              'target': 11,
              'source': 0,
              'value': 1
            },
            {
              'id': 21,
              'target': 11,
              'source': 1,
              'value': 1
            },
            {
              'id': 22,
              'target': 11,
              'source': 2,
              'value': 1
            },
            {
              'id': 23,
              'target': 11,
              'source': 3,
              'value': 1
            },
            {
              'id': 24,
              'target': 11,
              'source': 4,
              'value': 1
            },
            {
              'id': 25,
              'target': 11,
              'source': 5,
              'value': 1
            },
            {
              'id': 26,
              'target': 11,
              'source': 6,
              'value': 1
            },
            {
              'id': 27,
              'target': 11,
              'source': 7,
              'value': 1
            },
            {
              'id': 28,
              'target': 11,
              'source': 8,
              'value': 1
            },
            {
              'id': 29,
              'target': 11,
              'source': 9,
              'value': 1
            },
            {
              'id': 30,
              'target': 9,
              'source': 14,
              'value': 1
            },
            {
              'id': 31,
              'target': 11,
              'source': 14,
              'value': 1
            },
            {
              'id': 32,
              'target': 9,
              'source': 15,
              'value': 1
            },
            {
              'id': 33,
              'target': 11,
              'source': 15,
              'value': 1
            },
            {
              'id': 34,
              'target': 9,
              'source': 16,
              'value': 1
            },
            {
              'id': 35,
              'target': 12,
              'source': 16,
              'value': 1
            },


            {
              'id': 36,
              'target': 12,
              'source': 17,
              'value': 1
            },
            {
              'id': 37,
              'target': 12,
              'source': 18,
              'value': 1
            },
            {
              'id': 38,
              'target': 12,
              'source': 19,
              'value': 1
            },
            {
              'id': 39,
              'target': 12,
              'source': 20,
              'value': 1
            },

            {
              'id': 40,
              'target': 12,
              'source': 21,
              'value': 1
            },
            {
              'id': 41,
              'target': 12,
              'source': 22,
              'value': 1
            },
            {
              'id': 42,
              'target': 12,
              'source': 23,
              'value': 1
            },
            {
              'id': 43,
              'target': 12,
              'source': 24,
              'value': 1
            },
            {
              'id': 44,
              'target': 12,
              'source': 25,
              'value': 1
            },
            {
              'id': 45,
              'target': 12,
              'source': 26,
              'value': 1
            },


            {
              'id': 46,
              'target': 13,
              'source': 27,
              'value': 1
            },
            {
              'id': 47,
              'target': 13,
              'source': 28,
              'value': 1
            },
            {
              'id': 48,
              'target': 13,
              'source': 29,
              'value': 1
            },
            {
              'id': 49,
              'target': 13,
              'source': 30,
              'value': 1
            },
            {
              'id': 50,
              'target': 13,
              'source': 31,
              'value': 1
            },
            {
              'id': 51,
              'target': 13,
              'source': 32,
              'value': 1
            },
            {
              'id': 52,
              'target': 13,
              'source': 33,
              'value': 1
            },
            {
              'id': 53,
              'target': 13,
              'source': 34,
              'value': 1
            }
          ],
          categories: [{
              'name': '员工'
            },
            {
              'name': '活动'
            }
          ],
          roam: true,
          label: {
            normal: {
              show: true,
              position: 'right',
              formatter: '{b}',
              fontSize: 10,
            }
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [4, 6],

          lineStyle: {
            normal: {
              color: 'source',
              curveness: 0
            }
          },
          draggable: true,
          force: {
            repulsion: 150,
            gravity: 0.2,
            edgeLength: [100, 100]
          },
          emphasis: {
            lineStyle: {
              width: 4
            }
          }
        }]
      }


    }
  },
  mounted: function() {
    this.playball = echarts.init(document.getElementById('playball'), 'halloween')
    this.playball.setOption(this.depOption)

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.playball {
    border: #ccc 1px solid;
    // margin-right: 10px;
}
</style>
