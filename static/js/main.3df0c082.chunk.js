(this["webpackJsonpimage-resizer"]=this["webpackJsonpimage-resizer"]||[]).push([[0],{12:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),i=n(4),o=n.n(i),s=(n(12),n(2)),u=n(6),l=n.n(u),j=(n(20),function(e){var t=e.onSelect;return Object(a.jsxs)("div",{className:"image-selector",children:[Object(a.jsx)("h1",{children:"Crop IMAGE"}),Object(a.jsxs)("p",{children:["Crop ",Object(a.jsx)("b",{children:"JPG"})," or ",Object(a.jsx)("b",{children:"PNG"})," by defining a rectangle in pixels."]}),Object(a.jsx)("p",{children:"Cut your image online."}),Object(a.jsx)(l.a,{withIcon:!1,withLabel:!1,buttonText:"Select image",onChange:t,imgExtension:[".jpg",".png"],maxFileSize:5242880,buttonClassName:"select-image-btn",fileContainerStyle:{backgroundColor:"#f3f0ec",boxShadow:"none",padding:0}})]})}),b=(n(21),function(e){var t=e.property,n=e.onChange,c=e.value,r=e.minValue,i=e.onBlur,o=e.onClick;return Object(a.jsxs)("div",{className:"option",children:[Object(a.jsxs)("label",{htmlFor:t,children:[t," (px)"]}),Object(a.jsx)("input",{type:"number",pattern:"[0-9]*",min:r,id:t,value:Number(c).toString(),onChange:n,onBlur:i,onClick:o})]})}),d=n.p+"static/media/settings.ea975a85.svg",h=(n(22),function(e){var t=e.source,n=Object(c.useState)(0),r=Object(s.a)(n,2),i=r[0],o=r[1],u=Object(c.useState)(0),l=Object(s.a)(u,2),j=l[0],h=l[1],O=Object(c.useState)(0),m=Object(s.a)(O,2),p=m[0],g=m[1],v=Object(c.useState)(0),f=Object(s.a)(v,2),x=f[0],C=f[1],k=Object(c.useState)(0),w=Object(s.a)(k,2),S=w[0],y=w[1],M=Object(c.useState)(0),N=Object(s.a)(M,2),I=N[0],E=N[1],z=Object(c.useState)(0),B=Object(s.a)(z,2),L=B[0],R=B[1],V=Object(c.useState)(0),G=Object(s.a)(V,2),H=G[0],P=G[1],W=Object(c.useState)(!1),A=Object(s.a)(W,2),J=A[0],U=A[1],F=Object(c.useState)(!1),D=Object(s.a)(F,2),T=D[0],X=D[1],Y=Object(c.useRef)(null),q=Object(c.useRef)(null),K=Object(c.useCallback)((function(){Y.current&&(y(100*Y.current.width/Y.current.naturalWidth),E(100*Y.current.height/Y.current.naturalHeight))}),[]);Object(c.useEffect)((function(){return window.addEventListener("resize",K),function(){window.removeEventListener("resize",K)}}),[K]);var Q=Object(c.useCallback)((function(e){var t=e.target,n=parseInt(t.value,10),a=parseInt(t.min,10);if(t.validity.valid)if(n>=a)if(n<=L){o(n);var c=Math.round(L-n);p>c&&g(c)}else o(L),g(Math.round(0));else o(a)}),[L,p]),Z=Object(c.useCallback)((function(e){var t=e.target,n=parseInt(t.value,10),a=parseInt(t.min,10);if(t.validity.valid)if(n>=a)if(n<=H){h(n);var c=Math.round(H-n);x>c&&C(c)}else h(H),C(0);else h(a)}),[H,x]),$=Object(c.useCallback)((function(e){var t=e.target,n=parseInt(t.value,10),a=parseInt(t.min,10);t.validity.valid&&g(n>=a?n<=L-i?n:Math.round(L-i):a)}),[L,i]),_=Object(c.useCallback)((function(e){var t=e.target,n=parseInt(t.value,10),a=parseInt(t.min,10);t.validity.valid&&C(n>=a?n<=H-j?n:Math.round(H-j):a)}),[H,j]),ee=Object(c.useCallback)((function(){var e=Y.current,t=e.width,n=e.height,a=e.naturalWidth,c=e.naturalHeight,r=Math.round(80*a/100),i=Math.round(80*c/100);o(r),h(i),R(a),P(c),g(Math.round((a-r)/2)),C(Math.round((c-i)/2)),y(100*t/a),E(100*n/c)}),[]),te=Object(c.useCallback)((function(){if(q.current){var e=q.current.getContext("2d");e.clearRect(0,0,q.current.width,q.current.height),e.drawImage(Y.current,p,x,i,j,0,0,q.current.width,q.current.height);var t=q.current.toDataURL("image/jpg",90),n=document.createElement("a");n.href=t,n.setAttribute("download","w-".concat(i,"-h-").concat(j)),document.body.appendChild(n),n.click(),n.parentNode.removeChild(n)}}),[p,x,i,j]),ne=Object(c.useCallback)((function(){U((function(e){return!e}))}),[]),ae=Object(c.useMemo)((function(){return i*S/100}),[i,S]),ce=Object(c.useMemo)((function(){return j*I/100}),[j,I]),re=Object(c.useMemo)((function(){return p*S/100}),[p,S]),ie=Object(c.useMemo)((function(){return x*I/100}),[x,I]),oe=Object(c.useCallback)((function(){return ue()&&X(!1)}),[]),se=Object(c.useCallback)((function(){return ue()&&X(!0)}),[]),ue=Object(c.useCallback)((function(){return window.innerWidth<=600&&window.innerHeight<=800}),[]);return Object(a.jsxs)("div",{className:"image-resizer",children:[Object(a.jsx)("div",{className:"editable-area",children:Object(a.jsxs)("div",{className:"image-container",children:[Object(a.jsx)("img",{ref:Y,className:"image",src:t,onLoad:ee,alt:"Resizable area"}),Object(a.jsx)("canvas",{ref:q,width:i,height:j}),Object(a.jsx)("div",{className:"crop-area",style:{width:ae,height:ce,transform:"translate(".concat(re,"px, ").concat(ie,"px)")}})]})}),Object(a.jsx)("div",{className:"options-menu-toggler ".concat(J?"options-menu-toggler-active":""),children:Object(a.jsx)("img",{onClick:ne,src:d})}),Object(a.jsxs)("div",{className:"options-menu ".concat(J?"options-menu-active":""),children:[Object(a.jsx)("h2",{children:"Crop options"}),Object(a.jsx)(b,{property:"Width",value:i,onChange:Q,onClick:se,onBlur:oe,minValue:1}),Object(a.jsx)(b,{property:"Height",value:j,onChange:Z,onClick:se,onBlur:oe,minValue:1}),Object(a.jsx)(b,{property:"Position X",value:p,onChange:$,onClick:se,onBlur:oe,minValue:0}),Object(a.jsx)(b,{property:"Position Y",value:x,onChange:_,onClick:se,onBlur:oe,minValue:0})]}),Object(a.jsx)("button",{className:"crop-image-btn",onClick:te,style:{opacity:T?0:1},children:"Crop IMAGE"})]})}),O=(n(23),function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1];return Object(a.jsx)("div",{className:"app",children:n?Object(a.jsx)(h,{source:n}):Object(a.jsx)(j,{onSelect:function(e){r(URL.createObjectURL(e[0]))}})})});o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(O,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.3df0c082.chunk.js.map