var two_c =document.getElementById("two_c")
var tip2_c=document.getElementById("tip2_c")
var two_f =document.getElementById("two_f")
var tip2_f=document.getElementById("tip2_f")
var four =document.getElementById("four")
var tip4=document.getElementById("tip4")
var nine =document.getElementById("nine")
var tip9=document.getElementById("tip9")

//二价国产
two_c.onmouseover = function (){
   two_c.style.opacity=0;
   tip2_c.style.opacity=1;
}
two_c.onmouseout=function(){
   two_c.style.opacity=1;
   tip2_c.style.opacity=0;
}

//二价国际
two_f.onmouseover = function (){
   two_f.style.opacity=0;
   tip2_f.style.opacity=1;
}
two_f.onmouseout=function(){
   two_f.style.opacity=1;
   tip2_f.style.opacity=0;
}

//四价事件
four.onmouseover = function (){
   four.style.opacity=0;
   tip4.style.opacity=1;
}
four.onmouseout=function(){
   four.style.opacity=1;
   tip4.style.opacity=0;
}

//九价事件
nine.onmouseover = function (){
    nine.style.opacity=0;
    tip9.style.opacity=1;
}
nine.onmouseout=function(){
    nine.style.opacity=1;
    tip9.style.opacity=0;
}
