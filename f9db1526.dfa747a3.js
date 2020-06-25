(window.webpackJsonp=window.webpackJsonp||[]).push([[262],{364:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),o=(r(0),r(376)),c={title:"customCode"},i={id:"pipeline/workflow/workspace/data-processing-advanced/custom-code",isDocsHomePage:!1,title:"customCode",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/data-processing-advanced/custom-code.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/custom-code",sidebar:"pipeline",previous:{title:"mlPipeline",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/ml-pipeline"},next:{title:"patternParser",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/patternParser"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"PySpark\uc758 DataFrame \ud568\uc218\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc0ac\uc6a9\uc790 \uc815\uc758 \ucf54\ub4dc\ub97c \uc785\ub825 \ud560 \uc218 \uc788\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[customCode]","\ub178\ub4dc\ub97c drag & drop \ud569\ub2c8\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/customCode_property.png",alt:"customCode"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"code : Dataframe\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud568\uc218\uac00 \ud3ec\ud568\ub41c \ucf54\ub4dc(filter(), drop(), limit() \ub4f1) \uc791\uc131"),Object(o.b)("li",{parentName:"ol"},"variableName : \ubcc0\uc218\uba85 \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"variableType : \ubcc0\uc218\ud0c0\uc785 \uc785\ub825 (spark DF, pandas DF, RDD)"),Object(o.b)("li",{parentName:"ol"},"overwriteSchema : \uc2e4\ud589\uacb0\uacfc\uc5d0 \ub300\ud55c \uc2a4\ud0a4\ub9c8\ub97c \uc7ac\uc815\uc758(\uccb4\ud06c\ud558\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uc774\uc804 \uc2a4\ud0a4\ub9c8\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud568)"),Object(o.b)("li",{parentName:"ol"},"newSchema")),Object(o.b)("h4",{id:"note"},"Note"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"dataset \ubcc0\uacbd \uac00\ub2a5 (1\uc904 \uc785\ub825\ub9cc \uac00\ub2a5)"),Object(o.b)("ul",{parentName:"blockquote"},Object(o.b)("li",{parentName:"ul"},"ex. withColumn('temp_filled_spark', filled_column)"))),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"HDFS \ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc640 PySpark\uc758 limit() \ud568\uc218\ub97c \uc774\uc6a9\ud558\uc5ec 3\uac1c \ub370\uc774\ud130\ub9cc \ud45c\uc2dc\ud558\ub294 \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4.  "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[customCode]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(o.b)("br",{parentName:"li"}),Object(o.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/customCode.png",alt:"customCode"}))),Object(o.b)("li",{parentName:"ol"},"[customCode]","\ub178\ub4dc\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825 \ud6c4 snapshot \ud074\ub9ad",Object(o.b)("br",{parentName:"li"}),Object(o.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/customCode_example.png",alt:"customCode"})))))}b.isMDXComponent=!0},376:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(r),u=n,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||o;return r?a.a.createElement(m,i(i({ref:t},l),{},{components:r})):a.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);