var ball1=document.getElementById("ball1")
var ball2=document.getElementById("ball2")
var ball3=document.getElementById("ball3")
var ball4=document.getElementById("ball4")
var plane=document.getElementById("plane")
var bgc=document.getElementById("bgc")
var ftvac=document.getElementById("ftvac")
var freevac=document.getElementById("freevac");
var volunteer=document.getElementById("volunteer")
var compare=document.getElementById("compare")
var closeall=document.getElementById("closeall")
var close=document.getElementById("close")
var closefree=document.getElementById("closefree") 
var closevl=document.getElementById("closevl")
var closeft=document.getElementById("closeft")

ball1.addEventListener("click",function(){
    freevac.style.display="block";
});

ball2.addEventListener("click",function(){
    compare.style.display="block";
    ball2.style.display="none";
    closeall.style.display="block";
})
plane.addEventListener("click",function(){
  window.location.href="../../HPV-daozhen/hpv-daozhen.html?#";
});

close.addEventListener("click",function(){
  closeall.style.display="none";
  ball2.style.display="block";
});
closefree.addEventListener("click",function(){
  freevac.style.display="none";
});

ball3.addEventListener("click",function(){
  volunteer.style.display="block";
});
ball4.addEventListener("click",function(){
  ftvac.style.display="block";
});
closevl.addEventListener("click",function(){
  volunteer.style.display="none";
});
closeft.addEventListener("click",function(){
  ftvac.style.display="none";
});


//百度指数
var search_index=echarts.init(document.getElementById('search_index'));

option = {
    legend: {
        orient: 'horizontal',
        x: 'left',
        y: 'bottom',
        data: ['hpv','新冠疫情']
      },
    xAxis: {
      data: ['2021.5', '2021.6', '2021.7', '2021.8','2021.9','2021.10','2021.11','2021.12','2022.1','2022.2','2022.3','2022.4']
    },
    yAxis: {},
    tooltip : {
        trigger: 'axis',
        axisPointer: {
         type: 'cross',
         label: {
            backgroundColor: '#6a7985'
        }
     }
   },
    title:{
        text:'hpv与新冠疫情搜索指数对比',
        textAlign:'left',
        left:"center",
        textStyle:{
            fontFamily:'华文行楷',
            fontSize:30,
            color:'#BF5862'
        }  
    },
    series: [
      {
        name: 'hpv',
        data: [25921, 40123, 21928, 33587, 21549,24594,97397,19750,20422,9034,23128,28192,74498],
        type: 'line',
      },
      {
        name:'新冠疫情',
        data: [10799, 13053, 6636, 60097, 18143,6459,10429,19349,35698,11245,27070,87334,33321],
        type: 'line',
        // stack: 'x',
        // areaStyle: {}
      }
      
    ]
  };


 search_index.setOption(option);


 //compare
 var compare1=echarts.init(document.getElementById('compare'));
 option1 = {
  tooltip:{
    show:true,
    trigger:'item',
  },
    title:{
        text:'在中华大地上，我们每小时就有7人死于宫颈癌。',
        textAlign:'left',
        left:"center",
        textStyle:{
            fontFamily:'华文行楷',
            fontSize:20,
            color:'#BF5862'
        }  
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            value: 604000,
            name: '全球宫颈癌人数'
          },
          {
            value: 110000,
            name: '我国宫颈癌人数'
          },
          {
            value: 60000,
            name: '宫颈癌死亡人数'
          },

        ],
        radius:['40%','70%']
      }
    ]
  };

 compare1.setOption(option1);