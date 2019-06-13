<template>
<div class="departmentcloudword">
  <el-row style="margin-top:10px;">
    <el-col :span="8" style="padding-right:10px;margin-left:-10px;">
      <div id="emailSum" class="chartBox" style="height:500px;"></div>
    </el-col>
    <el-col :span="8" style="padding-right:10px;">
      <div id="positiontWord" class="chartBox" style="height:500px;"></div>
    </el-col>
    <el-col :span="8" style="padding-right:10px;">
      <div id="positiontWord2" class="chartBox" style="height:500px;"></div>
    </el-col>
  </el-row>
</div>
</template>

<script>
import echarts from 'echarts'

require('echarts/theme/halloween')
require('echarts-wordcloud')

export default {
  name: 'departmentcloudword',
  data() {
    return {
      emailSum: "",
      positiontWord: "",
      EmailOption: {
        title: {
          text: '工作汇报结构图',
          // subtext: '邮件主题为总结、工作汇报、周报、月报等',
          x: 'left',
          padding: [10, 10]
        },


        legend: [{
          // selectedMode: 'single',
          data: ["总经理", "部长", "组长", "普通员工"],
          right: 10,
          top: 10
        }],
        tooltip: {
          formatter: function(x) {
            // console.log(x);

            if (x.data.source != undefined) {
              return "邮件往来:" + x.data.value;
            } else {

              return "工号:" + x.data.name + "</br> 部门: " + x.data.position + "</br> 职位: " + x.data.category;
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
          // layout:'circular',
          circular: {
            rotateLabel: true
          },
          data: [{
            'category': '部长',
            'name': 1007,
            'symbolSize': 30,
            'id': 0,
            'position': '研发1'
          }, {
            'category': '部长',
            'name': 1013,
            'symbolSize': 30,
            'id': 1,
            'position': '人力资源'
          }, {
            'category': '部长',
            'name': 1041,
            'symbolSize': 30,
            'id': 2,
            'position': '财务'
          }, {
            'category': '组长',
            'name': 1057,
            'symbolSize': 20,
            'id': 3,
            'position': '研发小组2-1'
          }, {
            'category': '组长',
            'name': 1058,
            'symbolSize': 20,
            'id': 4,
            'position': '研发小组2-2'
          }, {
            'category': '部长',
            'name': 1059,
            'symbolSize': 30,
            'id': 5,
            'position': '研发2'
          }, {
            'category': '组长',
            'name': 1060,
            'symbolSize': 20,
            'id': 6,
            'position': '研发小组3-1'
          }, {
            'category': '总经理',
            'name': 1067,
            'symbolSize': 40,
            'id': 7,
            'position': '管理'
          }, {
            'category': '部长',
            'name': 1068,
            'symbolSize': 30,
            'id': 8,
            'position': '研发3'
          }, {
            'category': '组长',
            'name': 1079,
            'symbolSize': 20,
            'id': 9,
            'position': '研发小组2-3'
          }, {
            'category': '组长',
            'name': 1080,
            'symbolSize': 20,
            'id': 10,
            'position': '研发小组2-4'
          }, {
            'category': '组长',
            'name': 1087,
            'symbolSize': 20,
            'id': 11,
            'position': '研发小组1-1'
          }, {
            'category': '组长',
            'name': 1092,
            'symbolSize': 20,
            'id': 12,
            'position': '研发小组1-2'
          }, {
            'category': '组长',
            'name': 1096,
            'symbolSize': 20,
            'id': 13,
            'position': '研发小组2-5'
          }, {
            'category': '组长',
            'name': 1098,
            'symbolSize': 20,
            'id': 14,
            'position': '研发小组3-2'
          }, {
            'category': '组长',
            'name': 1100,
            'symbolSize': 20,
            'id': 15,
            'position': '研发小组3-3'
          }, {
            'category': '组长',
            'name': 1101,
            'symbolSize': 20,
            'id': 16,
            'position': '研发小组2-6'
          }, {
            'category': '普通员工',
            'name': 1102,
            'symbolSize': 10,
            'id': 17,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1103,
            'symbolSize': 10,
            'id': 18,
            'position': '研发小组3-6'
          }, {
            'category': '普通员工',
            'name': 1104,
            'symbolSize': 10,
            'id': 19,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1106,
            'symbolSize': 10,
            'id': 20,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1108,
            'symbolSize': 10,
            'id': 21,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1110,
            'symbolSize': 10,
            'id': 22,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1112,
            'symbolSize': 10,
            'id': 23,
            'position': '研发小组1-2'
          }, {
            'category': '普通员工',
            'name': 1113,
            'symbolSize': 10,
            'id': 24,
            'position': '研发小组1-4'
          }, {
            'category': '组长',
            'name': 1115,
            'symbolSize': 20,
            'id': 25,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1118,
            'symbolSize': 10,
            'id': 26,
            'position': '人力资源'
          }, {
            'category': '组长',
            'name': 1119,
            'symbolSize': 20,
            'id': 27,
            'position': '研发小组2-7'
          }, {
            'category': '普通员工',
            'name': 1124,
            'symbolSize': 10,
            'id': 28,
            'position': '财务'
          }, {
            'category': '组长',
            'name': 1125,
            'symbolSize': 20,
            'id': 29,
            'position': '研发小组1-4'
          }, {
            'category': '普通员工',
            'name': 1126,
            'symbolSize': 10,
            'id': 30,
            'position': '研发小组3-7'
          }, {
            'category': '普通员工',
            'name': 1127,
            'symbolSize': 10,
            'id': 31,
            'position': '研发小组3-2'
          }, {
            'category': '普通员工',
            'name': 1129,
            'symbolSize': 10,
            'id': 32,
            'position': '研发小组1-9'
          }, {
            'category': '普通员工',
            'name': 1130,
            'symbolSize': 10,
            'id': 33,
            'position': '研发小组2-2'
          }, {
            'category': '普通员工',
            'name': 1132,
            'symbolSize': 10,
            'id': 34,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1134,
            'symbolSize': 10,
            'id': 35,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1135,
            'symbolSize': 10,
            'id': 36,
            'position': '研发小组2-7'
          }, {
            'category': '普通员工',
            'name': 1137,
            'symbolSize': 10,
            'id': 37,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1139,
            'symbolSize': 10,
            'id': 38,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1140,
            'symbolSize': 10,
            'id': 39,
            'position': '研发小组1-6'
          }, {
            'category': '普通员工',
            'name': 1141,
            'symbolSize': 10,
            'id': 40,
            'position': '研发小组1-1'
          }, {
            'category': '普通员工',
            'name': 1142,
            'symbolSize': 10,
            'id': 41,
            'position': '研发小组2-1'
          }, {
            'category': '组长',
            'name': 1143,
            'symbolSize': 20,
            'id': 42,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1145,
            'symbolSize': 10,
            'id': 43,
            'position': '研发小组3-1'
          }, {
            'category': '普通员工',
            'name': 1147,
            'symbolSize': 10,
            'id': 44,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1148,
            'symbolSize': 10,
            'id': 45,
            'position': '研发小组2-7'
          }, {
            'category': '普通员工',
            'name': 1149,
            'symbolSize': 10,
            'id': 46,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1150,
            'symbolSize': 10,
            'id': 47,
            'position': '研发小组2-1'
          }, {
            'category': '普通员工',
            'name': 1151,
            'symbolSize': 10,
            'id': 48,
            'position': '研发小组1-1'
          }, {
            'category': '普通员工',
            'name': 1152,
            'symbolSize': 10,
            'id': 49,
            'position': '研发小组3-4'
          }, {
            'category': '普通员工',
            'name': 1153,
            'symbolSize': 10,
            'id': 50,
            'position': '研发小组3-7'
          }, {
            'category': '组长',
            'name': 1154,
            'symbolSize': 20,
            'id': 51,
            'position': '研发小组3-4'
          }, {
            'category': '组长',
            'name': 1155,
            'symbolSize': 20,
            'id': 52,
            'position': '研发小组2-9'
          }, {
            'category': '普通员工',
            'name': 1156,
            'symbolSize': 10,
            'id': 53,
            'position': '研发小组3-5'
          }, {
            'category': '普通员工',
            'name': 1159,
            'symbolSize': 10,
            'id': 54,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1163,
            'symbolSize': 10,
            'id': 55,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1164,
            'symbolSize': 10,
            'id': 56,
            'position': '研发小组2-10'
          }, {
            'category': '普通员工',
            'name': 1165,
            'symbolSize': 10,
            'id': 57,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1167,
            'symbolSize': 10,
            'id': 58,
            'position': '研发小组1-9'
          }, {
            'category': '普通员工',
            'name': 1169,
            'symbolSize': 10,
            'id': 59,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1170,
            'symbolSize': 10,
            'id': 60,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1171,
            'symbolSize': 10,
            'id': 61,
            'position': '研发小组2-2'
          }, {
            'category': '组长',
            'name': 1172,
            'symbolSize': 20,
            'id': 62,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1173,
            'symbolSize': 10,
            'id': 63,
            'position': '研发小组2-1'
          }, {
            'category': '普通员工',
            'name': 1174,
            'symbolSize': 10,
            'id': 64,
            'position': '研发小组2-11'
          }, {
            'category': '普通员工',
            'name': 1175,
            'symbolSize': 10,
            'id': 65,
            'position': '研发小组2-6'
          }, {
            'category': '普通员工',
            'name': 1176,
            'symbolSize': 10,
            'id': 66,
            'position': '研发小组3-4'
          }, {
            'category': '普通员工',
            'name': 1177,
            'symbolSize': 10,
            'id': 67,
            'position': '研发小组2-11'
          }, {
            'category': '普通员工',
            'name': 1178,
            'symbolSize': 10,
            'id': 68,
            'position': '研发小组2-11'
          }, {
            'category': '普通员工',
            'name': 1179,
            'symbolSize': 10,
            'id': 69,
            'position': '研发小组2-6'
          }, {
            'category': '普通员工',
            'name': 1180,
            'symbolSize': 10,
            'id': 70,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1181,
            'symbolSize': 10,
            'id': 71,
            'position': '研发小组2-4'
          }, {
            'category': '普通员工',
            'name': 1182,
            'symbolSize': 10,
            'id': 72,
            'position': '研发小组1-9'
          }, {
            'category': '普通员工',
            'name': 1183,
            'symbolSize': 10,
            'id': 73,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1184,
            'symbolSize': 10,
            'id': 74,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1186,
            'symbolSize': 10,
            'id': 75,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1189,
            'symbolSize': 10,
            'id': 76,
            'position': '研发小组3-6'
          }, {
            'category': '组长',
            'name': 1191,
            'symbolSize': 20,
            'id': 77,
            'position': '研发小组3-5'
          }, {
            'category': '组长',
            'name': 1192,
            'symbolSize': 20,
            'id': 78,
            'position': '研发小组1-6'
          }, {
            'category': '普通员工',
            'name': 1193,
            'symbolSize': 10,
            'id': 79,
            'position': '研发小组2-4'
          }, {
            'category': '普通员工',
            'name': 1194,
            'symbolSize': 10,
            'id': 80,
            'position': '研发小组2-4'
          }, {
            'category': '普通员工',
            'name': 1195,
            'symbolSize': 10,
            'id': 81,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1197,
            'symbolSize': 10,
            'id': 82,
            'position': '研发小组1-7'
          }, {
            'category': '组长',
            'name': 1199,
            'symbolSize': 20,
            'id': 83,
            'position': '研发小组1-7'
          }, {
            'category': '普通员工',
            'name': 1200,
            'symbolSize': 10,
            'id': 84,
            'position': '研发小组1-9'
          }, {
            'category': '普通员工',
            'name': 1202,
            'symbolSize': 10,
            'id': 85,
            'position': '研发小组2-2'
          }, {
            'category': '普通员工',
            'name': 1204,
            'symbolSize': 10,
            'id': 86,
            'position': '研发小组3-5'
          }, {
            'category': '普通员工',
            'name': 1205,
            'symbolSize': 10,
            'id': 87,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1206,
            'symbolSize': 10,
            'id': 88,
            'position': '研发小组2-9'
          }, {
            'category': '组长',
            'name': 1207,
            'symbolSize': 20,
            'id': 89,
            'position': '研发小组3-6'
          }, {
            'category': '组长',
            'name': 1209,
            'symbolSize': 20,
            'id': 90,
            'position': '研发小组3-7'
          }, {
            'category': '普通员工',
            'name': 1210,
            'symbolSize': 10,
            'id': 91,
            'position': '研发小组1-6'
          }, {
            'category': '组长',
            'name': 1211,
            'symbolSize': 20,
            'id': 92,
            'position': '研发小组2-10'
          }, {
            'category': '普通员工',
            'name': 1213,
            'symbolSize': 10,
            'id': 93,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1216,
            'symbolSize': 10,
            'id': 94,
            'position': '研发小组2-9'
          }, {
            'category': '普通员工',
            'name': 1217,
            'symbolSize': 10,
            'id': 95,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1219,
            'symbolSize': 10,
            'id': 96,
            'position': '研发小组2-3'
          }, {
            'category': '普通员工',
            'name': 1220,
            'symbolSize': 10,
            'id': 97,
            'position': '研发小组1-1'
          }, {
            'category': '普通员工',
            'name': 1221,
            'symbolSize': 10,
            'id': 98,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1223,
            'symbolSize': 10,
            'id': 99,
            'position': '研发小组1-9'
          }, {
            'category': '组长',
            'name': 1224,
            'symbolSize': 20,
            'id': 100,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1226,
            'symbolSize': 10,
            'id': 101,
            'position': '财务'
          }, {
            'category': '组长',
            'name': 1228,
            'symbolSize': 20,
            'id': 102,
            'position': '研发小组2-11'
          }, {
            'category': '组长',
            'name': 1230,
            'symbolSize': 20,
            'id': 103,
            'position': '研发小组1-9'
          }, {
            'category': '普通员工',
            'name': 1231,
            'symbolSize': 10,
            'id': 104,
            'position': '研发小组2-10'
          }, {
            'category': '普通员工',
            'name': 1233,
            'symbolSize': 10,
            'id': 105,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1234,
            'symbolSize': 10,
            'id': 106,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1238,
            'symbolSize': 10,
            'id': 107,
            'position': '研发小组2-7'
          }, {
            'category': '普通员工',
            'name': 1239,
            'symbolSize': 10,
            'id': 108,
            'position': '研发小组2-5'
          }, {
            'category': '普通员工',
            'name': 1241,
            'symbolSize': 10,
            'id': 109,
            'position': '研发小组2-6'
          }, {
            'category': '普通员工',
            'name': 1243,
            'symbolSize': 10,
            'id': 110,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1244,
            'symbolSize': 10,
            'id': 111,
            'position': '研发小组2-7'
          }, {
            'category': '普通员工',
            'name': 1245,
            'symbolSize': 10,
            'id': 112,
            'position': '研发小组2-2'
          }, {
            'category': '普通员工',
            'name': 1246,
            'symbolSize': 10,
            'id': 113,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1248,
            'symbolSize': 10,
            'id': 114,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1249,
            'symbolSize': 10,
            'id': 115,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1251,
            'symbolSize': 10,
            'id': 116,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1252,
            'symbolSize': 10,
            'id': 117,
            'position': '研发小组1-9'
          }, {
            'category': '普通员工',
            'name': 1253,
            'symbolSize': 10,
            'id': 118,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1254,
            'symbolSize': 10,
            'id': 119,
            'position': '研发小组2-5'
          }, {
            'category': '普通员工',
            'name': 1255,
            'symbolSize': 10,
            'id': 120,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1257,
            'symbolSize': 10,
            'id': 121,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1261,
            'symbolSize': 10,
            'id': 122,
            'position': '研发小组2-2'
          }, {
            'category': '普通员工',
            'name': 1262,
            'symbolSize': 10,
            'id': 123,
            'position': '研发小组2-3'
          }, {
            'category': '普通员工',
            'name': 1263,
            'symbolSize': 10,
            'id': 124,
            'position': '研发小组3-6'
          }, {
            'category': '普通员工',
            'name': 1265,
            'symbolSize': 10,
            'id': 125,
            'position': '研发小组1-9'
          }, {
            'category': '普通员工',
            'name': 1267,
            'symbolSize': 10,
            'id': 126,
            'position': '研发小组2-9'
          }, {
            'category': '普通员工',
            'name': 1268,
            'symbolSize': 10,
            'id': 127,
            'position': '研发小组2-7'
          }, {
            'category': '普通员工',
            'name': 1270,
            'symbolSize': 10,
            'id': 128,
            'position': '研发小组1-2'
          }, {
            'category': '普通员工',
            'name': 1273,
            'symbolSize': 10,
            'id': 129,
            'position': '研发小组2-11'
          }, {
            'category': '普通员工',
            'name': 1274,
            'symbolSize': 10,
            'id': 130,
            'position': '研发小组2-7'
          }, {
            'category': '普通员工',
            'name': 1275,
            'symbolSize': 10,
            'id': 131,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1277,
            'symbolSize': 10,
            'id': 132,
            'position': '研发小组3-2'
          }, {
            'category': '普通员工',
            'name': 1278,
            'symbolSize': 10,
            'id': 133,
            'position': '研发小组1-7'
          }, {
            'category': '普通员工',
            'name': 1279,
            'symbolSize': 10,
            'id': 134,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1281,
            'symbolSize': 10,
            'id': 135,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1282,
            'symbolSize': 10,
            'id': 136,
            'position': '研发小组1-6'
          }, {
            'category': '普通员工',
            'name': 1283,
            'symbolSize': 10,
            'id': 137,
            'position': '研发小组2-9'
          }, {
            'category': '普通员工',
            'name': 1284,
            'symbolSize': 10,
            'id': 138,
            'position': '研发小组2-10'
          }, {
            'category': '普通员工',
            'name': 1286,
            'symbolSize': 10,
            'id': 139,
            'position': '研发小组1-1'
          }, {
            'category': '普通员工',
            'name': 1287,
            'symbolSize': 10,
            'id': 140,
            'position': '研发小组2-10'
          }, {
            'category': '普通员工',
            'name': 1290,
            'symbolSize': 10,
            'id': 141,
            'position': '研发小组2-11'
          }, {
            'category': '普通员工',
            'name': 1291,
            'symbolSize': 10,
            'id': 142,
            'position': '研发小组2-7'
          }, {
            'category': '普通员工',
            'name': 1293,
            'symbolSize': 10,
            'id': 143,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1295,
            'symbolSize': 10,
            'id': 144,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1296,
            'symbolSize': 10,
            'id': 145,
            'position': '研发小组3-6'
          }, {
            'category': '普通员工',
            'name': 1297,
            'symbolSize': 10,
            'id': 146,
            'position': '研发小组2-4'
          }, {
            'category': '普通员工',
            'name': 1299,
            'symbolSize': 10,
            'id': 147,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1300,
            'symbolSize': 10,
            'id': 148,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1301,
            'symbolSize': 10,
            'id': 149,
            'position': '研发小组1-2'
          }, {
            'category': '普通员工',
            'name': 1303,
            'symbolSize': 10,
            'id': 150,
            'position': '研发小组1-6'
          }, {
            'category': '普通员工',
            'name': 1304,
            'symbolSize': 10,
            'id': 151,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1305,
            'symbolSize': 10,
            'id': 152,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1306,
            'symbolSize': 10,
            'id': 153,
            'position': '研发小组3-1'
          }, {
            'category': '普通员工',
            'name': 1307,
            'symbolSize': 10,
            'id': 154,
            'position': '研发小组1-4'
          }, {
            'category': '普通员工',
            'name': 1308,
            'symbolSize': 10,
            'id': 155,
            'position': '研发小组1-2'
          }, {
            'category': '普通员工',
            'name': 1311,
            'symbolSize': 10,
            'id': 156,
            'position': '研发小组2-4'
          }, {
            'category': '普通员工',
            'name': 1312,
            'symbolSize': 10,
            'id': 157,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1313,
            'symbolSize': 10,
            'id': 158,
            'position': '研发小组2-6'
          }, {
            'category': '普通员工',
            'name': 1314,
            'symbolSize': 10,
            'id': 159,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1315,
            'symbolSize': 10,
            'id': 160,
            'position': '研发小组3-4'
          }, {
            'category': '普通员工',
            'name': 1319,
            'symbolSize': 10,
            'id': 161,
            'position': '研发小组3-6'
          }, {
            'category': '普通员工',
            'name': 1321,
            'symbolSize': 10,
            'id': 162,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1322,
            'symbolSize': 10,
            'id': 163,
            'position': '研发小组3-7'
          }, {
            'category': '普通员工',
            'name': 1323,
            'symbolSize': 10,
            'id': 164,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1324,
            'symbolSize': 10,
            'id': 165,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1325,
            'symbolSize': 10,
            'id': 166,
            'position': '研发小组2-6'
          }, {
            'category': '普通员工',
            'name': 1326,
            'symbolSize': 10,
            'id': 167,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1327,
            'symbolSize': 10,
            'id': 168,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1328,
            'symbolSize': 10,
            'id': 169,
            'position': '研发小组3-1'
          }, {
            'category': '普通员工',
            'name': 1330,
            'symbolSize': 10,
            'id': 170,
            'position': '研发小组3-6'
          }, {
            'category': '普通员工',
            'name': 1332,
            'symbolSize': 10,
            'id': 171,
            'position': '研发小组2-9'
          }, {
            'category': '普通员工',
            'name': 1333,
            'symbolSize': 10,
            'id': 172,
            'position': '研发小组2-2'
          }, {
            'category': '普通员工',
            'name': 1334,
            'symbolSize': 10,
            'id': 173,
            'position': '研发小组3-2'
          }, {
            'category': '普通员工',
            'name': 1336,
            'symbolSize': 10,
            'id': 174,
            'position': '研发小组3-1'
          }, {
            'category': '普通员工',
            'name': 1338,
            'symbolSize': 10,
            'id': 175,
            'position': '研发小组2-6'
          }, {
            'category': '普通员工',
            'name': 1339,
            'symbolSize': 10,
            'id': 176,
            'position': '研发小组3-7'
          }, {
            'category': '普通员工',
            'name': 1340,
            'symbolSize': 10,
            'id': 177,
            'position': '研发小组1-6'
          }, {
            'category': '普通员工',
            'name': 1342,
            'symbolSize': 10,
            'id': 178,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1343,
            'symbolSize': 10,
            'id': 179,
            'position': '研发小组3-2'
          }, {
            'category': '普通员工',
            'name': 1344,
            'symbolSize': 10,
            'id': 180,
            'position': '研发小组1-2'
          }, {
            'category': '普通员工',
            'name': 1345,
            'symbolSize': 10,
            'id': 181,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1346,
            'symbolSize': 10,
            'id': 182,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1347,
            'symbolSize': 10,
            'id': 183,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1348,
            'symbolSize': 10,
            'id': 184,
            'position': '研发小组1-7'
          }, {
            'category': '普通员工',
            'name': 1349,
            'symbolSize': 10,
            'id': 185,
            'position': '研发小组3-7'
          }, {
            'category': '普通员工',
            'name': 1350,
            'symbolSize': 10,
            'id': 186,
            'position': '研发小组2-6'
          }, {
            'category': '普通员工',
            'name': 1351,
            'symbolSize': 10,
            'id': 187,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1352,
            'symbolSize': 10,
            'id': 188,
            'position': '研发小组2-6'
          }, {
            'category': '普通员工',
            'name': 1354,
            'symbolSize': 10,
            'id': 189,
            'position': '研发小组1-9'
          }, {
            'category': '普通员工',
            'name': 1355,
            'symbolSize': 10,
            'id': 190,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1356,
            'symbolSize': 10,
            'id': 191,
            'position': '研发小组2-6'
          }, {
            'category': '普通员工',
            'name': 1357,
            'symbolSize': 10,
            'id': 192,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1359,
            'symbolSize': 10,
            'id': 193,
            'position': '研发小组3-1'
          }, {
            'category': '普通员工',
            'name': 1360,
            'symbolSize': 10,
            'id': 194,
            'position': '研发小组2-7'
          }, {
            'category': '普通员工',
            'name': 1361,
            'symbolSize': 10,
            'id': 195,
            'position': '研发小组2-1'
          }, {
            'category': '普通员工',
            'name': 1362,
            'symbolSize': 10,
            'id': 196,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1363,
            'symbolSize': 10,
            'id': 197,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1364,
            'symbolSize': 10,
            'id': 198,
            'position': '研发小组2-4'
          }, {
            'category': '普通员工',
            'name': 1365,
            'symbolSize': 10,
            'id': 199,
            'position': '研发小组2-10'
          }, {
            'category': '普通员工',
            'name': 1367,
            'symbolSize': 10,
            'id': 200,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1368,
            'symbolSize': 10,
            'id': 201,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1369,
            'symbolSize': 10,
            'id': 202,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1370,
            'symbolSize': 10,
            'id': 203,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1371,
            'symbolSize': 10,
            'id': 204,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1373,
            'symbolSize': 10,
            'id': 205,
            'position': '研发小组1-1'
          }, {
            'category': '普通员工',
            'name': 1374,
            'symbolSize': 10,
            'id': 206,
            'position': '研发小组2-1'
          }, {
            'category': '普通员工',
            'name': 1376,
            'symbolSize': 10,
            'id': 207,
            'position': '研发小组2-4'
          }, {
            'category': '普通员工',
            'name': 1378,
            'symbolSize': 10,
            'id': 208,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1379,
            'symbolSize': 10,
            'id': 209,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1380,
            'symbolSize': 10,
            'id': 210,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1381,
            'symbolSize': 10,
            'id': 211,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1382,
            'symbolSize': 10,
            'id': 212,
            'position': '研发小组2-10'
          }, {
            'category': '普通员工',
            'name': 1383,
            'symbolSize': 10,
            'id': 213,
            'position': '研发小组2-2'
          }, {
            'category': '普通员工',
            'name': 1384,
            'symbolSize': 10,
            'id': 214,
            'position': '研发小组2-4'
          }, {
            'category': '普通员工',
            'name': 1385,
            'symbolSize': 10,
            'id': 215,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1388,
            'symbolSize': 10,
            'id': 216,
            'position': '研发小组3-7'
          }, {
            'category': '普通员工',
            'name': 1389,
            'symbolSize': 10,
            'id': 217,
            'position': '研发小组2-9'
          }, {
            'category': '普通员工',
            'name': 1390,
            'symbolSize': 10,
            'id': 218,
            'position': '研发小组2-7'
          }, {
            'category': '普通员工',
            'name': 1391,
            'symbolSize': 10,
            'id': 219,
            'position': '研发小组1-7'
          }, {
            'category': '普通员工',
            'name': 1393,
            'symbolSize': 10,
            'id': 220,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1394,
            'symbolSize': 10,
            'id': 221,
            'position': '研发小组2-11'
          }, {
            'category': '普通员工',
            'name': 1395,
            'symbolSize': 10,
            'id': 222,
            'position': '研发小组2-3'
          }, {
            'category': '普通员工',
            'name': 1396,
            'symbolSize': 10,
            'id': 223,
            'position': '研发小组3-1'
          }, {
            'category': '普通员工',
            'name': 1397,
            'symbolSize': 10,
            'id': 224,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1398,
            'symbolSize': 10,
            'id': 225,
            'position': '研发小组1-4'
          }, {
            'category': '普通员工',
            'name': 1399,
            'symbolSize': 10,
            'id': 226,
            'position': '研发小组3-6'
          }, {
            'category': '普通员工',
            'name': 1401,
            'symbolSize': 10,
            'id': 227,
            'position': '研发小组2-7'
          }, {
            'category': '普通员工',
            'name': 1402,
            'symbolSize': 10,
            'id': 228,
            'position': '研发小组2-5'
          }, {
            'category': '普通员工',
            'name': 1403,
            'symbolSize': 10,
            'id': 229,
            'position': '研发小组1-6'
          }, {
            'category': '普通员工',
            'name': 1404,
            'symbolSize': 10,
            'id': 230,
            'position': '研发小组1-9'
          }, {
            'category': '普通员工',
            'name': 1405,
            'symbolSize': 10,
            'id': 231,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1406,
            'symbolSize': 10,
            'id': 232,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1408,
            'symbolSize': 10,
            'id': 233,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1409,
            'symbolSize': 10,
            'id': 234,
            'position': '研发小组2-9'
          }, {
            'category': '普通员工',
            'name': 1410,
            'symbolSize': 10,
            'id': 235,
            'position': '研发小组2-1'
          }, {
            'category': '普通员工',
            'name': 1411,
            'symbolSize': 10,
            'id': 236,
            'position': '研发小组2-10'
          }, {
            'category': '普通员工',
            'name': 1416,
            'symbolSize': 10,
            'id': 237,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1417,
            'symbolSize': 10,
            'id': 238,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1420,
            'symbolSize': 10,
            'id': 239,
            'position': '研发小组3-4'
          }, {
            'category': '普通员工',
            'name': 1421,
            'symbolSize': 10,
            'id': 240,
            'position': '研发小组2-9'
          }, {
            'category': '普通员工',
            'name': 1422,
            'symbolSize': 10,
            'id': 241,
            'position': '研发小组2-4'
          }, {
            'category': '普通员工',
            'name': 1423,
            'symbolSize': 10,
            'id': 242,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1424,
            'symbolSize': 10,
            'id': 243,
            'position': '研发小组2-2'
          }, {
            'category': '普通员工',
            'name': 1425,
            'symbolSize': 10,
            'id': 244,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1428,
            'symbolSize': 10,
            'id': 245,
            'position': '研发小组3-5'
          }, {
            'category': '普通员工',
            'name': 1429,
            'symbolSize': 10,
            'id': 246,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1431,
            'symbolSize': 10,
            'id': 247,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1433,
            'symbolSize': 10,
            'id': 248,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1434,
            'symbolSize': 10,
            'id': 249,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1435,
            'symbolSize': 10,
            'id': 250,
            'position': '研发小组3-5'
          }, {
            'category': '普通员工',
            'name': 1436,
            'symbolSize': 10,
            'id': 251,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1438,
            'symbolSize': 10,
            'id': 252,
            'position': '研发小组2-8'
          }, {
            'category': '普通员工',
            'name': 1439,
            'symbolSize': 10,
            'id': 253,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1440,
            'symbolSize': 10,
            'id': 254,
            'position': '研发小组3-1'
          }, {
            'category': '普通员工',
            'name': 1444,
            'symbolSize': 10,
            'id': 255,
            'position': '研发小组2-9'
          }, {
            'category': '普通员工',
            'name': 1445,
            'symbolSize': 10,
            'id': 256,
            'position': '研发小组2-2'
          }, {
            'category': '普通员工',
            'name': 1446,
            'symbolSize': 10,
            'id': 257,
            'position': '研发小组3-1'
          }, {
            'category': '普通员工',
            'name': 1449,
            'symbolSize': 10,
            'id': 258,
            'position': '研发小组2-4'
          }, {
            'category': '普通员工',
            'name': 1450,
            'symbolSize': 10,
            'id': 259,
            'position': '研发小组2-2'
          }, {
            'category': '普通员工',
            'name': 1451,
            'symbolSize': 10,
            'id': 260,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1455,
            'symbolSize': 10,
            'id': 261,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1456,
            'symbolSize': 10,
            'id': 262,
            'position': '研发小组3-5'
          }, {
            'category': '普通员工',
            'name': 1457,
            'symbolSize': 10,
            'id': 263,
            'position': '研发小组3-1'
          }, {
            'category': '普通员工',
            'name': 1458,
            'symbolSize': 10,
            'id': 264,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1459,
            'symbolSize': 10,
            'id': 265,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1460,
            'symbolSize': 10,
            'id': 266,
            'position': '研发小组3-7'
          }, {
            'category': '普通员工',
            'name': 1461,
            'symbolSize': 10,
            'id': 267,
            'position': '研发小组2-6'
          }, {
            'category': '普通员工',
            'name': 1462,
            'symbolSize': 10,
            'id': 268,
            'position': '研发小组2-9'
          }, {
            'category': '普通员工',
            'name': 1464,
            'symbolSize': 10,
            'id': 269,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1465,
            'symbolSize': 10,
            'id': 270,
            'position': '研发小组2-11'
          }, {
            'category': '普通员工',
            'name': 1466,
            'symbolSize': 10,
            'id': 271,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1467,
            'symbolSize': 10,
            'id': 272,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1469,
            'symbolSize': 10,
            'id': 273,
            'position': '研发小组3-5'
          }, {
            'category': '普通员工',
            'name': 1470,
            'symbolSize': 10,
            'id': 274,
            'position': '研发小组2-9'
          }, {
            'category': '普通员工',
            'name': 1471,
            'symbolSize': 10,
            'id': 275,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1473,
            'symbolSize': 10,
            'id': 276,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1474,
            'symbolSize': 10,
            'id': 277,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1475,
            'symbolSize': 10,
            'id': 278,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1477,
            'symbolSize': 10,
            'id': 279,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1478,
            'symbolSize': 10,
            'id': 280,
            'position': '研发小组2-5'
          }, {
            'category': '普通员工',
            'name': 1480,
            'symbolSize': 10,
            'id': 281,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1481,
            'symbolSize': 10,
            'id': 282,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1482,
            'symbolSize': 10,
            'id': 283,
            'position': '研发小组2-3'
          }, {
            'category': '普通员工',
            'name': 1483,
            'symbolSize': 10,
            'id': 284,
            'position': '研发小组3-5'
          }, {
            'category': '普通员工',
            'name': 1484,
            'symbolSize': 10,
            'id': 285,
            'position': '研发小组1-6'
          }, {
            'category': '普通员工',
            'name': 1486,
            'symbolSize': 10,
            'id': 286,
            'position': '研发小组1-7'
          }, {
            'category': '普通员工',
            'name': 1487,
            'symbolSize': 10,
            'id': 287,
            'position': '研发小组2-11'
          }, {
            'category': '普通员工',
            'name': 1489,
            'symbolSize': 10,
            'id': 288,
            'position': '研发小组2-2'
          }, {
            'category': '普通员工',
            'name': 1490,
            'symbolSize': 10,
            'id': 289,
            'position': '研发小组1-5'
          }, {
            'category': '普通员工',
            'name': 1491,
            'symbolSize': 10,
            'id': 290,
            'position': '研发小组1-3'
          }, {
            'category': '普通员工',
            'name': 1493,
            'symbolSize': 10,
            'id': 291,
            'position': '研发小组3-3'
          }, {
            'category': '普通员工',
            'name': 1494,
            'symbolSize': 10,
            'id': 292,
            'position': '研发小组1-1'
          }, {
            'category': '普通员工',
            'name': 1495,
            'symbolSize': 10,
            'id': 293,
            'position': '研发小组1-8'
          }, {
            'category': '普通员工',
            'name': 1496,
            'symbolSize': 10,
            'id': 294,
            'position': '研发小组3-2'
          }, {
            'category': '普通员工',
            'name': 1497,
            'symbolSize': 10,
            'id': 295,
            'position': '研发小组2-10'
          }, {
            'category': '普通员工',
            'name': 1498,
            'symbolSize': 10,
            'id': 296,
            'position': '财务'
          }, {
            'category': '普通员工',
            'name': 1499,
            'symbolSize': 10,
            'id': 297,
            'position': '人力资源'
          }, {
            'category': '普通员工',
            'name': 1500,
            'symbolSize': 10,
            'id': 298,
            'position': '研发小组2-5'
          }],
          links: [{
              'id': 0,
              'target': 1,
              'source': 144,
              'value': 8
            }, {
              'id': 1,
              'target': 2,
              'source': 168,
              'value': 9
            }, {
              'id': 2,
              'target': 1,
              'source': 22,
              'value': 4
            }, {
              'id': 3,
              'target': 4,
              'source': 288,
              'value': 5
            }, {
              'id': 4,
              'target': 89,
              'source': 18,
              'value': 2
            }, {
              'id': 5,
              'target': 9,
              'source': 96,
              'value': 5
            }, {
              'id': 6,
              'target': 3,
              'source': 195,
              'value': 4
            }, {
              'id': 7,
              'target': 83,
              'source': 184,
              'value': 9
            }, {
              'id': 8,
              'target': 16,
              'source': 267,
              'value': 6
            }, {
              'id': 9,
              'target': 42,
              'source': 95,
              'value': 6
            }, {
              'id': 10,
              'target': 25,
              'source': 242,
              'value': 7
            }, {
              'id': 11,
              'target': 77,
              'source': 273,
              'value': 7
            }, {
              'id': 12,
              'target': 42,
              'source': 151,
              'value': 4
            }, {
              'id': 13,
              'target': 42,
              'source': 134,
              'value': 3
            }, {
              'id': 14,
              'target': 77,
              'source': 53,
              'value': 3
            }, {
              'id': 15,
              'target': 0,
              'source': 100,
              'value': 2
            }, {
              'id': 16,
              'target': 2,
              'source': 120,
              'value': 4
            }, {
              'id': 17,
              'target': 5,
              'source': 9,
              'value': 4
            }, {
              'id': 18,
              'target': 1,
              'source': 57,
              'value': 9
            }, {
              'id': 19,
              'target': 2,
              'source': 118,
              'value': 7
            }, {
              'id': 20,
              'target': 15,
              'source': 231,
              'value': 5
            }, {
              'id': 21,
              'target': 102,
              'source': 68,
              'value': 6
            }, {
              'id': 22,
              'target': 27,
              'source': 45,
              'value': 6
            }, {
              'id': 23,
              'target': 89,
              'source': 161,
              'value': 4
            }, {
              'id': 24,
              'target': 62,
              'source': 279,
              'value': 7
            }, {
              'id': 25,
              'target': 102,
              'source': 141,
              'value': 5
            }, {
              'id': 26,
              'target': 51,
              'source': 49,
              'value': 5
            }, {
              'id': 27,
              'target': 90,
              'source': 30,
              'value': 4
            }, {
              'id': 28,
              'target': 15,
              'source': 282,
              'value': 9
            }, {
              'id': 29,
              'target': 29,
              'source': 225,
              'value': 3
            }, {
              'id': 30,
              'target': 1,
              'source': 157,
              'value': 10
            }, {
              'id': 31,
              'target': 92,
              'source': 199,
              'value': 4
            }, {
              'id': 32,
              'target': 27,
              'source': 111,
              'value': 3
            }, {
              'id': 33,
              'target': 1,
              'source': 46,
              'value': 3
            }, {
              'id': 34,
              'target': 9,
              'source': 283,
              'value': 3
            }, {
              'id': 35,
              'target': 92,
              'source': 295,
              'value': 5
            }, {
              'id': 36,
              'target': 62,
              'source': 121,
              'value': 6
            }, {
              'id': 37,
              'target': 52,
              'source': 234,
              'value': 3
            }, {
              'id': 38,
              'target': 100,
              'source': 147,
              'value': 4
            }, {
              'id': 39,
              'target': 100,
              'source': 17,
              'value': 5
            }, {
              'id': 40,
              'target': 100,
              'source': 167,
              'value': 4
            }, {
              'id': 41,
              'target': 3,
              'source': 235,
              'value': 1
            }, {
              'id': 42,
              'target': 25,
              'source': 73,
              'value': 7
            }, {
              'id': 43,
              'target': 92,
              'source': 140,
              'value': 5
            }, {
              'id': 44,
              'target': 2,
              'source': 178,
              'value': 5
            }, {
              'id': 45,
              'target': 2,
              'source': 93,
              'value': 6
            }, {
              'id': 46,
              'target': 2,
              'source': 272,
              'value': 7
            }, {
              'id': 47,
              'target': 9,
              'source': 123,
              'value': 3
            }, {
              'id': 48,
              'target': 4,
              'source': 85,
              'value': 3
            }, {
              'id': 49,
              'target': 42,
              'source': 55,
              'value': 5
            }, {
              'id': 50,
              'target': 25,
              'source': 269,
              'value': 2
            }, {
              'id': 51,
              'target': 42,
              'source': 190,
              'value': 3
            }, {
              'id': 52,
              'target': 52,
              'source': 94,
              'value': 5
            }, {
              'id': 53,
              'target': 62,
              'source': 289,
              'value': 7
            }, {
              'id': 54,
              'target': 2,
              'source': 101,
              'value': 11
            }, {
              'id': 55,
              'target': 0,
              'source': 83,
              'value': 5
            }, {
              'id': 56,
              'target': 3,
              'source': 63,
              'value': 6
            }, {
              'id': 57,
              'target': 6,
              'source': 263,
              'value': 3
            }, {
              'id': 58,
              'target': 2,
              'source': 182,
              'value': 3
            }, {
              'id': 59,
              'target': 10,
              'source': 80,
              'value': 5
            }, {
              'id': 60,
              'target': 4,
              'source': 213,
              'value': 5
            }, {
              'id': 61,
              'target': 16,
              'source': 186,
              'value': 9
            }, {
              'id': 62,
              'target': 2,
              'source': 28,
              'value': 12
            }, {
              'id': 63,
              'target': 10,
              'source': 258,
              'value': 5
            }, {
              'id': 64,
              'target': 13,
              'source': 298,
              'value': 1
            }, {
              'id': 65,
              'target': 4,
              'source': 112,
              'value': 4
            }, {
              'id': 66,
              'target': 52,
              'source': 137,
              'value': 5
            }, {
              'id': 67,
              'target': 11,
              'source': 97,
              'value': 3
            }, {
              'id': 68,
              'target': 3,
              'source': 206,
              'value': 3
            }, {
              'id': 69,
              'target': 92,
              'source': 138,
              'value': 2
            }, {
              'id': 70,
              'target': 1,
              'source': 26,
              'value': 3
            }, {
              'id': 71,
              'target': 10,
              'source': 214,
              'value': 9
            }, {
              'id': 72,
              'target': 2,
              'source': 247,
              'value': 5
            }, {
              'id': 73,
              'target': 4,
              'source': 256,
              'value': 2
            }, {
              'id': 74,
              'target': 16,
              'source': 158,
              'value': 9
            }, {
              'id': 75,
              'target': 42,
              'source': 252,
              'value': 8
            }, {
              'id': 76,
              'target': 15,
              'source': 44,
              'value': 7
            }, {
              'id': 77,
              'target': 92,
              'source': 104,
              'value': 2
            }, {
              'id': 78,
              'target': 27,
              'source': 227,
              'value': 6
            }, {
              'id': 79,
              'target': 11,
              'source': 139,
              'value': 5
            }, {
              'id': 80,
              'target': 1,
              'source': 248,
              'value': 8
            }, {
              'id': 81,
              'target': 100,
              'source': 238,
              'value': 6
            }, {
              'id': 82,
              'target': 100,
              'source': 135,
              'value': 3
            }, {
              'id': 83,
              'target': 77,
              'source': 284,
              'value': 6
            }, {
              'id': 84,
              'target': 10,
              'source': 241,
              'value': 2
            }, {
              'id': 85,
              'target': 42,
              'source': 249,
              'value': 1
            }, {
              'id': 86,
              'target': 62,
              'source': 113,
              'value': 3
            }, {
              'id': 87,
              'target': 12,
              'source': 128,
              'value': 2
            }, {
              'id': 88,
              'target': 78,
              'source': 136,
              'value': 4
            }, {
              'id': 89,
              'target': 102,
              'source': 221,
              'value': 5
            }, {
              'id': 90,
              'target': 92,
              'source': 56,
              'value': 2
            }, {
              'id': 91,
              'target': 103,
              'source': 58,
              'value': 3
            }, {
              'id': 92,
              'target': 25,
              'source': 59,
              'value': 4
            }, {
              'id': 93,
              'target': 4,
              'source': 259,
              'value': 5
            }, {
              'id': 94,
              'target': 90,
              'source': 266,
              'value': 3
            }, {
              'id': 95,
              'target': 14,
              'source': 173,
              'value': 5
            }, {
              'id': 96,
              'target': 103,
              'source': 32,
              'value': 4
            }, {
              'id': 97,
              'target': 15,
              'source': 196,
              'value': 3
            }, {
              'id': 98,
              'target': 78,
              'source': 177,
              'value': 4
            }, {
              'id': 99,
              'target': 2,
              'source': 253,
              'value': 5
            }, {
              'id': 100,
              'target': 25,
              'source': 290,
              'value': 6
            }, {
              'id': 101,
              'target': 25,
              'source': 261,
              'value': 1
            }, {
              'id': 102,
              'target': 62,
              'source': 34,
              'value': 3
            }, {
              'id': 103,
              'target': 89,
              'source': 124,
              'value': 3
            }, {
              'id': 104,
              'target': 42,
              'source': 211,
              'value': 5
            }, {
              'id': 105,
              'target': 15,
              'source': 152,
              'value': 4
            }, {
              'id': 106,
              'target': 62,
              'source': 181,
              'value': 7
            }, {
              'id': 107,
              'target': 0,
              'source': 62,
              'value': 5
            }, {
              'id': 108,
              'target': 2,
              'source': 37,
              'value': 10
            }, {
              'id': 109,
              'target': 102,
              'source': 64,
              'value': 8
            }, {
              'id': 110,
              'target': 100,
              'source': 232,
              'value': 3
            }, {
              'id': 111,
              'target': 78,
              'source': 91,
              'value': 6
            }, {
              'id': 112,
              'target': 52,
              'source': 268,
              'value': 5
            }, {
              'id': 113,
              'target': 25,
              'source': 110,
              'value': 6
            }, {
              'id': 114,
              'target': 90,
              'source': 176,
              'value': 6
            }, {
              'id': 115,
              'target': 10,
              'source': 146,
              'value': 8
            }, {
              'id': 116,
              'target': 5,
              'source': 102,
              'value': 4
            }, {
              'id': 117,
              'target': 102,
              'source': 67,
              'value': 4
            }, {
              'id': 118,
              'target': 42,
              'source': 165,
              'value': 6
            }, {
              'id': 119,
              'target': 62,
              'source': 159,
              'value': 3
            }, {
              'id': 120,
              'target': 14,
              'source': 132,
              'value': 8
            }, {
              'id': 121,
              'target': 15,
              'source': 60,
              'value': 3
            }, {
              'id': 122,
              'target': 1,
              'source': 276,
              'value': 10
            }, {
              'id': 123,
              'target': 1,
              'source': 74,
              'value': 5
            }, {
              'id': 124,
              'target': 7,
              'source': 2,
              'value': 14
            }, {
              'id': 125,
              'target': 2,
              'source': 21,
              'value': 8
            }, {
              'id': 126,
              'target': 62,
              'source': 278,
              'value': 1
            }, {
              'id': 127,
              'target': 83,
              'source': 133,
              'value': 3
            }, {
              'id': 128,
              'target': 6,
              'source': 193,
              'value': 3
            }, {
              'id': 129,
              'target': 77,
              'source': 245,
              'value': 3
            }, {
              'id': 130,
              'target': 10,
              'source': 71,
              'value': 4
            }, {
              'id': 131,
              'target': 15,
              'source': 162,
              'value': 5
            }, {
              'id': 132,
              'target': 52,
              'source': 274,
              'value': 2
            }, {
              'id': 133,
              'target': 103,
              'source': 189,
              'value': 9
            }, {
              'id': 134,
              'target': 11,
              'source': 292,
              'value': 1
            }, {
              'id': 135,
              'target': 7,
              'source': 0,
              'value': 3
            }, {
              'id': 136,
              'target': 100,
              'source': 20,
              'value': 4
            }, {
              'id': 137,
              'target': 5,
              'source': 3,
              'value': 3
            }, {
              'id': 138,
              'target': 15,
              'source': 106,
              'value': 4
            }, {
              'id': 139,
              'target': 4,
              'source': 243,
              'value': 3
            }, {
              'id': 140,
              'target': 15,
              'source': 209,
              'value': 3
            }, {
              'id': 141,
              'target': 15,
              'source': 54,
              'value': 2
            }, {
              'id': 142,
              'target': 16,
              'source': 191,
              'value': 13
            }, {
              'id': 143,
              'target': 25,
              'source': 265,
              'value': 5
            }, {
              'id': 144,
              'target': 5,
              'source': 16,
              'value': 5
            }, {
              'id': 145,
              'target': 8,
              'source': 6,
              'value': 3
            }, {
              'id': 146,
              'target': 29,
              'source': 24,
              'value': 5
            }, {
              'id': 147,
              'target': 100,
              'source': 164,
              'value': 5
            }, {
              'id': 148,
              'target': 14,
              'source': 179,
              'value': 4
            }, {
              'id': 149,
              'target': 62,
              'source': 224,
              'value': 3
            }, {
              'id': 150,
              'target': 8,
              'source': 89,
              'value': 5
            }, {
              'id': 151,
              'target': 92,
              'source': 236,
              'value': 4
            }, {
              'id': 152,
              'target': 5,
              'source': 13,
              'value': 6
            }, {
              'id': 153,
              'target': 78,
              'source': 150,
              'value': 3
            }, {
              'id': 154,
              'target': 27,
              'source': 194,
              'value': 3
            }, {
              'id': 155,
              'target': 2,
              'source': 202,
              'value': 8
            }, {
              'id': 156,
              'target': 52,
              'source': 255,
              'value': 3
            }, {
              'id': 157,
              'target': 8,
              'source': 14,
              'value': 3
            }, {
              'id': 158,
              'target': 7,
              'source': 8,
              'value': 2
            }, {
              'id': 159,
              'target': 102,
              'source': 270,
              'value': 6
            }, {
              'id': 160,
              'target': 3,
              'source': 41,
              'value': 4
            }, {
              'id': 161,
              'target': 62,
              'source': 271,
              'value': 4
            }, {
              'id': 162,
              'target': 13,
              'source': 280,
              'value': 3
            }, {
              'id': 163,
              'target': 2,
              'source': 296,
              'value': 9
            }, {
              'id': 164,
              'target': 89,
              'source': 170,
              'value': 7
            }, {
              'id': 165,
              'target': 103,
              'source': 72,
              'value': 5
            }, {
              'id': 166,
              'target': 5,
              'source': 4,
              'value': 2
            }, {
              'id': 167,
              'target': 62,
              'source': 281,
              'value': 4
            }, {
              'id': 168,
              'target': 25,
              'source': 244,
              'value': 3
            }, {
              'id': 169,
              'target': 10,
              'source': 198,
              'value': 4
            }, {
              'id': 170,
              'target': 16,
              'source': 166,
              'value': 3
            }, {
              'id': 171,
              'target': 52,
              'source': 88,
              'value': 3
            }, {
              'id': 172,
              'target': 52,
              'source': 126,
              'value': 4
            }, {
              'id': 173,
              'target': 27,
              'source': 107,
              'value': 1
            }, {
              'id': 174,
              'target': 1,
              'source': 148,
              'value': 3
            }, {
              'id': 175,
              'target': 6,
              'source': 223,
              'value': 7
            }, {
              'id': 176,
              'target': 52,
              'source': 171,
              'value': 3
            }, {
              'id': 177,
              'target': 7,
              'source': 1,
              'value': 5
            }, {
              'id': 178,
              'target': 0,
              'source': 78,
              'value': 4
            }, {
              'id': 179,
              'target': 4,
              'source': 122,
              'value': 5
            }, {
              'id': 180,
              'target': 2,
              'source': 183,
              'value': 4
            }, {
              'id': 181,
              'target': 1,
              'source': 116,
              'value': 6
            }, {
              'id': 182,
              'target': 12,
              'source': 149,
              'value': 3
            }, {
              'id': 183,
              'target': 92,
              'source': 212,
              'value': 5
            }, {
              'id': 184,
              'target': 13,
              'source': 108,
              'value': 2
            }, {
              'id': 185,
              'target': 100,
              'source': 87,
              'value': 4
            }, {
              'id': 186,
              'target': 4,
              'source': 172,
              'value': 3
            }, {
              'id': 187,
              'target': 0,
              'source': 103,
              'value': 3
            }, {
              'id': 188,
              'target': 8,
              'source': 77,
              'value': 4
            }, {
              'id': 189,
              'target': 100,
              'source': 35,
              'value': 4
            }, {
              'id': 190,
              'target': 89,
              'source': 145,
              'value': 5
            }, {
              'id': 191,
              'target': 52,
              'source': 217,
              'value': 2
            }, {
              'id': 192,
              'target': 11,
              'source': 48,
              'value': 4
            }, {
              'id': 193,
              'target': 3,
              'source': 47,
              'value': 4
            }, {
              'id': 194,
              'target': 100,
              'source': 81,
              'value': 5
            }, {
              'id': 195,
              'target': 102,
              'source': 129,
              'value': 9
            }, {
              'id': 196,
              'target': 51,
              'source': 66,
              'value': 3
            }, {
              'id': 197,
              'target': 27,
              'source': 218,
              'value': 3
            }, {
              'id': 198,
              'target': 2,
              'source': 114,
              'value': 6
            }, {
              'id': 199,
              'target': 11,
              'source': 205,
              'value': 6
            }, {
              'id': 200,
              'target': 2,
              'source': 260,
              'value': 11
            }, {
              'id': 201,
              'target': 2,
              'source': 201,
              'value': 5
            }, {
              'id': 202,
              'target': 27,
              'source': 130,
              'value': 4
            }, {
              'id': 203,
              'target': 15,
              'source': 215,
              'value': 2
            }, {
              'id': 204,
              'target': 90,
              'source': 216,
              'value': 1
            }, {
              'id': 205,
              'target': 103,
              'source': 117,
              'value': 3
            }, {
              'id': 206,
              'target': 89,
              'source': 226,
              'value': 2
            }, {
              'id': 207,
              'target': 5,
              'source': 27,
              'value': 6
            }, {
              'id': 208,
              'target': 13,
              'source': 119,
              'value': 1
            }, {
              'id': 209,
              'target': 16,
              'source': 109,
              'value': 1
            }, {
              'id': 210,
              'target': 83,
              'source': 219,
              'value': 3
            }, {
              'id': 211,
              'target': 15,
              'source': 38,
              'value': 4
            }, {
              'id': 212,
              'target': 77,
              'source': 262,
              'value': 3
            }, {
              'id': 213,
              'target': 1,
              'source': 197,
              'value': 4
            }, {
              'id': 214,
              'target': 5,
              'source': 52,
              'value': 5
            }, {
              'id': 215,
              'target': 78,
              'source': 39,
              'value': 4
            }, {
              'id': 216,
              'target': 100,
              'source': 220,
              'value': 1
            }, {
              'id': 217,
              'target': 103,
              'source': 84,
              'value': 3
            }, {
              'id': 218,
              'target': 6,
              'source': 174,
              'value': 2
            }, {
              'id': 219,
              'target': 27,
              'source': 127,
              'value': 2
            }, {
              'id': 220,
              'target': 100,
              'source': 246,
              'value': 3
            }, {
              'id': 221,
              'target': 89,
              'source': 76,
              'value': 3
            }, {
              'id': 222,
              'target': 27,
              'source': 36,
              'value': 4
            }, {
              'id': 223,
              'target': 12,
              'source': 23,
              'value': 3
            }, {
              'id': 224,
              'target': 0,
              'source': 11,
              'value': 3
            }, {
              'id': 225,
              'target': 10,
              'source': 207,
              'value': 3
            }, {
              'id': 226,
              'target': 7,
              'source': 5,
              'value': 3
            }, {
              'id': 227,
              'target': 14,
              'source': 31,
              'value': 2
            }, {
              'id': 228,
              'target': 100,
              'source': 131,
              'value': 3
            }, {
              'id': 229,
              'target': 1,
              'source': 115,
              'value': 3
            }, {
              'id': 230,
              'target': 103,
              'source': 125,
              'value': 3
            }, {
              'id': 231,
              'target': 12,
              'source': 155,
              'value': 1
            }, {
              'id': 232,
              'target': 51,
              'source': 239,
              'value': 3
            }, {
              'id': 233,
              'target': 8,
              'source': 51,
              'value': 2
            }, {
              'id': 234,
              'target': 6,
              'source': 153,
              'value': 3
            }, {
              'id': 235,
              'target': 100,
              'source': 293,
              'value': 2
            }, {
              'id': 236,
              'target': 4,
              'source': 33,
              'value': 1
            }, {
              'id': 237,
              'target': 2,
              'source': 75,
              'value': 7
            }, {
              'id': 238,
              'target': 15,
              'source': 277,
              'value': 6
            }, {
              'id': 239,
              'target': 10,
              'source': 156,
              'value': 5
            }, {
              'id': 240,
              'target': 4,
              'source': 61,
              'value': 2
            }, {
              'id': 241,
              'target': 83,
              'source': 286,
              'value': 2
            }, {
              'id': 242,
              'target': 27,
              'source': 142,
              'value': 3
            }, {
              'id': 243,
              'target': 90,
              'source': 163,
              'value': 2
            }, {
              'id': 244,
              'target': 5,
              'source': 10,
              'value': 3
            }, {
              'id': 245,
              'target': 51,
              'source': 160,
              'value': 2
            }, {
              'id': 246,
              'target': 16,
              'source': 175,
              'value': 2
            }, {
              'id': 247,
              'target': 42,
              'source': 200,
              'value': 3
            }, {
              'id': 248,
              'target': 100,
              'source': 237,
              'value': 1
            }, {
              'id': 249,
              'target': 9,
              'source': 222,
              'value': 2
            }, {
              'id': 250,
              'target': 25,
              'source': 233,
              'value': 3
            }, {
              'id': 251,
              'target': 103,
              'source': 230,
              'value': 4
            }, {
              'id': 252,
              'target': 1,
              'source': 19,
              'value': 4
            }, {
              'id': 253,
              'target': 102,
              'source': 287,
              'value': 3
            }, {
              'id': 254,
              'target': 14,
              'source': 294,
              'value': 1
            }, {
              'id': 255,
              'target': 1,
              'source': 297,
              'value': 3
            }, {
              'id': 256,
              'target': 6,
              'source': 43,
              'value': 5
            }, {
              'id': 257,
              'target': 25,
              'source': 105,
              'value': 5
            }, {
              'id': 258,
              'target': 100,
              'source': 187,
              'value': 1
            }, {
              'id': 259,
              'target': 100,
              'source': 98,
              'value': 5
            }, {
              'id': 260,
              'target': 15,
              'source': 264,
              'value': 2
            }, {
              'id': 261,
              'target': 6,
              'source': 257,
              'value': 3
            }, {
              'id': 262,
              'target': 0,
              'source': 12,
              'value': 1
            }, {
              'id': 263,
              'target': 16,
              'source': 188,
              'value': 1
            }, {
              'id': 264,
              'target': 13,
              'source': 228,
              'value': 2
            }, {
              'id': 265,
              'target': 78,
              'source': 285,
              'value': 2
            }, {
              'id': 266,
              'target': 11,
              'source': 40,
              'value': 4
            }, {
              'id': 267,
              'target': 15,
              'source': 291,
              'value': 1
            }, {
              'id': 268,
              'target': 6,
              'source': 169,
              'value': 2
            }, {
              'id': 269,
              'target': 2,
              'source': 143,
              'value': 5
            }, {
              'id': 270,
              'target': 16,
              'source': 65,
              'value': 3
            }, {
              'id': 271,
              'target': 83,
              'source': 82,
              'value': 2
            }, {
              'id': 272,
              'target': 25,
              'source': 192,
              'value': 3
            }, {
              'id': 273,
              'target': 8,
              'source': 15,
              'value': 2
            }, {
              'id': 274,
              'target': 29,
              'source': 154,
              'value': 1
            }, {
              'id': 275,
              'target': 2,
              'source': 203,
              'value': 1
            }, {
              'id': 276,
              'target': 1,
              'source': 208,
              'value': 5
            }, {
              'id': 277,
              'target': 103,
              'source': 99,
              'value': 3
            }, {
              'id': 278,
              'target': 12,
              'source': 180,
              'value': 2
            }, {
              'id': 279,
              'target': 78,
              'source': 229,
              'value': 1
            }, {
              'id': 280,
              'target': 77,
              'source': 250,
              'value': 1
            }, {
              'id': 281,
              'target': 10,
              'source': 79,
              'value': 1
            }, {
              'id': 282,
              'target': 16,
              'source': 69,
              'value': 1
            }, {
              'id': 283,
              'target': 42,
              'source': 210,
              'value': 1
            }, {
              'id': 284,
              'target': 0,
              'source': 25,
              'value': 2
            }, {
              'id': 285,
              'target': 90,
              'source': 50,
              'value': 2
            }, {
              'id': 286,
              'target': 2,
              'source': 70,
              'value': 1
            }, {
              'id': 287,
              'target': 77,
              'source': 86,
              'value': 1
            }, {
              'id': 288,
              'target': 0,
              'source': 29,
              'value': 2
            }, {
              'id': 289,
              'target': 62,
              'source': 251,
              'value': 1
            }, {
              'id': 290,
              'target': 90,
              'source': 185,
              'value': 2
            }, {
              'id': 291,
              'target': 25,
              'source': 275,
              'value': 1
            },
            {
              'id': 292,
              'target': 5,
              'source': 42,
              'value': 0,
              lineStyle: {
                normal: {
                  color: "#ff715e",
                }
              }
            },
            {
              'id': 293,
              'target': 8,
              'source': 90,
              'value': 0,
              lineStyle: {
                normal: {
                  color: "#ff715e",
                }
              }
            },
            {
              'id': 294,
              'target': 5,
              'source': 92,
              'value': 0,
              lineStyle: {
                normal: {
                  color: "#ff715e",
                }
              }
            },
            {
              'id': 295,
              'target': 52,
              'source': 240,
              'value': 0,
              lineStyle: {
                normal: {
                  color: "#ff715e",
                }
              }
            },
            {
              'id': 296,
              'target': 6,
              'source': 254,
              'value': 0,
              lineStyle: {
                normal: {
                  color: "#ff715e",
                }
              }
            },
            {
              'id': 297,
              'target': 1,
              'source': 204,
              'value': 0,
              lineStyle: {
                normal: {
                  color: "#ff715e",
                }
              }
            }
          ],

          categories: [{
              'name': '总经理'
            },
            {
              'name': '部长'
            },

            {
              'name': '组长'
            },
            {
              'name': '普通员工'
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
              curveness: 0.1
            }
          },
          // draggable: true,
          clickable: true,
          force: {
            repulsion: 150,
            gravity: 0.25,
            edgeLength: [20, 20]
          },
          emphasis: {
            lineStyle: {
              width: 4
            }
          }
        }]
      },
    }
  },
  methods: {},
  mounted: function() {
    this.emailSum = echarts.init(document.getElementById('emailSum'), 'halloween')
    this.emailSum.setOption(this.EmailOption)
    // this.positiontWord = echarts.init(document.getElementById('positiontWord'), 'halloween')
    // this.positiontWord.setOption(this.WordOption)
    this.emailSum.on("click", function(param) {

      // console.log(param);
      var title = "";
      var data = [];
      var title2 = "";
      var data2 = [];
      if (param.name == "1067") {
        title = "总经理词云图";
        data = [{
            "name": "公司发展规划",
            "value": 3
          },
          {
            "name": "年度计划",
            "value": 7
          }
        ];
        title2 = "研发部长词云图";
        data2 = [{
            "name": "Reply：辞职请求审核：批准。",
            "value": 3
          }, {
            "name": "工作汇报",
            "value": 8
          },
          {
            "name": "例会",
            "value": 28
          }
        ];

      } else if (param.name == "1041") {
        title = "财务部长词云图";
        data = [{
            "name": "年度工作目标",
            "value": 10
          },
          {
            "name": "工作计划",
            "value": 7
          },
          {
            "name": "工作汇报",
            "value": 14
          },
          {
            "name": "财务",
            "value": 7
          }
        ];
        title2 = "财务部门员工词云图";
        data2 = [{
            "name": "财务",
            "value": 76
          },
          {
            "name": "财务分析",
            "value": 99
          },
          {
            "name": "税务",
            "value": 106
          },
          {
            "name": "成本控制",
            "value": 109
          },
          {
            "name": "会计核算",
            "value": 112
          },
          {
            "name": "资金",
            "value": 115
          },
          {
            "name": "工作汇报",
            "value": 149
          },
          {
            "name": "财务报账",
            "value": 351
          }
        ];

      } else if (param.name == "1013") {
        title = "人力资源部长词云图";
        data = [{
            "name": "面试通知",
            "value": 2
          },
          {
            "name": "复试通知",
            "value": 3
          },
          {
            "name": "录用通知（接受请回复邮件确认，谢谢！）",
            "value": 4
          },
          {
            "name": "工作汇报",
            "value": 5
          },
          {
            "name": "公司简介",
            "value": 5
          },
          {
            "name": "工作计划",
            "value": 6
          },
          {
            "name": "新员工必读",
            "value": 8
          },
          {
            "name": "Offer",
            "value": 10
          },
          {
            "name": "年度工作目标",
            "value": 12
          }
        ];

        title2 = "人力资源部门员工词云图";
        data2 = [{
            "name": "Re:报名参加",
            "value": 6
          },
          {
            "name": "财务报账",
            "value": 39
          },
          {
            "name": "岗位说明书",
            "value": 43
          },
          {
            "name": "劳动合同",
            "value": 47
          },
          {
            "name": "福利保障",
            "value": 49
          },
          {
            "name": "招聘信息总结",
            "value": 50
          },
          {
            "name": "人员档案",
            "value": 50
          },
          {
            "name": "绩效考核",
            "value": 54
          },
          {
            "name": "合同",
            "value": 55
          },
          {
            "name": "考勤相关",
            "value": 62
          },
          {
            "name": "工作汇报",
            "value": 88
          },
          {
            "name": "新员工必读",
            "value": 134
          },
          {
            "name": "Offer",
            "value": 139
          },
          {
            "name": "录用通知",
            "value": 141
          },
          {
            "name": "面试通知",
            "value": 146
          },
          {
            "name": "复试通知",
            "value": 154
          },
          {
            "name": "公司简介",
            "value": 168
          }
        ];

      } else if (param.name == "1007") {
        title = "研发1组长词云图";
        data = [{
            "name": "Reply：辞职请求审核：批准。",
            "value": 1
          },
          {
            "name": "平台介绍",
            "value": 6
          },
          {
            "name": "月报总结",
            "value": 8
          },
          {
            "name": "项目进度计划",
            "value": 9
          },
          {
            "name": "项目周报",
            "value": 9
          },
          {
            "name": "项目总结",
            "value": 10
          },
          {
            "name": "项目简介",
            "value": 15
          },
          {
            "name": "项目计划、问题、风险",
            "value": 36
          },
          {
            "name": "技术分享安排",
            "value": 44
          },
          {
            "name": "例会会议纪要",
            "value": 51
          }
        ];

        title2 = "研发1员工词云图";
        data2 = [{
            "name": "【辞职信】",
            "value": 1
          },
          {
            "name": "Re:报名参加",
            "value": 6
          },
          {
            "name": "财务报账",
            "value": 29
          },
          {
            "name": "需求调研",
            "value": 40
          },
          {
            "name": "项目测试数据统计",
            "value": 43
          },
          {
            "name": "需求与原型",
            "value": 48
          },
          {
            "name": "项目过程文档",
            "value": 49
          },
          {
            "name": "初验文档",
            "value": 49
          },
          {
            "name": "实施方案",
            "value": 50
          },
          {
            "name": "测试脚本",
            "value": 51
          },
          {
            "name": "用户手册",
            "value": 52
          },
          {
            "name": "特殊字段说明",
            "value": 52
          },
          {
            "name": "系统配置子系统",
            "value": 53
          },
          {
            "name": "地图配置",
            "value": 54
          },
          {
            "name": "分析平台配置",
            "value": 54
          },
          {
            "name": "终验文档",
            "value": 55
          },
          {
            "name": "概要设计",
            "value": 56
          },
          {
            "name": "搜索详细设计",
            "value": 56
          },
          {
            "name": "api汇总",
            "value": 56
          },
          {
            "name": "软件开发文档",
            "value": 59
          },
          {
            "name": "前后端接口",
            "value": 61
          },
          {
            "name": "需求",
            "value": 63
          },
          {
            "name": "传输设置",
            "value": 68
          },
          {
            "name": "部署文档",
            "value": 69
          },
          {
            "name": "近期工作总结",
            "value": 89
          },
          {
            "name": "总结",
            "value": 99
          },
          {
            "name": "项目汇报",
            "value": 100
          },
          {
            "name": "项目简介",
            "value": 104
          },
          {
            "name": "平台介绍",
            "value": 106
          }
        ];


      } else if (param.name == "1059") {
        title = "研发2组长词云图";
        data = [{
            "name": "Reply：辞职请求审核：批准。",
            "value": 2
          },
          {
            "name": "月报总结",
            "value": 10
          },
          {
            "name": "项目进度计划",
            "value": 13
          },
          {
            "name": "项目周报",
            "value": 13
          },
          {
            "name": "项目总结",
            "value": 15
          },
          {
            "name": "项目分析",
            "value": 20
          },
          {
            "name": "项目计划、问题、风险",
            "value": 45
          },
          {
            "name": "例会会议纪要",
            "value": 49
          },
          {
            "name": "技术分享安排",
            "value": 51
          }
        ];

        title2 = "研发2员工词云图";
        data2 = [{
            "name": "【辞职信】",
            "value": 2
          },
          {
            "name": "Re:报名参加",
            "value": 29
          },
          {
            "name": "财务报账",
            "value": 49
          },
          {
            "name": "测试脚本",
            "value": 52
          },
          {
            "name": "需求与原型",
            "value": 58
          },
          {
            "name": "前后端接口",
            "value": 63
          },
          {
            "name": "项目测试数据统计",
            "value": 64
          },
          {
            "name": "分析平台配置",
            "value": 64
          },
          {
            "name": "概要设计",
            "value": 65
          },
          {
            "name": "终验文档",
            "value": 67
          },
          {
            "name": "搜索详细设计",
            "value": 68
          },
          {
            "name": "api汇总",
            "value": 68
          },
          {
            "name": "项目过程文档",
            "value": 70
          },
          {
            "name": "地图配置",
            "value": 70
          },
          {
            "name": "初验文档",
            "value": 71
          },
          {
            "name": "需求调研",
            "value": 72
          },
          {
            "name": "用户手册",
            "value": 72
          },
          {
            "name": "系统配置子系统",
            "value": 73
          },
          {
            "name": "需求",
            "value": 75
          },
          {
            "name": "软件开发文档",
            "value": 76
          },
          {
            "name": "部署文档",
            "value": 79
          },
          {
            "name": "特殊字段说明",
            "value": 79
          },
          {
            "name": "传输设置",
            "value": 87
          },
          {
            "name": "实施方案",
            "value": 89
          },
          {
            "name": "项目汇报",
            "value": 110
          },
          {
            "name": "近期工作总结",
            "value": 126
          },
          {
            "name": "总结",
            "value": 130
          },
          {
            "name": "项目分析",
            "value": 225
          }
        ];

      } else if (param.name == "1068") {

        title = "研发3组长词云图";
        data = [{
            "name": "项目总结",
            "value": 4
          },
          {
            "name": "关于平台的一些介绍",
            "value": 4
          },
          {
            "name": "月报总结",
            "value": 5
          },
          {
            "name": "技术分享及探讨",
            "value": 7
          },
          {
            "name": "项目进度计划",
            "value": 9
          },
          {
            "name": "项目周报",
            "value": 10
          },
          {
            "name": "技术分享安排",
            "value": 27
          },
          {
            "name": "例会会议纪要",
            "value": 35
          },
          {
            "name": "项目计划、问题、风险",
            "value": 37
          }
        ];

        title2 = "研发3员工词云图";
        data2 = [{
            "name": "api汇总",
            "value": 45
          },
          {
            "name": "Re:报名参加",
            "value": 10
          },
          {
            "name": "部署文档",
            "value": 35
          },
          {
            "name": "财务报账",
            "value": 24
          },
          {
            "name": "测试脚本",
            "value": 47
          },
          {
            "name": "初验文档",
            "value": 48
          },
          {
            "name": "传输设置",
            "value": 42
          },
          {
            "name": "地图配置",
            "value": 46
          },
          {
            "name": "分析平台配置",
            "value": 57
          },
          {
            "name": "概要设计",
            "value": 45
          },
          {
            "name": "关于平台的一些介绍",
            "value": 58
          },
          {
            "name": "技术分享及探讨",
            "value": 48
          },
          {
            "name": "近期工作总结",
            "value": 60
          },
          {
            "name": "前后端接口",
            "value": 37
          },
          {
            "name": "软件开发文档",
            "value": 42
          },
          {
            "name": "实施方案",
            "value": 29
          },
          {
            "name": "搜索详细设计",
            "value": 31
          },
          {
            "name": "特殊字段说明",
            "value": 38
          },
          {
            "name": "系统配置子系统",
            "value": 34
          },
          {
            "name": "项目测试数据统计",
            "value": 44
          },
          {
            "name": "项目过程文档",
            "value": 48
          },
          {
            "name": "项目汇报",
            "value": 58
          },
          {
            "name": "需求",
            "value": 40
          },
          {
            "name": "需求调研",
            "value": 47
          },
          {
            "name": "需求与原型",
            "value": 44
          },
          {
            "name": "用户手册",
            "value": 40
          },
          {
            "name": "终验文档",
            "value": 37
          },
          {
            "name": "总结",
            "value": 73
          }
        ];

      }

      var WordOption = {
        title: {
          text: title,
          padding: [10, 10]
        },
        tooltip: {},
        series: [{
          type: 'wordCloud',
          gridSize: 20,
          sizeRange: [12, 60],
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
          data: data
        }]
      };
      var WordOption2 = {
        title: {
          text: title2,
          padding: [10, 10]
        },
        tooltip: {},
        series: [{
          type: 'wordCloud',
          gridSize: 20,
          sizeRange: [12, 60],
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
          data: data2
        }]
      };
      var charts = echarts.init(document.getElementById('positiontWord'), 'halloween')
      charts.setOption(WordOption)

      var charts2 = echarts.init(document.getElementById('positiontWord2'), 'halloween')
      charts2.setOption(WordOption2)

      // getPositiontWord(param.name);
    });


  },
  watch: {

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// .departmentcloudword{
//     border:#ccc 1px solid;
//     // margin-right: 10px;
// }
.chartBox {
    width: 100%;
    border: #ccc 1px solid;
    margin: 0 10px;
}
</style>
