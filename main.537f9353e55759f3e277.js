(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t){},1:function(e,t){},"5W5a":function(e,t,n){},"8WHe":function(e,t,n){"use strict";n.r(t);n("fjv7");var o=function(e,t){var n=this,o={fen:"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",resize:!0,orientation:"w",minSquareSize:20,maxSquareSize:64};for(var r in t)o[r]=t[r];var i,a,s,l=[],c={},p={pieces:[],selectedElement:null};function u(e,t){return String.fromCharCode(97+t)+e}function d(e){var t=document.createElement("div");return t.className="square "+e,t.setAttribute("data-piece",e),p.pieces.push({piece:e,element:t}),t}function m(e){var t=document.createElement("div");t.className="pieces",t.appendChild(d(e+"Q")),t.appendChild(d(e+"R")),t.appendChild(d(e+"N")),t.appendChild(d(e+"B")),"w"===e?p.whitePiecesWrapper=t:p.blackPiecesWrapper=t}function h(e){var t=e.target;if(t!==p.selectedElement){if(null===p.selectedElement)return p.selectedElement=t,t.classList.add("selected"),void(p.promoteButton.disabled=!1);p.selectedElement.classList.remove("selected"),p.selectedElement=t,t.classList.add("selected")}}function f(){var e=p.selectedElement.getAttribute("data-piece"),t=String.fromCharCode(e.charCodeAt(1)+32);p.overlay.style.display="none",p.callback&&p.callback(t)}function v(){var e,t;e=getComputedStyle(c.element.parentNode),t=parseInt(e.width)-parseInt(e.paddingLeft)-parseInt(e.paddingRight),a=Math.floor((t-2*i)/8),a=Math.min(a,o.maxSquareSize);var n=(a=Math.max(a,o.minSquareSize))+"px",r=8*a+"px",l=6*a+"px";c.element.style.width=8*a+s+"px";for(var u=8;u>=1;u--){c[u].element.style.width=r,c[u].element.style.height=n;for(var d=0;d<8;d++)c[u][d].element.style.width=n,c[u][d].element.style.height=n,c[u][d].element.style.backgroundSize=l,c[u][d].element.style.backgroundPosition=y(c[u][d].piece)}p.wrapper.style.width=4*a+"px",p.wrapper.style.height=2*a+"px",p.wrapper.style.marginTop=3*a+"px",p.whitePiecesWrapper.style.height=n,p.blackPiecesWrapper.style.height=n;for(var m=0,h=p.pieces.length;m<h;m++){var f=p.pieces[m].piece,v=p.pieces[m].element;v.style.width=n,v.style.height=n,v.style.backgroundSize=l,v.style.backgroundPosition=y(f)}p.promoteButtonWrapper.style.height=n,p.promoteButtonWrapper.style.lineHeight=n,p.promoteButton.style.fontSize=a/2.5+"px"}function y(e){switch(e){case"wP":return"0 0";case"wB":return-1*a+"px 0";case"wN":return-2*a+"px 0";case"wR":return-3*a+"px 0";case"wQ":return-4*a+"px 0";case"wK":return-5*a+"px 0";case"bP":return"0 "+-1*a+"px";case"bB":return-1*a+"px "+-1*a+"px";case"bN":return-2*a+"px "+-1*a+"px";case"bR":return-3*a+"px "+-1*a+"px";case"bQ":return-4*a+"px "+-1*a+"px";case"bK":return-5*a+"px "+-1*a+"px"}}function g(e){var t=e[0].charCodeAt(0)-97,n=+e[1];return c[n][t]}function w(e){var t=e.target.getAttribute("data-square");o.onSquareClick(t,l)}function b(e){var t=g(e),n=t.piece;null!==n&&t.element.classList.remove(n),t.piece=null}function S(e,t){for(var n="";n.length<t;)n+=e;return n}function C(e,t){var n=g(e),o=n.piece;null!==o&&n.element.classList.remove(o),n.element.classList.add(t),n.element.style.backgroundPosition=y(t),n.piece=t}this.selectSquare=function(e){l.indexOf(e)>-1||(g(e).element.classList.add("selected"),l.push(e))},this.unselectSquare=function(e){var t=l.indexOf(e);-1!==t&&(g(e).element.classList.remove("selected"),l.splice(t,1))},this.unselectAllSquares=function(){for(var e=0,t=l.length;e<t;e++)g(l[e]).element.classList.remove("selected");l=[]},this.setPosition=function(e){for(var t,n,o=e.split(" ")[0].split("/"),r=0;r<8;r++){o[r]=o[r].replace(/\d/g,function(e){return S(".",+e)});for(var i=0;i<8;i++){var a=u(8-r,i);"."===o[r][i]?b(a):C(a,(t=o[r][i],n=void 0,(n=t.charCodeAt(0))>=97?"b"+String.fromCharCode(n-32):"w"+t))}}},this.askPromotion=function(e,t){p.callback=t,p.whitePiecesWrapper.style.display="w"===e?"block":"none",p.blackPiecesWrapper.style.display="b"===e?"block":"none",p.promoteButton.disabled=!0,null!==p.selectedElement&&p.selectedElement.classList.remove("selected"),p.selectedElement=null,p.overlay.style.display="block"},function(){var t=document.getElementById(e);t.classList.add("chessboard"),"b"===o.orientation&&t.classList.add("flipped"),c.element=t;for(var n=8;n>=1;n--){var r=document.createElement("div");c[n]={element:r};for(var i=0;i<8;i++){var a=document.createElement("div");a.className=(n+i)%2==0?"white square":"black square",a.setAttribute("data-square",u(n,i)),o.onSquareClick&&a.addEventListener("click",w),c[n][i]={element:a,piece:null},r.appendChild(a)}t.appendChild(r)}}(),function(){m("w"),m("b");var e=document.createElement("button"),t=document.createTextNode("Promote");e.appendChild(t),p.promoteButton=e;var n=document.createElement("div");n.appendChild(e),p.promoteButtonWrapper=n;var o=document.createElement("div");o.className="promotion-wrapper",o.appendChild(p.whitePiecesWrapper),o.appendChild(p.blackPiecesWrapper),o.appendChild(n),p.wrapper=o;var r=document.createElement("div");r.className="promotion-overlay",p.overlay=r,r.appendChild(o),c.element.appendChild(r);for(var i=0,a=p.pieces.length;i<a;i++)p.pieces[i].element.addEventListener("click",h);e.addEventListener("click",f)}(),setTimeout(function(){var e=getComputedStyle(c.element);i=parseInt(e.borderTopWidth),s="border-box"===e.boxSizing?2*i:0,v(),n.setPosition(o.fen)}),o.resize&&window.addEventListener("resize",v)},r=n("BRrH"),i=n.n(r),a=function(e){return this._isInitiator=""===e,this._id=e||this._genID(),this._offer=null,this._answer=null,this._p=null,this.onWSOpen=null,this.onConnect=null,this.onData=null,this.onClose=null,this};a.prototype._genID=function(){return Math.random().toString(16).substr(2,10)},a.prototype.send=function(e){this._p.send(e)},a.prototype.signal=function(){var e=this;e._p=new i.a({initiator:e._isInitiator,trickle:!1});var t="https:"===location.protocol,n=new WebSocket((t?"wss://":"ws://")+location.host+"/ws?id="+e._id);n.onmessage=function(t){var o=JSON.parse(t.data);"offer_request"===o.type&&e._isInitiator?n.send(JSON.stringify(e._offer)):("offer"===o.type&&!e._isInitiator||"answer"===o.type&&e._isInitiator)&&e._p.signal(o)},n.onopen=function(){e._isInitiator?e.onWSOpen(e._id):n.send(JSON.stringify({type:"offer_request"}))},e._p.on("signal",function(t){e["_"+t.type]=t,"answer"===t.type&&n.send(JSON.stringify(t))}),e._p.on("connect",function(){n.close(),e.onConnect()}),e._p.on("data",function(t){e.onData(t)}),e._p.on("close",function(){e.onClose()})};var s=a,l=n("xa0L"),c=n.n(l);n("5W5a");function p(){const e=document.querySelector("#loader");e.parentElement.removeChild(e),document.querySelector("main").classList.remove("hidden")}document.addEventListener("DOMContentLoaded",()=>{const e=0===location.hash.length?"w":"b";let t=!1;const n=new s(location.hash.split("#").pop());function r(e,t,o){l.move({from:e,to:t,promotion:o}),u.setPosition(l.fen()),n.send(String(l.fen())),i(),u.unselectAllSquares()}function i(){const t=l.turn()===e;l.game_over()?(l.in_draw()&&a("Game Over. It's a DRAW."),a("Game Over. You have "+(t?"LOST":"WON"))):l.in_check()?a((t?"You are":"Opponent is")+" in CHECK."):a((t?"Your":"Opponent's")+" turn.")}function a(e){document.getElementById("msg").innerHTML=e}n.onWSOpen=function(e){const t=location.href+"#"+e;document.querySelector("#link").href=t,document.querySelector("#link").innerHTML=t,p(),a("Waiting for opponent...")},n.onConnect=function(){"w"===e?a("Connected to opponent, play your turn."):(a("Connected to opponent, waiting for him/her to play..."),p()),t=!0,document.querySelector("header").classList.add("hidden"),document.querySelector(".blur").classList.remove("blur")},n.onData=function(e){const t=String(e);l.load(t),u.setPosition(l.fen()),i()},n.onClose=function(){t=!1};const l=new c.a,u=new o("board",{onSquareClick:function(n,o){if(!(l.game_over()?(i(),0):t?l.turn()===e||(a("Not your turn"),0):(a("Connection to your opponent has been lost."),0)))return void u.unselectSquare(n);if(0===o.length)return void(l.moves({square:n}).length>0&&u.selectSquare(n));const s=o[0];if(n===s)return void u.unselectSquare(n);const c=l.get(n),p=l.get(s);c&&c.color===p.color?u.unselectSquare(n):l.moves({square:s,verbose:!0}).filter(function(e){return e.to===n}).length>0?"p"!==p.type||"1"!==n[1]&&"8"!==n[1]?r(s,n):u.askPromotion(p.color,function(e){r(s,n,e)}):a("Invalid move. Try Again.")},orientation:e});n.signal()})},fjv7:function(e,t,n){}},[["8WHe",1,2]]]);