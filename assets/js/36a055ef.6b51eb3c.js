"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[7421],{3e3:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});var i=a(5893),s=a(1151);const t={sidebar_position:6},o="Player information",r={id:"ui/information",title:"Player information",description:"Having the rules enforced and the various player choices presented well is",source:"@site/docs/ui/information.md",sourceDirName:"ui",slug:"/ui/information",permalink:"/ui/information",draft:!1,unlisted:!1,editUrl:"https://github.com/boardzilla/boardzilla-docs/tree/main/docs/ui/information.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Appearance",permalink:"/ui/appearance"},next:{title:"Game Settings",permalink:"/ui/game-settings"}},l={},c=[{value:"Messages",id:"messages",level:2},{value:"Announcements",id:"announcements",level:2},{value:"Finishing the game",id:"finishing-the-game",level:2},{value:"Element information",id:"element-information",level:2},{value:"Information Modals",id:"information-modals",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"player-information",children:"Player information"}),"\n",(0,i.jsx)(n.p,{children:"Having the rules enforced and the various player choices presented well is\nimportant to provide clarity to players, but there is a lot of information\nneeded for a player besides simply the choices available. In this section, we'll\ncover the various other ways to provide helpful information for players."}),"\n",(0,i.jsx)(n.h2,{id:"messages",children:"Messages"}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.a,{href:"../game/actions#messaging",children:"actions"})," we saw how to attach a message to an\naction. This is one of the best places to put information since it will convey\nexactly to all players what a particular action did. However there are many\nother places where messages can be helpful. You can trigger messages at any\nother time by calling ",(0,i.jsx)(n.a,{href:"../api/classes/Game#message",children:(0,i.jsx)(n.code,{children:"game.message"})}),". This works\nthe same as ",(0,i.jsx)(n.a,{href:"../api/classes/Action#message",children:(0,i.jsx)(n.code,{children:"Action#message"})}),". It also uses\n",(0,i.jsx)(n.code,{children:"{{handlebars}}"})," syntax to interpolate game element or player objects, or any\nvariables for that matter. The only difference is that ",(0,i.jsx)(n.code,{children:"game.message"})," does not\nautomatically provide any arguments to the message, so anything you want to\ndynamically include needs to be provided, e.g.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'  game.message(\n    "{{player}} just achieved a score of {{score}}", {\n      player: game.players[0],\n      score: game.players[0].score()\n    }\n  );\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Using {{handlebars}}",type:"tip",children:(0,i.jsxs)(n.p,{children:["Using Boardzilla's ",(0,i.jsx)(n.code,{children:"{{handlebars}}"})," syntax in messages allows references to\nPlayers or Game Element objects to have special formatting applied. You can\ninterpolate values into the message string directly, but for this reason, using\nthe ",(0,i.jsx)(n.code,{children:"{{handlebars}}"})," syntax is recommended."]})}),"\n",(0,i.jsx)(n.p,{children:"Messages appear in the chat log of the game for all players. In devtools, they\nappear in the history pane alongside diagnostic information about what action\nwas processed. You must be careful not to leak information to other players\nsince all messages appear the same way to all players."}),"\n",(0,i.jsx)(n.admonition,{title:"Message strings",type:"tip",children:(0,i.jsxs)(n.p,{children:["Boardzilla provides string representations of Players and Game Elements that use\ntheir ",(0,i.jsx)(n.code,{children:'"name"'})," using the standard ",(0,i.jsx)(n.code,{children:"toString()"}),". Feel free to override these and\nprovide your own ",(0,i.jsx)(n.code,{children:"toString()"})," if you want to customize how these things appear\nin messages."]})}),"\n",(0,i.jsx)(n.h2,{id:"announcements",children:"Announcements"}),"\n",(0,i.jsxs)(n.p,{children:["A step up from messages are announcements. These are used more sparingly and\ninterrupt the game to make sure the players see something\nimportant. Announcements are triggered with\n",(0,i.jsx)(n.a,{href:"../api/classes/Game#announce",children:(0,i.jsx)(n.code,{children:"game.announce"})}),". You can put anything you want\ninto an announcement. Unlike messages, these are formatted blocks of JSX. The\nonly argument is the name of the announcement and refers to an announcement\nspecified in your ",(0,i.jsx)(n.a,{href:"../api/modules#render",children:(0,i.jsx)(n.code,{children:"render"})})," method."]}),"\n",(0,i.jsx)(n.p,{children:"As an example, an announcement to declare a new phase of the game might call:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"  game.announce('newPhase');\n"})}),"\n",(0,i.jsxs)(n.p,{children:["and in the ",(0,i.jsx)(n.a,{href:"../api/modules#render",children:(0,i.jsx)(n.code,{children:"render"})})," method, this announcement would be\nprovided and might look like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"  announcements: {\n    newPhase: game => (\n      <div>\n        <h1>New phase</h1>\n        The game has entered phase {game.phase}!\n      </div>\n    )\n  }\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Announcements interrupt the game and players must click to dismiss them before\nthey can take actions. Since you provide the HTML, you can style them however\nyou like. You can also style announcements generally by targetting the base\nstyles of either ",(0,i.jsx)(n.code,{children:"#announcement"})," or ",(0,i.jsx)(n.code,{children:".modal-popup"}),". See ",(0,i.jsx)(n.a,{href:"../ui/css",children:"CSS"})," for\ninformation on styling."]}),"\n",(0,i.jsx)(n.h2,{id:"finishing-the-game",children:"Finishing the game"}),"\n",(0,i.jsxs)(n.p,{children:["Probably the most important announcement is that the game is over! The game can\nbe ended by calling ",(0,i.jsx)(n.a,{href:"../api/classes/Game#finish",children:(0,i.jsx)(n.code,{children:"game.finish"})})," and providing\nthe winning player(s) as an argument. This creates a special built-in\nannouncement that simply says you won. You can create your own announcement to\nconvey whatever information you like about the game conclusion by supplying\nanother argument with the name of your announcement, just as in\n",(0,i.jsx)(n.a,{href:"../api/classes/Game#announce",children:(0,i.jsx)(n.code,{children:"game.announce"})}),", e.g.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"  game.finish(player, 'victory');\n"})}),"\n",(0,i.jsxs)(n.p,{children:["and in the ",(0,i.jsx)(n.a,{href:"../api/modules#render",children:(0,i.jsx)(n.code,{children:"render"})})," method:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"  announcements: {\n    victory: game => (\n      <div>\n        <h1>Victory</h1>\n        {game.getWinners()!.[0].name} wins the game with a score of {game.getWinners()!.[0].score()}!\n      </div>\n    )\n  }\n"})}),"\n",(0,i.jsx)(n.h2,{id:"element-information",children:"Element information"}),"\n",(0,i.jsxs)(n.p,{children:["Any ",(0,i.jsx)(n.a,{href:"../api/classes/Space",children:(0,i.jsx)(n.code,{children:"Space"})})," or ",(0,i.jsx)(n.a,{href:"../api/classes/Piece",children:(0,i.jsx)(n.code,{children:"Piece"})})," in the\ngame can be given additional information that is not displayed on the board but\nis available by clicking on the information icon in the top left. This is done by\nadding an ",(0,i.jsx)(n.code,{children:"info"})," property to the ",(0,i.jsx)(n.a,{href:"appearance",children:(0,i.jsx)(n.code,{children:"appearance"})})," of a given\nelement. The supplied function will be provided with the instance of the element\nand return JSX, just like ",(0,i.jsx)(n.code,{children:"render"}),". This JSX however, will not appear on the\nboard, but instead will cause the item to be highlighted after clicking the\ninformation icon in the top left. Players can click the highlighted element to\nsee this additional info."]}),"\n",(0,i.jsx)(n.h2,{id:"information-modals",children:"Information Modals"}),"\n",(0,i.jsx)(n.p,{children:"Information modals are informational content that is always available for\nplayers to help them along with the game. These might include score tables, or\nmore detailed information about the game state that you'd prefer not take up\nroom on the playing area at all times."}),"\n",(0,i.jsxs)(n.p,{children:["Information modals are supplied in the ",(0,i.jsx)(n.a,{href:"../api/modules#render",children:(0,i.jsx)(n.code,{children:"render"})})," method,\nunder ",(0,i.jsx)(n.code,{children:"infoModals"}),". These appear in the information sidebar that is available by\nclicking the info icon in the top left."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>o});var i=a(7294);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);