---
sidebar_position: 10
---

# CSS

Boardzilla can be entirely customized through standard CSS. By default many
styles are included basic positioning and animation that are not intended to
change. However all Boardzilla CSS is applied using a CSS `@layer` so that any
CSS you provide will override these.

## All elements

Here you will find a list of all the elements and classes that can be targetted
for custom CSS. As with any CSS development, it is often best to simply inspect
the HTML and edit it directly to see what effect your custom CSS will have.

```css
html {
│ /**
│  * The html element is where dark-mode is set. 
│  * Use html.dark to target elements in dark mode
│  */
│
└ body {
  │ /**
  │  * The body element is typically targetted only for global CSS changes
  │  * like `font-family`.
  │  */
  │
  ├ #setup {
  │   /**
  │    * The game setup page with seating and settings.
  │    */
  │ }
  │
  └ #game {
    │ /**
    │  * The top-level element for the game itself. This has a variety of classes
    │  * applied to it to target particular browsers and devices, namely:
    │  * - mobile
    │  * - desktop
    │  * - browser-chrome
    │  * - browser-edge
    │  * - browser-safari
    │  * - browser-firefox
    │  */
    │
    ├ #background {
    │   /**
    │    * The background element that contains the wood grain. This can be
    │    * replaced by setting `background-image`
    │    */
    │ }
    │
    ├ #play-area {
    │ │ /**
    │ │  * The Board is rendered here, as opposed to any player controls.
    │ │  * Use this for scoping CSS selectors to the board only
    │ │  */
    │ │
    │ │ .transform-wrapper {
    │ │ │   /**
    │ │ │    * Wrapper div around each game element that Boardzilla uses for
    │ │ │    * animations. Generally, there is no reason to target this directly.
    │ │ │    */
    │ │ │
    │ │ ├ &[data-zoomed] {
    │ │ │   /**
    │ │ │    * If the current element is zoomed. You may target this to have distinct
    │ │ │    * styling when an element is zoomed
    │ │ │    */
    │ │ │ }
    │ │ │
    │ │ └ .Space, .Piece {
            /**
             * Specific Spaces and Pieces of your board are here. They also have a
             * class name matching the Typescript class of the element. See UI
             * for more details.
             */

             &[data-<property>="<value>"] {
               /**
                * Data attributes are added for each property of the element.
                * See UI for examples
                */
             }

             &.selected {
               /**
                * If this element is selected
                */
             }

             &.selectable {
               /**
                * If this element is currently selectable in an available action
                */
             }

             &.droppable {
               /**
                * If this element is a valid drop zone for a dragged element
                */
             }

             &.clickable {
               /**
                * If this element is clickable for any reason
                */
             }
             
             > * {
               /**
                * The JSX you supply in your elements `appearance.render` goes here.
                */
             }
          }
        }

        .profile-badge {
          /**
           * The ProfilerBadge component
           */

          .avatar {
            /**
             * The ProfilerBadge avatar
             */
          }

          .name {
            /**
             * The ProfilerBadge name tag
             */
          }
        }
      }

      .player-controls {
        /**
         * A floating box with player prompts or inputs.
         */

        .prompt {
          /**
           * Prompt text
           */
        }

        &.step-<step name> {
          /**
           * player controls for the step with a given name, specified in the Flow function.
           */
        }
      }
    }
  }
}
```

## Hover

Applying CSS to elements as players hover them can be done with the standard
`:hover` pseudo-class on the Piece/Space element.

It is common in the case of stacked elements to have elements next to the
hovered element slide to reveal themselves to make it easy to leaf thru the
stack. A standard, although somewhat complex CSS selector can be used to select
the elements before and after the hover, e.g.:

```css
  .transform-wrapper:has(+ .transform-wrapper .Card:hover) .Card {
    // the card before the hover
  }

  .transform-wrapper:has(.Card:hover) + .transform-wrapper .Card {
    // the card after the hover
  }
```

This can be further extended with even more esoteric CSS:

```css
  .transform-wrapper:has(+ .transform-wrapper + .transform-wrapper .Card:hover) .Card {
    // two cards before the hover
  }
  .transform-wrapper:has(.Card:hover) + .transform-wrapper + .transform-wrapper .Card {
    // two cards after the hover
  }
```
