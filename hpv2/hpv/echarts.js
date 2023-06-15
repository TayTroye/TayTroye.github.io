
var click1=document.getElementById("kinds")
var click2=document.getElementById("price")
var click3=document.getElementById("react")

var mych1=document.getElementById('main1');
var mych2=document.getElementById('main2');
var mych3=document.getElementById('main3');

var myChart1_9 = echarts.init(document.getElementById('vac9'));
var myChart1_2 = echarts.init(document.getElementById('vac2'));
var myChart1_4 = echarts.init(document.getElementById('vac4'));
var myChart2= echarts.init(document.getElementById('main2'));




//三个点击事件
click1.addEventListener("click",function(){
    mych1.style.zIndex='2';
    mych2.style.zIndex='0';
    mych3.style.zIndex='0';
    kinds.style.backgroundColor="#BF5862" ;
    price.style.backgroundColor="#DDA2A8" ;
    react.style.backgroundColor="#DDA2A8" ;
});

click2.addEventListener("click",function(){
    mych2.style.zIndex='2';
    mych1.style.zIndex='0';
    mych3.style.zIndex='0';
    kinds.style.backgroundColor="#DDA2A8" ;
    price.style.backgroundColor="#BF5862" ;
    react.style.backgroundColor="#DDA2A8" ;
});

click3.addEventListener("click",function(){
    mych3.style.zIndex='2';
    mych1.style.zIndex='0';
    mych2.style.zIndex='0';
    kinds.style.backgroundColor="#DDA2A8" ;
    price.style.backgroundColor="#DDA2A8" ;
    react.style.backgroundColor="#BF5862" ;
});

//图表1的配置


//二价

option12 = {  
  title:{
    text:'二价疫苗',
    textAlign:'left',
    left:"center",
    textStyle:{
        fontFamily:'华文行楷',
        fontSize:20,
    }  
  },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 70,
            name: "宫颈癌"
          },
          {
            value: 30,
            name: '无效率'
          },
          
        ]
      }
    ],
    tooltip:{},
  };
  
        // 使用刚指定的配置项和数据显示图表。
        myChart1_2.setOption(option12);




//九价
option = {
    title:{
        text:'九价疫苗',
        textAlign:'left',
        left:"center",
        textStyle:{
            fontFamily:'华文行楷',
            fontSize:20
        }  
    },
series: [
{
type: 'pie',
data: [
    {
    value: 90,
    name: '宫颈癌'
    },
    {
    value: 85,
    name: '阴道癌'
    },
    {
    value: 50,
    name: '低级宫颈癌变'
    },
    {
    value: 90,
    name: '尖锐湿疣'
    },
    {
    value: 95,
    name: '肛门癌'
    }
],
roseType: 'area'
}
],
tooltip:{},
};

// 使用刚指定的配置项和数据显示图表。
myChart1_9.setOption(option);


//四价
option14 = {
    title:{
        text:'四价疫苗',
        textAlign:'left',
        left:"center",
        textStyle:{
            fontFamily:'华文行楷',
            fontSize:20
        }  
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 70,
            name: "宫颈癌"
          },
          {
            value: 90,
            name: '尖锐湿疣'
          },
          
        ],
        roseType: 'area'
      }
    ],
    tooltip:{},
  };
  
        // 使用刚指定的配置项和数据显示图表。
        myChart1_4.setOption(option14);



//图表2的配置

option2 = {
  tooltip: {
trigger: 'axis',
axisPointer: { type: 'cross' }
},
legend: {},
  xAxis: 
  [
      {
          type: 'category',
axisTick: {
  alignWithLabel: true
},
      data: ['国产二价', '进口二价', '进口四价', '进口九价'],
      
  }
],
  yAxis: [
      {   
      type:'value',
      name:'进口量',
     
      position:'left',
      axisLabel: {
      formatter: '{value} 万元',
  }
  },
  {
      name:'单价',
      type:'value',
      min: 0,
max: 1500,
      position:'right',
      axisLabel: {
      formatter: '{value}元',
      }
  }
],
  series: [
      {
      name:'2020',
      type: 'bar',
      data: [400,170,304,193]
      },
      {
      name:'2021',
      type: 'bar',
      data: [350,211,366,216] 
      },
      {
      name:'单针价格',
      data: [329, 600, 800,1318],
      type: 'line'
      }
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart2.setOption(option2);


