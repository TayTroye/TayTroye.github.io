// chart-l1配置
(function () {
    // 实例化对象
    var mychart = echarts.init(document.getElementById("chart-l1")) ;
    // 指定配置项
    /** @type EChartsOption */
    var option = {
          // title: {
          //     text: '国家近年HPV感染情况与接种率',
          // },
      
    // 颜色风格
    color: ["#f9ba99", "#98a8b2","#ffeaab","#c1c8af"],
      
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'shadow',
                shadowStyle: {
                  color: 'rgba(255,255,200,0.1)', //hover颜色
                },
              }
          },
      legend: {
            textStyle: {
              color: "rgb(255,255,255,0.7)",
              
            },
          },
          grid: {
            top: "20%",
            left: '0%',
            right: '5%',
            bottom: '4%',
            containLabel: true
          },
        yAxis: [
              {
              type: 'category',
              data: ['2018', '2019', '2020', '2021'],
              axisLabel: {
                color: "white",
                fonSize:"12",
              },
              axisLine: {
                lineStyle: {
                    color: "rgb(255,255,255,0.3)",
                  },
                },
              },
          ],
        xAxis: {
            show: true,
            type: 'value',
            axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '{value}%',
                color:"white",
          },
          axisLine: {
            lineStyle: {
                color: "rgb(255,255,255,0.3)",
              },
          },
          splitLine: {
            lineStyle: {
              color: "rgb(255,255,255,0.3)",
            },
          }
        },
        series: [
          {
            name: '低危型',
            type: 'bar',
            stack: 'grlx',
            emphasis: {
              focus: 'series'
            },
            data: [1.1, 1.11, 1.17, 1.2],
            // 修改柱子样式
            barWidth: "40%",
            itemStyle: {
              barBorderRadius: 3,
            },
          },
          {
            name: '中危型',
            type: 'bar',
            stack: 'grlx',
            emphasis: {
              focus: 'series'
            },
            data: [2.56,1.5,1.37,1.54],
            // 修改柱子样式
            barWidth: "40%",
            itemStyle: {
              barBorderRadius: 3,
            },
          },
          {
            name: '高危型',
            type: 'bar',
            stack: 'grlx',
            emphasis: {
              focus: 'series'
            },
            data: [13.53,11.99,8.89,8.23],
            // 修改柱子样式
            barWidth: "40%",
            itemStyle: {
              barBorderRadius: 3,
            },
            },
            {
              name: '接种率',
              type: 'bar',
              emphasis: {
                focus: 'series'
              },
                  data: [0.3, 0.97, 2.24,3.51],
                  // 修改柱子样式
                  barWidth: "40%",
                  itemStyle: {
                    barBorderRadius: 3,
                  },
            },
        

        ]
    };
      

    // 把配置项给实例对象
    mychart.setOption(option);
    // 自适应
    window.addEventListener("resize", function() {
      mychart.resize();
    });

})();






// chart-l2配置
(function () {
  // 实例化对象
  var mychart = echarts.init(document.getElementById("chart-l2")) ;
  // 指定配置项
  /** @type EChartsOption */
  var option = {
    // 颜色风格
    color: ["#f9ba99", "#98a8b2","#ffeaab"],
    
    angleAxis: {
      type: 'category',
      data: ['20-','20-29', '30-39', '40-49', '50+','总体'],
      axisLine: {
        lineStyle: {
            color: "rgb(255,255,255,0.4)",
          },
        },
    },
    radiusAxis: {
      axisLine: {
        lineStyle: {
            color: "rgb(255,255,255,0.5)",
          },
        },
    },
    polar: {},
    tooltip: {},
    series: [
      {
        type: 'bar',
        data: [10.21, 10.77, 9.68, 10.93, 10.33,10.22],
        coordinateSystem: 'polar',
        name: '高危型',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      },
      {
        type: 'bar',
        data: [1.2, 1.18, 1.14, 1.33, 1.21,1.2],
        coordinateSystem: 'polar',
        name: '中危型',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      },
      {
        type: 'bar',
        data: [1.4, 1.3, 0.92, 1.46,1.42,1.13],
        coordinateSystem: 'polar',
        name: '低危型',
        stack: 'a',
        emphasis: {
          focus: 'series'
        }
      },
    ],
    legend: {
      show: true,
      data: ['A', 'B', 'C'],
      padding: 10,
      textStyle: {
            color: "rgb(255,255,255,0.7)",
      },
    }
  };

  // 把配置项给实例对象
  mychart.setOption(option);
  // 自适应
  window.addEventListener("resize", function() {
    mychart.resize();
  });

})();






