<template>
<div class="department">
      <div id="chartColumn" style="width:100%; height:500px;"></div>
</div>
</template>

<script>
import echarts from 'echarts'

require('echarts/theme/halloween')

export default {
  name: 'Department',
  data() {
    return {
      chartColumn:"",
      depOption: {
        title: {
        text: '部门结构图',
        // subtext: '299位员工，三大部门',
        x: 'left',
        padding:[10,10]
        },
        tooltip: {
          trigger: 'item',
          formatter: function(x){
            return x.data.name+" : "+x.data.value+" 人</br>人数占比："+(parseInt(x.data.value)/2.99).toFixed(2)+"%";
          }
        },
        series: {
          type: 'sunburst',
          // highlightPolicy: 'ancestor',
          data: [
            {
             name: 'HighTech',
             value: 299,
             itemStyle:{
                 color:"#8c6ac4"
             },
             children:[{
                 name: '研发',
                 value: 256,
                 itemStyle:{
                     color:"#ff4b33"
                 },
                 children: [{
                     name: '研发1 (9组)',
                     value: 88,
                     itemStyle: {
                       color: "#ff7866",
                     },
                     children: [{
                       name: '小组1-1',
                       value: 7,
                     }, {
                       name: '小组1-2',
                       value: 6,
                     }, {
                       name: '小组1-3',
                       value: 14,
                     }, {
                       name: '小组1-4',
                       value: 4,
                     }, {
                       name: '小组1-5',
                       value: 13,
                     }, {
                       name: '小组1-6',
                       value: 8,
                     }, {
                       name: '小组1-7',
                       value: 6,
                     }, {
                       name: '小组1-8',
                       value: 19,
                     }, {
                       name: '小组1-9',
                       value: 10,
                     }]
                   },

                   {
                     name: '研发2 (11组)',
                     value: 106,
                     itemStyle: {
                       color: "#ff7866",
                     },
                     children: [{
                         name: '小组2-1',
                         value: 7,
                       }, {
                         name: '小组2-2',
                         value: 12,
                       }, {
                         name: '小组2-3',
                         value: 5,
                       }, {
                         name: '小组2-4',
                         value: 11,
                       }, {
                         name: '小组2-5',
                         value: 6,
                       }, {
                         name: '小组2-6',
                         value: 11,
                       }, {
                         name: '小组2-7',
                         value: 11,
                       }, {
                         name: '小组2-8',
                         value: 12,
                       }, {
                         name: '小组2-9',
                         value: 12,
                       }, {
                         name: '小组2-10',
                         value: 9,
                       },
                       {
                         name: '小组2-11',
                         value: 9,
                       }
                     ]
                   },

                   {
                     name: '研发3  (7组)',
                     value: 62,
                     itemStyle: {
                       color: "#ff7866",
                     },
                     children: [{
                       name: '小组3-1',
                       value: 10,
                     }, {
                       name: '小组3-2',
                       value: 6,
                     }, {
                       name: '小组3-3',
                       value: 16,
                     }, {
                       name: '小组3-4',
                       value: 5,
                     }, {
                       name: '小组3-5',
                       value: 8,
                     }, {
                       name: '小组3-6',
                       value: 8,
                     }, {
                       name: '小组3-7',
                       value: 8,
                     }]
                   }
                 ]
               }, {
                 name: '人力资源',
                 value: 18,
                 itemStyle: {
                   color: "#ffee51",
                 }
               }, {
                 name: '财务',
                 value: 24,
                 itemStyle:{
                     color:"#ffaf51"
                 },
               }]
           },

        ],
          radius: [0, '90%'],
          label: {
            rotate: 0
          },
          levels: [{},  {
            itemStyle: {
              color: "#ffee51",
            }
          }, {
            itemStyle: {
              color: "#ffaf51",
            }
          }, {
            itemStyle: {
              color: "#ff715e",
            }
          }, {
            itemStyle: {
              color: "#ff1e00",
            },
            label: {
              rotate: 'radial'
            }
          },]
        },

      },


    }
  },
  mounted: function() {
    this.chartColumn = echarts.init(document.getElementById('chartColumn'), 'halloween')
    this.chartColumn.setOption(this.depOption)

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.department {
    border:#ccc 1px solid;
    // margin-right: 10px;
}
</style>
