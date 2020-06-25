(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{346:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(1),o=r(6),i=(r(0),r(376)),a={title:"pivot"},p={id:"pipeline/workflow/workspace/data-processing-basic/pivot",isDocsHomePage:!1,title:"pivot",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/data-processing-basic/pivot.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/pivot",sidebar:"pipeline",previous:{title:"toJson",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/to-json"},next:{title:"unionAll",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/union-all"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"\uc5f4\uc744 \ud53c\ubc97\ud558\uc5ec \uc9c0\uc815\ub41c \uc9d1\uacc4\ud568\uc218\ub97c \uc218\ud589\ud569\ub2c8\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[pivot]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\nProperty \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"Property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic048_pivot_property.png",alt:"prebasic048"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"groupBy : \uadf8\ub8f9\ud551 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd "),Object(i.b)("li",{parentName:"ol"},"pivot_col : \ud53c\ubc97\ud560 \uceec\ub7fc \uc120\ud0dd "),Object(i.b)("li",{parentName:"ol"},"value : value \uac12 \uc785\ub825 "),Object(i.b)("li",{parentName:"ol"},"func : \uc9d1\uacc4\uc5d0 \uc0ac\uc6a9\ud560 \ud568\uc218(max, min, avg, count, sum) \uc120\ud0dd"),Object(i.b)("li",{parentName:"ol"},"target_col : \uc9d1\uacc4 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd "),Object(i.b)("li",{parentName:"ol"},"overwriteSchema : pivot \ub178\ub4dc \uc2e4\ud589\uacb0\uacfc \uc2a4\ud0a4\ub9c8\ub97c \uc7ac\uc815\uc758(\uccb4\ud06c\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uae30\uc874 \uc2a4\ud0a4\ub9c8 \uc7ac\uc0ac\uc6a9)"),Object(i.b)("li",{parentName:"ol"},"newSchema : pivot \ub178\ub4dc \uc2e4\ud589\uacb0\uacfc\ub97c \uc800\uc7a5\ud560 \uc0c8\ub85c\uc6b4 \uc2a4\ud0a4\ub9c8 \uc0dd\uc131")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"\uc18c\ube44\uc790\ubcc4(group) \uac00\uc7a5 \ub9ce\uc740 \ube44\uc6a9\uc744 \uc9c0\ubd88\ud55c \uad6c\uc785\ud488\ubaa9\uc744 \uc815\ub9ac\ud569\ub2c8\ub2e4. \uc0c8\ub85c \ub9cc\ub4e4\uc5b4\uc9c0\ub294 \ud53c\ubc97\ud14c\uc774\ube14\uc5d0\uc11c \ud589\uc5d0\ub294 category(groupBy), \uc5f4\uc5d0\ub294 group(pivot_col)\uc774 \uc704\uce58\ud558\uba70, MAX(price)\uac12\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4.  "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[dropna]",", ","[pivot]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131\n",Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic049_pivot_exampleworkflow.png",alt:"prebasic049"}))),Object(i.b)("li",{parentName:"ol"},"[pivot]"," \ub178\ub4dc\ub97c \uc544\ub798\uc640 \uac19\uc774 \uc124\uc815\ud558\uace0 snapshot\uc744 \ud074\ub9ad ")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"snapshot \ud074\ub9ad\uc2dc \uc5d0\ub7ec\ubc1c\uc0dd\ud558\uc5ec \uc774\ubbf8\uc9c0 \ucea1\ucc98 \uc2e4\ud328. \uc7ac\uc791\uc5c5 \ud544\uc694"),"  "))}b.isMDXComponent=!0},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=b(r),m=n,f=s["".concat(a,".").concat(m)]||s[m]||u[m]||i;return r?o.a.createElement(f,p(p({ref:t},l),{},{components:r})):o.a.createElement(f,p({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);