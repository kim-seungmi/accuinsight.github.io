(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{217:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},s=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,m=s["".concat(c,".").concat(u)]||s[u]||f[u]||p;return r?o.a.createElement(m,a({ref:t},l,{components:r})):o.a.createElement(m,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,c=new Array(p);c[0]=u;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var l=2;l<p;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return l}));var n=r(1),o=(r(0),r(217));const p={title:"fs"},c={id:"batchpipeline/workflow/workspace/job-processing/fs",title:"fs",description:"## fs\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\job-processing\\fs.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/fs",sidebar:"batchpipeline",previous:{title:"fork",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/fork"},next:{title:"hdfsToIcos",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hdfs-to-icos"}},a=[{value:"fs",id:"fs",children:[{value:"Example",id:"example",children:[]}]}],i={rightToc:a};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"fs"},"fs"),Object(o.b)("p",null,"HDFS\uc0c1\uc758 \uc791\uc5c5\uc744 \uc218\ud589\ud55c\ub2e4. delete, mkdir, move, touchz, chmod,chgrp \ub4f1 hadoop fs syntax\ub85c \uc218\ud589\ud560 \uc218 \uc788\ub294 \uc791\uc5c5\uc774 \uac00\ub2a5\ud558\ub2e4.\n\uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[fs]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow005_fs_property.png",alt:"flow005"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"retry : \uc7ac\uc218\ud589 \ud69f\uc218 \ubc0f \uac04\uaca9\uc744 \uc2e4\ud589\ud55c\ub2e4. ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"max : \uc7ac\uc218\ud589 \ud69f \uc218"),Object(o.b)("li",{parentName:"ul"},"period : \uc7ac\uc218\ud589 \uac04\uaca9"))),Object(o.b)("li",{parentName:"ol"},"delete : \uc0ad\uc81c\ud560 hdfs path \uc124\uc815 : skipTrash: \uc644\uc804 \uc0ad\uc81c(hadoop\uc5d0 \uc124\uc815\ub41c \ud734\uc9c0\ud1b5\uc744 \uac70\uce58\uc9c0 \uc54a\uc74c)"),Object(o.b)("li",{parentName:"ol"},"mkdir : \uc0dd\uc131\ud560 hdfs directory path \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"move : source path, target path \uc124\uc815\uc73c\ub85c \ud30c\uc77c \uc774\ub3d9"),Object(o.b)("li",{parentName:"ol"},"touchz : \ud30c\uc77c\ud06c\uae30\uac00 0\uc778 \ud30c\uc77c\uc744 \uc0dd\uc131\ud55c\ub2e4."),Object(o.b)("li",{parentName:"ol"},"chmod : path: \uad8c\ud55c \uc124\uc815 \uacbd\ub85c : permissions: \uad8c\ud55c\uc720\ud615 : recursive: \uc7ac\uadc0\uc5ec\ubd80"),Object(o.b)("li",{parentName:"ol"},"chgrp : path: \uadf8\ub8f9 \uc124\uc815 \uacbd\ub85c : recursive: \uc7ac\uadc0\uc5ec\ubd80 : group: \uadf8\ub8f9\uba85"),Object(o.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},'"2.delete" property \uc124\uc815 \ud6c4 \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589\uc2dc \uc120\ud0dd\ud55c \ud3f4\ub354\uac00 \uc0ad\uc81c\ub41c\ub2e4.   ')),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow046_fs_delete_property%EC%84%A4%EC%A0%95.png",alt:"flow046"}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow047_fs_delete%EC%84%A4%EC%A0%95%EA%B2%B0%EA%B3%BC.png",alt:"flow047"}))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},'"3.mkdir" property \uc124\uc815 \ud6c4 \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589\uc2dc \uc120\ud0dd\ud55c \ud3f4\ub354\uac00 \uc0ad\uc81c\ub41c\ub2e4. ')),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow048_fs_mkdir_property%EC%84%A4%EC%A0%95.png",alt:"flow048"}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow049_fs_mkdir%EC%84%A4%EC%A0%95%EA%B2%B0%EA%B3%BC.png",alt:"flow049"}))))}l.isMDXComponent=!0}}]);