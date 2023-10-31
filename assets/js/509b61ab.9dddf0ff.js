"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={id:"Do",title:"Enumeration: Do",sidebar_label:"Do",sidebar_position:5,custom_edit_url:null},l=void 0,i={unversionedId:"api/enums/Do",id:"api/enums/Do",title:"Enumeration: Do",description:"Return values for interrupting flows",source:"@site/docs/api/enums/Do.md",sourceDirName:"api/enums",slug:"/api/enums/Do",permalink:"/api/enums/Do",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:5,frontMatter:{id:"Do",title:"Enumeration: Do",sidebar_label:"Do",sidebar_position:5,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Readme",permalink:"/api/"},next:{title:"FlowControl",permalink:"/api/enums/FlowControl"}},p={},u=[{value:"Flow",id:"flow",level:2},{value:"break",id:"break",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"continue",id:"continue",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"repeat",id:"repeat",level:3},{value:"Defined in",id:"defined-in-2",level:4}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Return values for interrupting flows"),(0,a.kt)("h2",{id:"flow"},"Flow"),(0,a.kt)("h3",{id:"break"},"break"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"break")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"BREAK"')),(0,a.kt)("p",null,"Return Do.break from anywhere inside a looping flow (",(0,a.kt)("a",{parentName:"p",href:"/api/modules#whileloop"},"whileLoop"),",\n",(0,a.kt)("a",{parentName:"p",href:"/api/modules#forloop"},"forLoop"),", ",(0,a.kt)("a",{parentName:"p",href:"/api/modules#foreach"},"forEach"),", ",(0,a.kt)("a",{parentName:"p",href:"/api/modules#eachplayer"},"eachPlayer"),") to interupt the flow,\nskip the rest of the current loop iteration and exit this loop."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// each player can decide to shout but the first one that does ends the shouting round\neachPlayer({ name: 'player', do: (\n  playerActions({ actions: {\n    shout: Do.break,\n    pass: null\n  }}),\n]});\n")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"boardzilla-core/game/flow/enums.ts:65"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"continue"},"continue"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"continue")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"CONTINUE"')),(0,a.kt)("p",null,"Return Do.continue from anywhere inside a looping flow (",(0,a.kt)("a",{parentName:"p",href:"/api/modules#whileloop"},"whileLoop"),",\n",(0,a.kt)("a",{parentName:"p",href:"/api/modules#forloop"},"forLoop"),", ",(0,a.kt)("a",{parentName:"p",href:"/api/modules#foreach"},"forEach"),", ",(0,a.kt)("a",{parentName:"p",href:"/api/modules#eachplayer"},"eachPlayer"),") to interupt the flow,\nskip the rest of the current loop iteration and repeat the loop with the\nnext value."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// each player can decide to shout, and if so, may subsequently apologize\neachPlayer({ name: 'player', do: [\n  playerActions({ actions: {\n    shout: Do.continue, // if shouting, skip to the next player\n    pass: null\n  }}),\n  playerActions({ actions: {\n    apologize: null,\n    pass: null\n  }}),\n]});\n")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"boardzilla-core/game/flow/enums.ts:47"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"repeat"},"repeat"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"repeat")," = ",(0,a.kt)("inlineCode",{parentName:"p"},'"REPEAT"')),(0,a.kt)("p",null,"Return Do.repeat from anywhere inside a looping flow (",(0,a.kt)("a",{parentName:"p",href:"/api/modules#whileloop"},"whileLoop"),",\n",(0,a.kt)("a",{parentName:"p",href:"/api/modules#forloop"},"forLoop"),", ",(0,a.kt)("a",{parentName:"p",href:"/api/modules#foreach"},"forEach"),", ",(0,a.kt)("a",{parentName:"p",href:"/api/modules#eachplayer"},"eachPlayer"),") to interupt the flow,\nskip the rest of the current loop iteration and repeat the current loop\nwith the same value."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// each player can shout as many times as they like\neachPlayer({ name: 'player', do: (\n  playerActions({ actions: {\n    shout: Do.repeat,\n    pass: null\n  }}),\n]});\n")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"boardzilla-core/game/flow/enums.ts:24"))}d.isMDXComponent=!0}}]);