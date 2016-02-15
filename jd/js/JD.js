/**
 * Created by Mr.Li on 2016/1/4.
 */
(function(){
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
    var data=["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg",
        "img/banner4.jpg","img/banner5.jpg","img/banner6.jpg"];
    var inner=document.getElementById("inner");
    var imgList=inner.getElementsByTagName("div");
    var tip=document.getElementById("tip");
    var tipList=tip.getElementsByTagName("li");

    function bind(){
        var str="";
        for(var i=0;i<data.length;i++){
            str+="<div trueImg='"+data[i]+"'></div>";
        }
        str+="<div trueImg='"+data[0]+"'></div>";
        inner.innerHTML=str;
        str="";
        for(var i=0;i<data.length;i++){
            var cName=i===0?"selectLi":null;
            str+="<li class='"+cName+"'>"+(i+1)+"</li>";
        }
        tip.innerHTML=str;
        tip.style.width=data.length*25+"px";
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
                 animate(oImg,{opacity:1},300);
             }
         }(i);
     }
 }
    window.setTimeout(delay,250);
    var oImgs=inner.getElementsByTagName("img");
    var step=0;
    //�ѳ��˵�һ�ŵ�����ͼƬzindex��opacity��Ϊ0��
    for(var i=1;i<imgList.length;i++){
        imgList[i].style.Zindex=0;
        imgList[i].style.opacity=0;
    }
    function auto(){
        animate(imgList[step],{zIndex:0,opacity:0},700);
        step++;
        if(step>data.length-1){
            oImgs[0].style.zIndex=1;
            step=0;
        }
        animate(imgList[step],{zIndex:1,opacity:1},1500);
        change();
    }

    var timer=window.setInterval(auto,2800);
    function change(){
        var temp=step>=tipList.length? 0:step;
        for(var i=0;i<tipList.length;i++){
            tipList[i].className=temp===i?"selectLi":null;
        }
    }
    for(var i=0;i<tipList.length;i++){
        tipList[i].t=i;
        tipList[i].onclick=function(){
            window.clearTimeout(timer);
          for(var i=0;i<tipList.length;i++){
            animate(imgList[i],{zIndex:0,opacity:0},700);
          }
            animate(imgList[this.t],{zIndex:1,opacity:1},1500);
            step=this.t;
            timer=window.setInterval(auto,3000);
            change();
        }
    }
    var right=document.getElementById("right");
    var left=document.getElementById("left");
    outer.onmouseenter=function(){
        right.style.display= left.style.display="block";
    };
    outer.onmouseleave=function(){
        right.style.display= left.style.display="none";
    };
    right.onclick=function(){
        window.clearInterval(timer);
            auto();
        timer=window.setInterval(auto,3000);
    };
    left.onclick=function(){
        window.clearInterval(timer);
            animate(imgList[step],{zIndex:0,opacity:0},500);
        step--;
        if(step<0){
          imgList[data.length-1].style.Zindex=1;
            step=data.length-1;
        }
        animate(imgList[step],{zIndex:1,opacity:1},1800);
        timer=window.setInterval(auto,3000);
        change();
    };
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
        $(".TT3").animate({left:-250},200);
        $(".TT4").animate({left:0},230);
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
        $(".TT3").animate({left:-250},200);
        $(".TT4").animate({left:0},230);
    }
    $(".TT5").mouseenter(function(){
        window.clearTimeout(times);
        times=window.setTimeout(time5,300);
    });
    $(".TT5").mouseleave(function(){
        window.clearTimeout(times);
        $(".TT1").animate({left:0},150);
        $(".TT2").animate({left:250},180);
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
            var tipn=document.getElementById(tipn);
            var right=document.getElementById(right);
            var left=document.getElementById(left);

            var imgList=inti.getElementsByTagName("div");
            var tipList=tipn.getElementsByTagName("li");
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
                tipn.innerHTML=str;
                inti.style.width=imgList.length*439+"px";
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
                animate(inti,{left:-step*439},300);
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
                    animate(inti,{left:this.t*-439},500);
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
                    inti.style.left=-data.length*439+"px";
                    step=data.length-1;
                }
                animate(inti,{left:-step*439},500);
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
    var load1Img=function(){
        var winT=document.documentElement.scrollTop||document.body.scrollTop;
        var imgList=document.body.getElementsByTagName("img");
        console.log(imgList[0].offsetParent);
        for(var i=0;i<imgList.length;i++){
            ~function(i){
                var curImg=imgList[i];
                if(curImg.isLoad)return;
                var imgT=utils.offset(curImg).top;
                var imgH=curImg.offsetHeight;
                if(imgT+imgH<=winT+winH){
                    var oImg=new Image;
                    oImg.src=curImg.getAttribute("trueImg");
                    oImg.onload=function(){
                        curImg.src=this.src;
                        oImg=null;
                        curImg.isLoad=true;
                    }
                }
            }(i);
        }
    };
    window.onscroll=load1Img;
    window.onscroll();
})();
