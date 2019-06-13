<template>
<div class="table-container">
  <el-row style="margin: 10px 0;">
    <el-alert
          title="抱歉，后台服务器已关闭，无法查询员工个人信息！"
          type="warning"
          center
          show-icon>
    </el-alert>
  </el-row>
  <el-row>
    <el-col :span="6" style="height:400px;border: #ccc 1px solid;">
      <div id="input">
        <input v-model="id" placeholder="请输入员工编号">
        <button v-on:click="fetchData(id)">搜索一下</button>
      </div>
      <div id="card">
        <p>员工编号：<span>{{id}}</span></p>
        <p>所处部门：<span>{{data.department.department}}</span></p>
        <p>职位：<span>{{data.department.position}}</span></p>
        <p>工位IP：<span>{{data.ip}}</span></p>
      </div>

    </el-col>
    <el-col :span="6" style="padding-right:10px;">
      <div id="chartWord" class="chartBox" style="height:400px;"></div>
    </el-col>
    <el-col :span="6" style="padding-right:10px;">
      <div id="emailWord" class="chartBox" style="height:400px;"></div>
    </el-col>
    <el-col :span="6" style="padding-right:10px;">
      <div id="emailRecWord" class="chartBox" style="height:400px;"></div>
    </el-col>
  </el-row>

  <el-row style="margin-top:10px;">

    <el-col :span="8" style="">
      <div id="checkTime" class="chartBox" style="height:500px;margin-left:0px;"></div>
    </el-col>
    <el-col :span="6" style="padding-right:10px;">
      <div id="webPie" class="chartBox" style="height:500px;"></div>
    </el-col>
    <el-col :span="10" style="padding-right:10px;">
      <div id="loginParallel" class="chartBox" style="height:500px;"></div>
    </el-col>
  </el-row>
  <el-row style="margin-top:10px;">
    <el-col :span="24">
      <div id="upDownFlow" class="chartBox" style="height:500px;margin-left:0px;"></div>
    </el-col>
  </el-row>
  <el-row style="margin-top:10px;">
    <el-col :span="24">
      <div id="protoFlow" class="chartBox" style="height:500px;margin-left:0px;"></div>
    </el-col>
  </el-row>

</div>
</template>

<script>
import request from '@/utils/request'
import echarts from 'echarts'

require('echarts-wordcloud')

require('echarts/theme/halloween')

