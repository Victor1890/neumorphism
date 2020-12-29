(this.webpackJsonpsoftui=this.webpackJsonpsoftui||[]).push([[0],{29:function(e,t,a){e.exports=a(69)},34:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=(a(34),a(1)),i=a(26),s=a(20);function l(){var e=Object(s.a)(["\n  position: absolute;\n  left: ",";\n  top: ",";\n  right: ",";\n  bottom: ",";\n  background: transparent;\n  height: 30px;\n  width: 30px;\n  cursor: pointer;\n  border: 2px solid var(--textColor);\n  border-bottom-right-radius: ",";\n  border-bottom-left-radius: ",";\n  border-top-right-radius: ",";\n  border-top-left-radius: ",";\n\n  &.active {\n    background: #ffff00;\n  }\n"]);return l=function(){return e},e}var u=a(21).a.div(l(),(function(e){return e.left}),(function(e){return e.top}),(function(e){return e.right}),(function(e){return e.bottom}),(function(e){return"unset"===e.right&&"unset"===e.bottom?"30px":"unset"}),(function(e){return"unset"===e.left&&"unset"===e.bottom?"30px":"unset"}),(function(e){return"unset"===e.right&&"unset"===e.top?"30px":"unset"}),(function(e){return"unset"===e.left&&"unset"===e.top?"30px":"unset"})),m=function(e){var t=e.previewBox,a=e.setActiveLightSource,c=Object(n.useRef)([]);Object(n.useEffect)((function(){c.current=Object(i.a)(document.querySelectorAll(".light-source"))}),[]);var o=function(e){c.current.forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active"),a(parseInt(e.target.dataset.value))};return r.a.createElement("div",{className:"preview"},r.a.createElement(u,{top:"0",bottom:"unset",right:"0",left:"unset","data-value":"2",onClick:o,className:"light-source"}),r.a.createElement(u,{top:"0",bottom:"unset",right:"unset",left:"0","data-value":"1",onClick:o,className:"light-source active"}),r.a.createElement(u,{top:"unset",bottom:"0",right:"0",left:"unset","data-value":"3",onClick:o,className:"light-source"}),r.a.createElement(u,{top:"unset",bottom:"0",right:"unset",left:"0","data-value":"4",onClick:o,className:"light-source"}),r.a.createElement("div",{ref:t,className:"soft-element soft-shadow"}))},p=a(74),h=a(25),d=function(e){var t=e.shape,a=e.setShape;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row row--label"},r.a.createElement("label",null,"Shape: ")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"shape-switch"},r.a.createElement("button",{className:0===t?"active":"",onClick:a,name:"flat",title:"Flat","data-shape":"0"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"145",height:"24",viewBox:"0 0 145 24",fill:"none",stroke:"white"},r.a.createElement("path",{d:"M0 22H7C15.2843 22 22 15.2843 22 7.00001V3C22 2.44772 22.4477 2 23 2H121C121.552 2 122 2.44772 122 3V7.00001C122 15.2843 128.716 22 137 22H145",stroke:"inherit",strokeWidth:"6"}))),r.a.createElement("button",{className:2===t?"active":"",onClick:a,name:"concave",title:"Concave","data-shape":"2"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"145",height:"24",viewBox:"0 0 145 24",fill:"none",stroke:"white"},r.a.createElement("path",{d:"M0 22H7C15.2843 22 22 15.2843 22 7.00001V3.39336C22 2.7091 22.6808 2.2299 23.3304 2.44485C59.2066 14.3156 85.7767 12.9047 120.7 2.39438C121.343 2.20072 122 2.67921 122 3.3512V7.00001C122 15.2843 128.716 22 137 22H145",stroke:"inherit",strokeWidth:"6"}))),r.a.createElement("button",{className:3===t?"active":"",onClick:a,name:"convex",title:"Convex","data-shape":"3"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"145",height:"33",viewBox:"0 0 145 33",fill:"none",stroke:"white"},r.a.createElement("path",{d:"M0 31H7C15.2843 31 22 24.2843 22 16V11.7329C22 11.2966 22.2898 10.9083 22.7061 10.7779C60.0722 -0.924818 84.913 -0.925978 121.302 10.7745C121.714 10.9071 122 11.2935 122 11.727V16C122 24.2843 128.716 31 137 31H145",stroke:"inherit",strokeWidth:"6"}))),r.a.createElement("button",{className:1===t?"active":"",onClick:a,name:"pressed",title:"Pressed","data-shape":"1"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"145",height:"24",viewBox:"0 0 145 24",fill:"none",stroke:"white"},r.a.createElement("path",{d:"M0 2H22V21C22 21.5523 22.4477 22 23 22H121C121.552 22 122 21.5523 122 21V2H145",stroke:"inherit",strokeWidth:"6"}))))))};function f(e,t){(e=String(e).replace(/[^0-9a-f]/gi,"")).length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),t=t||0;var a,n,r="#";for(n=0;n<3;n++)a=parseInt(e.substr(2*n,2),16),r+=("00"+(a=Math.round(Math.min(Math.max(0,a+a*t),255)).toString(16))).substr(a.length);return r}function v(e){return(299*parseInt(e.substr(1,2),16)+587*parseInt(e.substr(3,2),16)+114*parseInt(e.substr(5,2),16))/1e3>=128?"#001f3f":"#F6F5F7"}var b=function(e){return/^#[0-9A-F]{6}$/i.test(e)},g=function(e){return e.replace(/(?:^\w|[A-Z]|\b\w)/g,(function(e,t){return 0===t?e.toLowerCase():e.toUpperCase()})).replace(/\s+/g,"")},w=a(72),x=a(73),E=function(e){var t=e.label,a=e.type,n=e.value,c=e.min,o=e.max,i=e.step,s=void 0===i?"1":i,l=e.onChange;return r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:g(t)},t,": "),r.a.createElement("input",{type:a,name:g(t),value:n,onChange:l,min:c,max:o,step:s,id:g(t)}))};p.a.registerLanguage("css",h.a);var C=function(e){var t=e.previewBox,a=e.activeLightSource,c=void 0===a?1:a,i=Object(n.useState)(60),s=Object(o.a)(i,2),l=s[0],u=s[1],m=Object(n.useState)(function(){if(window.location.hash&&/^#[0-9A-F]{6}$/i.test(window.location.hash))return window.location.hash}()||"#e0e0e0"),h=Object(o.a)(m,2),g=h[0],C=h[1],O=Object(n.useState)(300),k=Object(o.a)(O,2),j=k[0],S=k[1],N=Object(n.useState)(50),y=Object(o.a)(N,2),L=y[0],z=y[1],B=Object(n.useState)(0),F=Object(o.a)(B,2),H=F[0],I=F[1],M=Object(n.useState)(20),R=Object(o.a)(M,2),A=R[0],V=R[1],W=Object(n.useState)(.15),T=Object(o.a)(W,2),$=T[0],G=T[1],J=Object(n.useState)(410),P=Object(o.a)(J,2),X=P[0],Y=P[1],q=Object(n.useState)(150),D=Object(o.a)(q,2),U=D[0],Z=D[1],_=Object(n.useState)(!1),K=Object(o.a)(_,2),Q=K[0],ee=K[1],te=Object(n.useState)(""),ae=Object(o.a)(te,2),ne=ae[0],re=ae[1],ce=Object(n.useRef)(),oe=Object(n.useRef)(),ie=Object(n.useRef)(),se=Object(n.useRef)(!1);return Object(n.useEffect)((function(){window.history.replaceState("homepage","Title","/"+g);var e=function(){var e=window.innerWidth,t=window.innerHeight;return(e<1e3||t<860)&&"ReactSnap"!==window.navigator.userAgent?e<800?e<680?{maxSize:180,size:150}:{maxSize:250,size:200}:{maxSize:350,size:250}:{maxSize:410,size:300}}(),t=e.maxSize,a=e.size;Y(t),S(a)}),[]),Object(n.useEffect)((function(){if(b(g)){var e,a,n,r=f(g,-1*$),o=f(g,$),i=Q&&1!==H?f(g,3===H?.07:-.1):g,s=Q&&1!==H?f(g,2===H?.07:-.1):g;switch(c){case 1:a=A,n=A,e=145;break;case 2:a=-1*A,n=A,e=225;break;case 3:a=-1*A,n=-1*A,e=315;break;case 4:a=A,n=-1*A,e=45;break;default:a=A,n=A,e=145}ie.current.value=g,document.documentElement.style.cssText="\n      --positionX: ".concat(a,"px;\n      --positionXOpposite: ").concat(-1*a,"px;\n      --positionY: ").concat(n,"px;\n      --positionYOpposite: ").concat(-1*n,"px;\n      --angle: ").concat(e,"deg;\n      --blur: ").concat(l,"px;\n      --textColor: ").concat(v(g),";\n      --textColorOpposite: ").concat(g,";\n      --baseColor: ").concat(g,";\n      --darkColor: ").concat(r,";\n      --lightColor: ").concat(o,";\n      --firstGradientColor: ").concat(i,";\n      --secondGradientColor: ").concat(s,";\n      --size: ").concat(j,"px;\n      --radius: ").concat(L,"px;\n    "),1===H?t.current.classList.add("pressed"):t.current.classList.remove("pressed"),b(g)&&("#001f3f"===v(g)?se.current=!0:se.current=!1);var u=parseInt(L)===U?"50%":L+"px",m=Q&&1!==H?"linear-gradient(".concat(e,"deg, ").concat(i,", ").concat(s,")"):"".concat(g),p=1===H?"inset":"",h="".concat(p," ").concat(a,"px ").concat(n,"px ").concat(l,"px ").concat(r),d="".concat(p," ").concat(-1*a,"px ").concat(-1*n,"px ").concat(l,"px ").concat(o,";");re("border-radius: ".concat(u,";\nbackground: ").concat(m,";\nbox-shadow: ").concat(h,",\n            ").concat(d))}})),r.a.createElement("div",{className:"configuration soft-shadow"},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"color"},"Pick a color:"),r.a.createElement("input",{type:"color",name:"color",onChange:function(e){window.history.replaceState("homepage","Title","/"+e.target.value),C(e.target.value)},placeholder:"#ffffff",value:g,id:"color"}),r.a.createElement("label",{htmlFor:"colorInput",style:{paddingLeft:"10px"}},"or"),r.a.createElement("input",{type:"text",placeholder:"#ffffff",name:"color",id:"colorInput",ref:ie,onChange:function(e){var t=e.target.value;b(t)&&C(t)}})),r.a.createElement(E,{label:"Size",type:"range",value:j,onChange:function(e){var t=e.target.value;S(t),V(Math.round(.1*t)),u(Math.round(.2*t)),Z(Math.round(t/2))},min:"10",max:X}),r.a.createElement(E,{label:"Radius",type:"range",value:L,onChange:function(e){return z(e.target.value)},min:"0",max:U}),r.a.createElement(E,{label:"Distance",type:"range",value:A,onChange:function(e){var t=e.target.value;V(t),u(2*t)},min:"5",max:"50"}),r.a.createElement(E,{label:"Intensity",type:"range",value:$,onChange:function(e){return G(e.target.value)},min:"0.01",max:"0.6",step:"0.01"}),r.a.createElement(E,{label:"Blur",type:"range",value:l,onChange:function(e){return u(e.target.value)},min:"0",max:"100"}),r.a.createElement(d,{shape:H,setShape:function(e){var t=e.target.dataset.shape,a=parseInt(t);I(a),ee(2===a||3===a)}}),r.a.createElement("div",{className:"code-block ".concat(se.current?"":"small"),ref:oe},r.a.createElement("button",{className:"copy",onClick:function(e){var t=ce.current;t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),oe.current.classList.add("copied"),setTimeout((function(){oe.current.classList.remove("copied")}),1e3)}},"Copy"),r.a.createElement(p.a,{language:"css",style:se.current?w.a:x.a},ne),r.a.createElement("label",{htmlFor:"code-container",className:"hidden"},"hidden"),r.a.createElement("textarea",{id:"code-container",ref:ce,value:ne,readOnly:!0})),r.a.createElement("a",{href:"https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6",className:"link",target:"_blank",rel:"noopener",onclick:"getOutboundLink('https://uxdesign.cc/neumorphism-in-user-interfaces-b47cef3bf3a6'); return true;"},"Read more about ",r.a.createElement("b",null,"Neumorphism")))},O=function(){var e=Object(n.useState)(1),t=Object(o.a)(e,2),a=t[0],c=t[1],i=Object(n.useRef)();return r.a.createElement("div",{className:"container App"},r.a.createElement("div",{className:"flex"},r.a.createElement(m,{setActiveLightSource:c,previewBox:i}),r.a.createElement(C,{previewBox:i,activeLightSource:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var k=document.getElementById("root");k.hasChildNodes()?Object(c.hydrate)(r.a.createElement(O,null),k):Object(c.render)(r.a.createElement(O,null),k),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[29,1,2]]]);