"use strict";(self.webpackChunkboardzilla_docs=self.webpackChunkboardzilla_docs||[]).push([[3526],{9650:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=t(5893),r=t(1151);const s={sidebar_position:10},o="CSS",i={id:"ui/css",title:"CSS",description:"Boardzilla can be entirely customized through standard CSS. By default many",source:"@site/docs/ui/css.md",sourceDirName:"ui",slug:"/ui/css",permalink:"/ui/css",draft:!1,unlisted:!1,editUrl:"https://github.com/boardzilla/boardzilla-docs/tree/main/docs/ui/css.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Game Settings",permalink:"/ui/game-settings"},next:{title:"Readme",permalink:"/api/"}},l={},d=[{value:"All elements",id:"all-elements",level:2},{value:"Hover",id:"hover",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"css",children:"CSS"}),"\n",(0,a.jsxs)(n.p,{children:["Boardzilla can be entirely customized through standard CSS. By default many\nstyles are included basic positioning and animation that are not intended to\nchange. However all Boardzilla CSS is applied using a CSS ",(0,a.jsx)(n.code,{children:"@layer"})," so that any\nCSS you provide will override these."]}),"\n",(0,a.jsx)(n.h2,{id:"all-elements",children:"All elements"}),"\n",(0,a.jsx)(n.p,{children:"Here you will find a list of all the elements and classes that can be targetted\nfor custom CSS. As with any CSS development, it is often best to simply inspect\nthe HTML and edit it directly to see what effect your custom CSS will have."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:'html {\n  /**\n   * The html element is where dark-mode is set. \n   * Use html.dark to target elements in dark mode\n   */\n\n  body {\n    /**\n     * The body element is typically targetted only for global CSS changes\n     * like `font-family`.\n     */\n\n    #setup {\n      /**\n       * The game setup page with seating and settings.\n       */\n    }\n\n    #game {\n      /**\n       * The top-level element for the game itself. This has a variety of classes\n       * applied to it to target particular browsers and devices, namely:\n       * - mobile\n       * - desktop\n       * - browser-chrome\n       * - browser-edge\n       * - browser-safari\n       * - browser-firefox\n       */\n\n      #background {\n        /**\n         * The background element that contains the wood grain. This can be\n         * replaced by setting `background-image`\n         */\n      }\n\n      #play-area {\n        /**\n         * The Board is rendered here, as opposed to any player controls.\n         * Use this for scoping CSS selectors to the board only\n         */\n\n        .transform-wrapper {\n            /**\n             * Wrapper div around each game element that Boardzilla uses for\n             * animations. Generally, there is no reason to target this directly.\n             */\n\n          &[data-zoomed] {\n            /**\n             * If the current element is zoomed. You may target this to have distinct\n             * styling when an element is zoomed\n             */\n          }\n\n          .Space, .Piece {\n            /**\n             * Specific Spaces and Pieces of your board are here. They also have a\n             * class name matching the Typescript class of the element. See UI\n             * for more details.\n             */\n\n             &[data-<property>="<value>"] {\n               /**\n                * Data attributes are added for each property of the element.\n                * See UI for examples\n                */\n             }\n\n             &.selected {\n               /**\n                * If this element is selected\n                */\n             }\n\n             &.selectable {\n               /**\n                * If this element is currently selectable in an available action\n                */\n             }\n\n             &.droppable {\n               /**\n                * If this element is a valid drop zone for a dragged element\n                */\n             }\n\n             &.clickable {\n               /**\n                * If this element is clickable for any reason\n                */\n             }\n             \n             > * {\n               /**\n                * The JSX you supply in your elements `appearance.render` goes here.\n                */\n             }\n          }\n        }\n\n        .profile-badge {\n          /**\n           * The ProfilerBadge component\n           */\n\n          .avatar {\n            /**\n             * The ProfilerBadge avatar\n             */\n          }\n\n          .name {\n            /**\n             * The ProfilerBadge name tag\n             */\n          }\n        }\n      }\n\n      .player-controls {\n        /**\n         * A floating box with player prompts or inputs.\n         */\n\n        .prompt {\n          /**\n           * Prompt text\n           */\n        }\n\n        &.step-<step name> {\n          /**\n           * player controls for the step with a given name, specified in the Flow function.\n           */\n        }\n      }\n    }\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"hover",children:"Hover"}),"\n",(0,a.jsxs)(n.p,{children:["Applying CSS to elements as players hover them can be done with the standard\n",(0,a.jsx)(n.code,{children:":hover"})," pseudo-class on the Piece/Space element."]}),"\n",(0,a.jsx)(n.p,{children:"It is common in the case of stacked elements to have elements next to the\nhovered element slide to reveal themselves to make it easy to leaf thru the\nstack. A standard, although somewhat complex CSS selector can be used to select\nthe elements before and after the hover, e.g.:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:"  .transform-wrapper:has(+ .transform-wrapper .Card:hover) .Card {\n    // the card before the hover\n  }\n\n  .transform-wrapper:has(.Card:hover) + .transform-wrapper .Card {\n    // the card after the hover\n  }\n"})}),"\n",(0,a.jsx)(n.p,{children:"This can be further extended with even more esoteric CSS:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:"  .transform-wrapper:has(+ .transform-wrapper + .transform-wrapper .Card:hover) .Card {\n    // two cards before the hover\n  }\n  .transform-wrapper:has(.Card:hover) + .transform-wrapper + .transform-wrapper .Card {\n    // two cards after the hover\n  }\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var a=t(7294);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);