// chart-3配置 （不同地区的）
(function () {
  var diquData = [
    {
      diqu: '华北地区',
      xdata: ['HPV58/31/42','hpv16','HPV18','HPV56/6','HPV33/66','HPV59/11','HPV52','HPV68/45','HPV35'],
      ydata: [1.00,4.00,0.75,2.00,1.75,1.50,0.50,0.25,0.14]
    },
    {
      diqu: '华中地区',
      xdata: ['hpv16', 'hpv18', 'hpv31', 'hpv33', 'hpv39', 'hpv42', 'hpv52', 'hpv58', 'hpv66', 'hpv68'],
      ydata: [1.96,0.68,0.63,1.06,0.75,0.69,4.04,2.52,1.79,0.94]
    },
    {
      diqu: '华东地区',
      xdata: ['hpv11','hpv16','hpv31','hpv33/18','hpv39','hpv42','hpv45','hpv51','hpv52','hpv56','hpv58','hpv59','hpv66','hpv68'],
      ydata: [0.62,2.91,0.73,1.03,0.55,0.32,0.18,0.37,2.69,0.72,2.06,0.39,0.48,0.77]
    },
    {
      diqu: '华南地区',
      xdata: ['hpv11/66','hpv16','hpv33','hpv39','hpv42','hpv45','hpv51','hpv52','hpv56','hpv58','hpv59','hpv68'],
      ydata: [0.44,1.99,0.55,0.71,0.28,0.29,1.29,3.26,0.87,1.61,0.35,0.65]
    },
    {
      diqu: '东北地区',
      xdata: ['hpv11','hpv16','hpv18','hpv31','hpv33','hpv39','hpv42','hpv45','hpv51','hpv52','hpv56','hpv58','hpv59/6','hpv66','hpv68'],
      ydata: [0.28,2.49,0.71,0.62,0.73,0.36,0.01,0.14,0.09,1.84,0.17,1.31,0.23,0.48,0.61]
    },
    {
      diqu: '西北地区',
      xdata: ['hpv11','hpv16','hpv18','hpv31/52','hpv39','hpv52/31','hpv56/66/51','hpv58','hpv59','hpv6'],
      ydata: [0.73,4.49,1.09,0.55,0.91,0.55,0.30,2.18,0.85,1.03,]
    },
    {
      diqu: '西南地区',
      xdata: ['hpv16','hpv31','hpv33/11','hpv39/18','hpv42/35','hpv52','hpv56','hpv58','hpv6','hpv68','Lrhpv/59/45'],
      ydata: [1.42,0.54,0.41,0.68,0.07,3.31,0.81,1.55,0.34,1.08,0.14]
    },
    {
      diqu: '北方地区',
      xdata: ['hpv11/31','hpv16','hpv33','hpv39','hpv42','hpv45','hpv51','hpv52','hpv56','hpv58','hpv59','hpv66/6','hpv68'],
      ydata: [0.74,3.65,0.96,0.45,0.07,0.12,0.18,1.67,0.59,1.63,0.37,0.52,0.66]
    },
    {
      diqu: '南方地区',
      xdata: ['hpv11','hpv16','hpv33','hpv39','hpv42','hpv45','hpv51','hpv52','hpv56','hpv58','hpv59','hpv66/31','hpv68'],
      ydata: [0.48,2.33,0.84,0.66,0.44,0.22,0.68,3.01,0.70,2.05,0.39,0.57,0.75]
    },
  ]
  // 实例化对象
  var mychart = echarts.init(document.getElementById("chart-3")) ;
  // 指定配置项
  /** @type EChartsOption */
  var option = {
        // title: {
        //     text: '  ',
        // },
        color:"#ffeaab",
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type:'cross'
            }
        },
        grid: {  
          top: "6%",
          left: '1%',
          right: '1%',
          bottom: '2%',
          containLabel: true
        },
      xAxis: [
            {
            type: 'category',
            data: ['hpv16', 'hpv18', 'hpv31', 'hpv33', 'hpv39', 'hpv42', 'hpv52', 'hpv58', 'hpv66', 'hpv68'],
            axisLabel: {
              interval:0,
              color: "#eaa197",
              fonSize:"12",
            },
            axisLine: {
              lineStyle: {
                  color: "rgb(255,255,255,0.3)",
                },
              },
            },
        ],
      yAxis: {
          show: true,
          type: 'value',
          axisLabel: {
              show: true,
              interval: 'auto',
              formatter: '{value}%',
              color:"#eaa197",
        },
        axisLine: {
          lineStyle: {
              color: "rgb(255,255,255,0.3)",
            },
        },
        splitLine: {
          lineStyle: {
            color: "rgb(255,255,255,0.3)",
          },
        }
      },
      series: [
        {
          name: '低危型',
          type: 'line',
          emphasis: {
            focus: 'series'
          },
          data:[1.96,0.68,0.63,1.06,0.75,0.69,4.04,2.52,1.79,0.94],

        },

      ]
  };
    

  // 把配置项给实例对象
  mychart.setOption(option);
  // 自适应
  window.addEventListener("resize", function() {
    mychart.resize();
  });

    // 5.点击切换效果
    // 用的jquery
    $(".xx-diqu-box").on("click", "a", function() {
      // alert(1);
      console.log($(this).index());
      // 点击 a 之后 根据当前a的索引号 找到对应的 diquData的相关对象
      console.log(diquData[$(this).index()]);


      var obj = diquData[($(this).index())-1];
      // 修改地区显示文本
      $('.xx-diqu-text').each(function () {
        var myvalue = obj.diqu;
        $(this).html(myvalue);
     });
      option.series[0].data = obj.ydata;
      option.xAxis[0].data = obj.xdata;
      // 需要重新渲染
      mychart.setOption(option);
    });


})();






