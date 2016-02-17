!function(){function f(a){for(var b=0;b<e.length;b++)e[b].className=b===a?"visit":"null";c.innerHTML=e[a].innerHTML}function M(){$(".TT2").animate({left:994},200),$(".TT3").animate({left:1245},200),$(".TT4").animate({left:1490},200),$(".TT5").animate({left:1740},200)}function N(){$(".TT1").animate({left:-250},200),$(".TT2").animate({left:0},150),$(".TT3").animate({left:994},200),$(".TT4").animate({left:1244},200),$(".TT5").animate({left:1494},200)}function O(){$(".TT1").animate({left:-500},280),$(".TT2").animate({left:-750},300),$(".TT3").animate({left:0},200),$(".TT4").animate({left:994},200),$(".TT5").animate({left:1244},230)}function P(){$(".TT1").animate({left:-750},300),$(".TT2").animate({left:-500},300),$(".TT3").animate({left:-250},220),$(".TT4").animate({left:0},220)}function Q(){$(".TT5").animate({left:250},200),$(".TT1").animate({left:-750},300),$(".TT2").animate({left:-500},300),$(".TT3").animate({left:-250},210),$(".TT4").animate({left:0},210)}var b,c,d,e,g,h,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,C,D,E,F,G,H,I,J,K,L,R;for($(function(){function b(){var d,b="",c="";for(d=0;d<a.length;d++)b+="<li trueImg='"+a[d]+"'></li>",c+="<li>"+(d+1)+"</li>";$(".img").html(b),$(".num").html(c)}function c(){for(var b=0;b<a.length;b++)~function(a){var b=$(".img li")[a],c=new Image;c.src=b.getAttribute("trueImg"),c.onload=function(){b.appendChild(c),animate(c,{opacity:1},300)}}(b)}function f(){d++,d==a.length&&(d=0),$(".img li").eq(d).fadeIn(300).siblings().fadeOut(300),$(".num li").eq(d).addClass("active").siblings().removeClass("active")}function g(){d--,-1==d&&(d=a.length-1),$(".img li").eq(d).fadeIn(300).siblings().fadeOut(300),$(".num li").eq(d).addClass("active").siblings().removeClass("active")}var d,e,a=["img/ban1.jpg","img/ban2.jpg","img/ban3.jpg","img/ban4.jpg","img/ban5.jpg"];b(),setTimeout(c,250),$(".img li").eq(0).show(),$(".num li").eq(0).addClass("active"),$(".num li").mouseover(function(){$(this).addClass("active").siblings().removeClass("active");var a=$(this).index();d=a,$(".img li").eq(a).stop().fadeIn(300).siblings().stop().fadeOut(300)}),d=0,e=setInterval(f,1800),$(".right").click(function(){f()}),$(".left").click(function(){g()}),$(".out").hover(function(){clearInterval(e)},function(){e=setInterval(f,1800)})}),document.getElementById("top1"),b=document.getElementById("topUl"),c=b.getElementsByTagName("span")[0],d=document.getElementById("addList"),e=d.getElementsByTagName("a"),b.onmouseenter=function(){d.style.display="block"},b.onmouseleave=function(){d.style.display="none"},d.onmouseenter=function(){d.style.display="block",b.className="select"},d.onmouseleave=function(){d.style.display="none",b.className="topUl"},g=0;g<e.length;g++)e[g].t=g,e[g].onclick=function(){f(this.t)};for(h=document.getElementById("li4"),h.getElementsByTagName("a")[0],j=document.getElementById("myJd"),h.onmouseenter=function(){j.style.display="block"},h.onmouseleave=function(){j.style.display="none"},j.onmouseenter=function(){j.style.display="block",h.className="liover"},j.onmouseleave=function(){j.style.display="none",h.className="li4"},k=document.getElementById("saoma"),l=document.getElementById("li3"),l.onmouseenter=function(){k.style.display="block"},l.onmouseleave=function(){k.style.display="none"},k.onmouseenter=function(){l.className="li3l",k.style.display="block"},k.onmouseleave=function(){k.style.display="none",l.className="li3"},m=document.getElementById("saoma1"),n=document.getElementById("li7"),n.onmouseenter=function(){m.style.display="block"},n.onmouseleave=function(){m.style.display="none"},m.onmouseenter=function(){n.className="li7l",m.style.display="block"},m.onmouseleave=function(){m.style.display="none",n.className="li7"},o=document.getElementById("list"),p=document.getElementById("li5"),p.onmouseenter=function(){o.style.display="block"},p.onmouseleave=function(){o.style.display="none"},o.onmouseenter=function(){p.className="li5l",o.style.display="block"},o.onmouseleave=function(){o.style.display="none",p.className="li5"},q=document.getElementById("navigation"),r=document.getElementById("li6"),r.onmouseenter=function(){q.style.display="block"},r.onmouseleave=function(){q.style.display="none"},q.onmouseenter=function(){r.className="li6l",q.style.display="block"},q.onmouseleave=function(){q.style.display="none",r.className="li6"},s=document.getElementById("topImg"),t=document.getElementById("cont"),u=s.getElementsByTagName("a")[0],u.onclick=function(){animate(s,{opacity:0},400,function(){t.removeChild(s)})},v=document.getElementById("text"),w=document.getElementById("boxList"),v.onfocus=function(){this.value="";var a=this.value.replace(/(^ +| +$)/g,"");w.style.display=a.length>0?"block":"none"},v.onkeyup=function(){var a=this.value.replace(/(^ +| +$)/g,"");w.style.display=a.length>0?"block":"none"},document.body.onclick=function(a){a=a||window.event;var b=a.target||a.srcElement;if("text"!==b.id)return"p"===b.tagName.toLowerCase()&&"boxList"===b.parentNode.parentNode.parentNode.id?(w.style.display="none",v.value="p1"===b.className?b.innerHTML:DOM.prev(b).innerHTML,void 0):(w.style.display="none",void 0)},x=document.getElementById("shopCart"),y=document.getElementById("no-shop"),x.onmouseenter=function(){y.style.display="block"},x.onmouseleave=function(){y.style.display="none"},z=document.getElementById("store1"),A=z.getElementsByTagName("li"),document.getElementById("houseApp"),C=[],D=1;D<A.length;D++)"store1"===A[D].parentNode.id&&C.push(A[D]);for(E=[],F=0;F<C.length;F++)C[F].k=F,G=C[F],H=G.getElementsByTagName("div")[0],E.push(H);for(g=0;g<C.length;g++)C[g].t=g,C[g].onmouseenter=function(){E[this.t].style.display="block",C[this.t].className="selectl"},C[g].onmouseleave=function(){E[this.t].style.display="none",C[this.t].className="ll"};for(g=0;g<E.length;g++)E[g].p=g,E[g].style.top=31*-g+"px",E[g].onmouseenter=function(){C[this.p].className="selectl"},E[g].onmouseleave=function(){C[this.p].className="ll"};for(I=document.getElementById("leftUl"),J=I.getElementsByTagName("i"),g=0;g<J.length;g++)K=J[g],K.className="oli"+(g+1);!function(){var b,a=0;$("#leftUl>li:lt(4)").mouseenter(function(){if(0==a%2){$(".lfNav").slideUp(500);var b=$(this).index()}$("#leftUl>li:lt(4)").mouseleave(function(){a=0}),$("#lfLi>li:lt(4)").each(function(a,c){a===b?$(c).addClass("lfselect "):$(c).removeClass("lfselect")}),$("#lfLi>li:lt(4)").parent().siblings().each(function(a,c){a===b?$(c).addClass("lfselect "):$(c).removeClass("lfselect")})}),$("#lfLi").siblings().children(".dele").click(function(){$(".lfNav").slideDown(500),a=1}),b=document.getElementById("inp"),$("#lfLi>li:lt(4)").mouseenter(function(){b.value="移动、联通、电信";var a=$(this).index();$(this).addClass("lfselect").siblings().removeClass("lfselect"),$(this).parent().siblings().each(function(b,c){b===a?$(c).addClass("lfselect"):$(c).removeClass("lfselect")})})}(),function(){var a=document.getElementById("utiler"),b=document.getElementById("innt"),c=document.getElementById("left1"),d=document.getElementById("right1"),e=0;a.onmouseover=function(){d.style.display=c.style.display="block"},a.onmouseout=function(){d.style.display=c.style.display="none"},d.onclick=function(){e++,e>3&&(b.style.left="0px",e=1),animate(b,{left:1e3*-e},500)},c.onclick=function(){e--,0>e&&(b.style.left="-3000px",e=2),animate(b,{left:1e3*-e},500)}}(),L=null,$(".TT1").mouseenter(function(){window.clearTimeout(L),L=window.setTimeout(M,300)}),$(".TT1").mouseleave(function(){window.clearTimeout(L),$(".TT2").animate({left:250},200),$(".TT3").animate({left:500},200),$(".TT4").animate({left:750},200),$(".TT5").animate({left:994},200)}),$(".TT2").mouseenter(function(){window.clearTimeout(L),L=window.setTimeout(N,300)}),$(".TT2").mouseleave(function(){window.clearTimeout(L),$(".TT1").animate({left:0},200),$(".TT2").animate({left:250},200),$(".TT3").animate({left:500},200),$(".TT4").animate({left:750},200),$(".TT5").animate({left:994},200)}),$(".TT3").mouseenter(function(){window.clearTimeout(L),L=window.setTimeout(O,300)}),$(".TT3").mouseleave(function(){window.clearTimeout(L),$(".TT1").animate({left:0},140),$(".TT2").animate({left:250},150),$(".TT3").animate({left:500},200),$(".TT4").animate({left:750},200),$(".TT5").animate({left:994},200)}),$(".TT4").mouseenter(function(){window.clearTimeout(L),L=window.setTimeout(P,300)}),$(".TT4").mouseleave(function(){window.clearTimeout(L),$(".TT1").animate({left:0},150),$(".TT2").animate({left:250},180),$(".TT3").animate({left:500},200),$(".TT4").animate({left:750},200)}),$(".TT5").mouseenter(function(){window.clearTimeout(L),L=window.setTimeout(Q,300)}),$(".TT5").mouseleave(function(){window.clearTimeout(L),$(".TT1").animate({left:0},150),$(".TT2").animate({left:250},150),$(".TT3").animate({left:500},200),$(".TT4").animate({left:750},200),$(".TT5").animate({left:994},200)}),function(){function d(a){for(var d=0;d<b.length;d++)b[d].className="",c[d+1].className=" siv";b[a].className="seler",c[a+1].className="selc siv"}var e,a=document.getElementById("seList"),b=a.getElementsByTagName("li"),c=DOM.siblings(a);for(e=0;e<b.length;e++)b[e].t=e,b[e].onmouseenter=function(){d(this.t)}}(),function(){function d(a){for(var d=0;d<b.length;d++)b[d].className="",c[d+1].className=" siv";b[a].className="seler",c[a+1].className="selc siv"}var e,a=document.getElementById("seList1"),b=a.getElementsByTagName("li"),c=DOM.siblings(a);for(e=0;e<b.length;e++)b[e].t=e,b[e].onmouseenter=function(){d(this.t)}}(),R=document.getElementById("inp"),R.onclick=function(){R.value=""},function(){$(".btn-change").click(function(){var a=$(".addres").find("option:selected").text(),b=$(".addres1").find("option:selected").text();$(".addres").find("option:selected").text(b),$(".addres1").find("option:selected").text(a)})}(),function(){function a(a,b,c,d,e){function n(){var c,d,a="";for(c=0;c<f.length;c++)a+="<div trueImg='"+f[c]+"'></div>";for(a+="<div trueImg='"+f[0]+"'></div>",h.innerHTML=a,a="",c=0;c<f.length;c++)d=0===c?"selectLi":null,a+="<li class='"+d+"'></li>";l=h.getElementsByTagName("div")[0],m=utils.getCss(l,"width"),b.innerHTML=a,h.style.width=j.length*m+"px",b.style.width=20*k.length+"px"}function o(){for(var a=0;a<j.length;a++)~function(a){var b=j[a],c=new Image;c.src=b.getAttribute("trueImg"),c.onload=function(){b.appendChild(c),animate(c,{opacity:1},500)}}(a)}function q(){p++,p>f.length&&(h.style.left="0px",p=1),animate(h,{left:-p*m},300),s()}function s(){var b,a=p>=k.length?0:p;for(b=0;b<k.length;b++)k[b].className=b===a?"selectLi":null}var j,k,l,m,p,r,t,f=["img/init1.jpg","img/init2.jpg","img/init3.jpg","img/init4.jpg"],g=document.getElementById(e),h=document.getElementById(a);for(h.getElementsByTagName("img"),b=document.getElementById(b),c=document.getElementById(c),d=document.getElementById(d),j=h.getElementsByTagName("div"),k=b.getElementsByTagName("li"),l=null,m=null,n(),window.setTimeout(o,500),p=0,r=window.setInterval(q,3e3),t=0;t<k.length;t++)k[t].t=t,k[t].onclick=function(){window.clearInterval(r),animate(h,{left:this.t*-m},500),p=this.t,r=window.setInterval(q,3e3),s()};g.onmouseover=function(){c.style.display=d.style.display="block"},g.onmouseout=function(){c.style.display=d.style.display="none"},c.onclick=function(){window.clearInterval(r),q(),r=window.setInterval(q,3e3)},d.onclick=function(){window.clearInterval(r),p--,0>p&&(h.style.left=-f.length*m+"px",p=f.length-1),animate(h,{left:-p*m},500),r=window.setInterval(q,3e3),s()}}a("inti","tipe","righte","lefte","outi"),a("inti1","tips","rights","lefts","outi1")}(),function(){var c,a=document.getElementById("ridd1"),b=a.getElementsByTagName("li");for(c=0;c<b.length;c++)b[c].onmouseleave=function(){var a=DOM.children(this,"div");animate(a,{right:"-27px"},1e3,4)}}(),document.documentElement.clientHeight||document.body.clientHeight,function(){$("#floor li").click(function(){var a=$(this).index();0===a?document.body.scrollTop=200:1===a?document.body.scrollTop=724:2===a?document.body.scrollTop=1333:3===a?document.body.scrollTop=2111:4===a&&(document.body.scrollTop=0)})}()}();/**
 * Created by Mr.Li on 2016/1/4.
 */