export default {
  name: 'personal',
  data() {
    return {
      chartWord: "",
      emailWord: "",
      emailRecWord: "",
      loginParallel: "",
      webPie: '',
      checkTime: "",
      id: "",
      data: {
        ip: "",
        department: {
          department: "",
          position: ""
        }
      }

    }
  },
  created() {},
  methods: {
    fetchData(params) {;
      if (params > 1000 && params < 1600) {
        var url = "/" + params;
        request({
          url: url,
          method: 'get'
        }).then(response => {
          console.log(response);
          if (response.data.ip == null) {
            this.$message.error('查无此人');
            this.data = {
              ip: "",
              department: {
                department: "",
                position: ""
              }
            };
          } else {
            this.data = response.data;
            this.domainWord(this.data.domain);
            this.EmailWord(this.data.email_subject);
            this.WebPie(this.data.tag_count);
            this.CheckTime(this.data.check_day_time);
            this.EmailRecWord(this.data.receive_email_subject);
            this.NetworkFlow();
            this.LoginParallel();
          }

        }).catch( error => {
          this.$message.error('抱歉，服务器已经关闭！');
        })
      } else {
        this.$message.error('请输入正确的id');
      }

    },
    domainWord(params) {
      var option = {
        title: {
          text: "访问域名词云图",
          padding: [10, 10]
        },
        tooltip: {},
        series: [{
          type: 'wordCloud',
          gridSize: 20,
          sizeRange: [12, 50],
          rotationRange: [0, 0],
          shape: 'circle',
          textStyle: {
            normal: {
              color: function() {
                var color = [
                  "#ff715e",
                  "#ffaf51",
                  "#ffee51",
                  "#8c6ac4",
                  "#715c87",
                  "#e098c7",
                  "#8fd3e8"
                ];
                var x = Math.round(Math.random() * 5);
                return color[x];
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: params
        }]
      };

      this.chartWord = echarts.init(document.getElementById('chartWord'), 'halloween')
      this.chartWord.setOption(option)
    },

    EmailWord(params) {
      var option = {
        title: {
          text: "邮件发送主题词云图",
          padding: [10, 10]
        },
        tooltip: {},
        series: [{
          type: 'wordCloud',
          gridSize: 20,
          sizeRange: [12, 50],
          rotationRange: [0, 0],
          shape: 'circle',
          textStyle: {
            normal: {
              color: function() {
                var color = [
                  "#ff715e",
                  "#ffaf51",
                  "#ffee51",
                  "#8c6ac4",
                  "#715c87",
                  "#e098c7",
                  "#8fd3e8"
                ];
                var x = Math.round(Math.random() * 5);
                return color[x];
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: params
        }]
      };

      this.emailWord = echarts.init(document.getElementById('emailWord'), 'halloween')
      this.emailWord.setOption(option)
    },



    EmailRecWord(params) {
      var option = {
        title: {
          text: "邮件接收主题词云图",
          padding: [10, 10]
        },
        tooltip: {},
        series: [{
          type: 'wordCloud',
          gridSize: 20,
          sizeRange: [12, 36],
          rotationRange: [0, 0],
          shape: 'circle',
          textStyle: {
            normal: {
              color: function() {
                var color = [
                  "#ff715e",
                  "#ffaf51",
                  "#ffee51",
                  "#8c6ac4",
                  "#715c87"
                ];
                var x = Math.round(Math.random() * 5);
                return color[x];
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: params
        }]
      };

      this.emaiReclWord = echarts.init(document.getElementById('emailRecWord'), 'halloween')
      this.emaiReclWord.setOption(option)
    },


    WebPie(params) {
      var option = {
        title: {
          text: '访问域名类别占比',
          x: 'left',
          padding: [10, 10]
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        calculable: true,
        series: [{
          name: '面积模式',
          type: 'pie',
          radius: [20, 160],
          roseType: 'area',
          data: params
        }]
      };

      this.webPie = echarts.init(document.getElementById('webPie'), 'halloween')
      this.webPie.setOption(option)
    },


    CheckTime(params) {

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
              formatter: function(x) {

                if (x.data.name == "工作") {
                  return "工作时间： " + item[2] + "-" + item[3];
                } else {
                  return x.data.name + "时间: " + x.data.value;
                }

              }

            },
            label: {
              normal: {
                formatter: '{c}',
                position: 'inside'
              }
            },
            radius: pieRadius,
            data: [{
                name: '工作',
                value: item[1]
              },
              {
                name: '生活',
                value: 24 - item[1]
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


      var scatterData = params;
      var thisTitle=this.id+"打卡上班时长日历图";

      var option = {
        title: {
          text: thisTitle,
          padding: [10, 10]
        },
        tooltip: {},
        legend: {
          data: ['工作', '生活'],
          top: 10,
          right:10
        },
        calendar: {
          // top: 'middle',
          left: 'center',
          bottom:20,
          top:70,
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
            margin: 20,
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



      this.checkTime = echarts.init(document.getElementById('checkTime'), 'halloween')

      this.checkTime.setOption(option)

      if (!app.inNode) {
        var pieInitialized;
        setTimeout(drawPie(this.checkTime), 10);
      }



    },


    LoginParallel() {
      var url = "/login/" + this.id;
      request({
        url: url,
        method: 'get'
      }).then(response => {
        var option = {
          title: {
            text: "登录服务器平行坐标图",
            padding: [10, 10]
          },

          tooltip: {
            trigger: 'item'
          },
          visualMap: {
            type: 'piecewise',
            categories: response.data.parallels[1],
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
          parallel:{
            bottom:20,
            left:20,
            top:70,
          },

          parallelAxis: [{
              dim: 0,
              name: 'sip',
              type: 'category',
              data: response.data.parallels[0]
            },
            {
              dim: 1,
              name: 'user',
              type: 'category',
              data: response.data.parallels[1]
            },
            {
              dim: 2,
              name: 'date'
            },
            {
              dim: 3,
              name: 'time',
              type: 'category',
              data: response.data.parallels[3]
            },
            {
              dim: 4,
              name: 'dip',
              type: 'category',
              data: response.data.parallels[4]
            },
            {
              dim: 5,
              name: 'state',
              type: 'category',
              data: response.data.parallels[5]
            }
          ],
          series: {
            type: 'parallel',
            smooth: 0.3,

            lineStyle: {
              width: 1
            },
            data: response.data.data

          }
        };

        this.loginParallel = echarts.init(document.getElementById('loginParallel'), 'halloween')
        this.loginParallel.setOption(option)
      })
    },

    NetworkFlow() {

      var url = "/tcplog/" + this.id;
      request({
        url: url,
        method: 'get'
      }).then(response => {
        // console.log(response);

        var option = {
          tooltip: {
            trigger: 'axis'
          },

          title: {
            text: '上传下载流量图',
            padding: [10, 10]
          },
          legend: {
            data: ['upload', 'download'],
            right: 50,
            top: 10
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          dataZoom: [{
            startValue: '2017-11-01'
          }, {
            type: 'inside'
          }],
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: response.data.xAxis
          },
          yAxis: {
            type: 'value',
            max: 'dataMax'
          },
          series: [{
              name: 'upload',
              type: 'line',
              data: response.data.upAxis
            },
            {
              name: 'download',
              type: 'line',
              data: response.data.downAxis
            }
          ]
        };
        var option2 = {
          tooltip: {
            trigger: 'axis'
          },
          title: {
            text: '按协议划分流量图',
            padding: [10, 10]
          },
          legend: {
            data: response.data.legend,
            right: 50,
            top: 10
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },

          dataZoom: [{
            startValue: '2017-11-01'
          }, {
            type: 'inside'
          }],
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: response.data.xAxis
          },
          yAxis: {
            type: 'value',
            max: 'dataMax'
          },
          series: response.data.protocols
        };

        this.protoFlow = echarts.init(document.getElementById('protoFlow'), 'halloween')
        this.protoFlow.setOption(option2)

        this.upDownFlow = echarts.init(document.getElementById('upDownFlow'), 'halloween')
        this.upDownFlow.setOption(option)
      })
    },
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.table {
    &-container {
        margin: 10px 10px 10px -20px;
        height: auto;

    }
    &-text {
        font-size: 30px;
        line-height: 46px;
    }
}
#input {
    margin: 20px 40px;
    input {
        width: 70%;
        height: 40px;
        background-color: transparent;
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 2px #ff715e solid;
        color: #ffaf51;
        outline: none;
        display: float;
    }
    button {
        display: float;
        width: 25%;
        height: 40px;
        border: none;
        background-color: #ff715e;
        color: #ffffff;
        font-weight: 500;
        outline: none;
    }
    button:hover {
        background-color: #ffaf51;
    }
    button:focus {
        background-color: #ff816e;
    }
}

#card {
    margin: 40px;
    font-size: 1.2em;
    font-weight: 500;
    color: #ffaf51;
    span {
        color: #ff816e;
    }
}

.chartBox {
    width: 100%;
    border: #ccc 1px solid;
    margin: 0 10px;
}
</style>
