(this["webpackJsonptimer-project"]=this["webpackJsonptimer-project"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=(n(10),n(1)),i=n(2),u=n.n(i),s=function(e){var t=e.label,n=e.onClickHandler,a=e.isMax;return r.a.createElement("button",{onClick:n,className:u()("button",a&&"button--max")},t)},m=function(e){var t=e.time,n=e.initialValue,a=n&&t<=20,c=n&&t<=10;return r.a.createElement("div",{className:u()("time",a&&"time--low",c&&"button--blink")},function(e){var t=e%60,n=Math.floor(e/60);return(n=1===n.toString().length?"0"+n:n)+":"+(t=1===t.toString().length?"0"+t:t)}(t))},f=function(e){var t=e.handleCountdown,n=e.isActive,c=e.toggleActive,l=e.seconds,o=e.reset,i=Object(a.useRef)(),u=n||l;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=i.current.value,r=a.match(/[0-9]/);n||!n&&l?c():r&&(i.current.value="",t(parseInt(a,10)))}},r.a.createElement("input",{type:"text",ref:i,placeholder:"enter time in seconds",disabled:u,className:"app__field"}),r.a.createElement("input",{type:"submit",value:n?"Pause":"Start",className:"button button__primary button__primary--".concat(n?"active":"inactive")}),r.a.createElement("button",{className:"button",onClick:o},"Reset"))},d=function(e){var t=e.initialValue,n=e.seconds,a=100*n/t<=50;return t&&!n?r.a.createElement(r.a.Fragment,null,r.a.createElement("audio",{ref:function(e){e=e},autoPlay:!0},r.a.createElement("source",{src:"https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",type:"audio/mpeg"})),r.a.createElement("div",null,"Time's Up!")):a?r.a.createElement("div",null,"More than halfway there!"):null},v=(n(11),function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),i=Object(o.a)(l,2),u=i[0],v=i[1],b=Object(a.useState)(!1),p=Object(o.a)(b,2),E=p[0],h=p[1],g=Object(a.useState)(1e3),w=Object(o.a)(g,2),j=w[0],k=w[1];Object(a.useEffect)((function(){var e=null;return E&&u>0?e=setInterval((function(){v((function(e){return e-1}))}),j):E||0===u||clearInterval(e),function(){return clearInterval(e)}}),[E,u]);var O={handleCountdown:function(e){v(e),c(e),h(!0)},toggleActive:function(){return h(!E)},isActive:E,seconds:u,reset:function(){v(0),h(!1),c(null)}};return r.a.createElement("div",{className:"app"},r.a.createElement(d,{initialValue:n,seconds:u}),r.a.createElement(m,{time:u,initialValue:n}),r.a.createElement(f,O),r.a.createElement("div",null,r.a.createElement(s,{onClickHandler:function(){return k(1e3)},label:"1.0x"}),r.a.createElement(s,{onClickHandler:function(){return k(750)},label:"1.5x"}),r.a.createElement(s,{onClickHandler:function(){return k(500)},label:"2.0x"}),r.a.createElement(s,{onClickHandler:function(){return k(100)},label:"MAX",isMax:!0})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.eb63b3e8.chunk.js.map