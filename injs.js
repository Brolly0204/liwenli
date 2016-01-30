/**
 * Created by Mr.Li on 2016/1/24.
 */
function getEle(ele){
    return document.querySelector(ele);
}
var main=getEle("#main");
var d1=getEle(".d1");
var dd1=getEle(".dd1");
var pp1=getEle(".pp1");
var lists=document.querySelectorAll("#list>li");
var winW=document.documentElement.clientWidth;
var winH=document.documentElement.clientHeight;
var desW=640;
var desH=960;
if(winW/winH<desW/desH){
    main.style.webkitTransform="scale("+winH/desH+")";
}else{
    main.style.webkitTransform="scale("+winW/desW+")";
}
lists[0].addEventListener("touchstart",start1,false);
function start1(){
    dd1.id="dd1";
    pp1.innerHTML="扫描中...";
    window.setTimeout(function(){
        pp1.innerHTML="扫描成功";
        dd1.style.display="none";
    },500);
}
[].forEach.call(lists,function(){
   var oLi=arguments[0];
    oLi.index=arguments[1];
    oLi.addEventListener("touchstart",start,false);
});
function start(){
        for(var i=0;i<lists.length;i++){
            lists[i].zIndex=0;
            var oLi=lists[i];
        }
    lists[this.index+1].id="a"+(this.index+2);
    lists[this.index+1].zIndex=10;
        if(this.index%2===0){
    lists[this.index].style.webkitTransform="scale(0.5) translate(850px,-1500px)";
    }else{
        lists[this.index].style.webkitTransform="scale(0.5) translate(-850px,-1500px)";
    }
    if(this.index===0){
            lists[this.index].style.transition="all 1.7s linear 1s";
    }else{
    lists[this.index].style.transition="all 2s linear"
    }
}
