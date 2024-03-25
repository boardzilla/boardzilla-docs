"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[2835],{1731:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(5893),s=t(1151);const a={sidebar_position:5},o="Actions",l={id:"game/actions",title:"Actions",description:"Actions are the building blocks of your game as it relates to its players. A",source:"@site/docs/game/actions.md",sourceDirName:"game",slug:"/game/actions",permalink:"/game/actions",draft:!1,unlisted:!1,editUrl:"https://github.com/boardzilla/boardzilla-docs/tree/main/docs/game/actions.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Players",permalink:"/game/players"},next:{title:"Flow",permalink:"/game/flow"}},r={},c=[{value:"What constitutes an Action?",id:"what-constitutes-an-action",level:2},{value:"Anatomy of an action",id:"anatomy-of-an-action",level:2},{value:"Selections",id:"selections",level:2},{value:"Behaviors",id:"behaviors",level:2},{value:"Moving",id:"moving",level:3},{value:"Messaging",id:"messaging",level:3},{value:"Other behavior",id:"other-behavior",level:3},{value:"Tree-shaking and Skipping",id:"tree-shaking-and-skipping",level:2},{value:"Customizing the tree-shaking",id:"customizing-the-tree-shaking",level:3},{value:"Skipping",id:"skipping",level:3},{value:"Follow-ups",id:"follow-ups",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",div:"div",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",nobr:"nobr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"actions",children:"Actions"}),"\n",(0,i.jsx)(n.p,{children:"Actions are the building blocks of your game as it relates to its players. A\nplayer will play the game by selecting and taking actions. It's your job to\ndefine the possible actions and when each player can perform each."}),"\n",(0,i.jsx)(n.h2,{id:"what-constitutes-an-action",children:"What constitutes an Action?"}),"\n",(0,i.jsx)(n.p,{children:"An action consists of a set of choices that together constitute the whole\naction. The choices that belong to an action cannot reveal any information or\naffect the game until the complete action is taken. An action therefore,\nconsists of the complete set of choices and must be taken altogether or not at\nall.  As an action doesn't reveal any private information, a player can change\ntheir mind at any point during the action without consequence, and other players\nwill not be aware of this."}),"\n",(0,i.jsxs)(n.admonition,{title:"Actions are a set of choices or selections",type:"info",children:[(0,i.jsxs)(n.p,{children:["A chess move as a Boardzilla Action would have two ",(0,i.jsx)(n.strong,{children:"selections"}),":"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Piece to move"}),"\n",(0,i.jsx)(n.li,{children:"Space to move it to"}),"\n"]}),(0,i.jsx)(n.p,{children:"You can select them each in turn (or both together via dragging) but you if you\nselect a pawn and change your mind, you can unselect it and select a\nknight. Selecting the piece by itself does not constitute an action until the\ndestination space is selected."})]}),"\n",(0,i.jsxs)(n.p,{children:["Each action may contain several selections for the player to make and they must\nuse only the information the player has available at at the time they begin the\naction. If an action involves revealing information and then making a follow up\nchoice, these must be separate actions. (see ",(0,i.jsx)(n.a,{href:"#follow-ups",children:"follow-ups"}),")."]}),"\n",(0,i.jsxs)(n.admonition,{title:"Actions are like functions",type:"tip",children:[(0,i.jsxs)(n.p,{children:["Think of actions like function calls. An action for a chess move would be like a\nfunction named ",(0,i.jsx)(n.code,{children:"move"})," that takes two arguments ",(0,i.jsx)(n.code,{children:"piece"})," and ",(0,i.jsx)(n.code,{children:"space"}),". This is a\nsingle action, not two. The player's client would essentially make a call like:"]}),(0,i.jsx)(n.div,{style:{textAlign:"center"},children:(0,i.jsx)(n.img,{src:"/img/move.svg"})}),(0,i.jsx)(n.p,{children:'For this reason, you will sometimes see the values selected by the players\ncalled "arguments".'})]}),"\n",(0,i.jsx)(n.h2,{id:"anatomy-of-an-action",children:"Anatomy of an action"}),"\n",(0,i.jsx)(n.p,{children:"An action consists of several required properties."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["a unique ",(0,i.jsx)(n.strong,{children:"name"})," by which it will be referred to, e.g. ",(0,i.jsx)(n.code,{children:"playCard"})]}),"\n",(0,i.jsxs)(n.li,{children:["zero or more ",(0,i.jsx)(n.strong,{children:"selections"})," that a player must make to perform the\naction"]}),"\n",(0,i.jsxs)(n.li,{children:["the ",(0,i.jsx)(n.strong,{children:"behavior"})," of the action such as moving a piece and displaying a\nmessage"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"As well, an action can have several optional properties."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"conditions"})," on whether an action can be performed at all"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"validations"})," on the selections for an action"]}),"\n",(0,i.jsxs)(n.li,{children:["unique ",(0,i.jsx)(n.strong,{children:"prompts"})," to help the player understand their action"]}),"\n",(0,i.jsxs)(n.li,{children:["a ",(0,i.jsx)(n.strong,{children:"description"})," for other players to see what's happening"]}),"\n",(0,i.jsxs)(n.li,{children:["any additional ",(0,i.jsx)(n.strong,{children:"confirmations"})," the player needs for this action"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Actions are all created in a single place in ",(0,i.jsx)(n.code,{children:"game/index.ts"})," inside the\n",(0,i.jsx)(n.a,{href:"../api/modules#creategame",children:"createGame"})," when you call\n",(0,i.jsx)(n.a,{href:"../api/classes/Game#defineactions",children:(0,i.jsx)(n.code,{children:"game.defineActions"})}),". Each action is listed\nwith its name, and the selections and behaviors of the action are chained onto\nit, e.g.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:'title="Chaining action methods"',children:'  game.defineActions({\n    bid: player => action({\n      prompt: "Make a bid",\n      description: "bidding",\n      condition: !player.passedThisAuction\n    }).chooseNumber(\n      "amount", {\n        min: board.lastBid ?? 1\n        max: player.money,\n      }\n    ).do(\n      ({ amount }) => board.lastBid = amount\n    ).message(\n      `{{player}} bid {{amount}}`\n    ),\n  });\n'})}),"\n",(0,i.jsx)(n.p,{children:"There's quite a bit going on with this action. Let's break it down:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"name"})," of the action is ",(0,i.jsx)(n.code,{children:'"bid"'}),", defined as the key of the object."]}),"\n",(0,i.jsxs)(n.li,{children:["Notice that the action function accepts a ",(0,i.jsx)(n.code,{children:"player"})," argument. This is the\nplayer performing this action, which is why later in the action we can refer\nto the player's ",(0,i.jsx)(n.code,{children:"money"})," and use their name in the message."]}),"\n",(0,i.jsxs)(n.li,{children:["This action has one ",(0,i.jsx)(n.strong,{children:"selection"})," which is named ",(0,i.jsx)(n.code,{children:'"amount"'}),". This is a number\nselection created with ",(0,i.jsx)(n.a,{href:"../api/classes/Action#choosenumber",children:(0,i.jsx)(n.code,{children:"chooseNumber"})}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["This action has two ",(0,i.jsx)(n.strong,{children:"behavior"})," functions. One is a\n",(0,i.jsx)(n.a,{href:"../api/classes/Action#do",children:(0,i.jsx)(n.code,{children:"do"})})," that records the bid amount as\n",(0,i.jsx)(n.code,{children:"board.lastBid"})," and one is a ",(0,i.jsx)(n.a,{href:"../api/classes/Action#message",children:(0,i.jsx)(n.code,{children:"message"})})," sent\nto the players."]}),"\n",(0,i.jsxs)(n.li,{children:["This action also has 3 ",(0,i.jsx)(n.strong,{children:"properties"}),". We've added a string ",(0,i.jsx)(n.code,{children:"prompt"}),", a\n",(0,i.jsx)(n.code,{children:"description"}),", and also a ",(0,i.jsx)(n.code,{children:"condition"})," for performing this action, namely that\nthe player may not perform this action if they have already passed this\nauction."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"selections",children:"Selections"}),"\n",(0,i.jsx)(n.p,{children:"An action can have zero or more selections. There are 5 fundamental types of\nselections available in Boardzilla."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Appearance"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"number"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"../api/classes/Action#choosenumber",children:(0,i.jsx)(n.code,{children:"chooseNumber"})})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Select from a range of numbers, such as when spending an arbitrary amount of resources."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Number picker"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"text"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"../api/classes/Action#entertext",children:(0,i.jsx)(n.code,{children:"enterText"})})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Enter text, such as in word-guessing games."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Input box"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"choices"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"../api/classes/Action#choosefrom",children:(0,i.jsx)(n.code,{children:"chooseFrom"})})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Select from a list of choices."}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"List of buttons"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"board"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"../api/classes/Action#chooseonboard",children:(0,i.jsx)(n.code,{children:"chooseOnBoard"})})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Select something on the board, a piece or space"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Selectable elements on the board can be clicked"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"placement"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"../api/classes/Action#placepiece",children:(0,i.jsx)(n.code,{children:"placePiece"})})}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Select the exact position for a piece"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"The selected piece becomes movable and snaps to valid positions"})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["In addition there is an additional select ",(0,i.jsx)(n.code,{children:"chooseGroup"})," which allows you to combine these selections into a single selection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Method"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"left"},children:"Appearance"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"group"}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:(0,i.jsx)(n.a,{href:"../api/classes/Action#choosegroup",children:(0,i.jsx)(n.code,{children:"chooseGroup"})})}),(0,i.jsxs)(n.td,{style:{textAlign:"left"},children:["Combination of ",(0,i.jsx)(n.code,{children:"chooseNumber"}),", ",(0,i.jsx)(n.code,{children:"enterText"}),", ",(0,i.jsx)(n.code,{children:"chooseFrom"})," or ",(0,i.jsx)(n.code,{children:"placePiece"})]}),(0,i.jsx)(n.td,{style:{textAlign:"left"},children:"Combined based on the combination"})]})})]}),"\n",(0,i.jsxs)(n.p,{children:["Each selection added to an Action must be one of these types, and must have a\nname unique to this action. The methods above are called one by one, chained\nonto the action in the order the player must select them. You can think of these\nmethods like ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises",children:"Chained\nPromises"}),"\nthat are resolved by the choice the player makes. All the values selected by the\nplayer become available to function calls later in the action, as a single\nargument with key-value pairs for the selections. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"  action({\n    prompt: \"Pick a number and a word\"\n  }).chooseNumber(\n    'amount'\n  }).enterText(\n    'guess'\n  }).do(\n    ({ amount, guess }) => {\n      // amount equals the number the player chose\n      // guess equals the text the player entered\n    }\n  );\n"})}),"\n",(0,i.jsx)(n.p,{children:"Because of this, selections can use the result of previous selections within a\nsingle action.  Whenever you're making selections within an action, and a\nproperty accepts a function, that function will be called with the selections up\nto that point."}),"\n",(0,i.jsxs)(n.p,{children:["Often one selection will depend on the choices made in previous selections. For\nexample, suppose the player needs to select a type of resource to purchase and\nthe amount they wish to purchase. The ",(0,i.jsx)(n.code,{children:"chooseNumber"})," method accepts ",(0,i.jsx)(n.code,{children:"min"})," and\n",(0,i.jsx)(n.code,{children:"max"})," to set the range of allowed values. We might set the ",(0,i.jsx)(n.code,{children:"max"})," based on the\namount available for the resource they chose."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'  action({\n    prompt: "Purchase resources",\n  }).chooseFrom(\n    "resource", ["Lumber", "Steel", "Wheat"]\n  ).chooseNumber(\n    "amount", {\n      min: 1,\n      // here the "resource" chosen is available to limit the range for the 2nd selection\n      max: ({ resource }) => board.availableResources(resource),\n    }\n  );\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Using Typescript for actions",type:"tip",children:(0,i.jsx)(n.p,{children:"Because the choose functions declare the type of selection, Typescript will\ncorrectly type these arguments later when you use them. This is useful to double\ncheck that you have entered the selections correctly."})}),"\n",(0,i.jsx)(n.h2,{id:"behaviors",children:"Behaviors"}),"\n",(0,i.jsx)(n.p,{children:"After a player has made all the necessary choices and submitted the action, it's\ntime to actually do something!"}),"\n",(0,i.jsx)(n.h3,{id:"moving",children:"Moving"}),"\n",(0,i.jsxs)(n.p,{children:["The most common behavior is to move a Piece or Pieces into a new location. For\nmost moves, we can just call ",(0,i.jsx)(n.a,{href:"../api/classes/Action#move",children:(0,i.jsx)(n.code,{children:"move"})})," after the\nselections, e.g."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'  player => action({\n    prompt: "Play a card",\n  }).chooseOnBoard(\n    "card", player.allMy(Card)\n    // highlight-start\n  ).move(\n    // move the card selected into the "play" Space\n    "card", $.play\n  );\n  // highlight-end\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Notice that in this example we use a string as the ",(0,i.jsx)(n.strong,{children:"first argument"}),', meaning\n"use the piece(s) the player selected in the selection with this name". For the\n',(0,i.jsx)(n.strong,{children:"second argument"})," we specify a predetermined location with a literal\nSpace. Both the piece(s) moved and the location they're moved to can be either\nplayer choices (string names) or predetermined game elements (",(0,i.jsx)(n.code,{children:"GameElement"}),"\nexpressions)."]}),"\n",(0,i.jsx)(n.p,{children:"Boardzilla will make this move when the player has made all their selctions, and\nwill additionally permit a mouse drag if using a desktop browser."}),"\n",(0,i.jsx)(n.admonition,{title:"placing pieces",type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"../api/classes/Action#placepiece",children:(0,i.jsx)(n.code,{children:"placePiece"})})," is a special method that is\n",(0,i.jsx)(n.strong,{children:"both"})," a selection and a behavior. The player selects the exact position to place\nthe element, and Boardzilla moves it to this location as part of the action."]})}),"\n",(0,i.jsx)(n.h3,{id:"messaging",children:"Messaging"}),"\n",(0,i.jsxs)(n.p,{children:["It's usually good to send a message to all players explaining what just\noccurred.  The easiest way to do this is by adding a\n",(0,i.jsx)(n.a,{href:"../api/classes/Action#message",children:(0,i.jsx)(n.code,{children:"message"})})," call onto the action. The ",(0,i.jsx)(n.code,{children:"message"}),"\nfunction takes a string and can interpolate either the player name or any of the\nitems selected by using ",(0,i.jsx)(n.code,{children:"{{handlebars}}"})," syntax. For example in the play card\naction above, we can add a message like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'  player => action({\n    prompt: "Play a card",\n  }).chooseOnBoard(\n    "card", player.allMy(Card)\n  ).move(\n    "card", $.play\n    // highlight-start\n  ).message(\n    "{{player}} played {{card}}"\n  );\n  // highlight-end\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We can also add more ",(0,i.jsx)(n.code,{children:"{{handlebars}}"})," variables using the second argument, e.g.:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'  .message(\n    "{{player}} played {{card}} and now has a score of {{score}}",\n    { score: player.score() }\n  )\n'})}),"\n",(0,i.jsx)(n.admonition,{title:"Using {{handlebars}}",type:"tip",children:(0,i.jsxs)(n.p,{children:["Using Boardzilla's ",(0,i.jsx)(n.code,{children:"{{handlebars}}"})," syntax in messages allows references to\nPlayers or Game Element objects to have special formatting applied. You can\ninterpolate values into the message string directly, but for this reason, using\nthe ",(0,i.jsx)(n.code,{children:"{{handlebars}}"})," syntax is recommended."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Message strings",type:"tip",children:(0,i.jsxs)(n.p,{children:["Boardzilla provides string representations of Players and Game Elements that use\ntheir ",(0,i.jsx)(n.code,{children:'"name"'})," using the standard ",(0,i.jsx)(n.code,{children:"toString()"}),". Feel free to override these and\nprovide your own ",(0,i.jsx)(n.code,{children:"toString()"})," if you want to customize how these things appear\nin messages."]})}),"\n",(0,i.jsx)(n.h3,{id:"other-behavior",children:"Other behavior"}),"\n",(0,i.jsxs)(n.p,{children:["All other behavior can be achieved with the general\n",(0,i.jsx)(n.a,{href:"../api/classes/Action#do",children:(0,i.jsx)(n.code,{children:"do"})})," method. This just lets us add arbitrary code to\nan action. Suppose that in our card play example above, we additionally want to\nperform some logic if the drawn card is special. An additional ",(0,i.jsx)(n.code,{children:"do"})," clause might\nlook like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'  player => action({\n    prompt: "Play a card",\n  }).chooseOnBoard(\n    "card", player.allMy(Card)\n  ).move(\n    "card", $.play\n  ).message(\n    "{{player}} played {{card}}"\n    // highlight-start\n  ).do(\n    ({ card }) => {\n      if (card.isSpecial()) card.performSpecial();\n    }\n  );\n// highlight-end\n'})}),"\n",(0,i.jsxs)(n.p,{children:["We can add anything we need here, mutating and moving items on the board or\nchanging state in any way. Note that just like in all action-related functions,\nthe player's selections are passed to the ",(0,i.jsx)(n.code,{children:"do"})," function in a single object of\nkey-value pairs using the names provided for each ",(0,i.jsx)(n.a,{href:"#selections",children:"Selection"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"Order matters",type:"tip",children:(0,i.jsxs)(n.p,{children:["Order matters! When mixing ",(0,i.jsx)(n.code,{children:"message"})," and ",(0,i.jsx)(n.code,{children:"do"})," or ",(0,i.jsx)(n.code,{children:"move"})," keep in mind that if you\nmutate the board, the ",(0,i.jsx)(n.code,{children:"message"})," call will use the state ",(0,i.jsx)(n.em,{children:"before or after"})," the\nmutation depending on which order you chain the methods."]})}),"\n",(0,i.jsx)(n.h2,{id:"tree-shaking-and-skipping",children:"Tree-shaking and Skipping"}),"\n",(0,i.jsxs)(n.p,{children:["Where possible, Boardzilla analyzes each possible action based on the state of\nthe board to determine which actions can be performed, or when players only have\na single action available to them. For example, if you have a ",(0,i.jsx)(n.code,{children:"playCard"})," action\nthat has a selection of any card in the player's hand, but that player has no\ncards, the ",(0,i.jsx)(n.code,{children:"playCard"})," will be removed from the list of possible actions. Also if\na player has no cards in their hand, and their only choices are to play a card\nor pass, Boardzilla will only present the pass action to the player."]}),"\n",(0,i.jsxs)(n.p,{children:["In the example above with choosing ",(0,i.jsx)(n.code,{children:'"resource"'})," and ",(0,i.jsx)(n.code,{children:'"amount"'}),", consider what\nwould happen if ",(0,i.jsx)(n.code,{children:'board.availableResources("Lumber")'})," returned ",(0,i.jsx)(n.code,{children:"0"}),". In this case,\n",(0,i.jsx)(n.code,{children:"min"})," would be ",(0,i.jsx)(n.code,{children:"1"})," and the ",(0,i.jsx)(n.code,{children:"max"})," would be ",(0,i.jsx)(n.code,{children:"0"}),", resulting in an invalid\nchoice. Boardzilla would therefore eliminate ",(0,i.jsx)(n.code,{children:'"Lumber"'})," from the possible\nresources to choose from. It's possible that only one resource is selectable, in\nthis case the ",(0,i.jsx)(n.code,{children:'"resource"'})," selection can be skipped and the player would be\nprompted only for the ",(0,i.jsx)(n.code,{children:'"amount"'})," when trying to perform this action."]}),"\n",(0,i.jsxs)(n.admonition,{title:"Skipping forced selections",type:"tip",children:[(0,i.jsxs)(n.p,{children:["If there is ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"only one"})})," possible action to move the game forward, the\nplayer's client will automatically make this move."]}),(0,i.jsx)(n.p,{children:'For example, if a player is presented with options to play cards, use items, or\npass, if they have neither cards nor items, then the game will automatically\n"pass".'}),(0,i.jsxs)(n.p,{children:["This behavior can be changed using ",(0,i.jsx)(n.code,{children:"skipIf"})," which is detailed below."]})]}),"\n",(0,i.jsx)(n.p,{children:'The process of eliminating actions based on what is possible is called\n"tree-shaking".  Boardzilla handles this for you automatically. This means you\ncan add several possible actions to the list of available actions, even if some\nof them depend on unusual circumstances. Perhaps an action can only be taken if\nyou have a particular card, or if the game is in a particular phase,\netc. Boardzilla will prune the set of possible actions to present the choices to\nthe player that make sense under the circumstances.'}),"\n",(0,i.jsx)(n.h3,{id:"customizing-the-tree-shaking",children:"Customizing the tree-shaking"}),"\n",(0,i.jsx)(n.p,{children:"There are several ways Boardzilla can tree-shake an action, and ways you can\ncustomize this behavior. The principal way is by looking at the possible\nselections. If you present a list of possible choices dynamically, e.g. the\ncards in the player's hand, then Boardzilla will automatically evaluate that to\nsee if the selection can be removed or skipped."}),"\n",(0,i.jsxs)(n.p,{children:["You can also declare that an entire action is impossible based on other reasons\nby adding a ",(0,i.jsx)(n.code,{children:"condition"}),' to the action. In the example above we set a condition\nfor the "bid" action, which is that the player must have not passed the auction,\nwhich was recorded as ',(0,i.jsx)(n.code,{children:"player.passedThisAuction"}),'. In this case, the "bid" action\nshould be pruned from the player\'s choices, which we do by adding the following:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"  action({\n    prompt: 'Make a bid',\n    // highlight-next-line\n    condition: !player.passedThisAuction\n  })...\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You can also provide custom validation on the individual selections. Each\nselection has a ",(0,i.jsx)(n.code,{children:"validate"})," option that you can use to check all the player\nchoices up until that point to see if the selections are valid, and supply error\ntext if desired. This can be useful for moves where there are several choices\nthat are potentially allowed, but in combination are not allowed. It is also\nuseful for times when you want to provide a specific message to players' about\n",(0,i.jsx)(n.em,{children:"why"})," a selection is invalid, rather than relying on Boardzilla to automatically\nremove invalid options via tree-shaking."]}),"\n",(0,i.jsx)(n.h3,{id:"skipping",children:"Skipping"}),"\n",(0,i.jsxs)(n.p,{children:["Boardzilla has 3 different strategies it follows for choosing what to skip and\napplies them by default to different actions and selections. Generally the\ndefaults create an intuitive set of prompts for players regardless of the\nsituation, but it is easy to modify which strategy is used as it suits the\naction. To modify this strategy, add a ",(0,i.jsx)(n.code,{children:"skipIf"})," parameter to either a ",(0,i.jsx)(n.a,{href:"#selections",children:"selection\nfunction"}),", or to the\n",(0,i.jsx)(n.a,{href:"../api/modules#playeractions",children:(0,i.jsx)(n.code,{children:"playerActions"})})," function."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Strategy"}),(0,i.jsxs)(n.th,{children:[(0,i.jsx)(n.code,{children:"skipIf"})," value"]}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Never Skip"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"never"'})}),(0,i.jsx)(n.td,{children:"Boardzilla will always present this selection to players even if it is their only choice."}),(0,i.jsx)(n.td,{children:"n/a"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Skip if Only One"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.nobr,{children:(0,i.jsx)(n.code,{children:'"only-one"'})})}),(0,i.jsx)(n.td,{children:"Boardzilla will skip this selection if there is only one viable option."}),(0,i.jsxs)(n.td,{children:["Default for all ",(0,i.jsx)(n.a,{href:"#selections",children:"selection functions"})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Always Skip"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"always"'})}),(0,i.jsxs)(n.td,{children:["Rather than present this choice directly, the player will be prompted with choices from the ",(0,i.jsx)(n.em,{children:"next choice"})," in the action for each possible choice here, essentially expanding the choices ahead of time to save the player a step. This option only has relevance if there are subsequent choices in the action."]}),(0,i.jsxs)(n.td,{children:["Default for ",(0,i.jsx)(n.a,{href:"../api/modules#playeractions",children:(0,i.jsx)(n.code,{children:"playerActions"})})]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["For example, if you want the player to play a card from hand but want the player\nto explicitly click the card, ",(0,i.jsx)(n.strong,{children:"even if there is only one card"})," in hand to\nplay, your action might look like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'  player => action({\n    prompt: "Play a card",\n  }).chooseOnBoard(\n    "card", player.allMy(Card),\n    // highlight-next-line\n    { skipIf: "never" }\n  );\n'})}),"\n",(0,i.jsx)(n.h2,{id:"follow-ups",children:"Follow-ups"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes an action will trigger further actions based on new information, such\nas when revealing a card that requires some choices and actions for the\nplayer. In these cases the action can trigger additional actions using\n",(0,i.jsx)(n.a,{href:"../api/classes/Game#followup",children:(0,i.jsx)(n.code,{children:"game.followUp"})}),". This can be called anywhere\nthat is triggered directly by the action, usually in the action ",(0,i.jsx)(n.code,{children:"do"}),". This\ncauses Boardzilla to immediately prompt this action following the completion of\nthe current action."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'  player => action({\n    prompt: "Play a card",\n  }).chooseOnBoard(\n    "card", player.allMy(Card)\n  ).move(\n    "card", $.play\n  ).do(\n    ({ card }) => {\n      // highlight-start\n      if (card.hasSpecialAction) {\n        game.followUp({ name: "specialAction" });\n      }\n      // highlight-end\n    }\n  );\n'})}),"\n",(0,i.jsxs)(n.p,{children:['In this example, certain cards trigger another action named\n"specialAction". This action must be defined elsewhere in the\n',(0,i.jsx)(n.a,{href:"../api/classes/Game#defineactions",children:(0,i.jsx)(n.code,{children:"defineActions"})})," call with this name."]}),"\n",(0,i.jsxs)(n.p,{children:["Often a variety of ways to trigger this follow-up will exist in play with\nvariations. Imagine a card game where drawing certain cards lets you take\nresources of your choice, but different cards let you take different\namounts. Rather than define different actions for each amount, we can pass\narguments to the follow-up action using ",(0,i.jsx)(n.code,{children:"args"}),". The triggering action might look\nlike this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'  player => action({\n    prompt: "Play a card",\n  }).chooseOnBoard(\n    "card", player.allMy(Card)\n  ).move(\n    "card", $.play\n  ).do(\n    ({ card }) => {\n      // highlight-start\n      if (card.takeResources > 0) {\n        game.followUp({\n          name: "takeResources",\n          args: { amount: card.takeResources }\n        });\n      }\n      // highlight-end\n    }\n  );\n'})}),"\n",(0,i.jsxs)(n.p,{children:["In this case the ",(0,i.jsx)(n.code,{children:'"amount"'})," becomes just another argument in the action named\n",(0,i.jsx)(n.code,{children:'"takeResources"'})," except that instead of being a player selection, this one is\npassed in. The ",(0,i.jsx)(n.code,{children:'"takeResources"'})," action then might look something like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'  player => action<{ amount: number }>({\n    prompt: "Take resources",\n  }).chooseFrom(\n    "resource", ["Lumber", "Steel", "Wheat"]\n  ).do(\n    ({ resource, amount }) => player.addResources(resource, amount)\n  );\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note the use of the Typescript generic here ",(0,i.jsx)(n.code,{children:"<{amount: number}>"}),". This is not\nrequired but ensures that Typescript correctly types ",(0,i.jsx)(n.code,{children:"amount"})," later in the ",(0,i.jsx)(n.code,{children:"do"}),"\ncall since it has no other way of knowing what that argument is."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(7294);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);