(function(){
    //(function (){
    //var data=["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg",
    //    "img/banner4.jpg","img/banner5.jpg","img/banner6.jpg"];
    //var inner=document.getElementById("inner");
    //var imgList=inner.getElementsByTagName("div");
    //var tip=document.getElementById("tip");
    //var tipList=tip.getElementsByTagName("li");
    //
    //function bind(){
    //    var str="";
    //    for(var i=0;i<data.length;i++){
    //        str+="<div trueImg='"+data[i]+"'></div>";
    //    }
    //    str+="<div trueImg='"+data[0]+"'></div>";
    //    inner.innerHTML=str;
    //    str="";
    //    for(var i=0;i<data.length;i++){
    //        var cName=i===0?"selectLi":null;
    //        str+="<li class='"+cName+"'>"+(i+1)+"</li>";
    //    }
    //    tip.innerHTML=str;
    //    tip.style.width=data.length*25+"px";
    //}
    //bind();
    //function delay(){
    //    for(var i=0;i<imgList.length;i++){
    //        ~function(i){
    //            var curImg=imgList[i];
    //            var oImg=new Image;
    //            oImg.src=curImg.getAttribute("trueImg");
    //            oImg.onload=function(){
    //                curImg.appendChild(oImg);
    //                animate(oImg,{opacity:1},300);
    //            }
    //        }(i);
    //    }
    //}
    //window.setTimeout(delay,250);
    //var oImgs=inner.getElementsByTagName("img");
    //var step=0;
    ////�ѳ��˵�һ�ŵ�����ͼƬzindex��opacity��Ϊ0��
    //for(var i=1;i<imgList.length;i++){
    //    imgList[i].style.Zindex=0;
    //    imgList[i].style.opacity=0;
    //}
    //function auto(){
    //    animate(imgList[step],{zIndex:0,opacity:0},350);
    //    step++;
    //    if(step>data.length-1){
    //        oImgs[0].style.zIndex=1;
    //        step=0;
    //    }
    //    animate(imgList[step],{zIndex:1,opacity:1},400);
    //    change();
    //}
    //
    //var timer=window.setInterval(auto,2500);
    //inner.onmouseenter=function(){
    //    clearTimeout(timer);
    //};
    //inner.onmouseleave=function(){
    //    timer=window.setInterval(auto,2500);
    //};
    //function change(){
    //    var temp=step>=tipList.length? 0:step;
    //    for(var i=0;i<tipList.length;i++){
    //        tipList[i].className=temp===i?"selectLi":null;
    //    }
    //}
    //for(var i=0;i<tipList.length;i++){
    //    tipList[i].t=i;
    //    tipList[i].onclick=function(){
    //        window.clearTimeout(timer);
    //        for(var i=0;i<tipList.length;i++){
    //            animate(imgList[i],{zIndex:0,opacity:0},350);
    //        }
    //        animate(imgList[this.t],{zIndex:1,opacity:1},400);
    //        step=this.t;
    //        timer=window.setInterval(auto,2500);
    //        change();
    //    }
    //}
    //var right=document.getElementById("right");
    //var left=document.getElementById("left");
    //outer.onmouseenter=function(){
    //    right.style.display= left.style.display="block";
    //};
    //outer.onmouseleave=function(){
    //    right.style.display= left.style.display="none";
    //};
    //right.onclick=function(){
    //    window.clearInterval(timer);
    //    auto();
    //    timer=window.setInterval(auto,2500);
    //};
    //left.onclick=function(){
    //    window.clearInterval(timer);
    //    animate(imgList[step],{zIndex:0,opacity:0},350);
    //    step--;
    //    if(step<0){
    //        imgList[data.length-1].style.Zindex=1;
    //        step=data.length-1;
    //    }
    //    animate(imgList[step],{zIndex:1,opacity:1},400);
    //    timer=window.setInterval(auto,2500);
    //    change();
    //};
    //})();
    $(function (){
        var  data=["img/ban1.jpg","img/ban2.jpg","img/ban3.jpg","img/ban4.jpg","img/ban5.jpg"];
        function bind(){
            var str="";
            var st="";
            for(var i=0;i<data.length;i++){
                str+="<li trueImg='"+data[i]+"'></li>";
                st+="<li>"+(i+1)+"</li>"
            }
            $(".img").html(str);
            $(".num").html(st);
        }
        bind();
        function delay(){
            for(var i=0;i<data.length;i++){
                ~function(i){
                    var curImg=$(".img li")[i];
                    var oImg=new Image;
                    oImg.src=curImg.getAttribute("trueImg");
                    oImg.onload=function(){
                        curImg.appendChild(oImg);
                        animate(oImg,{opacity:1},300);
                    }
                }(i);
            }
        }
        //setTimeout(delay,250);
        delay();

//    var size=$(".img li").size();
//    var ll="";
//    for(var i=1;i<=size;i++){
//        ll+="<li>"+i+"</li>";
//    }
//    $(".num").html(ll);
        $(".img li").eq(0).show();
        $(".num li").eq(0).addClass("active");
        $(".num li").mouseover(function(){
            $(this).addClass("active").siblings().removeClass("active");
            var ind= $(this).index();
            i=ind;
            $(".img li").eq(ind).stop().fadeIn(300).siblings().stop().fadeOut(300);
        });
        var i=0;
        var t=setInterval(move,1800);
        function move(){
            i++;
            if(i==data.length){
                i=0;
            }
            $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
            $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        }
        function move2(){
            i--;
            if(i==-1){
                i=data.length-1;
            }
            $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
            $(".num li").eq(i).addClass("active").siblings().removeClass("active");
        }
        $(".right").click(function(){
            move();
        });
        $(".left").click(function(){
            move2();
        });
        $(".out").hover(function(){
            clearInterval(t);
        },function(){
            t=setInterval(move,1800);
        })
    });
    var top1=document.getElementById("top1");
    var topUl=document.getElementById("topUl");
    var  tSpan=topUl.getElementsByTagName("span")[0];
    var addList=document.getElementById("addList");
    var  addLia=addList.getElementsByTagName("a");

    topUl.onmouseenter=function(){
        addList.style.display="block"
    };
    topUl.onmouseleave=function(){
        addList.style.display="none"
    };
    addList.onmouseenter=function(){
        addList.style.display="block";
        topUl.className="select";
    };
    addList.onmouseleave=function(){
        addList.style.display="none";
        topUl.className="topUl";
    };
    function changer(i){
        for(var j=0;j<addLia.length;j++){
            addLia[j].className= j===i ?"visit":"null";
        }
        tSpan.innerHTML=addLia[i].innerHTML;
    }
    for(var i=0;i<addLia.length;i++){
        addLia[i].t=i;
        addLia[i].onclick=function(){
            changer(this.t);
        }
    }
    var li4=document.getElementById("li4");
    var lia=li4.getElementsByTagName("a")[0];
    var myJd=document.getElementById("myJd");
    li4.onmouseenter=function(){
        myJd.style.display="block"
    };
    li4.onmouseleave=function(){
        myJd.style.display="none"
    };
    myJd.onmouseenter=function(){
        myJd.style.display="block";
        li4.className="liover";

    };
    myJd.onmouseleave=function(){
        myJd.style.display="none";
        li4.className="li4";
    };
    var saoMa=document.getElementById("saoma");
    var li3=document.getElementById("li3");
    li3.onmouseenter=function(){
        saoMa.style.display="block";
    };
    li3.onmouseleave=function(){
        saoMa.style.display="none";
    };
    saoMa.onmouseenter=function(){
        li3.className="li3l";
        saoMa.style.display="block";
    };
    saoMa.onmouseleave=function(){
        saoMa.style.display="none";
        li3.className="li3";
    };
    var saoMa1=document.getElementById("saoma1");
    var li7=document.getElementById("li7");
    li7.onmouseenter=function(){
        saoMa1.style.display="block";
    };
    li7.onmouseleave=function(){
        saoMa1.style.display="none";
    };
    saoMa1.onmouseenter=function(){
        li7.className="li7l";
        saoMa1.style.display="block";
    };
    saoMa1.onmouseleave=function(){
        saoMa1.style.display="none";
        li7.className="li7";
    };
    var list=document.getElementById("list");
    var li5=document.getElementById("li5");
    li5.onmouseenter=function(){
        list.style.display="block";
    };
    li5.onmouseleave=function(){
        list.style.display="none";
    };
    list.onmouseenter=function(){
        li5.className="li5l";
        list.style.display="block";
    };
    list.onmouseleave=function(){
        list.style.display="none";
        li5.className="li5";
    };
    var navigation=document.getElementById("navigation");
    var li6=document.getElementById("li6");
    li6.onmouseenter=function(){
        navigation.style.display="block";
    };
    li6.onmouseleave=function(){
        navigation.style.display="none";
    };
    navigation.onmouseenter=function(){
        li6.className="li6l";
        navigation.style.display="block";
    };
    navigation.onmouseleave=function(){
        navigation.style.display="none";
        li6.className="li6";
    };
    var topImg=document.getElementById("topImg");
    var cont=document.getElementById("cont");
    var dele=topImg.getElementsByTagName("a")[0];
    dele.onclick=function(){
        animate(topImg, {opacity: 0}, 400, function () {
            cont.removeChild(topImg);
        });
    };
    var text=document.getElementById("text");
    var boxList=document.getElementById("boxList");
    text.onfocus=function(){
        this.value="";
        var val=this.value.replace(/(^ +| +$)/g,"");
        boxList.style.display=val.length>0?"block":"none";
    };
    text.onkeyup=function(){
        var val=this.value.replace(/(^ +| +$)/g,"");
        boxList.style.display=val.length>0?"block":"none";
    };
    document.body.onclick=function(e){
        e=e||window.event;
        var tar= e.target|| e.srcElement;

        if(tar.id==="text"){
            return;
        }
        if(tar.tagName.toLowerCase()==="p" && tar.parentNode.parentNode.parentNode.id==="boxList"){
            boxList.style.display="none";
            text.value= tar.className==="p1"?tar.innerHTML:DOM.prev(tar).innerHTML;
            return;
        }
        boxList.style.display="none";
    };
    var shopCart=document.getElementById("shopCart");
    var noshop=document.getElementById("no-shop");
    shopCart.onmouseenter=function(){
        noshop.style.display="block";
    };
    shopCart.onmouseleave=function(){
        noshop.style.display="none";
    };
    //�ֲ�ͼ

    var store1=document.getElementById("store1");
    var houseLi=store1.getElementsByTagName("li");
    var houseApp=document.getElementById("houseApp");
    var oLis=[];
    for(var k=1;k<houseLi.length;k++) {
        if (houseLi[k].parentNode.id === "store1") {
            oLis.push(houseLi[k]);
        }
    }
    var houseDivs=[];
    for(var j=0;j<oLis.length;j++) {
        oLis[j].k = j;
        var oLi = oLis[j];
        var houseDiv = oLi.getElementsByTagName("div")[0];
        houseDivs.push(houseDiv);
    }
    for(var i=0;i<oLis.length;i++){
        oLis[i].t=i;
        oLis[i].onmouseenter=function(){
            houseDivs[this.t].style.display="block";
            oLis[this.t].className="selectl";
        };
        oLis[i].onmouseleave=function(){
            houseDivs[this.t].style.display="none";
            oLis[this.t].className="ll";
        };
    }

    for(var i=0;i<houseDivs.length;i++){
        houseDivs[i].p=i;
        houseDivs[i].style.top=-i*31+"px";
        houseDivs[i].onmouseenter=function(){
            oLis[ this.p].className="selectl";
        };
        houseDivs[i].onmouseleave=function(){
            oLis[ this.p].className="ll";
        }
    }
    var leftUl=document.getElementById("leftUl");
    var ulI=leftUl.getElementsByTagName("i");
    for(var i=0;i<ulI.length;i++){
        var oui=ulI[i];
        oui.className="oli"+(i+1);
        //oui.index=i;  IE7不兼容
        //oui.style.backgroundPositionY=oui.index*-25+"px";
        //console.log(oui.style.backgroundPositionY)
    }
    //life server
    (function (){
        //var lfTab=document.getElementById("lfTab");
        //    var lfLi=document.getElementById("lfLi");
        //var lfLis=lfLi.getElementsByTagName("li");
        //var  lfDivs=DOM.siblings(lfLi);
        //    function change(e){
        //        for(var i=0;i<lfLis.length;i++){
        //            lfLis[i].className=null;
        //            lfDivs[i].className=null;
        //        }
        //        lfLis[e].className="lfselect";
        //        lfDivs[e].className="lfselect";
        //    }
        //     for(var i=0;i<lfLis.length;i++){
        //         lfLis[i].t=i;
        //         lfLis[i].onmousemove=function(){
        //             change(this.t);
        //         }
        //         var leftUl=document.getElementById("leftUl");
        //         var leftLis=leftUl.getElementsByTagName("li");
        //         var lftLis=[];
        //         for(var i=0;i<4;i++){
        //             lftLis.push(leftLis[i]);
        //         }
        //         for(var i=0;i<lftLis.length;i++){
        //             lftLis[i].k=i;
        //             lftLis[i].onmousemove=function(){
        //                 change(this.k);
        //             }
        //         }
        var step=0;
        $("#leftUl>li:lt(4)").mouseenter(function () {
            if(step%2==0) {
                $(".lfNav").slideUp(500);
                var $inddex = $(this).index();
            }
            $("#leftUl>li:lt(4)").mouseleave(function () {
                step=0;
            });
            $("#lfLi>li:lt(4)").each(function (index, item) {
                index === $inddex ? $(item).addClass("lfselect ") : $(item).removeClass("lfselect");
            });
            $("#lfLi>li:lt(4)").parent().siblings().each(function (index, item) {
                index === $inddex ? $(item).addClass("lfselect ") : $(item).removeClass("lfselect");
            })
        });
        $("#lfLi").siblings().children(".dele").click(function(){
            $(".lfNav").slideDown(500);
            step=1;
        });
        var inp=document.getElementById("inp");
        $("#lfLi>li:lt(4)").mouseenter(function(){
            inp.value="移动、联通、电信";
            var $index=$(this).index();
            $(this).addClass("lfselect").siblings().removeClass("lfselect");
            $(this).parent().siblings().each(function(index,item){
                index===$index? $(item).addClass("lfselect"):$(item).removeClass("lfselect");
            })
        });
    })();
    (function(){
        var utiler=document.getElementById("utiler");
        var innt=document.getElementById("innt");
        var left1=document.getElementById("left1");
        var right1=document.getElementById("right1");
        var step=0;
        utiler.onmouseover=function(){
            right1.style.display=left1.style.display="block";
        };
        utiler.onmouseout=function(){
            right1.style.display=left1.style.display="none";
        };
        right1.onclick=function(){
            step++;
            if(step>3){
                innt.style.left=0+"px";
                step=1;
            }
            animate(innt,{left:-step*1000},500);
        };
        left1.onclick=function(){
            step--;
            if(step<0){
                innt.style.left=-3000+"px";
                step=2;
            }
            animate(innt,{left:-step*1000},500);
        };
    })();
    var times=null;
    function time1(){
        $(".TT2").animate({left:994},200);
        $(".TT3").animate({left:1245},200);
        $(".TT4").animate({left:1490},200);
        $(".TT5").animate({left:1740},200);
    }
    $(".TT1").mouseenter(function(){
        window.clearTimeout(times);
        times=window.setTimeout(time1,300);
    });
    $(".TT1").mouseleave(function(){
        window.clearTimeout(times);
        $(".TT2").animate({left:250},200);
        $(".TT3").animate({left:500},200);
        $(".TT4").animate({left:750},200);
        $(".TT5").animate({left:994},200);
    });
    function time2(){
        $(".TT1").animate({left:-250},200);
        $(".TT2").animate({left:0},150);
        $(".TT3").animate({left:994},200);
        $(".TT4").animate({left:1244},200);
        $(".TT5").animate({left:1494},200);
    }
    $(".TT2").mouseenter(function(){
        window.clearTimeout(times);
        times=window.setTimeout(time2,300);
    });
    $(".TT2").mouseleave(function(){
        window.clearTimeout(times);
        $(".TT1").animate({left:0},200);
        $(".TT2").animate({left:250},200);
        $(".TT3").animate({left:500},200);
        $(".TT4").animate({left:750},200);
        $(".TT5").animate({left:994},200);
    });
    function time3(){
        $(".TT1").animate({left:-500},280);
        $(".TT2").animate({left:-750},300);
        $(".TT3").animate({left:0},200);
        $(".TT4").animate({left:994},200);
        $(".TT5").animate({left:1244},230);
    }
    $(".TT3").mouseenter(function(){
        window.clearTimeout(times);
        times=window.setTimeout(time3,300);
    });
    $(".TT3").mouseleave(function(){
        window.clearTimeout(times);
        $(".TT1").animate({left:0},140);
        $(".TT2").animate({left:250},150);
        $(".TT3").animate({left:500},200);
        $(".TT4").animate({left:750},200);
        $(".TT5").animate({left:994},200);
    });
    function time4(){
        $(".TT1").animate({left:-750},300);
        $(".TT2").animate({left:-500},300);
        $(".TT3").animate({left:-250},220);
        $(".TT4").animate({left:0},220);
    }
    $(".TT4").mouseenter(function(){
        window.clearTimeout(times);
        times=window.setTimeout(time4,300);
    });
    $(".TT4").mouseleave(function(){
        window.clearTimeout(times);
        $(".TT1").animate({left:0},150);
        $(".TT2").animate({left:250},180);
        $(".TT3").animate({left:500},200);
        $(".TT4").animate({left:750},200);
    });
    function time5(){
        $(".TT5").animate({left:250},200);
        $(".TT1").animate({left:-750},300);
        $(".TT2").animate({left:-500},300);
        $(".TT3").animate({left:-250},210);
        $(".TT4").animate({left:0},210);
    }
    $(".TT5").mouseenter(function(){
        window.clearTimeout(times);
        times=window.setTimeout(time5,300);
    });
    $(".TT5").mouseleave(function(){
        window.clearTimeout(times);
        $(".TT1").animate({left:0},150);
        $(".TT2").animate({left:250},150);
        $(".TT3").animate({left:500},200);
        $(".TT4").animate({left:750},200);
        $(".TT5").animate({left:994},200);
    });
    (function (){
        var seList=document.getElementById("seList");
        var oLis=seList.getElementsByTagName("li");
        var oDivs=DOM.siblings(seList);
        function changeTab(Ins){
            for(var i=0;i<oLis.length;i++){
                oLis[i].className="";
                oDivs[i+1].className=" siv";
            }
            oLis[Ins].className="seler";
            oDivs[Ins+1].className="selc siv";
        }
        for(var i=0;i<oLis.length;i++){
            oLis[i].t=i;
            oLis[i].onmouseenter=function(){
                changeTab(this.t);
            }
        }
    })();
    (function (){
        var seList=document.getElementById("seList1");
        var oLis=seList.getElementsByTagName("li");
        var oDivs=DOM.siblings(seList);
        function changeTab(Ins){
            for(var i=0;i<oLis.length;i++){
                oLis[i].className="";
                oDivs[i+1].className=" siv";
            }
            oLis[Ins].className="seler";
            oDivs[Ins+1].className="selc siv";
        }
        for(var i=0;i<oLis.length;i++){
            oLis[i].t=i;
            oLis[i].onmouseenter=function(){
                changeTab(this.t);
            }
        }

    })();
    var inp=document.getElementById("inp");
    inp.onclick=function(){
        inp.value="";
    };
    //地址切换；
    (function (){
        //     var btnChange=document.getElementById("btnChange");
        //     var optis=DOM._children(ad1.parentNode);
        //     var opts=DOM._children(ad2.parentNode);
        //var addsel1=document.getElementById("addres");
        //var addsel2=document.getElementById("addres1");
        //    btnChange.onclick=function() {
        //        var t=null;
        // for (var i=0;i<optis.length;i++){
        //     optis[i].value==addsel1.value? t=i :null;
        // }
        //        var tem=null;
        //        for (var j=0;j<opts.length;j++){
        //            opts[j].value==addsel2.value? e=j :null;
        //        }
        //    var temp=optis[t].value;
        //        optis[t].innerHTML=opts[e].value;
        //        opts[e].innerHTML=temp;
        //    };
        $(".btn-change").click(function(){
            var s=$(".addres").find("option:selected").text();
            var e=$(".addres1").find("option:selected").text();
            $(".addres").find("option:selected").text(e);
            $(".addres1").find("option:selected").text(s);
        })
    })();
    (function(){
        changl("inti","tipe","righte","lefte","outi");
        changl("inti1","tips","rights","lefts","outi1");
        function  changl(ele,tipn,right,left,eles){
            var data = ["img/init1.jpg", "img/init2.jpg", "img/init3.jpg", "img/init4.jpg"];
            var outter=document.getElementById(eles);
            var inti=document.getElementById(ele);
            var imgL=inti.getElementsByTagName("img");
            var tipn=document.getElementById(tipn);
            var right=document.getElementById(right);
            var left=document.getElementById(left);
            var imgList=inti.getElementsByTagName("div");
            var tipList=tipn.getElementsByTagName("li");
            var imgl=null;
            var imgm=null;
            function bind(){
                var str="";
                for(var i=0;i<data.length;i++){
                    str+="<div trueImg='"+data[i]+"'></div>";
                }
                str+="<div trueImg='"+data[0]+"'></div>";
                inti.innerHTML=str;
                str="";
                for(var i=0;i<data.length;i++){
                    var cName=i===0?"selectLi":null;
                    str+="<li class='"+cName+"'></li>";
                }
                imgl=inti.getElementsByTagName("div")[0];
                imgm=utils.getCss(imgl,"width");
                tipn.innerHTML=str;
                inti.style.width=imgList.length*imgm+"px";
                tipn.style.width=tipList.length*20+"px";
            }
            bind();
            function delay(){
                for(var i=0;i<imgList.length;i++){
                    ~function(i){
                        var curImg=imgList[i];
                        var oImg=new Image;
                        oImg.src=curImg.getAttribute("trueImg");
                        oImg.onload=function(){
                            curImg.appendChild(oImg);
                            animate(oImg,{opacity:1},500);
                        }
                    }(i);
                }
            }
            window.setTimeout(delay,500);
            var step=0;
            function auto(){
                step++;
                if(step>data.length){
                    inti.style.left=0+"px";
                    step=1;
                }
                animate(inti,{left:-step*imgm},300);
                change()
            }
            var timer=window.setInterval(auto,3000);
            function change(){
                var temp=step>=tipList.length?0:step;
                for(var i=0;i<tipList.length;i++){
                    tipList[i].className=i===temp?"selectLi":null;
                }
            }
            for(var i=0;i<tipList.length;i++){
                tipList[i].t=i;
                tipList[i].onclick=function(){
                    window.clearInterval(timer);
                    animate(inti,{left:this.t*-imgm},500);
                    step=this.t;
                    timer=window.setInterval(auto,3000);
                    change();
                }
            }
            outter.onmouseover=function(){
                right.style.display=left.style.display="block";
            };
            outter.onmouseout=function(){
                right.style.display=left.style.display="none";
            };
            right.onclick=function(){
                window.clearInterval(timer);
                auto();
                timer=window.setInterval(auto,3000);
            };
            left.onclick=function(){
                window.clearInterval(timer);
                step--;
                if(step<0){
                    inti.style.left=-data.length*imgm+"px";
                    step=data.length-1;
                }
                animate(inti,{left:-step*imgm},500);
                timer=window.setInterval(auto,3000);
                change();
            };
        }
    })();
    (function (){
        var ridd1 =document.getElementById("ridd1");
        var rils=ridd1.getElementsByTagName("li");
        for(var i=0;i<rils.length;i++){
            rils[i].onmouseleave=function(){
                var ridv=DOM.children(this,"div");
                animate(ridv,{right:-27+"px"},1000,4)
            }
        }
    })();
    var winH=document.documentElement.clientHeight||document.body.clientHeight;
    (function (){
        $("#floor li").click(function(){
            var $ind=$(this).index();
            if($ind===0){
                document.body.scrollTop=200;
            }else if($ind===1){
                document.body.scrollTop=724;
            }else if($ind===2){
                document.body.scrollTop=1333;
            }else if($ind===3){
                document.body.scrollTop=2111;
            }else if($ind===4){
                document.body.scrollTop=0;
            }
        })
    })();
})();
