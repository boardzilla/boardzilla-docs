"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[872],{2315:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(5893),s=a(1151);const i={sidebar_position:5},r="Appearance",o={id:"ui/appearance",title:"Appearance",description:"Defining the layout for your game elements is only one part of the",source:"@site/docs/ui/appearance.md",sourceDirName:"ui",slug:"/ui/appearance",permalink:"/ui/appearance",draft:!1,unlisted:!1,editUrl:"https://github.com/boardzilla/boardzilla-docs/tree/main/docs/ui/appearance.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Layout sandbox",permalink:"/ui/layout-sandbox"},next:{title:"Player information",permalink:"/ui/information"}},l={},d=[{value:"Aspect ratio",id:"aspect-ratio",level:2},{value:"Render",id:"render",level:2},{value:"CSS",id:"css",level:2},{value:"Child elements",id:"child-elements",level:3},{value:"Artwork",id:"artwork",level:2},{value:"SVG",id:"svg",level:2},{value:"Fonts",id:"fonts",level:2},{value:"Animations",id:"animations",level:2},{value:"Responsive and mobile",id:"responsive-and-mobile",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"appearance",children:"Appearance"}),"\n",(0,t.jsxs)(n.p,{children:["Defining the ",(0,t.jsx)(n.a,{href:"layout",children:"layout"})," for your game elements is only one part of the\nUI. The other major piece is the appearance of each item. This is where you tell\nBoardzilla exactly what each item should look like. This is done by calling\n",(0,t.jsx)(n.a,{href:"../api/classes/GameElement#appearance",children:(0,t.jsx)(n.code,{children:"appearance"})})," on the elements you want\nto set. Like layout, this is re-evaluated as the board changes, so if you want\ne.g. ",(0,t.jsx)(n.code,{children:"Card"}),"'s to appear differently when they're in the deck vs the field, you\nmight call:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"  $.deck.all(Card).appearance({\n    ...\n  });\n\n  $.field.all(Card).appearance({\n    ...\n  });\n"})}),"\n",(0,t.jsx)(n.p,{children:"In this case, the correct appearance will be set as the Card changes\nlocations. If multiple appearance calls are made that apply to the same element,\nthey are combined with later declarations only overwriting previous values if\nprovided. You might, e.g. call"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"  Card.appearance({ aspectRatio: 3 / 4 });\n"})}),"\n",(0,t.jsxs)(n.p,{children:["to set the aspect ratio of all ",(0,t.jsx)(n.code,{children:"Card"}),"'s, but then call"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"  $.deck.all(Card).appearance({ render: ... })\n"})}),"\n",(0,t.jsx)(n.p,{children:"to set the appearance of cards more specifically in different game regions."}),"\n",(0,t.jsx)(n.h2,{id:"aspect-ratio",children:"Aspect ratio"}),"\n",(0,t.jsxs)(n.p,{children:["The first item you might set is the aspect ratio. This works in concert with the\n",(0,t.jsx)(n.a,{href:"#layout",children:(0,t.jsx)(n.code,{children:"layout"})})," to determine how items should fill up their space. E.g. If\nyou give every ",(0,t.jsx)(n.code,{children:"Card"})," an ",(0,t.jsx)(n.code,{children:"aspectRatio"})," of ",(0,t.jsx)(n.code,{children:"3 / 4"}),", it will appear in the correct\nproportions as it moves around the board, even though the different layouts that\nhold ",(0,t.jsx)(n.code,{children:"Card"}),"s might scale them up or down. Typically ",(0,t.jsx)(n.code,{children:"Piece"}),"'s have aspect\nratios, while ",(0,t.jsx)(n.code,{children:"Space"}),"'s do not, since they are simply given a ",(0,t.jsx)(n.code,{children:"layout.area"})," to\nfill up."]}),"\n",(0,t.jsxs)(n.p,{children:["When you adjust the aspect ratio slider in the ",(0,t.jsx)(n.a,{href:"layout-sandbox",children:"layout sandbox"}),",\nit applies it to the pieces so you can see how layout and appearance work\ntogether."]}),"\n",(0,t.jsx)(n.h2,{id:"render",children:"Render"}),"\n",(0,t.jsxs)(n.p,{children:["To set the actual HTML of a game element, add a ",(0,t.jsx)(n.code,{children:"render"})," function to the\n",(0,t.jsx)(n.code,{children:"appearance"})," parameters. This is a function that provides an element of the\ncorrect type as its argument, and expects to have JSX returned to display that\nelement. Here's a simple example of JSX to show a Card that has ",(0,t.jsx)(n.code,{children:"name"}),", ",(0,t.jsx)(n.code,{children:"cost"}),"\nand ",(0,t.jsx)(n.code,{children:"description"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:'  game.all(Card).appearance({\n    aspectRatio: 3 / 4,\n    render: (card) => (\n      <div>\n        <div className="name">{card.name}</div>\n        <div className="cost">{card.cost}</div>\n        <div className="description">{card.description}</div>\n      </div>\n    ),\n  });\n'})}),"\n",(0,t.jsx)(n.p,{children:"You can put as much logic here as you like to conditionally display elements\ndifferently based on the state of the element, or of the game itself."}),"\n",(0,t.jsx)(n.admonition,{title:"render false",type:"tip",children:(0,t.jsxs)(n.p,{children:["Pass false to the ",(0,t.jsx)(n.code,{children:"render"})," attribute to tell Boardzilla not to render these\nelements or their contents at all."]})}),"\n",(0,t.jsxs)(n.p,{children:["Bear in the mind that the elements in a game might be\n",(0,t.jsx)(n.a,{href:"../game/board#visibility",children:"invisible"})," to players (e.g. a flipped Card) in which\ncase the properties of the element will be ",(0,t.jsx)(n.code,{children:"undefined"}),". You can check for\n",(0,t.jsx)(n.code,{children:"undefined"})," properties, or simply call\n",(0,t.jsx)(n.a,{href:"../api/classes/GameElement#isvisible",children:(0,t.jsx)(n.code,{children:"isVisible()"})})," to determine if the back\nof the card should be displayed instead."]}),"\n",(0,t.jsx)(n.h2,{id:"css",children:"CSS"}),"\n",(0,t.jsxs)(n.p,{children:["You can apply custom CSS to your elements in your game's CSS file. By default\nthe Boardzilla starter kit provides a blank CSS file using a Sass\npreprocessor. A full list of elements to target is ",(0,t.jsx)(n.a,{href:"css",children:"given here"}),". But for\nthe purposes of styling a particular game element, it's important to know that\nthe name of the element Class as defined in your game code is also the name of\nthe HTML class for the HTML Element, in other words a class named ",(0,t.jsx)(n.code,{children:"Card"})," will\nappear in the HTML as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'  <div class="Card ... ">\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"class names",type:"tip",children:(0,t.jsxs)(n.p,{children:["Every element has an HTML class name for matching its Javascript class name, as\nwell as the base class ",(0,t.jsx)(n.code,{children:"Space"})," or ",(0,t.jsx)(n.code,{children:"Piece"}),". If you want to add more classes for\ntargetting, you can also specify one in ",(0,t.jsx)(n.code,{children:"appearance.className"}),"."]})}),"\n",(0,t.jsxs)(n.p,{children:["The name of the element will also be represented as the HTML element's ",(0,t.jsx)(n.code,{children:"id"}),". So\nif you create a Space called ",(0,t.jsx)(n.code,{children:'"deck"'}),", you can target it with:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"  .Space#deck {\n"})}),"\n",(0,t.jsxs)(n.p,{children:["In addition the properties you give to your card class, as well as built-in\nproperties like ",(0,t.jsx)(n.code,{children:"name"})," and ",(0,t.jsx)(n.code,{children:"player"})," are added to the HTML element as ",(0,t.jsx)(n.code,{children:"data-"}),"\nattributes, e.g.:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'  <div\n    class="Card ... "\n    data-name="ace-of-hearts"\n    data-suit="H"\n    data-number="1"\n  >\n'})}),"\n",(0,t.jsxs)(n.admonition,{title:"player attribute",type:"tip",children:[(0,t.jsxs)(n.p,{children:["If an element is ",(0,t.jsx)(n.a,{href:"../game/board#ownership",children:"assigned"})," to a player, this also causes a\n",(0,t.jsx)(n.code,{children:"data-player"})," attribute to be added. The value is the ",(0,t.jsx)(n.strong,{children:"seat position"})," of the\nplayer, e.g."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'  <div class="Hand ... " data-player="1">\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["These are here so you can target elements with different CSS as they change. If\nyou want to target the aces in a standard player deck represented with a ",(0,t.jsx)(n.code,{children:"Card"}),"\nclass that has a ",(0,t.jsx)(n.code,{children:"number"})," property, you can target:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:'  .Card[data-number="1"] {\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"render"})," JSX you supply will be rendered inside the ",(0,t.jsx)(n.code,{children:"<div>"}),". In this way,\nyou can combine the ",(0,t.jsx)(n.code,{children:"appearance"})," JSX and the custom CSS to create anything you\nwish."]}),"\n",(0,t.jsxs)(n.admonition,{title:"HTML attributes are strings",type:"warning",children:[(0,t.jsx)(n.p,{children:"Remember that all HTML attributes are strings! Numbers and booleans are converted to strings."}),(0,t.jsxs)(n.p,{children:["If you have e.g. ",(0,t.jsx)(n.code,{children:"Card.active"})," as a boolean property, it will appear as:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'  <div class="Card..." data-active="true">\n'})}),(0,t.jsx)(n.p,{children:"and can be targetted in CSS as:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:'  .Card[data-active="true"] {\n'})})]}),"\n",(0,t.jsxs)(n.admonition,{title:"use em or %",type:"tip",children:[(0,t.jsxs)(n.p,{children:["Since elements in Boardzilla can change size, it's important to never use\nabsolute CSS units like ",(0,t.jsx)(n.code,{children:"px"}),"."]}),(0,t.jsxs)(n.p,{children:["Always use ",(0,t.jsx)(n.code,{children:"em"})," units when you want your CSS to be relative to the element it\nbelongs to. CSS attributes that accept a ",(0,t.jsx)(n.code,{children:"%"})," relative to parent size are also\nappropriate. Use ",(0,t.jsx)(n.code,{children:"rem"}),"s in cases where you want the size to be relative to\nthe entire game view."]})]}),"\n",(0,t.jsx)(n.h3,{id:"child-elements",children:"Child elements"}),"\n",(0,t.jsxs)(n.p,{children:["The data tree of the Game is also mapped to the DOM tree in HTML. For example,\nif you define a ",(0,t.jsx)(n.code,{children:"Space"})," named ",(0,t.jsx)(n.code,{children:'"deck"'}),", with ",(0,t.jsx)(n.code,{children:"Card"}),"s in them, then the ",(0,t.jsx)(n.code,{children:"Card"}),"\nelements will be HTML DOM children of the ",(0,t.jsx)(n.code,{children:'"deck"'})," element. If you want to\ntarget CSS for specifically the ",(0,t.jsx)(n.code,{children:"Card"}),"s in the ",(0,t.jsx)(n.code,{children:'"deck"'})," you can simply use:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:"  Space#deck .Card {\n"})}),"\n",(0,t.jsx)(n.h2,{id:"artwork",children:"Artwork"}),"\n",(0,t.jsx)(n.p,{children:"When it's time to add artwork to your game, this is as simple as adding the\nasset into your game directory, importing it, and placing it into the relevant\nHTML element, e.g.:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",children:"  // highlight-next-line\n  import cardArt from './assets/card-art.webp';\n\n  ...\n\n  game.all(Card).appearance({\n    aspectRatio: 3 / 4,\n    render: card => (\n      <div>\n        // highlight-next-line\n        <img src={cardArt} />\n        <div className=\"name\">{card.name}</div>\n      </div>\n    )\n  });\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Of course if you have multiple cards with different art, you may find this\neasier to do in the CSS. You can use the ",(0,t.jsx)(n.code,{children:"data-"})," attributes to target specific\ncards, e.g.:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:'  .Card {\n    &[data-name="ace-of-hearts"] {\n      background-image: url(../assets/ace-of-hearts.webp);\n    }\n\n    &[data-name="ace-of-spades"] {\n      background-image: url(../assets/ace-of-spades.webp);\n    }\n\n    ...\n  }\n};\n\n'})}),"\n",(0,t.jsx)(n.admonition,{title:"no external assets",type:"warning",children:(0,t.jsxs)(n.p,{children:["All assets for your game must be included in your game folder and be included\neither in the ",(0,t.jsx)(n.code,{children:"ui/index.ts"})," or the ",(0,t.jsx)(n.code,{children:"ui/style.scss"}),". You may not load any assets\nfrom external URLs in your game as any such requests will fail."]})}),"\n",(0,t.jsxs)(n.p,{children:["The default build configuration included when you created your game handles\nfiles of types .jpg, .png, .svg, .webp and .ttf. More can be added in the ",(0,t.jsx)(n.a,{href:"../introduction/development#building",children:"esbuild\nconfig"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"svg",children:"SVG"}),"\n",(0,t.jsxs)(n.p,{children:["SVGs can be a good choice for art in Boardzilla since the elements in Boardzilla\ncan scale depending on their location. Boardzilla will happily render SVG as\nwell as HTML, either by importing an SVG asset and placing it into an ",(0,t.jsx)(n.code,{children:"<img src>"})," or by including ",(0,t.jsx)(n.code,{children:"<svg>"})," elements inside the JSX within ",(0,t.jsx)(n.code,{children:"render"}),". In\npractice, including ",(0,t.jsx)(n.code,{children:"<svg>"})," can be tricky for a couple of reasons."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["SVGs in JSX require editing to make the ",(0,t.jsx)(n.a,{href:"https://react.dev/learn/writing-markup-with-jsx#converting-html-to-jsx",children:"attribute names\nJSX-friendly"}),". This\ntends to affect SVGs more than HTML."]}),"\n",(0,t.jsxs)(n.li,{children:["Dynamic content can be included in the SVG, e.g. ",(0,t.jsx)(n.code,{children:"<tspan>{card.cost}</tspan>"}),"\nas with HTML, however this can make it quite difficult to maintain a workflow\nfrom your SVG editor into Boardzilla."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For this reason, it is often easier to place static SVG's into ",(0,t.jsx)(n.code,{children:"<img>"})," tags and\nposition dynamic content over top of them in HTML. Alternatively for dynamic\ncontent, it may be easier to maintain separate source SVG's for every variation."]}),"\n",(0,t.jsx)(n.h2,{id:"fonts",children:"Fonts"}),"\n",(0,t.jsx)(n.p,{children:"Fonts can be added like any other asset. Since your game must embed all assets\nit needs, you may not call an external URL for a font. If you include a 3rd\nparty font, first download this to a file inside your game directory and\nreference it directly in your CSS, e.g.:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-css",children:'  @font-face {\n    font-family: "Font Name";\n    src: url(./assets/font-file.ttf);\n  }\n\n  body {\n    font-family: "Font Name";\n  }\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you apply your font to the ",(0,t.jsx)(n.code,{children:"body"})," element as above, bear in mind that it will\napply not only to everything on the game board, but all game messages, and the\nsetup page. See ",(0,t.jsx)(n.a,{href:"css",children:"CSS"})," for more information on the different elements that\ncan be targetted."]}),"\n",(0,t.jsx)(n.h2,{id:"animations",children:"Animations"}),"\n",(0,t.jsxs)(n.p,{children:["By default Boardzilla will animate game elements as they change their position\nand size. This is done by applying a CSS ",(0,t.jsx)(n.code,{children:"transition"})," effect to a wrapper\nelement that controls size and position. You can add transition effects that\nreact to changes in your elements simply by adding style and class info in the\n",(0,t.jsx)(n.code,{children:"render"})," and using CSS ",(0,t.jsx)(n.code,{children:"transition"}),"s to change how they animate as these\nproperties change. E.g. the Boardzilla starter game features Tokens that animate\ntheir flip."]}),"\n",(0,t.jsxs)(n.p,{children:["You can also provide CSS effects that listen for changes on your elements and\nonly apply when the elements changes into that state. E.g. if you have a ",(0,t.jsx)(n.code,{children:"Card"}),"\nclass with an ",(0,t.jsx)(n.code,{children:"isTrump"})," property, and you want the ",(0,t.jsx)(n.code,{children:"Card"})," to have a special\neffect applied to it when ",(0,t.jsx)(n.code,{children:"isTrump"})," transitions from ",(0,t.jsx)(n.code,{children:"false"})," to ",(0,t.jsx)(n.code,{children:"true"}),", you can\napply the effect with ",(0,t.jsx)(n.code,{children:"appearance.effect"}),", e.g.:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'  game.all(Card).appearance({\n    effects: [{\n      attributes: { isTrump: true },\n      name: "newly-trump",\n    }],\n  });\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Now, when a game change causes the ",(0,t.jsx)(n.code,{children:"isTrump"})," property to become true on this\n",(0,t.jsx)(n.code,{children:"Card"}),", its DOM element will have an attribute named ",(0,t.jsx)(n.code,{children:"data-bz-effect"})," set on it\nto the provided string ",(0,t.jsx)(n.code,{children:'"newly-trump"'}),". This attribute can be targetted with a\nCSS selector. You can attach a ",(0,t.jsx)(n.a,{href:"https://www.w3schools.com/css/css3_animations.asp",children:"one-time animation in this CSS\nclass"})," to cause the card to\nflash or highlight in some way only when a card change to become trump, e.g.:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'  .Card[data-bz-effect="newly-trump"] {\n    animation: flash .5s;\n  }\n'})}),"\n",(0,t.jsxs)(n.admonition,{title:"Disable default",type:"tip",children:[(0,t.jsxs)(n.p,{children:["When you are writing your custom UI, at some point you will want to get rid of\nthe Boardzilla default styling that appears when you start. As you add ",(0,t.jsx)(n.code,{children:"render"}),"\nproperties to each elements ",(0,t.jsx)(n.code,{children:"appearance"})," you will replace this default UI for\nthose elements. However, you can turn it off entirely for all elements. Any\nelements that have no custom appearance will then be left unrendered. To turn\noff default rendering, simply add in the layout block:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"game.disableDefaultAppearance();\n"})})]}),"\n",(0,t.jsx)(n.h1,{id:"board-size",children:"Board size"}),"\n",(0,t.jsxs)(n.p,{children:["You may notice that by default the playing area starts as a perfect square and\nadjusting the size of the browser window causes the square to change size to be\nas large as it can be and still fit in the viewport. You can customize the\naspect ratio of the playing area to something other than 1:1 (a square). This is\ndone by adding ",(0,t.jsx)(n.code,{children:"boardSizes"})," function to the main\n",(0,t.jsx)(n.a,{href:"../api/modules#render",children:(0,t.jsx)(n.code,{children:"render"})})," function, e.g.:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"  render({\n    boardSizes: [{\n      name: 'standard',\n      aspectRatio: { min: 8 / 5, max: 2 / 1 },\n    }]\n"})}),"\n",(0,t.jsx)(n.p,{children:"The board size will always fill as much of the viewport on the player's device\nas it staying within the specified aspect ratio range."}),"\n",(0,t.jsx)(n.h2,{id:"responsive-and-mobile",children:"Responsive and mobile"}),"\n",(0,t.jsx)(n.p,{children:"You can provide multiple aspect ratios and layouts for different screen sizes\nand device types. All of the layout API above can also be targetted to a\nparticular screen size or device type. You can then supply different board sizes\ndepending on these values, for example having a portrait or landscape version,\nor simply giving a different version for mobile devices. You can also specify\nhow the board fits within the screen if the screen's aspect ratio is outside the\nprovided range, e.g.:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"  render({\n    boardSizes: [{\n      name: 'mobile',\n      mobile: true, // only use on mobile devices\n      // any aspect ratio within this range is allowed, whatever is closest to the device screen\n      aspectRatio: { max: 16 / 9, min: 22 / 10 },\n      orientation: 'landscape', // lock to landscape orientation\n    }, {\n      name: 'desktop',\n      desktop: true, // only use on desktop\n      aspectRatio: 8 / 5, // use this exact aspect ratio\n      // instead of fitting within the screen size and adding space on either side, instead\n      // stretch the board to fill the screen and use scrollbars as needed\n      scaling: 'scroll'\n    }]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The name provided is then passed to the main ",(0,t.jsx)(n.code,{children:"layout"})," function in the\n",(0,t.jsx)(n.a,{href:"../api/modules#render",children:(0,t.jsx)(n.code,{children:"render"})})," function. You can use this to completely\nchange the layout and appearance of any element in the different layouts you\nprovide, e.g.:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'  render({\n    ...\n    layout: (game, player, boardSize) => {\n      if (boardSize === "mobile") {\n\n        // mobile layout here\n\n      } else {\n\n        // desktop layout here\n\n      }\n    }\n  });\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>r});var t=a(7294);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);