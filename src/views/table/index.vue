<template>
<div class="table-container">
  <el-row>
    <el-col :span="6" style="height:400px;border: #ccc 1px solid;">
      <div id="input">
        <!-- <el-input placeholder="请输入内容" v-model="id" class="input-with-select">
            <el-button type="warning" slot="append" icon="el-icon-search" ></el-button>
          </el-input> -->
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
    <el-col :span="6">
      <div id="chartWord" class="chartBox" style="height:400px;"></div>
    </el-col>
  </el-row>

</div>
</template>

<script>

import request from '@/utils/request'
import echarts from 'echarts'
require('echarts/theme/westeros')
require('echarts/theme/walden')
require('echarts/theme/halloween')

export default {
  data() {
    return {
      chartWord:"",
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
    fetchData(params) {
      console.log(params);
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
          }

        })
      } else {
        this.$message.error('请输入正确的id');
      }

    },



    domainWord(params) {
      var option = {
        title: {
          text: "访问域名词云图",
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
                  "#715c87"
                ];
                var x = Math.round(Math.random() * 6);
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
    }
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
