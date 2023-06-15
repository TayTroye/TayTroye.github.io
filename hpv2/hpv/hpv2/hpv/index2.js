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
   two_c.style.display="none";
   tip2_c.style.display="block"
}
two_c.onmouseout=function(){
   two_c.style.display="block"
   tip2_c.style.display="none";
}

//二价国际
two_f.onmouseover = function (){
   two_f.style.display="none";
   tip2_f.style.display="block"
}
two_f.onmouseout=function(){
   two_f.style.display="block";
   tip2_f.style.display="none"
}

//四价事件
four.onmouseover = function (){
   four.style.display="none";
   tip4.style.display="block"
}
four.onmouseout=function(){
   four.style.display="block";
   tip4.style.display="none"
}

//九价事件
nine.onmouseover = function (){
    nine.style.display="none";
    tip9.style.display="block"
}
nine.onmouseout=function(){
    nine.style.display="block";
    tip9.style.display="none"
}
