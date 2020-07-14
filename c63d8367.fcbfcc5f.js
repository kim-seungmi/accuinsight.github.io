(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{307:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return l}));var n=t(2),o=(t(0),t(375));const a={title:"drop"},i={id:"pipeline/workflow/workspace/data-processing-basic/drop",isDocsHomePage:!1,title:"drop",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/data-processing-basic/drop.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/drop",sidebar:"pipeline",previous:{title:"crosstab",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/crosstab"},next:{title:"dropDuplicates",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/drop-duplicates"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],c={rightToc:p};function l({components:e,...r}){return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"\uc120\ud0dd\ud55c \uceec\ub7fc\uc744 \uc0ad\uc81c\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[drop]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4. "),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"Property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic021_drop_property.png",alt:"prebasic021"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"col : \uc0ad\uc81c\ud560 \uceec\ub7fc \uc120\ud0dd  ")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"\uc0c1\ud488\uc815\ubcf4 \ub370\uc774\ud130 \uc911 group, style, timestamp\uceec\ub7fc\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[drop]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(o.b)("br",{parentName:"li"}),Object(o.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic022_drop_exampleworkflow.png",alt:"prebasic022"})),"  "),Object(o.b)("li",{parentName:"ol"},"[drop]","\ub178\ub4dc \uc0ad\uc81c\ub300\uc0c1 \uceec\ub7fc\uc5d0 group, style, timestamp \uc120\ud0dd",Object(o.b)("br",{parentName:"li"}),Object(o.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic023_drop_exampleworkflow_%EC%82%AD%EC%A0%9C%EC%BB%AC%EB%9F%BC%EC%84%A0%ED%83%9D.png",alt:"prebasic023"}))),Object(o.b)("li",{parentName:"ol"},"[drop]","\ub178\ub4dc snapshot\uc120\ud0dd\uc2dc \ud574\ub2f9 \uceec\ub7fc \uc0ad\uc81c\ud6c4 \ub370\uc774\ud130 \ud504\ub9ac\ubdf0\ub428\n",Object(o.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic024_drop_exampleworkflow_%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"prebasic024"}))," ")))}l.isMDXComponent=!0},375:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return f}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},b=function(e){var r=s(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=s(t),d=n,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||a;return t?o.a.createElement(f,p(p({ref:r},l),{},{components:t})):o.a.createElement(f,p({ref:r},l))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);