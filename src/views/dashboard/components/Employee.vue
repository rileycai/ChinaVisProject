<template>
<div class="employee">
  <div id="chartEmp" style="width:100%; height:800px;"></div>
</div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/halloween')

export default {
  name: 'Employee',
  data() {
    return {
      chartEmp: "",
      depOption: {
        title: {
        text: '人员组织结构',
        subtext: '299位员工，三大部门',
        x: 'right',
        padding:[10,10]
        },
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
          formatter: function(x) {
            if (!isNaN(x.data.value)) {
              return x.data.name + " : " + x.data.value + "人";
            } else {
              return "id : " + x.data.name + "</br>职位 ：" + x.data.value;
            }

          }
        },
        series: [{
          type: 'tree',
          data: [{
            "name": "HighTech",
            "value": "299",
            "itemStyle": {
              "borderColor": "#a0a7e6"
            },
            "children": [{
              "name": "1067",
              "value": "总经理",
              "itemStyle": {
                "borderColor": "#626c91"
              }
            }, {
              "name": "人力资源部门",
              "value": "18",
              "itemStyle": {
                "borderColor": "#6be6c1"
              },
              "children": [{
                "name": "1104",
                "value": "人力资源-普通员工"
              }, {
                "name": "1110",
                "value": "人力资源-普通员工"
              }, {
                "name": "1118",
                "value": "人力资源-普通员工"
              }, {
                "name": "1149",
                "value": "人力资源-普通员工"
              }, {
                "name": "1165",
                "value": "人力资源-普通员工"
              }, {
                "name": "1184",
                "value": "人力资源-普通员工"
              }, {
                "name": "1249",
                "value": "人力资源-普通员工"
              }, {
                "name": "1251",
                "value": "人力资源-普通员工"
              }, {
                "name": "1295",
                "value": "人力资源-普通员工"
              }, {
                "name": "1300",
                "value": "人力资源-普通员工"
              }, {
                "name": "1312",
                "value": "人力资源-普通员工"
              }, {
                "name": "1363",
                "value": "人力资源-普通员工"
              }, {
                "name": "1371",
                "value": "人力资源-普通员工"
              }, {
                "name": "1378",
                "value": "人力资源-普通员工"
              }, {
                "name": "1433",
                "value": "人力资源-普通员工"
              }, {
                "name": "1473",
                "value": "人力资源-普通员工"
              }, {
                "name": "1499",
                "value": "人力资源-普通员工"
              }, {
                "name": "1013",
                "value": "人力资源部长",
                "itemStyle": {
                  "borderColor": "#626c91"
                },
              }]
            }, {
              "name": "财务部门",
              "value": "24",
              "itemStyle": {
                "borderColor": "#6be6c1"
              },
              "children": [{
                "name": "1108",
                "value": "财务-普通员工"
              }, {
                "name": "1124",
                "value": "财务-普通员工"
              }, {
                "name": "1137",
                "value": "财务-普通员工"
              }, {
                "name": "1180",
                "value": "财务-普通员工"
              }, {
                "name": "1186",
                "value": "财务-普通员工"
              }, {
                "name": "1213",
                "value": "财务-普通员工"
              }, {
                "name": "1226",
                "value": "财务-普通员工"
              }, {
                "name": "1248",
                "value": "财务-普通员工"
              }, {
                "name": "1253",
                "value": "财务-普通员工"
              }, {
                "name": "1255",
                "value": "财务-普通员工"
              }, {
                "name": "1293",
                "value": "财务-普通员工"
              }, {
                "name": "1327",
                "value": "财务-普通员工"
              }, {
                "name": "1342",
                "value": "财务-普通员工"
              }, {
                "name": "1346",
                "value": "财务-普通员工"
              }, {
                "name": "1347",
                "value": "财务-普通员工"
              }, {
                "name": "1368",
                "value": "财务-普通员工"
              }, {
                "name": "1369",
                "value": "财务-普通员工"
              }, {
                "name": "1370",
                "value": "财务-普通员工"
              }, {
                "name": "1431",
                "value": "财务-普通员工"
              }, {
                "name": "1439",
                "value": "财务-普通员工"
              }, {
                "name": "1451",
                "value": "财务-普通员工"
              }, {
                "name": "1467",
                "value": "财务-普通员工"
              }, {
                "name": "1498",
                "value": "财务-普通员工"
              }, {
                "name": "1041",
                "value": "财务部长",
                "itemStyle": {
                  "borderColor": "#626c91"
                }
              }]
            }, {
              "name": "研发部门",
              "value": "256",
              "itemStyle": {
                "borderColor": "#6be6c1"
              },
              "children": [{
                  "name": "研发部门1",
                  "value": "88",
                  "itemStyle": {
                    "borderColor": "#c4ebad"
                  },
                  "children": [{
                      "name": "研发小组1-1",
                      "value": 7,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1141",
                        "value": "普通员工1-1"
                      }, {
                        "name": "1151",
                        "value": "普通员工1-1"
                      }, {
                        "name": "1220",
                        "value": "普通员工1-1"
                      }, {
                        "name": "1286",
                        "value": "普通员工1-1"
                      }, {
                        "name": "1373",
                        "value": "普通员工1-1"
                      }, {
                        "name": "1494",
                        "value": "普通员工1-1"
                      }, {
                        "name": "1087",
                        "value": "组长1-1",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组1-2",
                      "value": 6,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1112",
                        "value": "普通员工1-2"
                      }, {
                        "name": "1270",
                        "value": "普通员工1-2"
                      }, {
                        "name": "1301",
                        "value": "普通员工1-2"
                      }, {
                        "name": "1308",
                        "value": "普通员工1-2"
                      }, {
                        "name": "1344",
                        "value": "普通员工1-2"
                      }, {
                        "name": "1092",
                        "value": "组长1-2",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组1-3",
                      "value": 14,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1169",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1183",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1233",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1243",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1357",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1408",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1423",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1425",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1455",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1459",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1464",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1471",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1491",
                        "value": "普通员工1-3"
                      }, {
                        "name": "1115",
                        "value": "组长1-3",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组1-4",
                      "value": 4,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1113",
                        "value": "普通员工1-4"
                      }, {
                        "name": "1307",
                        "value": "普通员工1-4"
                      }, {
                        "name": "1398",
                        "value": "普通员工1-4"
                      }, {
                        "name": "1125",
                        "value": "组长1-4",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组1-5",
                      "value": 13,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1132",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1246",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1257",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1314",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1345",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1397",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1436",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1466",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1475",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1477",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1480",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1490",
                        "value": "普通员工1-5"
                      }, {
                        "name": "1172",
                        "value": "组长1-5",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组1-6",
                      "value": 8,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1140",
                        "value": "普通员工1-6"
                      }, {
                        "name": "1210",
                        "value": "普通员工1-6"
                      }, {
                        "name": "1282",
                        "value": "普通员工1-6"
                      }, {
                        "name": "1303",
                        "value": "普通员工1-6"
                      }, {
                        "name": "1340",
                        "value": "普通员工1-6"
                      }, {
                        "name": "1403",
                        "value": "普通员工1-6"
                      }, {
                        "name": "1484",
                        "value": "普通员工1-6"
                      }, {
                        "name": "1192",
                        "value": "组长1-6",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组1-7",
                      "value": 6,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1197",
                        "value": "普通员工1-7"
                      }, {
                        "name": "1278",
                        "value": "普通员工1-7"
                      }, {
                        "name": "1348",
                        "value": "普通员工1-7"
                      }, {
                        "name": "1391",
                        "value": "普通员工1-7"
                      }, {
                        "name": "1486",
                        "value": "普通员工1-7"
                      }, {
                        "name": "1199",
                        "value": "组长1-7",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组1-8",
                      "value": 19,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1102",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1106",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1134",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1195",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1205",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1221",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1275",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1281",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1299",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1323",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1326",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1351",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1393",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1406",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1416",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1417",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1429",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1495",
                        "value": "普通员工1-8"
                      }, {
                        "name": "1224",
                        "value": "组长1-8",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组1-9",
                      "value": 10,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1129",
                        "value": "普通员工1-9"
                      }, {
                        "name": "1167",
                        "value": "普通员工1-9"
                      }, {
                        "name": "1182",
                        "value": "普通员工1-9"
                      }, {
                        "name": "1200",
                        "value": "普通员工1-9"
                      }, {
                        "name": "1223",
                        "value": "普通员工1-9"
                      }, {
                        "name": "1252",
                        "value": "普通员工1-9"
                      }, {
                        "name": "1265",
                        "value": "普通员工1-9"
                      }, {
                        "name": "1354",
                        "value": "普通员工1-9"
                      }, {
                        "name": "1404",
                        "value": "普通员工1-9"
                      }, {
                        "name": "1230",
                        "value": "组长1-9",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    },
                    {
                      "name": "1007",
                      "value": "研发1部长",
                      "itemStyle": {
                        "borderColor": "#626c91"
                      }
                    }
                  ]
                },
                {
                  "name": "研发部门2",
                  "value": "106",
                  "itemStyle": {
                    "borderColor": "#c4ebad"
                  },
                  "children": [{
                      "name": "研发小组2-1",
                      "value": 7,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },

                      "children": [{
                        "name": "1142",
                        "value": "普通员工2-1"
                      }, {
                        "name": "1150",
                        "value": "普通员工2-1"
                      }, {
                        "name": "1173",
                        "value": "普通员工2-1"
                      }, {
                        "name": "1361",
                        "value": "普通员工2-1"
                      }, {
                        "name": "1374",
                        "value": "普通员工2-1"
                      }, {
                        "name": "1410",
                        "value": "普通员工2-1"
                      }, {
                        "name": "1057",
                        "value": "组长2-1",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组2-2",
                      "value": 12,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1130",
                        "value": "普通员工2-2"
                      }, {
                        "name": "1171",
                        "value": "普通员工2-2"
                      }, {
                        "name": "1202",
                        "value": "普通员工2-2"
                      }, {
                        "name": "1245",
                        "value": "普通员工2-2"
                      }, {
                        "name": "1261",
                        "value": "普通员工2-2"
                      }, {
                        "name": "1333",
                        "value": "普通员工2-2"
                      }, {
                        "name": "1383",
                        "value": "普通员工2-2"
                      }, {
                        "name": "1424",
                        "value": "普通员工2-2"
                      }, {
                        "name": "1445",
                        "value": "普通员工2-2"
                      }, {
                        "name": "1450",
                        "value": "普通员工2-2"
                      }, {
                        "name": "1489",
                        "value": "普通员工2-2"
                      }, {
                        "name": "1058",
                        "value": "组长2-2",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组2-3",
                      "value": 5,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1219",
                        "value": "普通员工2-3"
                      }, {
                        "name": "1262",
                        "value": "普通员工2-3"
                      }, {
                        "name": "1395",
                        "value": "普通员工2-3"
                      }, {
                        "name": "1482",
                        "value": "普通员工2-3"
                      }, {
                        "name": "1079",
                        "value": "组长2-3",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组2-4",
                      "value": 11,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1181",
                        "value": "普通员工2-4"
                      }, {
                        "name": "1193",
                        "value": "普通员工2-4"
                      }, {
                        "name": "1194",
                        "value": "普通员工2-4"
                      }, {
                        "name": "1297",
                        "value": "普通员工2-4"
                      }, {
                        "name": "1311",
                        "value": "普通员工2-4"
                      }, {
                        "name": "1364",
                        "value": "普通员工2-4"
                      }, {
                        "name": "1376",
                        "value": "普通员工2-4"
                      }, {
                        "name": "1384",
                        "value": "普通员工2-4"
                      }, {
                        "name": "1422",
                        "value": "普通员工2-4"
                      }, {
                        "name": "1449",
                        "value": "普通员工2-4"
                      }, {
                        "name": "1080",
                        "value": "组长2-4",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组2-5",
                      "value": 6,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1239",
                        "value": "普通员工2-5"
                      }, {
                        "name": "1254",
                        "value": "普通员工2-5"
                      }, {
                        "name": "1402",
                        "value": "普通员工2-5"
                      }, {
                        "name": "1478",
                        "value": "普通员工2-5"
                      }, {
                        "name": "1500",
                        "value": "普通员工2-5"
                      }, {
                        "name": "1096",
                        "value": "组长2-5",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组2-6",
                      "value": 11,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1175",
                        "value": "普通员工2-6"
                      }, {
                        "name": "1179",
                        "value": "普通员工2-6"
                      }, {
                        "name": "1241",
                        "value": "普通员工2-6"
                      }, {
                        "name": "1313",
                        "value": "普通员工2-6"
                      }, {
                        "name": "1325",
                        "value": "普通员工2-6"
                      }, {
                        "name": "1338",
                        "value": "普通员工2-6"
                      }, {
                        "name": "1350",
                        "value": "普通员工2-6"
                      }, {
                        "name": "1352",
                        "value": "普通员工2-6"
                      }, {
                        "name": "1356",
                        "value": "普通员工2-6"
                      }, {
                        "name": "1461",
                        "value": "普通员工2-6"
                      }, {
                        "name": "1101",
                        "value": "组长2-6",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组2-7",
                      "value": 11,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1135",
                        "value": "普通员工2-7"
                      }, {
                        "name": "1148",
                        "value": "普通员工2-7"
                      }, {
                        "name": "1238",
                        "value": "普通员工2-7"
                      }, {
                        "name": "1244",
                        "value": "普通员工2-7"
                      }, {
                        "name": "1268",
                        "value": "普通员工2-7"
                      }, {
                        "name": "1274",
                        "value": "普通员工2-7"
                      }, {
                        "name": "1291",
                        "value": "普通员工2-7"
                      }, {
                        "name": "1360",
                        "value": "普通员工2-7"
                      }, {
                        "name": "1390",
                        "value": "普通员工2-7"
                      }, {
                        "name": "1401",
                        "value": "普通员工2-7"
                      }, {
                        "name": "1119",
                        "value": "组长2-7",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组2-8",
                      "value": 12,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1163",
                        "value": "普通员工2-8"
                      }, {
                        "name": "1217",
                        "value": "普通员工2-8"
                      }, {
                        "name": "1279",
                        "value": "普通员工2-8"
                      }, {
                        "name": "1304",
                        "value": "普通员工2-8"
                      }, {
                        "name": "1324",
                        "value": "普通员工2-8"
                      }, {
                        "name": "1355",
                        "value": "普通员工2-8"
                      }, {
                        "name": "1367",
                        "value": "普通员工2-8"
                      }, {
                        "name": "1380",
                        "value": "普通员工2-8"
                      }, {
                        "name": "1381",
                        "value": "普通员工2-8"
                      }, {
                        "name": "1434",
                        "value": "普通员工2-8"
                      }, {
                        "name": "1438",
                        "value": "普通员工2-8"
                      }, {
                        "name": "1143",
                        "value": "组长2-8",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组2-9",
                      "value": 12,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1206",
                        "value": "普通员工2-9"
                      }, {
                        "name": "1216",
                        "value": "普通员工2-9"
                      }, {
                        "name": "1267",
                        "value": "普通员工2-9"
                      }, {
                        "name": "1283",
                        "value": "普通员工2-9"
                      }, {
                        "name": "1332",
                        "value": "普通员工2-9"
                      }, {
                        "name": "1389",
                        "value": "普通员工2-9"
                      }, {
                        "name": "1409",
                        "value": "普通员工2-9"
                      }, {
                        "name": "1421",
                        "value": "普通员工2-9"
                      }, {
                        "name": "1444",
                        "value": "普通员工2-9"
                      }, {
                        "name": "1462",
                        "value": "普通员工2-9"
                      }, {
                        "name": "1470",
                        "value": "普通员工2-9"
                      }, {
                        "name": "1155",
                        "value": "组长2-9",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组2-10",
                      "value": 9,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1164",
                        "value": "普通员工2-10"
                      }, {
                        "name": "1231",
                        "value": "普通员工2-10"
                      }, {
                        "name": "1284",
                        "value": "普通员工2-10"
                      }, {
                        "name": "1287",
                        "value": "普通员工2-10"
                      }, {
                        "name": "1365",
                        "value": "普通员工2-10"
                      }, {
                        "name": "1382",
                        "value": "普通员工2-10"
                      }, {
                        "name": "1411",
                        "value": "普通员工2-10"
                      }, {
                        "name": "1497",
                        "value": "普通员工2-10"
                      }, {
                        "name": "1211",
                        "value": "组长2-10",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    },
                    {
                      "name": "研发小组2-11",
                      "value": 9,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1174",
                        "value": "普通员工2-11"
                      }, {
                        "name": "1177",
                        "value": "普通员工2-11"
                      }, {
                        "name": "1178",
                        "value": "普通员工2-11"
                      }, {
                        "name": "1273",
                        "value": "普通员工2-11"
                      }, {
                        "name": "1290",
                        "value": "普通员工2-11"
                      }, {
                        "name": "1394",
                        "value": "普通员工2-11"
                      }, {
                        "name": "1465",
                        "value": "普通员工2-11"
                      }, {
                        "name": "1487",
                        "value": "普通员工2-11"
                      }, {
                        "name": "1228",
                        "value": "组长2-11",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    },
                    {
                      "name": "1059",
                      "value": "研发2部长",
                      "itemStyle": {
                        "borderColor": "#626c91"
                      }
                    }
                  ]
                },
                {
                  "name": "研发部门3",
                  "value": "62",
                  "itemStyle": {
                    "borderColor": "#c4ebad"
                  },
                  "children": [{
                      "name": "研发小组3-1",
                      "value": 10,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1145",
                        "value": "普通员工3-1"
                      }, {
                        "name": "1306",
                        "value": "普通员工3-1"
                      }, {
                        "name": "1328",
                        "value": "普通员工3-1"
                      }, {
                        "name": "1336",
                        "value": "普通员工3-1"
                      }, {
                        "name": "1359",
                        "value": "普通员工3-1"
                      }, {
                        "name": "1396",
                        "value": "普通员工3-1"
                      }, {
                        "name": "1440",
                        "value": "普通员工3-1"
                      }, {
                        "name": "1446",
                        "value": "普通员工3-1"
                      }, {
                        "name": "1457",
                        "value": "普通员工3-1"
                      }, {
                        "name": "1060",
                        "value": "组长3-1",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组3-2",
                      "value": 6,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1127",
                        "value": "普通员工3-2"
                      }, {
                        "name": "1277",
                        "value": "普通员工3-2"
                      }, {
                        "name": "1334",
                        "value": "普通员工3-2"
                      }, {
                        "name": "1343",
                        "value": "普通员工3-2"
                      }, {
                        "name": "1496",
                        "value": "普通员工3-2"
                      }, {
                        "name": "1098",
                        "value": "组长3-2",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组3-3",
                      "value": 16,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1139",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1147",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1159",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1170",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1234",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1305",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1321",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1362",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1379",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1385",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1405",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1458",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1474",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1481",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1493",
                        "value": "普通员工3-3"
                      }, {
                        "name": "1100",
                        "value": "组长3-3",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组3-4",
                      "value": 5,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1152",
                        "value": "普通员工3-4"
                      }, {
                        "name": "1176",
                        "value": "普通员工3-4"
                      }, {
                        "name": "1315",
                        "value": "普通员工3-4"
                      }, {
                        "name": "1420",
                        "value": "普通员工3-4"
                      }, {
                        "name": "1154",
                        "value": "组长3-4",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组3-5",
                      "value": 8,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1156",
                        "value": "普通员工3-5"
                      }, {
                        "name": "1204",
                        "value": "普通员工3-5"
                      }, {
                        "name": "1428",
                        "value": "普通员工3-5"
                      }, {
                        "name": "1435",
                        "value": "普通员工3-5"
                      }, {
                        "name": "1456",
                        "value": "普通员工3-5"
                      }, {
                        "name": "1469",
                        "value": "普通员工3-5"
                      }, {
                        "name": "1483",
                        "value": "普通员工3-5"
                      }, {
                        "name": "1191",
                        "value": "组长3-5",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    }, {
                      "name": "研发小组3-6",
                      "value": 8,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1103",
                        "value": "普通员工3-6"
                      }, {
                        "name": "1189",
                        "value": "普通员工3-6"
                      }, {
                        "name": "1263",
                        "value": "普通员工3-6"
                      }, {
                        "name": "1296",
                        "value": "普通员工3-6"
                      }, {
                        "name": "1319",
                        "value": "普通员工3-6"
                      }, {
                        "name": "1330",
                        "value": "普通员工3-6"
                      }, {
                        "name": "1399",
                        "value": "普通员工3-6"
                      }, {
                        "name": "1207",
                        "value": "组长3-6",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }

                      }]
                    }, {
                      "name": "研发小组3-7",
                      "value": 8,
                      "itemStyle": {
                        "borderColor": "#96dee8"
                      },
                      "children": [{
                        "name": "1126",
                        "value": "普通员工3-7"
                      }, {
                        "name": "1153",
                        "value": "普通员工3-7"
                      }, {
                        "name": "1322",
                        "value": "普通员工3-7"
                      }, {
                        "name": "1339",
                        "value": "普通员工3-7"
                      }, {
                        "name": "1349",
                        "value": "普通员工3-7"
                      }, {
                        "name": "1388",
                        "value": "普通员工3-7"
                      }, {
                        "name": "1460",
                        "value": "普通员工3-7"
                      }, {
                        "name": "1209",
                        "value": "组长3-7",
                        "itemStyle": {
                          "borderColor": "#626c91"
                        }
                      }]
                    },
                    {
                      "name": "1068",
                      "value": "研发3部长",
                      "itemStyle": {
                        "borderColor": "#626c91"
                      }
                    }
                  ]
                }
              ]
            }]
          }],
          symbolSize: 12,
          top: '5%',
          left: '0%',
          bottom: '15%',
          right: '3%',
          // orient: 'vertical',
          layout: 'radial',

          animationDuration: 550,
          animationDurationUpdate: 750,
          expandAndCollapse: true,
          initialTreeDepth: 4,
          itemStyle: {
            borderColor: "#3fb1e3"
          },
          top: '10%',
          bottom: '1%',
        }]
      }

    }
  },
  mounted: function() {
    this.chartEmp = echarts.init(document.getElementById('chartEmp'), 'halloween')
    this.chartEmp.setOption(this.depOption)

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.employee {
    border: #ccc 1px solid;

}
</style>
