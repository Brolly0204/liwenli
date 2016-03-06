/**
 * Created by Mr.Li on 2016/1/24.
 */
function getEle(ele) {
    return document.querySelector(ele);
}
var main = getEle("#main");
var d1 = getEle(".d1");
var dd1 = getEle(".dd1");
var pp1 = getEle(".pp1");
var oLis = document.querySelectorAll("#list>li");
var winW = window.innerWidth;
var winH = window.innerHeight;
var desW = 640;
var desH = 960;
    main.style.webkitTransform = "scale(" + winH / desH + ")";

for(var i=1;i<oLis.length;i++){
    oLis[i].style.display="none";
}
oLis[0].addEventListener("touchstart", start1, false);
function start1(e) {
    e.stopPropagation();
    dd1.id = "dd1";
    pp1.innerHTML = "扫描中...";
    var fle=null;
    window.setTimeout(function () {
        pp1.innerHTML = "扫描成功";
        dd1.style.display = "none";
    }, 500);

}
[].forEach.call(oLis, function () {
    var oLi = arguments[0];
    oLi.index = arguments[1];
    oLi.addEventListener("touchstart", start, false);
    oLi.addEventListener("touchmove", move, false);
    oLi.addEventListener("touchend", end, false);
});
function start(e) {
    this.startX = e.changedTouches[0].pageY;
    e.stopPropagation();

}
function move(e) {
    e.stopPropagation();
    this.flag = true;
    var moveTouch = e.changedTouches[0].pageY;
    var movePos = moveTouch - this.startX;
    var index = this.index;
    [].forEach.call(oLis, function () {
        arguments[0].className = "";
        if (arguments[1] != index) {
            arguments[0].style.display = "none";
        }
        arguments[0].id = "";
    });
    if (movePos > 0) {//往下滑
        //记录上一张的index；
        this.prevSindex = (index == oLis.length - 1 ? 0 : index + 1);
        var duration = -winH+ movePos;
    } else if (movePos < 0) {//往上滑
        //记录上一张的index
        this.prevSindex = (index == 0 ? oLis.length - 1 : index - 1);
        var duration = winH+ movePos;
    }
    //this.style.webkitTransform=" scale("+(1-Math.abs(movePos)/winH*1/2)+") translate(0,"+movePos+"px)";
    oLis[this.prevSindex].style.webkitTransform = "translate(0," + duration + "px)";
    oLis[this.prevSindex].className = 'zIndex';
    oLis[this.prevSindex].style.display = "block";
}
function end(e) {
    e.stopPropagation();
    if (this.flag) {
        oLis[this.prevSindex].style.webkitTransform = "translate(0,0)";
        oLis[this.prevSindex].style.webkitTransition = "0.8s ease-out";
        oLis[this.prevSindex].addEventListener("webkitTransitionEnd", function (e) {
            if (e.target.tagName == "LI") {
                this.style.webkitTransition = "";
            }
            this.id = "a" + (this.index + 1);
        }, false)
    }
    if(this.index===0){
        window.setTimeout(function () {
            pp1.innerHTML = "";
        }, 900);
    }
}
