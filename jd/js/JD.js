!function(){function f(){var e,f,c="";for(e=0;e<a.length;e++)c+="<div trueImg='"+a[e]+"'></div>";for(c+="<div trueImg='"+a[0]+"'></div>",b.innerHTML=c,c="",e=0;e<a.length;e++)f=0===e?"selectLi":null,c+="<li class='"+f+"'>"+(e+1)+"</li>";d.innerHTML=c,d.style.width=25*a.length+"px"}function g(){for(var a=0;a<c.length;a++)~function(a){var b=c[a],d=new Image;d.src=b.getAttribute("trueImg"),d.onload=function(){b.appendChild(d),animate(d,{opacity:1},300)}}(a)}function k(){animate(c[i],{zIndex:0,opacity:0},350),i++,i>a.length-1&&(h[0].style.zIndex=1,i=0),animate(c[i],{zIndex:1,opacity:1},400),m()}function m(){var b,a=i>=e.length?0:i;for(b=0;b<e.length;b++)e[b].className=a===b?"selectLi":null}function u(a){for(var b=0;b<t.length;b++)t[b].className=b===a?"visit":"null";r.innerHTML=t[a].innerHTML}function _(){$(".TT2").animate({left:994},200),$(".TT3").animate({left:1245},200),$(".TT4").animate({left:1490},200),$(".TT5").animate({left:1740},200)}function ab(){$(".TT1").animate({left:-250},200),$(".TT2").animate({left:0},150),$(".TT3").animate({left:994},200),$(".TT4").animate({left:1244},200),$(".TT5").animate({left:1494},200)}function bb(){$(".TT1").animate({left:-500},280),$(".TT2").animate({left:-750},300),$(".TT3").animate({left:0},200),$(".TT4").animate({left:994},200),$(".TT5").animate({left:1244},230)}function cb(){$(".TT1").animate({left:-750},300),$(".TT2").animate({left:-500},300),$(".TT3").animate({left:-250},200),$(".TT4").animate({left:0},230)}function db(){$(".TT5").animate({left:250},200),$(".TT1").animate({left:-750},300),$(".TT2").animate({left:-500},300),$(".TT3").animate({left:-250},200),$(".TT4").animate({left:0},230)}var h,i,j,l,n,o,q,r,s,t,v,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,Q,R,S,T,U,V,W,X,Y,Z,eb,a=["img/banner1.jpg","img/banner2.jpg","img/banner3.jpg","img/banner4.jpg","img/banner5.jpg","img/banner6.jpg"],b=document.getElementById("inner"),c=b.getElementsByTagName("div"),d=document.getElementById("tip"),e=d.getElementsByTagName("li");for(f(),window.setTimeout(g,250),h=b.getElementsByTagName("img"),i=0,j=1;j<c.length;j++)c[j].style.Zindex=0,c[j].style.opacity=0;for(l=window.setInterval(k,2800),j=0;j<e.length;j++)e[j].t=j,e[j].onclick=function(){window.clearTimeout(l);for(var a=0;a<e.length;a++)animate(c[a],{zIndex:0,opacity:0},350);animate(c[this.t],{zIndex:1,opacity:1},400),i=this.t,l=window.setInterval(k,2800),m()};for(n=document.getElementById("right"),o=document.getElementById("left"),outer.onmouseenter=function(){n.style.display=o.style.display="block"},outer.onmouseleave=function(){n.style.display=o.style.display="none"},n.onclick=function(){window.clearInterval(l),k(),l=window.setInterval(k,2800)},o.onclick=function(){window.clearInterval(l),animate(c[i],{zIndex:0,opacity:0},350),i--,0>i&&(c[a.length-1].style.Zindex=1,i=a.length-1),animate(c[i],{zIndex:1,opacity:1},400),l=window.setInterval(k,2800),m()},document.getElementById("top1"),q=document.getElementById("topUl"),r=q.getElementsByTagName("span")[0],s=document.getElementById("addList"),t=s.getElementsByTagName("a"),q.onmouseenter=function(){s.style.display="block"},q.onmouseleave=function(){s.style.display="none"},s.onmouseenter=function(){s.style.display="block",q.className="select"},s.onmouseleave=function(){s.style.display="none",q.className="topUl"},j=0;j<t.length;j++)t[j].t=j,t[j].onclick=function(){u(this.t)};for(v=document.getElementById("li4"),v.getElementsByTagName("a")[0],x=document.getElementById("myJd"),v.onmouseenter=function(){x.style.display="block"},v.onmouseleave=function(){x.style.display="none"},x.onmouseenter=function(){x.style.display="block",v.className="liover"},x.onmouseleave=function(){x.style.display="none",v.className="li4"},y=document.getElementById("saoma"),z=document.getElementById("li3"),z.onmouseenter=function(){y.style.display="block"},z.onmouseleave=function(){y.style.display="none"},y.onmouseenter=function(){z.className="li3l",y.style.display="block"},y.onmouseleave=function(){y.style.display="none",z.className="li3"},A=document.getElementById("saoma1"),B=document.getElementById("li7"),B.onmouseenter=function(){A.style.display="block"},B.onmouseleave=function(){A.style.display="none"},A.onmouseenter=function(){B.className="li7l",A.style.display="block"},A.onmouseleave=function(){A.style.display="none",B.className="li7"},C=document.getElementById("list"),D=document.getElementById("li5"),D.onmouseenter=function(){C.style.display="block"},D.onmouseleave=function(){C.style.display="none"},C.onmouseenter=function(){D.className="li5l",C.style.display="block"},C.onmouseleave=function(){C.style.display="none",D.className="li5"},E=document.getElementById("navigation"),F=document.getElementById("li6"),F.onmouseenter=function(){E.style.display="block"},F.onmouseleave=function(){E.style.display="none"},E.onmouseenter=function(){F.className="li6l",E.style.display="block"},E.onmouseleave=function(){E.style.display="none",F.className="li6"},G=document.getElementById("topImg"),H=document.getElementById("cont"),I=G.getElementsByTagName("a")[0],I.onclick=function(){animate(G,{opacity:0},400,function(){H.removeChild(G)})},J=document.getElementById("text"),K=document.getElementById("boxList"),J.onfocus=function(){this.value="";var a=this.value.replace(/(^ +| +$)/g,"");K.style.display=a.length>0?"block":"none"},J.onkeyup=function(){var a=this.value.replace(/(^ +| +$)/g,"");K.style.display=a.length>0?"block":"none"},document.body.onclick=function(a){a=a||window.event;var b=a.target||a.srcElement;if("text"!==b.id)return"p"===b.tagName.toLowerCase()&&"boxList"===b.parentNode.parentNode.parentNode.id?(K.style.display="none",J.value="p1"===b.className?b.innerHTML:DOM.prev(b).innerHTML,void 0):(K.style.display="none",void 0)},L=document.getElementById("shopCart"),M=document.getElementById("no-shop"),L.onmouseenter=function(){M.style.display="block"},L.onmouseleave=function(){M.style.display="none"},N=document.getElementById("store1"),O=N.getElementsByTagName("li"),document.getElementById("houseApp"),Q=[],R=1;R<O.length;R++)"store1"===O[R].parentNode.id&&Q.push(O[R]);for(S=[],T=0;T<Q.length;T++)Q[T].k=T,U=Q[T],V=U.getElementsByTagName("div")[0],S.push(V);for(j=0;j<Q.length;j++)Q[j].t=j,Q[j].onmouseenter=function(){S[this.t].style.display="block",Q[this.t].className="selectl"},Q[j].onmouseleave=function(){S[this.t].style.display="none",Q[this.t].className="ll"};for(j=0;j<S.length;j++)S[j].p=j,S[j].style.top=31*-j+"px",S[j].onmouseenter=function(){Q[this.p].className="selectl"},S[j].onmouseleave=function(){Q[this.p].className="ll"};for(W=document.getElementById("leftUl"),X=W.getElementsByTagName("i"),j=0;j<X.length;j++)Y=X[j],Y.className="oli"+(j+1);!function(){var b,a=0;$("#leftUl>li:lt(4)").mouseenter(function(){if(0==a%2){$(".lfNav").slideUp(500);var b=$(this).index()}$("#leftUl>li:lt(4)").mouseleave(function(){a=0}),$("#lfLi>li:lt(4)").each(function(a,c){a===b?$(c).addClass("lfselect "):$(c).removeClass("lfselect")}),$("#lfLi>li:lt(4)").parent().siblings().each(function(a,c){a===b?$(c).addClass("lfselect "):$(c).removeClass("lfselect")})}),$("#lfLi").siblings().children(".dele").click(function(){$(".lfNav").slideDown(500),a=1}),b=document.getElementById("inp"),$("#lfLi>li:lt(4)").mouseenter(function(){b.value="移动、联通、电信";var a=$(this).index();$(this).addClass("lfselect").siblings().removeClass("lfselect"),$(this).parent().siblings().each(function(b,c){b===a?$(c).addClass("lfselect"):$(c).removeClass("lfselect")})})}(),function(){var a=document.getElementById("utiler"),b=document.getElementById("innt"),c=document.getElementById("left1"),d=document.getElementById("right1"),e=0;a.onmouseover=function(){d.style.display=c.style.display="block"},a.onmouseout=function(){d.style.display=c.style.display="none"},d.onclick=function(){e++,e>3&&(b.style.left="0px",e=1),animate(b,{left:1e3*-e},500)},c.onclick=function(){e--,0>e&&(b.style.left="-3000px",e=2),animate(b,{left:1e3*-e},500)}}(),Z=null,$(".TT1").mouseenter(function(){window.clearTimeout(Z),Z=window.setTimeout(_,300)}),$(".TT1").mouseleave(function(){window.clearTimeout(Z),$(".TT2").animate({left:250},200),$(".TT3").animate({left:500},200),$(".TT4").animate({left:750},200),$(".TT5").animate({left:994},200)}),$(".TT2").mouseenter(function(){window.clearTimeout(Z),Z=window.setTimeout(ab,300)}),$(".TT2").mouseleave(function(){window.clearTimeout(Z),$(".TT1").animate({left:0},200),$(".TT2").animate({left:250},200),$(".TT3").animate({left:500},200),$(".TT4").animate({left:750},200),$(".TT5").animate({left:994},200)}),$(".TT3").mouseenter(function(){window.clearTimeout(Z),Z=window.setTimeout(bb,300)}),$(".TT3").mouseleave(function(){window.clearTimeout(Z),$(".TT1").animate({left:0},140),$(".TT2").animate({left:250},150),$(".TT3").animate({left:500},200),$(".TT4").animate({left:750},200),$(".TT5").animate({left:994},200)}),$(".TT4").mouseenter(function(){window.clearTimeout(Z),Z=window.setTimeout(cb,300)}),$(".TT4").mouseleave(function(){window.clearTimeout(Z),$(".TT1").animate({left:0},150),$(".TT2").animate({left:250},180),$(".TT3").animate({left:500},200),$(".TT4").animate({left:750},200)}),$(".TT5").mouseenter(function(){window.clearTimeout(Z),Z=window.setTimeout(db,300)}),$(".TT5").mouseleave(function(){window.clearTimeout(Z),$(".TT1").animate({left:0},150),$(".TT2").animate({left:250},180),$(".TT3").animate({left:500},200),$(".TT4").animate({left:750},200),$(".TT5").animate({left:994},200)}),function(){function d(a){for(var d=0;d<b.length;d++)b[d].className="",c[d+1].className=" siv";b[a].className="seler",c[a+1].className="selc siv"}var e,a=document.getElementById("seList"),b=a.getElementsByTagName("li"),c=DOM.siblings(a);for(e=0;e<b.length;e++)b[e].t=e,b[e].onmouseenter=function(){d(this.t)}}(),function(){function d(a){for(var d=0;d<b.length;d++)b[d].className="",c[d+1].className=" siv";b[a].className="seler",c[a+1].className="selc siv"}var e,a=document.getElementById("seList1"),b=a.getElementsByTagName("li"),c=DOM.siblings(a);for(e=0;e<b.length;e++)b[e].t=e,b[e].onmouseenter=function(){d(this.t)}}(),eb=document.getElementById("inp"),eb.onclick=function(){eb.value=""},function(){$(".btn-change").click(function(){var a=$(".addres").find("option:selected").text(),b=$(".addres1").find("option:selected").text();$(".addres").find("option:selected").text(b),$(".addres1").find("option:selected").text(a)})}(),function(){function a(a,b,c,d,e){function n(){var c,d,a="";for(c=0;c<f.length;c++)a+="<div trueImg='"+f[c]+"'></div>";for(a+="<div trueImg='"+f[0]+"'></div>",h.innerHTML=a,a="",c=0;c<f.length;c++)d=0===c?"selectLi":null,a+="<li class='"+d+"'></li>";l=h.getElementsByTagName("div")[0],m=utils.getCss(l,"width"),b.innerHTML=a,h.style.width=j.length*m+"px",b.style.width=20*k.length+"px"}function o(){for(var a=0;a<j.length;a++)~function(a){var b=j[a],c=new Image;c.src=b.getAttribute("trueImg"),c.onload=function(){b.appendChild(c),animate(c,{opacity:1},500)}}(a)}function q(){p++,p>f.length&&(h.style.left="0px",p=1),animate(h,{left:-p*m},300),s()}function s(){var b,a=p>=k.length?0:p;for(b=0;b<k.length;b++)k[b].className=b===a?"selectLi":null}var j,k,l,m,p,r,t,f=["img/init1.jpg","img/init2.jpg","img/init3.jpg","img/init4.jpg"],g=document.getElementById(e),h=document.getElementById(a);for(h.getElementsByTagName("img"),b=document.getElementById(b),c=document.getElementById(c),d=document.getElementById(d),j=h.getElementsByTagName("div"),k=b.getElementsByTagName("li"),l=null,m=null,n(),window.setTimeout(o,500),p=0,r=window.setInterval(q,3e3),t=0;t<k.length;t++)k[t].t=t,k[t].onclick=function(){window.clearInterval(r),animate(h,{left:this.t*-m},500),p=this.t,r=window.setInterval(q,3e3),s()};g.onmouseover=function(){c.style.display=d.style.display="block"},g.onmouseout=function(){c.style.display=d.style.display="none"},c.onclick=function(){window.clearInterval(r),q(),r=window.setInterval(q,3e3)},d.onclick=function(){window.clearInterval(r),p--,0>p&&(h.style.left=-f.length*m+"px",p=f.length-1),animate(h,{left:-p*m},500),r=window.setInterval(q,3e3),s()}}a("inti","tipe","righte","lefte","outi"),a("inti1","tips","rights","lefts","outi1")}(),function(){var c,a=document.getElementById("ridd1"),b=a.getElementsByTagName("li");for(c=0;c<b.length;c++)b[c].onmouseleave=function(){var a=DOM.children(this,"div");animate(a,{right:"-27px"},1e3,4)}}(),document.documentElement.clientHeight||document.body.clientHeight}();