// chart-map配置
(function () {
  // 实例化对象
  var myChart = echarts.init(document.getElementById("chart-map")) ;
  // 指定配置项
  /** @type EChartsOption */// 指定图表的配置项和数据
		var name_title = "可视化感染率"
    var mapName = 'china'
    var data = [
    { name: '广东', value: 19.47  },
    { name: '江苏', value: 11.61  },
    { name: '山东', value: 17.76  },//
    { name: '浙江', value: 17.15  },//
    { name: '河南', value: 16.83  },
    { name: '四川', value: 12.08  },
    { name: '湖北', value: 20.64  },
    { name: '湖南', value: 19.30  },
    { name: '河北', value: 18.27  },//
    { name: '福建', value: 22.30  },
    { name: '上海', value: 16.05  },
    { name: '北京', value: 19.40  },
    { name: '安徽', value: 28.80  },
    { name: '辽宁', value: 13.69  },
    { name: '陕西', value: 26.00  },
    { name: '江西', value: 23.68  },
    { name: '重庆', value: 12.80  },
    { name: '广西', value: 17.70  },
    { name: '天津', value: 18.64  },//
    { name: '云南', value: 18.58  },
    { name: '内蒙古', value: 17.22  },//
    { name: '山西', value: 21.42  },
    { name: '黑龙江', value: 16.62  },//
    { name: '吉林', value: 30.23  },
    { name: '贵州', value: 16.95  },
    { name: '新疆', value: 12.40  },
    { name: '甘肃', value: 20.64   },
    { name: '海南', value: 22.50  },
    { name: '宁夏', value: 11.40  },
    { name: '青海', value: 18.23  },//
    { name: '西藏', value: 17.63  }//

    ];
    
    var option = {
        title: {
            text: name_title,
            x: 'center',
            textStyle: {
              fontSize: 24,
              color: "#DDDCDF",
            },                
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {                        
                    var toolTiphtml = ''
        if (isNaN(params.value)){
                    toolTiphtml = params.name + 'HPV感染率: ……'
        }else{
        toolTiphtml = params.name + 'HPV感染率: ' + params.value + '%'
        }
                    //console.log(toolTiphtml)                        
                    return toolTiphtml;                   
            }
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        visualMap: {
            show: true,
            left: 'left',
            top: 'bottom',
            seriesIndex: [0],
            type:'piecewise',
            pieces:[
                {min:28, color: '#e27574'},
                {min:24, max:28, color: '#eaa197'},
                {min:20, max:24, color: '#f1b493'},
                {min:16, max:20, color: '#98a8b2'},
                {min:12, max:16, color: '#c1c8af'},
                {min:0, max:12, color: '#ffeaab'},
            ],            
            textStyle: {
                color: '#DDDCDF'
            }
        },            
        geo: {
            show: true,
            map: mapName,
            label: {
                normal: {
                    show: true,
                    fontSize:12,
                },
                emphasis: {
                    show: false,
                }
            },
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: '#FFFFFF',
                    borderColor: '#666666',
                },
                emphasis: {
                    areaColor: '#0099CC',
                }
            }
        },
        series: [
            {
                type: 'map',
                map: mapName,
                geoIndex: 0,           
                animation: false,
                data: data
            },
        ]
    };

  // 把配置项给实例对象
  myChart.setOption(option);
  // 自适应
  window.addEventListener("resize", function() {
    mychart.resize();
  });

})();






