<template>
<div class="organization">
  <div id="chartOrgan" style="width:100%; height:1010px;"></div>
</div>
</template>

<script>
import echarts from 'echarts'

require('echarts/theme/halloween')

export default {
  name: 'Department',
  data() {
    return {
      chartOrgan: "",
    }
  },
  mounted: function() {
    function colorMappingChange(value) {
      var levelOption = getLevelOption(value);
      chart.setOption({
        series: [{
          levels: levelOption
        }]
      });
    }

    var formatUtil = echarts.format;

    function getLevelOption() {
      return [{
          itemStyle: {
            normal: {
              borderColor: '#777',
              borderWidth: 0,
              gapWidth: 1
            }
          },
          upperLabel: {
            normal: {
              show: false
            }
          }
        },
        {
          itemStyle: {
            normal: {
              borderColor: '#555',
              borderWidth: 5,
              gapWidth: 1
            },
            emphasis: {
              borderColor: '#ddd'
            }
          }
        },
        {
          colorSaturation: [0.35, 0.5],
          itemStyle: {
            normal: {
              borderWidth: 5,
              gapWidth: 1,
              borderColorSaturation: 0.6
            }
          }
        },
        {
          colorSaturation: [0.40, 0.5],
          itemStyle: {
            normal: {
              borderWidth: 4,
              gapWidth: 1,
              borderColorSaturation: 0.7
            }
          }
        }
      ];
    }

    var orgOption = {

      title: {
        text: '员工组织结构图',
        // subtext:'共299名员工，分属财务、人力资源和研发三个部门',
        x: 'left',
        padding:[10,10]
      },
      tooltip: {
        formatter: function(info) {
          // console.log(info);
          var value = info.data.discretion;
          var temp;
          var treePathInfo = info.treePathInfo;
          var treePath = [];
          if (isNaN(value)) {
            temp = "职位：" + value;
          } else {
            temp = "人数：" + value + "人";
          }

          for (var i = 1; i < treePathInfo.length; i++) {
            treePath.push(treePathInfo[i].name);
          }

          return [
            '<div class="tooltip-title">' + formatUtil.encodeHTML(treePath.join('/')) + '</div>',
            '' + temp
          ].join('');
        }
      },
      series: [{
        name: 'HighTech',
        type: 'treemap',
        visibleMin: 300,
        left:20,
        top:50,
        right:20,
        bottom:30,
        label: {
          show: true,
          formatter: '{b}',
          ellipsis:false,
          // fontSize:6,
          // color:"#acacac"
        },
        upperLabel: {
          normal: {
            show: true,
            height: 30
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#fffff'
          }
        },
        levels: getLevelOption(),
        data: [{
          "name": "管理层",
          "value": "20",
          "discretion": "1",
          "children": [{
            "name": "1067",
            "value": "10",
            "discretion": "总经理",
          }]

        }, {
          "name": "人力资源部门",
          "value": "38",
          "discretion": "18",

          "children": [{
            "name": "1104",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1110",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1118",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1149",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1165",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1184",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1249",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1251",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1295",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1300",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1312",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1363",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1371",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1378",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1433",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1473",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1499",
            "value": "1",
            "discretion": "人力资源-普通员工"
          }, {
            "name": "1013",
            "value": "6",
            "discretion": "人力资源部长",

          }]
        }, {
          "name": "财务部门",
          "value": "44",
          "discretion": "24",

          "children": [{
            "name": "1108",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1124",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1137",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1180",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1186",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1213",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1226",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1248",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1253",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1255",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1293",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1327",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1342",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1346",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1347",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1368",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1369",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1370",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1431",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1439",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1451",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1467",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1498",
            "value": "1",
            "discretion": "财务-普通员工"
          }, {
            "name": "1041",
            "value": "6",
            "discretion": "财务部长",

          }]
        }, {
          "name": "研发部门",
          "value": "650",
          "discretion": "256",

          "children": [{
              "name": "研发部门1",
              "value": "210",
              "discretion": "88",

              "children": [{
                  "name": "研发小组1-1",
                  "value": "17",
                  "discretion": 7,

                  "children": [{
                    "name": "1141",
                    "value": "1",
                    "discretion": "普通员工1-1"
                  }, {
                    "name": "1151",
                    "value": "1",
                    "discretion": "普通员工1-1"
                  }, {
                    "name": "1220",
                    "value": "1",
                    "discretion": "普通员工1-1"
                  }, {
                    "name": "1286",
                    "value": "1",
                    "discretion": "普通员工1-1"
                  }, {
                    "name": "1373",
                    "value": "1",
                    "discretion": "普通员工1-1"
                  }, {
                    "name": "1494",
                    "value": "1",
                    "discretion": "普通员工1-1"
                  }, {
                    "name": "1087",
                    "value": "2",
                    "discretion": "组长1-1",

                  }]
                }, {
                  "name": "研发小组1-2",
                  "value": "16",
                  "discretion": 6,

                  "children": [{
                    "name": "1112",
                    "value": "1",
                    "discretion": "普通员工1-2"
                  }, {
                    "name": "1270",
                    "value": "1",
                    "discretion": "普通员工1-2"
                  }, {
                    "name": "1301",
                    "value": "1",
                    "discretion": "普通员工1-2"
                  }, {
                    "name": "1308",
                    "value": "1",
                    "discretion": "普通员工1-2"
                  }, {
                    "name": "1344",
                    "value": "1",
                    "discretion": "普通员工1-2"
                  }, {
                    "name": "1092",
                    "value": "2",
                    "discretion": "组长1-2",

                  }]
                }, {
                  "name": "研发小组1-3",
                  "value": "24",
                  "discretion": 14,

                  "children": [{
                    "name": "1169",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1183",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1233",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1243",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1357",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1408",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1423",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1425",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1455",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1459",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1464",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1471",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1491",
                    "value": "1",
                    "discretion": "普通员工1-3"
                  }, {
                    "name": "1115",
                    "value": "2",
                    "discretion": "组长1-3",

                  }]
                }, {
                  "name": "研发小组1-4",
                  "value": "14",
                  "discretion": 4,

                  "children": [{
                    "name": "1113",
                    "value": "1",
                    "discretion": "普通员工1-4"
                  }, {
                    "name": "1307",
                    "value": "1",
                    "discretion": "普通员工1-4"
                  }, {
                    "name": "1398",
                    "value": "1",
                    "discretion": "普通员工1-4"
                  }, {
                    "name": "1125",
                    "value": "2",
                    "discretion": "组长1-4",

                  }]
                }, {
                  "name": "研发小组1-5",
                  "value": "23",
                  "discretion": 13,

                  "children": [{
                    "name": "1132",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1246",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1257",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1314",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1345",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1397",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1436",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1466",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1475",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1477",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1480",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1490",
                    "value": "1",
                    "discretion": "普通员工1-5"
                  }, {
                    "name": "1172",
                    "value": "2",
                    "discretion": "组长1-5",

                  }]
                }, {
                  "name": "研发小组1-6",
                  "value": "18",
                  "discretion": 8,

                  "children": [{
                    "name": "1140",
                    "value": "1",
                    "discretion": "普通员工1-6"
                  }, {
                    "name": "1210",
                    "value": "1",
                    "discretion": "普通员工1-6"
                  }, {
                    "name": "1282",
                    "value": "1",
                    "discretion": "普通员工1-6"
                  }, {
                    "name": "1303",
                    "value": "1",
                    "discretion": "普通员工1-6"
                  }, {
                    "name": "1340",
                    "value": "1",
                    "discretion": "普通员工1-6"
                  }, {
                    "name": "1403",
                    "value": "1",
                    "discretion": "普通员工1-6"
                  }, {
                    "name": "1484",
                    "value": "1",
                    "discretion": "普通员工1-6"
                  }, {
                    "name": "1192",
                    "value": "2",
                    "discretion": "组长1-6",

                  }]
                }, {
                  "name": "研发小组1-7",
                  "value": "16",
                  "discretion": 6,

                  "children": [{
                    "name": "1197",
                    "value": "1",
                    "discretion": "普通员工1-7"
                  }, {
                    "name": "1278",
                    "value": "1",
                    "discretion": "普通员工1-7"
                  }, {
                    "name": "1348",
                    "value": "1",
                    "discretion": "普通员工1-7"
                  }, {
                    "name": "1391",
                    "value": "1",
                    "discretion": "普通员工1-7"
                  }, {
                    "name": "1486",
                    "value": "1",
                    "discretion": "普通员工1-7"
                  }, {
                    "name": "1199",
                    "value": "2",
                    "discretion": "组长1-7",

                  }]
                }, {
                  "name": "研发小组1-8",
                  "value": "29",
                  "discretion": 19,

                  "children": [{
                    "name": "1102",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1106",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1134",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1195",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1205",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1221",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1275",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1281",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1299",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1323",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1326",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1351",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1393",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1406",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1416",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1417",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1429",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1495",
                    "value": "1",
                    "discretion": "普通员工1-8"
                  }, {
                    "name": "1224",
                    "value": "2",
                    "discretion": "组长1-8",

                  }]
                }, {
                  "name": "研发小组1-9",
                  "value": "20",
                  "discretion": 10,

                  "children": [{
                    "name": "1129",
                    "value": "1",
                    "discretion": "普通员工1-9"
                  }, {
                    "name": "1167",
                    "value": "1",
                    "discretion": "普通员工1-9"
                  }, {
                    "name": "1182",
                    "value": "1",
                    "discretion": "普通员工1-9"
                  }, {
                    "name": "1200",
                    "value": "1",
                    "discretion": "普通员工1-9"
                  }, {
                    "name": "1223",
                    "value": "1",
                    "discretion": "普通员工1-9"
                  }, {
                    "name": "1252",
                    "value": "1",
                    "discretion": "普通员工1-9"
                  }, {
                    "name": "1265",
                    "value": "1",
                    "discretion": "普通员工1-9"
                  }, {
                    "name": "1354",
                    "value": "1",
                    "discretion": "普通员工1-9"
                  }, {
                    "name": "1404",
                    "value": "1",
                    "discretion": "普通员工1-9"
                  }, {
                    "name": "1230",
                    "value": "2",
                    "discretion": "组长1-9",

                  }]
                },
                {
                  "name": "1007",
                  "value": "6",
                  "discretion": "研发1部长",

                }
              ]
            },
            {
              "name": "研发部门2",
              "value": "240",
              "discretion": "106",

              "children": [{
                  "name": "研发小组2-1",
                  "value": "17",
                  "discretion": 7,


                  "children": [{
                    "name": "1142",
                    "value": "1",
                    "discretion": "普通员工2-1"
                  }, {
                    "name": "1150",
                    "value": "1",
                    "discretion": "普通员工2-1"
                  }, {
                    "name": "1173",
                    "value": "1",
                    "discretion": "普通员工2-1"
                  }, {
                    "name": "1361",
                    "value": "1",
                    "discretion": "普通员工2-1"
                  }, {
                    "name": "1374",
                    "value": "1",
                    "discretion": "普通员工2-1"
                  }, {
                    "name": "1410",
                    "value": "1",
                    "discretion": "普通员工2-1"
                  }, {
                    "name": "1057",
                    "value": "2",
                    "discretion": "组长2-1",

                  }]
                }, {
                  "name": "研发小组2-2",
                  "value": "22",
                  "discretion": 12,

                  "children": [{
                    "name": "1130",
                    "value": "1",
                    "discretion": "普通员工2-2"
                  }, {
                    "name": "1171",
                    "value": "1",
                    "discretion": "普通员工2-2"
                  }, {
                    "name": "1202",
                    "value": "1",
                    "discretion": "普通员工2-2"
                  }, {
                    "name": "1245",
                    "value": "1",
                    "discretion": "普通员工2-2"
                  }, {
                    "name": "1261",
                    "value": "1",
                    "discretion": "普通员工2-2"
                  }, {
                    "name": "1333",
                    "value": "1",
                    "discretion": "普通员工2-2"
                  }, {
                    "name": "1383",
                    "value": "1",
                    "discretion": "普通员工2-2"
                  }, {
                    "name": "1424",
                    "value": "1",
                    "discretion": "普通员工2-2"
                  }, {
                    "name": "1445",
                    "value": "1",
                    "discretion": "普通员工2-2"
                  }, {
                    "name": "1450",
                    "value": "1",
                    "discretion": "普通员工2-2"
                  }, {
                    "name": "1489",
                    "value": "1",
                    "discretion": "普通员工2-2"
                  }, {
                    "name": "1058",
                    "value": "2",
                    "discretion": "组长2-2",

                  }]
                }, {
                  "name": "研发小组2-3",
                  "value": "15",
                  "discretion": 5,

                  "children": [{
                    "name": "1219",
                    "value": "1",
                    "discretion": "普通员工2-3"
                  }, {
                    "name": "1262",
                    "value": "1",
                    "discretion": "普通员工2-3"
                  }, {
                    "name": "1395",
                    "value": "1",
                    "discretion": "普通员工2-3"
                  }, {
                    "name": "1482",
                    "value": "1",
                    "discretion": "普通员工2-3"
                  }, {
                    "name": "1079",
                    "value": "2",
                    "discretion": "组长2-3",

                  }]
                }, {
                  "name": "研发小组2-4",
                  "value": "11",
                  "discretion": 11,

                  "children": [{
                    "name": "1181",
                    "value": "1",
                    "discretion": "普通员工2-4"
                  }, {
                    "name": "1193",
                    "value": "1",
                    "discretion": "普通员工2-4"
                  }, {
                    "name": "1194",
                    "value": "1",
                    "discretion": "普通员工2-4"
                  }, {
                    "name": "1297",
                    "value": "1",
                    "discretion": "普通员工2-4"
                  }, {
                    "name": "1311",
                    "value": "1",
                    "discretion": "普通员工2-4"
                  }, {
                    "name": "1364",
                    "value": "1",
                    "discretion": "普通员工2-4"
                  }, {
                    "name": "1376",
                    "value": "1",
                    "discretion": "普通员工2-4"
                  }, {
                    "name": "1384",
                    "value": "1",
                    "discretion": "普通员工2-4"
                  }, {
                    "name": "1422",
                    "value": "1",
                    "discretion": "普通员工2-4"
                  }, {
                    "name": "1449",
                    "value": "1",
                    "discretion": "普通员工2-4"
                  }, {
                    "name": "1080",
                    "value": "2",
                    "discretion": "组长2-4",

                  }]
                }, {
                  "name": "研发小组2-5",
                  "value": "16",
                  "discretion": 6,

                  "children": [{
                    "name": "1239",
                    "value": "1",
                    "discretion": "普通员工2-5"
                  }, {
                    "name": "1254",
                    "value": "1",
                    "discretion": "普通员工2-5"
                  }, {
                    "name": "1402",
                    "value": "1",
                    "discretion": "普通员工2-5"
                  }, {
                    "name": "1478",
                    "value": "1",
                    "discretion": "普通员工2-5"
                  }, {
                    "name": "1500",
                    "value": "1",
                    "discretion": "普通员工2-5"
                  }, {
                    "name": "1096",
                    "value": "2",
                    "discretion": "组长2-5",

                  }]
                }, {
                  "name": "研发小组2-6",
                  "value": "21",
                  "discretion": 11,

                  "children": [{
                    "name": "1175",
                    "value": "1",
                    "discretion": "普通员工2-6"
                  }, {
                    "name": "1179",
                    "value": "1",
                    "discretion": "普通员工2-6"
                  }, {
                    "name": "1241",
                    "value": "1",
                    "discretion": "普通员工2-6"
                  }, {
                    "name": "1313",
                    "value": "1",
                    "discretion": "普通员工2-6"
                  }, {
                    "name": "1325",
                    "value": "1",
                    "discretion": "普通员工2-6"
                  }, {
                    "name": "1338",
                    "value": "1",
                    "discretion": "普通员工2-6"
                  }, {
                    "name": "1350",
                    "value": "1",
                    "discretion": "普通员工2-6"
                  }, {
                    "name": "1352",
                    "value": "1",
                    "discretion": "普通员工2-6"
                  }, {
                    "name": "1356",
                    "value": "1",
                    "discretion": "普通员工2-6"
                  }, {
                    "name": "1461",
                    "value": "1",
                    "discretion": "普通员工2-6"
                  }, {
                    "name": "1101",
                    "value": "2",
                    "discretion": "组长2-6",

                  }]
                }, {
                  "name": "研发小组2-7",
                  "value": "21",
                  "discretion": 11,

                  "children": [{
                    "name": "1135",
                    "value": "1",
                    "discretion": "普通员工2-7"
                  }, {
                    "name": "1148",
                    "value": "1",
                    "discretion": "普通员工2-7"
                  }, {
                    "name": "1238",
                    "value": "1",
                    "discretion": "普通员工2-7"
                  }, {
                    "name": "1244",
                    "value": "1",
                    "discretion": "普通员工2-7"
                  }, {
                    "name": "1268",
                    "value": "1",
                    "discretion": "普通员工2-7"
                  }, {
                    "name": "1274",
                    "value": "1",
                    "discretion": "普通员工2-7"
                  }, {
                    "name": "1291",
                    "value": "1",
                    "discretion": "普通员工2-7"
                  }, {
                    "name": "1360",
                    "value": "1",
                    "discretion": "普通员工2-7"
                  }, {
                    "name": "1390",
                    "value": "1",
                    "discretion": "普通员工2-7"
                  }, {
                    "name": "1401",
                    "value": "1",
                    "discretion": "普通员工2-7"
                  }, {
                    "name": "1119",
                    "value": "2",
                    "discretion": "组长2-7",

                  }]
                }, {
                  "name": "研发小组2-8",
                  "value": "22",
                  "discretion": 12,

                  "children": [{
                    "name": "1163",
                    "value": "1",
                    "discretion": "普通员工2-8"
                  }, {
                    "name": "1217",
                    "value": "1",
                    "discretion": "普通员工2-8"
                  }, {
                    "name": "1279",
                    "value": "1",
                    "discretion": "普通员工2-8"
                  }, {
                    "name": "1304",
                    "value": "1",
                    "discretion": "普通员工2-8"
                  }, {
                    "name": "1324",
                    "value": "1",
                    "discretion": "普通员工2-8"
                  }, {
                    "name": "1355",
                    "value": "1",
                    "discretion": "普通员工2-8"
                  }, {
                    "name": "1367",
                    "value": "1",
                    "discretion": "普通员工2-8"
                  }, {
                    "name": "1380",
                    "value": "1",
                    "discretion": "普通员工2-8"
                  }, {
                    "name": "1381",
                    "value": "1",
                    "discretion": "普通员工2-8"
                  }, {
                    "name": "1434",
                    "value": "1",
                    "discretion": "普通员工2-8"
                  }, {
                    "name": "1438",
                    "value": "1",
                    "discretion": "普通员工2-8"
                  }, {
                    "name": "1143",
                    "value": "2",
                    "discretion": "组长2-8",

                  }]
                }, {
                  "name": "研发小组2-9",
                  "value": "22",
                  "discretion": 12,

                  "children": [{
                    "name": "1206",
                    "value": "1",
                    "discretion": "普通员工2-9"
                  }, {
                    "name": "1216",
                    "value": "1",
                    "discretion": "普通员工2-9"
                  }, {
                    "name": "1267",
                    "value": "1",
                    "discretion": "普通员工2-9"
                  }, {
                    "name": "1283",
                    "value": "1",
                    "discretion": "普通员工2-9"
                  }, {
                    "name": "1332",
                    "value": "1",
                    "discretion": "普通员工2-9"
                  }, {
                    "name": "1389",
                    "value": "1",
                    "discretion": "普通员工2-9"
                  }, {
                    "name": "1409",
                    "value": "1",
                    "discretion": "普通员工2-9"
                  }, {
                    "name": "1421",
                    "value": "1",
                    "discretion": "普通员工2-9"
                  }, {
                    "name": "1444",
                    "value": "1",
                    "discretion": "普通员工2-9"
                  }, {
                    "name": "1462",
                    "value": "1",
                    "discretion": "普通员工2-9"
                  }, {
                    "name": "1470",
                    "value": "1",
                    "discretion": "普通员工2-9"
                  }, {
                    "name": "1155",
                    "value": "2",
                    "discretion": "组长2-9",

                  }]
                }, {
                  "name": "研发小组2-10",
                  "value": "19",
                  "discretion": 9,

                  "children": [{
                    "name": "1164",
                    "value": "1",
                    "discretion": "普通员工2-10"
                  }, {
                    "name": "1231",
                    "value": "1",
                    "discretion": "普通员工2-10"
                  }, {
                    "name": "1284",
                    "value": "1",
                    "discretion": "普通员工2-10"
                  }, {
                    "name": "1287",
                    "value": "1",
                    "discretion": "普通员工2-10"
                  }, {
                    "name": "1365",
                    "value": "1",
                    "discretion": "普通员工2-10"
                  }, {
                    "name": "1382",
                    "value": "1",
                    "discretion": "普通员工2-10"
                  }, {
                    "name": "1411",
                    "value": "1",
                    "discretion": "普通员工2-10"
                  }, {
                    "name": "1497",
                    "value": "1",
                    "discretion": "普通员工2-10"
                  }, {
                    "name": "1211",
                    "value": "2",
                    "discretion": "组长2-10",

                  }]
                },
                {
                  "name": "研发小组2-11",
                  "value": "19",
                  "discretion": 9,

                  "children": [{
                    "name": "1174",
                    "value": "1",
                    "discretion": "普通员工2-11"
                  }, {
                    "name": "1177",
                    "value": "1",
                    "discretion": "普通员工2-11"
                  }, {
                    "name": "1178",
                    "value": "1",
                    "discretion": "普通员工2-11"
                  }, {
                    "name": "1273",
                    "value": "1",
                    "discretion": "普通员工2-11"
                  }, {
                    "name": "1290",
                    "value": "1",
                    "discretion": "普通员工2-11"
                  }, {
                    "name": "1394",
                    "value": "1",
                    "discretion": "普通员工2-11"
                  }, {
                    "name": "1465",
                    "value": "1",
                    "discretion": "普通员工2-11"
                  }, {
                    "name": "1487",
                    "value": "1",
                    "discretion": "普通员工2-11"
                  }, {
                    "name": "1228",
                    "value": "2",
                    "discretion": "组长2-11",

                  }]
                },
                {
                  "name": "1059",
                  "value": "6",
                  "discretion": "研发2部长",

                }
              ]
            },
            {
              "name": "研发部门3",
              "value": "160",
              "discretion": "62",

              "children": [{
                  "name": "研发小组3-1",
                  "value": "20",
                  "discretion": 10,

                  "children": [{
                    "name": "1145",
                    "value": "1",
                    "discretion": "普通员工3-1"
                  }, {
                    "name": "1306",
                    "value": "1",
                    "discretion": "普通员工3-1"
                  }, {
                    "name": "1328",
                    "value": "1",
                    "discretion": "普通员工3-1"
                  }, {
                    "name": "1336",
                    "value": "1",
                    "discretion": "普通员工3-1"
                  }, {
                    "name": "1359",
                    "value": "1",
                    "discretion": "普通员工3-1"
                  }, {
                    "name": "1396",
                    "value": "1",
                    "discretion": "普通员工3-1"
                  }, {
                    "name": "1440",
                    "value": "1",
                    "discretion": "普通员工3-1"
                  }, {
                    "name": "1446",
                    "value": "1",
                    "discretion": "普通员工3-1"
                  }, {
                    "name": "1457",
                    "value": "1",
                    "discretion": "普通员工3-1"
                  }, {
                    "name": "1060",
                    "value": "2",
                    "discretion": "组长3-1",

                  }]
                }, {
                  "name": "研发小组3-2",
                  "value": "16",
                  "discretion": 6,

                  "children": [{
                    "name": "1127",
                    "value": "1",
                    "discretion": "普通员工3-2"
                  }, {
                    "name": "1277",
                    "value": "1",
                    "discretion": "普通员工3-2"
                  }, {
                    "name": "1334",
                    "value": "1",
                    "discretion": "普通员工3-2"
                  }, {
                    "name": "1343",
                    "value": "1",
                    "discretion": "普通员工3-2"
                  }, {
                    "name": "1496",
                    "value": "1",
                    "discretion": "普通员工3-2"
                  }, {
                    "name": "1098",
                    "value": "2",
                    "discretion": "组长3-2",

                  }]
                }, {
                  "name": "研发小组3-3",
                  "value": "26",
                  "discretion": 16,

                  "children": [{
                    "name": "1139",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1147",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1159",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1170",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1234",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1305",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1321",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1362",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1379",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1385",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1405",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1458",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1474",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1481",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1493",
                    "value": "1",
                    "discretion": "普通员工3-3"
                  }, {
                    "name": "1100",
                    "value": "2",
                    "discretion": "组长3-3",

                  }]
                }, {
                  "name": "研发小组3-4",
                  "value": "15",
                  "discretion": 5,

                  "children": [{
                    "name": "1152",
                    "value": "1",
                    "discretion": "普通员工3-4"
                  }, {
                    "name": "1176",
                    "value": "1",
                    "discretion": "普通员工3-4"
                  }, {
                    "name": "1315",
                    "value": "1",
                    "discretion": "普通员工3-4"
                  }, {
                    "name": "1420",
                    "value": "1",
                    "discretion": "普通员工3-4"
                  }, {
                    "name": "1154",
                    "value": "2",
                    "discretion": "组长3-4",

                  }]
                }, {
                  "name": "研发小组3-5",
                  "value": "18",
                  "discretion": 8,

                  "children": [{
                    "name": "1156",
                    "value": "1",
                    "discretion": "普通员工3-5"
                  }, {
                    "name": "1204",
                    "value": "1",
                    "discretion": "普通员工3-5"
                  }, {
                    "name": "1428",
                    "value": "1",
                    "discretion": "普通员工3-5"
                  }, {
                    "name": "1435",
                    "value": "1",
                    "discretion": "普通员工3-5"
                  }, {
                    "name": "1456",
                    "value": "1",
                    "discretion": "普通员工3-5"
                  }, {
                    "name": "1469",
                    "value": "1",
                    "discretion": "普通员工3-5"
                  }, {
                    "name": "1483",
                    "value": "1",
                    "discretion": "普通员工3-5"
                  }, {
                    "name": "1191",
                    "value": "2",
                    "discretion": "组长3-5",

                  }]
                }, {
                  "name": "研发小组3-6",
                  "value": "18",
                  "discretion": 8,

                  "children": [{
                    "name": "1103",
                    "value": "1",
                    "discretion": "普通员工3-6"
                  }, {
                    "name": "1189",
                    "value": "1",
                    "discretion": "普通员工3-6"
                  }, {
                    "name": "1263",
                    "value": "1",
                    "discretion": "普通员工3-6"
                  }, {
                    "name": "1296",
                    "value": "1",
                    "discretion": "普通员工3-6"
                  }, {
                    "name": "1319",
                    "value": "1",
                    "discretion": "普通员工3-6"
                  }, {
                    "name": "1330",
                    "value": "1",
                    "discretion": "普通员工3-6"
                  }, {
                    "name": "1399",
                    "value": "1",
                    "discretion": "普通员工3-6"
                  }, {
                    "name": "1207",
                    "value": "2",
                    "discretion": "组长3-6",


                  }]
                }, {
                  "name": "研发小组3-7",
                  "value": "18",
                  "discretion": 8,

                  "children": [{
                    "name": "1126",
                    "value": "1",
                    "discretion": "普通员工3-7"
                  }, {
                    "name": "1153",
                    "value": "1",
                    "discretion": "普通员工3-7"
                  }, {
                    "name": "1322",
                    "value": "1",
                    "discretion": "普通员工3-7"
                  }, {
                    "name": "1339",
                    "value": "1",
                    "discretion": "普通员工3-7"
                  }, {
                    "name": "1349",
                    "value": "1",
                    "discretion": "普通员工3-7"
                  }, {
                    "name": "1388",
                    "value": "1",
                    "discretion": "普通员工3-7"
                  }, {
                    "name": "1460",
                    "value": "1",
                    "discretion": "普通员工3-7"
                  }, {
                    "name": "1209",
                    "value": "2",
                    "discretion": "组长3-7",

                  }]
                },
                {
                  "name": "1068",
                  "value": "6",
                  "discretion": "研发3部长",

                }
              ]
            }
          ]
        }]
      }]
    };

    this.chartOrgan = echarts.init(document.getElementById('chartOrgan'), 'halloween')
    this.chartOrgan.setOption(orgOption)

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.organization {
    border: #ccc 1px solid;
    margin-left: 10px;

}
</style>
