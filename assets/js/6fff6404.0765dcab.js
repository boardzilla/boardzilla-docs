"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[2006],{3253:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var t=n(5893),i=n(1151);const s={sidebar_position:2},r="Creating a game",o={id:"game/creating-a-game",title:"Creating a game",description:"After creating a new Boardzilla game, writing a",source:"@site/docs/game/creating-a-game.md",sourceDirName:"game",slug:"/game/creating-a-game",permalink:"/game/creating-a-game",draft:!1,unlisted:!1,editUrl:"https://github.com/boardzilla/boardzilla-docs/tree/main/docs/game/creating-a-game.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Core concepts",permalink:"/game/core-concepts"},next:{title:"Board Structure",permalink:"/game/board"}},c={},l=[];function d(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",iframe:"iframe",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"creating-a-game",children:"Creating a game"}),"\n",(0,t.jsxs)(a.p,{children:["After ",(0,t.jsx)(a.a,{href:"../introduction/create-a-game",children:"creating"})," a new Boardzilla game, writing a\ngame in Boardzilla usually follows these steps:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["Create the ",(0,t.jsx)(a.a,{href:"core-concepts#space",children:"Spaces"})," for your game"]}),"\n",(0,t.jsxs)(a.li,{children:["Create the ",(0,t.jsx)(a.a,{href:"core-concepts#piece",children:"Pieces"})," for your game and add into the\nappropriate Spaces"]}),"\n",(0,t.jsxs)(a.li,{children:["Define some ",(0,t.jsx)(a.a,{href:"core-concepts#action",children:"Actions"})," that the player(s) can take"]}),"\n",(0,t.jsxs)(a.li,{children:["Add these actions into the ",(0,t.jsx)(a.a,{href:"core-concepts#flow",children:"Flow"})]}),"\n",(0,t.jsx)(a.li,{children:"Test the actions in the browser"}),"\n",(0,t.jsx)(a.li,{children:"Add more actions and then test those"}),"\n",(0,t.jsx)(a.li,{children:"Customize the flow to add rounds, phases, turns etc."}),"\n",(0,t.jsxs)(a.li,{children:["Finally, customize the ",(0,t.jsx)(a.a,{href:"/category/customizing-the-ui",children:"UI"})," by adding game art,\ncustom HTML/CSS and animations"]}),"\n"]}),"\n",(0,t.jsx)(a.admonition,{title:"UI Last",type:"tip",children:(0,t.jsx)(a.p,{children:"It is generally best to customize the UI last. Boardzilla's default UI may not\nbe pretty but it's the easiest way to see exactly what's going on, or why a rule\nis not behaving as you expect."})}),"\n",(0,t.jsx)(a.p,{children:"The game creator provides a few base files where you will work."}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"src/game/index.ts"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"src/ui/index.tsx"})}),"\n",(0,t.jsx)(a.li,{children:(0,t.jsx)(a.code,{children:"src/ui/styles.scss"})}),"\n"]}),"\n",(0,t.jsx)(a.p,{children:"The game index file is where you will create the Spaces, Pieces and rules of the\ngame. At this file's top level is your game class, your player class and this is\nalso where you will create any Piece or Space classes you need. These should be\nat the top level so they can be exported and used elsewhere, e.g. in the UI."}),"\n",(0,t.jsxs)(a.p,{children:["It also contains a call to a function\n",(0,t.jsx)(a.a,{href:"../api/modules#creategame",children:(0,t.jsx)(a.code,{children:"createGame"})}),". Inside the body of this function is\nwhere you will create actions and flow with\n",(0,t.jsx)(a.a,{href:"../api/classes/game#defineactions",children:(0,t.jsx)(a.code,{children:"game#defineActions"})})," and\n",(0,t.jsx)(a.a,{href:"../api/classes/game#defineflow",children:(0,t.jsx)(a.code,{children:"game#defineFlow"})})," respectively."]}),"\n",(0,t.jsxs)(a.p,{children:["The ui index file is where the ",(0,t.jsx)(a.a,{href:"../ui/layout",children:"layout"})," and\n",(0,t.jsx)(a.a,{href:"../ui/appearance",children:"appearance"})," of the game will be defined. And the provided\nSCSS file is where you will put your ",(0,t.jsx)(a.a,{href:"../ui/css",children:"styles"}),"."]}),"\n",(0,t.jsx)(a.p,{children:'From the moment you create your new Boardzilla game, it is runnable in the\nbrowser and as you progress through the steps above, the browser will\nimmediately update with your changes.  You can begin "playing" your game as soon\nas actions are added. You can also run the game backward and forward to test\nit. As you progress, the game updates in real-time, even reflecting how the\nin-progress game history would change based on the new rules you\'ve entered.'}),"\n",(0,t.jsx)(a.p,{children:"In this way, a game can be created iteratively, testing each rule and revising\nbefore adding more."}),"\n",(0,t.jsx)(a.p,{children:"See an example of creating a game using these steps in this video tutorial."}),"\n",(0,t.jsx)(a.iframe,{width:"560",height:"315",src:"https://www.youtube.com/embed/vY9y1Qs8jKk?si=rDaUVsAvj5iFKzSL",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})]})}function h(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>r});var t=n(7294);const i={},s=t.createContext(i);function r(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);