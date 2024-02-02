"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[7627],{2492:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>o,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var r=l(5893),i=l(1151);const s={id:"PlayerCollection",title:"Class: PlayerCollection<P>",sidebar_label:"PlayerCollection",sidebar_position:7,custom_edit_url:null},t=void 0,d={id:"api/classes/PlayerCollection",title:"Class: PlayerCollection<P>",description:"An Array-like collection of the game's players, mainly used in Game#players. The array is automatically created when the game begins and",source:"@site/docs/api/classes/PlayerCollection.md",sourceDirName:"api/classes",slug:"/api/classes/PlayerCollection",permalink:"/api/classes/PlayerCollection",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"PlayerCollection",title:"Class: PlayerCollection<P>",sidebar_label:"PlayerCollection",sidebar_position:7,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Player",permalink:"/api/classes/Player"},next:{title:"Space",permalink:"/api/classes/Space"}},c={},a=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Properties",id:"properties",level:2},{value:"currentPosition",id:"currentposition",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"game",id:"game",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"Methods",id:"methods",level:2},{value:"atPosition",id:"atposition",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"current",id:"current",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"allCurrent",id:"allcurrent",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"host",id:"host",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"notCurrent",id:"notcurrent",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"inPositionOrder",id:"inpositionorder",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"setCurrent",id:"setcurrent",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"next",id:"next",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"after",id:"after",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"seatedNext",id:"seatednext",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"turnOrderOf",id:"turnorderof",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"sortBy",id:"sortby",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"sortedBy",id:"sortedby",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-14",level:4}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["An Array-like collection of the game's players, mainly used in ",(0,r.jsx)(n.a,{href:"/api/classes/Game#players",children:"Game#players"}),". The array is automatically created when the game begins and\ncan be used to determine or alter play order. The order of the array is the\norder of play, i.e. ",(0,r.jsx)(n.code,{children:"game.players[1]"})," takes their turn right after\n",(0,r.jsx)(n.code,{children:"game.players[0]"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"type-parameters",children:"Type parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"P"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["extends ",(0,r.jsx)(n.a,{href:"/api/classes/Player",children:(0,r.jsx)(n.code,{children:"Player"})})]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Array"}),"<",(0,r.jsx)(n.code,{children:"P"}),">"]}),"\n",(0,r.jsxs)(n.p,{children:["\u21b3 ",(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"PlayerCollection"})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(n.h3,{id:"currentposition",children:"currentPosition"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"currentPosition"}),": ",(0,r.jsx)(n.code,{children:"number"}),"[]"]}),"\n",(0,r.jsx)(n.p,{children:"An array of table positions that may currently act."}),"\n",(0,r.jsx)(n.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L21",children:"boardzilla-core/src/player/collection.ts:21"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"game",children:"game"}),"\n",(0,r.jsxs)(n.p,{children:["\u2022 ",(0,r.jsx)(n.strong,{children:"game"}),": ",(0,r.jsx)(n.a,{href:"/api/classes/Game",children:(0,r.jsx)(n.code,{children:"Game"})}),"<",(0,r.jsx)(n.code,{children:"P"}),", ",(0,r.jsx)(n.a,{href:"/api/classes/Board",children:(0,r.jsx)(n.code,{children:"Board"})}),"<",(0,r.jsx)(n.code,{children:"P"}),", ",(0,r.jsx)(n.code,{children:"any"}),">>"]}),"\n",(0,r.jsxs)(n.p,{children:["A reference to the ",(0,r.jsx)(n.a,{href:"/api/classes/Game",children:"Game"})," class"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L26",children:"boardzilla-core/src/player/collection.ts:26"})}),"\n",(0,r.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(n.h3,{id:"atposition",children:"atPosition"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"atPosition"}),"(",(0,r.jsx)(n.code,{children:"position"}),"): ",(0,r.jsx)(n.code,{children:"undefined"})," | ",(0,r.jsx)(n.code,{children:"P"})]}),"\n",(0,r.jsx)(n.p,{children:"Returns the player at a given table position."}),"\n",(0,r.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"position"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"number"})})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"undefined"})," | ",(0,r.jsx)(n.code,{children:"P"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L41",children:"boardzilla-core/src/player/collection.ts:41"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"current",children:"current"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"current"}),"(): ",(0,r.jsx)(n.code,{children:"undefined"})," | ",(0,r.jsx)(n.code,{children:"P"})]}),"\n",(0,r.jsx)(n.p,{children:"Returns the player that may currently act. It is an error to call current\nwhen multiple players can act"}),"\n",(0,r.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"undefined"})," | ",(0,r.jsx)(n.code,{children:"P"})]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L49",children:"boardzilla-core/src/player/collection.ts:49"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"allcurrent",children:"allCurrent"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"allCurrent"}),"(): ",(0,r.jsx)(n.code,{children:"P"}),"[]"]}),"\n",(0,r.jsx)(n.p,{children:"Returns the array of all players that may currently act."}),"\n",(0,r.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"P"}),"[]"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L57",children:"boardzilla-core/src/player/collection.ts:57"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"host",children:"host"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"host"}),"(): ",(0,r.jsx)(n.code,{children:"P"})]}),"\n",(0,r.jsx)(n.p,{children:"Returns the host player"}),"\n",(0,r.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"P"})}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L64",children:"boardzilla-core/src/player/collection.ts:64"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"notcurrent",children:"notCurrent"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"notCurrent"}),"(): ",(0,r.jsx)(n.code,{children:"P"}),"[]"]}),"\n",(0,r.jsx)(n.p,{children:"Returns the array of players that may not currently act."}),"\n",(0,r.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"P"}),"[]"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L71",children:"boardzilla-core/src/player/collection.ts:71"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"inpositionorder",children:"inPositionOrder"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"inPositionOrder"}),"(): ",(0,r.jsx)(n.a,{href:"/api/classes/PlayerCollection",children:(0,r.jsx)(n.code,{children:"PlayerCollection"})}),"<",(0,r.jsx)(n.code,{children:"P"}),">"]}),"\n",(0,r.jsx)(n.p,{children:"Returns the array of players in the order of table positions. Does not\nalter the actual player order."}),"\n",(0,r.jsx)(n.h4,{id:"returns-5",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/classes/PlayerCollection",children:(0,r.jsx)(n.code,{children:"PlayerCollection"})}),"<",(0,r.jsx)(n.code,{children:"P"}),">"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L79",children:"boardzilla-core/src/player/collection.ts:79"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"setcurrent",children:"setCurrent"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"setCurrent"}),"(",(0,r.jsx)(n.code,{children:"players"}),"): ",(0,r.jsx)(n.code,{children:"void"})]}),"\n",(0,r.jsx)(n.p,{children:"Set the current player(s)."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"players"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"number"})," | ",(0,r.jsx)(n.code,{children:"number"}),"[] | ",(0,r.jsx)(n.code,{children:"P"})," | ",(0,r.jsx)(n.code,{children:"P"}),"[]"]}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["The ",(0,r.jsx)(n.a,{href:"/api/classes/Player",children:"Player"})," or table position of the player to act, or an array of either."]})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-6",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"void"})}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L89",children:"boardzilla-core/src/player/collection.ts:89"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"next",children:"next"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"next"}),"(): ",(0,r.jsx)(n.code,{children:"P"})]}),"\n",(0,r.jsx)(n.p,{children:"Advance the current player to act to the next player based on player order."}),"\n",(0,r.jsx)(n.h4,{id:"returns-7",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"P"})}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L98",children:"boardzilla-core/src/player/collection.ts:98"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"after",children:"after"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"after"}),"(",(0,r.jsx)(n.code,{children:"player"}),"): ",(0,r.jsx)(n.code,{children:"P"})]}),"\n",(0,r.jsx)(n.p,{children:"Return the next player to act based on player order."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"player"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"number"})," | ",(0,r.jsx)(n.code,{children:"P"})]})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-8",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"P"})}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L110",children:"boardzilla-core/src/player/collection.ts:110"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"seatednext",children:"seatedNext"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"seatedNext"}),"(",(0,r.jsx)(n.code,{children:"player"}),", ",(0,r.jsx)(n.code,{children:"steps?"}),"): ",(0,r.jsx)(n.code,{children:"P"})]}),"\n",(0,r.jsx)(n.p,{children:"Return the player next to this player at the table."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Default value"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"player"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"P"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"undefined"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"-"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"steps"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"1"})}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:"1 = one step to the left, -1 = one step to the right, etc"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-9",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"P"})}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L118",children:"boardzilla-core/src/player/collection.ts:118"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"turnorderof",children:"turnOrderOf"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"turnOrderOf"}),"(",(0,r.jsx)(n.code,{children:"player"}),"): ",(0,r.jsx)(n.code,{children:"number"})]}),"\n",(0,r.jsxs)(n.p,{children:["Returns the turn order of the given player, starting with 0. This is\ndistinct from ",(0,r.jsx)(n.a,{href:"/api/classes/Player#position",children:"Player#position"}),". Turn order can be altered during a\ngame, whereas table position cannot."]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"player"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:"number"})," | ",(0,r.jsx)(n.code,{children:"P"})]})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-10",children:"Returns"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"number"})}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L127",children:"boardzilla-core/src/player/collection.ts:127"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"sortby",children:"sortBy"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"sortBy"}),"(",(0,r.jsx)(n.code,{children:"key"}),", ",(0,r.jsx)(n.code,{children:"direction?"}),"): ",(0,r.jsx)(n.a,{href:"/api/classes/PlayerCollection",children:(0,r.jsx)(n.code,{children:"PlayerCollection"})}),"<",(0,r.jsx)(n.code,{children:"P"}),">"]}),"\n",(0,r.jsx)(n.p,{children:"Sorts the players by some means, changing the turn order."}),"\n",(0,r.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"key"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.a,{href:"/api/modules#sorter",children:(0,r.jsx)(n.code,{children:"Sorter"})}),"<",(0,r.jsx)(n.code,{children:"P"}),"> | ",(0,r.jsx)(n.a,{href:"/api/modules#sorter",children:(0,r.jsx)(n.code,{children:"Sorter"})}),"<",(0,r.jsx)(n.code,{children:"P"}),">[]"]}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:["A key of function for sorting, or a list of such. See ",(0,r.jsx)(n.a,{href:"/api/modules#sorter",children:"Sorter"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"direction?"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:'"desc"'})," | ",(0,r.jsx)(n.code,{children:'"asc"'})]}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:'"asc"'})," to cause players to be sorted from lowest to highest, ",(0,r.jsx)(n.code,{children:'"desc"'})," for highest to lower"]})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-11",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/classes/PlayerCollection",children:(0,r.jsx)(n.code,{children:"PlayerCollection"})}),"<",(0,r.jsx)(n.code,{children:"P"}),">"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-13",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L141",children:"boardzilla-core/src/player/collection.ts:141"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"sortedby",children:"sortedBy"}),"\n",(0,r.jsxs)(n.p,{children:["\u25b8 ",(0,r.jsx)(n.strong,{children:"sortedBy"}),"(",(0,r.jsx)(n.code,{children:"key"}),", ",(0,r.jsx)(n.code,{children:"direction?"}),"): ",(0,r.jsx)(n.a,{href:"/api/classes/PlayerCollection",children:(0,r.jsx)(n.code,{children:"PlayerCollection"})}),"<",(0,r.jsx)(n.code,{children:"P"}),">"]}),"\n",(0,r.jsxs)(n.p,{children:["Returns a copy of this collection sorted by some ",(0,r.jsx)(n.a,{href:"/api/modules#sorter",children:"Sorter"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Name"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,r.jsx)(n.th,{style:{textAlign:"left"},children:"Default value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"key"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.a,{href:"/api/modules#sorter",children:(0,r.jsx)(n.code,{children:"Sorter"})}),"<",(0,r.jsx)(n.code,{children:"P"}),"> | ",(0,r.jsx)(n.a,{href:"/api/modules#sorter",children:(0,r.jsx)(n.code,{children:"Sorter"})}),"<",(0,r.jsx)(n.code,{children:"P"}),">[]"]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"undefined"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:"direction"})}),(0,r.jsxs)(n.td,{style:{textAlign:"left"},children:[(0,r.jsx)(n.code,{children:'"desc"'})," | ",(0,r.jsx)(n.code,{children:'"asc"'})]}),(0,r.jsx)(n.td,{style:{textAlign:"left"},children:(0,r.jsx)(n.code,{children:'"asc"'})})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"returns-12",children:"Returns"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/api/classes/PlayerCollection",children:(0,r.jsx)(n.code,{children:"PlayerCollection"})}),"<",(0,r.jsx)(n.code,{children:"P"}),">"]}),"\n",(0,r.jsx)(n.h4,{id:"defined-in-14",children:"Defined in"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/boardzilla/boardzilla-core/blob/6a65527/src/player/collection.ts#L159",children:"boardzilla-core/src/player/collection.ts:159"})})]})}function o(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,l)=>{l.d(n,{Z:()=>d,a:()=>t});var r=l(7294);const i={},s=r.createContext(i);function t(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);