// chart-r1配置
(function () {
  // 实例化对象
  var mychart = echarts.init(document.getElementById("chart-r1")) ;
  // 指定配置项
  /** @type EChartsOption */
  var option = {
    grid: {
      top: "25",
      left: '34',
      bottom: '25',
    },
    color: ['#94d8fa'],
    barWidth:7,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(255,255,200,0.1)', //hover颜色
        },
      }
    },
    xAxis: {
      position: 'top',
      type: 'value',
      min: 10,
      max: 32,
      // scale: true,//坐标轴自适应，可以不从0开始
      splitNumber: 5,
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value}%',
        color: "rgb(255,255,255,0.7)",
        fontSize: 10,
      },
      axisLine: {
        lineStyle: {
            color: "rgb(255,255,255,0.4)",
          },
      },
      splitLine: {
        lineStyle: {
          color: "rgb(255,255,255,0.4)",
        },
      }
    },
    yAxis: {
        type: 'category',
        data: ["吉林","安徽","陕西","江西","海南","福建","山西","湖北","甘肃","广东","北京","湖南","天津","云南","河北","青海","山东","广西","西藏","内蒙古","浙江","贵州","河南","黑龙江","上海","辽宁","重庆","新疆","四川","江苏","宁夏"],
        
        inverse: true,
        axisLine: {
          lineStyle: {
              color: "rgb(255,255,255,0.7)",
          },
      },
      axisLabel: {
            textStyle: {
              fontSize: '8',
          },
        }
    },
    series: [
        {
          data: [30.23,28.8,26,23.68,22.5,22.3,21.42,20.64,20.64,19.47,19.4,19.3,18.64,18.58,18.27,18.23,17.76,17.7,17.63,17.22,17.15,16.95,16.83,16.62,16.05,13.69,12.8,12.4,12.08,11.61,11.4],


          

          type: 'bar',
          itemStyle: {
            barBorderRadius: 2,
          },
        },
    ],
    visualMap:{
      orient:'horizontal',
      left: 'center',
      itemHeight: "90%",
      itemWidth: "15%",
      min:10,
      max: 32,
      text: ['32%', '10%'],
      textStyle: {
        color: "rgb(255,255,255,0.7)",
      },
      dimension:0,
      inRange: {
        // 坐标轴渐变的颜色区间
        // color:['#E15457','#D7DA8B'],
        color:['#90cbb0','#E15457']
      }
    },

  }

    

  // 把配置项给实例对象
  mychart.setOption(option);
  // 自适应
  window.addEventListener("resize", function() {
    mychart.resize();
  });

})();






// chart-r2配置
(function () {
  // 实例化对象
  var mychart = echarts.init(document.getElementById("chart-r2")) ;
  // 指定配置项
  /** @type EChartsOption */
  var option = {
    grid: {
      top: "25",
      left: '34',
      bottom: '25',
    },
    color: ['#94d8fa'],
    barWidth:9,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(255,255,200,0.1)', //hover颜色
        },
      }
    },
    xAxis: {
      position: 'top',
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value}%',
        color: "rgb(255,255,255,0.7)",
        fontSize: 10,
      },
      axisLine: {
        lineStyle: {
            color: "rgb(255,255,255,0.4)",
          },
      },
      splitLine: {
        lineStyle: {
          color: "rgb(255,255,255,0.4)",
        },
      }
    },
    yAxis: {
        type: 'category',
        data: ["北京","上海","浙江","重庆","天津","广东","四川","江苏","海南","福建","山东","湖北","陕西","湖南","吉林","江西","河北","广西","云南","安徽","河南","辽宁","黑龙江","山西","内蒙古","贵州","宁夏","甘肃","新疆","青海","西藏"],
        inverse: true,
        axisLine: {
          lineStyle: {
              color: "rgb(255,255,255,0.7)",
          },
      },
      axisLabel: {
            textStyle: {
              fontSize: '8',
          },
        }
    },
    series: [
        {
          data: [8.28,7.37,4.68,3.19,3.09,3.05,2.75,2.69,2.52,2.51,2.33,2.2,2.18,1.88,1.87,1.81,1.58,1.54,1.51,1.48,1.45,1.29,1.21,1.03,1,0.93,0.93,0.6,0.46,0.39,0.06],
          type: 'bar',
          itemStyle: {
            barBorderRadius: 3,
          },
        },
    ],
    visualMap:{
      orient:'horizontal',
      left: 'center',
      itemHeight: "90%",
      itemWidth: "15%",
      min:0,
      max: 10,
      text: ['10%', '0%'],
      textStyle: {
        color: "rgb(255,255,255,0.7)",
      },
      dimension:0,
      inRange: {
        // 坐标轴渐变的颜色区间
        // color:['#E15457','#D7DA8B'],
        color:['rgb(255,84,87)','#90cbb0']
      }
    },

  }

  // 把配置项给实例对象
  mychart.setOption(option);
  // 自适应
  window.addEventListener("resize", function() {
    mychart.resize();
  });

})();

