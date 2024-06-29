"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[5264],{7176:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var o=a(5893),l=a(1151);const r={},s="Game Development",t={id:"cookbook/game",title:"Game Development",description:"Recipies about game development.",source:"@site/docs/cookbook/game.md",sourceDirName:"cookbook",slug:"/cookbook/game",permalink:"/cookbook/game",draft:!1,unlisted:!1,editUrl:"https://github.com/boardzilla/boardzilla-docs/tree/main/docs/cookbook/game.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Best Practices",permalink:"/cookbook/best_practices"},next:{title:"Miscellaneuous",permalink:"/cookbook/misc"}},i={},c=[{value:"Setup",id:"setup",level:2},{value:"Sort Pieces",id:"sort-pieces",level:3},{value:"Make Pieces Visible Only To Owner",id:"make-pieces-visible-only-to-owner",level:3},{value:"Actions",id:"actions",level:2},{value:"Draw Multiple Cards At Once",id:"draw-multiple-cards-at-once",level:3},{value:"Flow",id:"flow",level:2},{value:"Draw an Initial Hand For Each Player",id:"draw-an-initial-hand-for-each-player",level:3},{value:"Shuffle a Deck",id:"shuffle-a-deck",level:3},{value:"Simultaneous Actions",id:"simultaneous-actions",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"game-development",children:"Game Development"}),"\n",(0,o.jsx)(n.p,{children:"Recipies about game development."}),"\n",(0,o.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,o.jsx)(n.h3,{id:"sort-pieces",children:"Sort Pieces"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'const hand = game.create(Space, "hand", { player });\nhand.onEnter(Card, (c) => {\n  hand.sortBy("name");\n});\n'})}),"\n",(0,o.jsx)(n.h3,{id:"make-pieces-visible-only-to-owner",children:"Make Pieces Visible Only To Owner"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'const hand = game.create(Space, "hand", { player });\nhand.onEnter(Card, (c) => {\n  c.showOnlyTo(player.position);\n});\n'})}),"\n",(0,o.jsx)(n.h2,{id:"actions",children:"Actions"}),"\n",(0,o.jsx)(n.h3,{id:"draw-multiple-cards-at-once",children:"Draw Multiple Cards At Once"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'game.defineActions({\n  drawCards: (player) =>\n    action({ prompt: "Draw 2 cards" })\n      .chooseOnBoard("cards", $.drawPile.all(Card), {\n        number: 2,\n        confirm: "Take these 2 cards?",\n      })\n      .move("cards", player.my("hand")!),\n});\n'})}),"\n",(0,o.jsx)(n.h2,{id:"flow",children:"Flow"}),"\n",(0,o.jsx)(n.h3,{id:"draw-an-initial-hand-for-each-player",children:"Draw an Initial Hand For Each Player"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'for (const player of game.players) {\n  $.draw.firstN(3, Card).putInto(player.my("hand")!);\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"shuffle-a-deck",children:"Shuffle a Deck"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"$.drawPile.shuffle();\n"})}),"\n",(0,o.jsx)(n.h3,{id:"simultaneous-actions",children:"Simultaneous Actions"}),"\n",(0,o.jsx)(n.p,{children:"If you need players to perform actions at the same time:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"everyPlayer({\n    do: playerActions({ actions: ['discardCard'] })\n}),\n"})})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>t,a:()=>s});var o=a(7294);const l={},r=o.createContext(l);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);