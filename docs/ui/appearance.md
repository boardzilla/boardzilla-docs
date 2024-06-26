---
sidebar_position: 5
---

# Appearance

Defining the [layout](layout) for your game elements is only one part of the
UI. The other major piece is the appearance of each item. This is where you tell
Boardzilla exactly what each item should look like. This is done by calling
[`appearance`](../api/classes/GameElement#appearance) on the elements you want
to set. Like layout, this is re-evaluated as the board changes, so if you want
e.g. `Card`'s to appear differently when they're in the deck vs the field, you
might call:

```ts
  $.deck.all(Card).appearance({
    ...
  });

  $.field.all(Card).appearance({
    ...
  });
```

In this case, the correct appearance will be set as the Card changes
locations. If multiple appearance calls are made that apply to the same element,
they are combined with later declarations only overwriting previous values if
provided. You might, e.g. call

```ts
  Card.appearance({ aspectRatio: 3 / 4 });
```

to set the aspect ratio of all `Card`'s, but then call

```ts
  $.deck.all(Card).appearance({ render: ... })
```

to set the appearance of cards more specifically in different game regions.

## Aspect ratio

The first item you might set is the aspect ratio. This works in concert with the
[`layout`](#layout) to determine how items should fill up their space. E.g. If
you give every `Card` an `aspectRatio` of `3 / 4`, it will appear in the correct
proportions as it moves around the board, even though the different layouts that
hold `Card`s might scale them up or down. Typically `Piece`'s have aspect
ratios, while `Space`'s do not, since they are simply given a `layout.area` to
fill up.

When you adjust the aspect ratio slider in the [layout sandbox](layout-sandbox),
it applies it to the pieces so you can see how layout and appearance work
together.

## Render

To set the actual HTML of a game element, add a `render` function to the
`appearance` parameters. This is a function that provides an element of the
correct type as its argument, and expects to have JSX returned to display that
element. Here's a simple example of JSX to show a Card that has `name`, `cost`
and `description`:

```jsx
  game.all(Card).appearance({
    aspectRatio: 3 / 4,
    render: (card) => (
      <div>
        <div className="name">{card.name}</div>
        <div className="cost">{card.cost}</div>
        <div className="description">{card.description}</div>
      </div>
    ),
  });
```

You can put as much logic here as you like to conditionally display elements
differently based on the state of the element, or of the game itself.

:::tip render false

Pass false to the `render` attribute to tell Boardzilla not to render these
elements or their contents at all.

:::

Bear in the mind that the elements in a game might be
[invisible](../game/board#visibility) to players (e.g. a flipped Card) in which
case the properties of the element will be `undefined`. You can check for
`undefined` properties, or simply call
[`isVisible()`](../api/classes/GameElement#isvisible) to determine if the back
of the card should be displayed instead.

## CSS

You can apply custom CSS to your elements in your game's CSS file. By default
the Boardzilla starter kit provides a blank CSS file using a Sass
preprocessor. A full list of elements to target is [given here](css). But for
the purposes of styling a particular game element, it's important to know that
the name of the element Class as defined in your game code is also the name of
the HTML class for the HTML Element, in other words a class named `Card` will
appear in the HTML as:

```html
  <div class="Card ... ">
```

:::tip class names

Every element has an HTML class name for matching its Javascript class name, as
well as the base class `Space` or `Piece`. If you want to add more classes for
targetting, you can also specify one in `appearance.className`.

:::

The name of the element will also be represented as the HTML element's `id`. So
if you create a Space called `"deck"`, you can target it with:

```css
  .Space#deck {
```

In addition the properties you give to your card class, as well as built-in
properties like `name` and `player` are added to the HTML element as `data-`
attributes, e.g.:

```html
  <div
    class="Card ... "
    data-name="ace-of-hearts"
    data-suit="H"
    data-number="1"
  >
```

:::tip player attribute
If an element is [assigned](../game/board#ownership) to a player, this also causes a
`data-player` attribute to be added. The value is the **seat position** of the
player, e.g.

```html
  <div class="Hand ... " data-player="1">
```

:::

These are here so you can target elements with different CSS as they change. If
you want to target the aces in a standard player deck represented with a `Card`
class that has a `number` property, you can target:

```css
  .Card[data-number="1"] {
```

The `render` JSX you supply will be rendered inside the `<div>`. In this way,
you can combine the `appearance` JSX and the custom CSS to create anything you
wish.

:::warning HTML attributes are strings
Remember that all HTML attributes are strings! Numbers and booleans are converted to strings.

If you have e.g. `Card.active` as a boolean property, it will appear as:

```html
  <div class="Card..." data-active="true">
```

and can be targetted in CSS as:

```css
  .Card[data-active="true"] {
```

:::

:::tip use em or %

Since elements in Boardzilla can change size, it's important to never use
absolute CSS units like `px`.

Always use `em` units when you want your CSS to be relative to the element it
belongs to. CSS attributes that accept a `%` relative to parent size are also
appropriate. Use `rem`s in cases where you want the size to be relative to
the entire game view.

:::

### Child elements

The data tree of the Game is also mapped to the DOM tree in HTML. For example,
if you define a `Space` named `"deck"`, with `Card`s in them, then the `Card`
elements will be HTML DOM children of the `"deck"` element. If you want to
target CSS for specifically the `Card`s in the `"deck"` you can simply use:

```css
  Space#deck .Card {
```

## Artwork

When it's time to add artwork to your game, this is as simple as adding the
asset into your game directory, importing it, and placing it into the relevant
HTML element, e.g.:

```jsx
  // highlight-next-line
  import cardArt from './assets/card-art.webp';

  ...

  game.all(Card).appearance({
    aspectRatio: 3 / 4,
    render: card => (
      <div>
        // highlight-next-line
        <img src={cardArt} />
        <div className="name">{card.name}</div>
      </div>
    )
  });
```

Of course if you have multiple cards with different art, you may find this
easier to do in the CSS. You can use the `data-` attributes to target specific
cards, e.g.:

```css
  .Card {
    &[data-name="ace-of-hearts"] {
      background-image: url(../assets/ace-of-hearts.webp);
    }

    &[data-name="ace-of-spades"] {
      background-image: url(../assets/ace-of-spades.webp);
    }

    ...
  }
};

```

:::warning no external assets

All assets for your game must be included in your game folder and be included
either in the `ui/index.ts` or the `ui/style.scss`. You may not load any assets
from external URLs in your game as any such requests will fail.

:::

The default build configuration included when you created your game handles
files of types .jpg, .png, .svg, .webp and .ttf. More can be added in the [esbuild
config](../introduction/development#building).

## SVG

SVGs can be a good choice for art in Boardzilla since the elements in Boardzilla
can scale depending on their location. Boardzilla will happily render SVG as
well as HTML, either by importing an SVG asset and placing it into an `<img
src>` or by including `<svg>` elements inside the JSX within `render`. In
practice, including `<svg>` can be tricky for a couple of reasons.

1. SVGs in JSX require editing to make the [attribute names
   JSX-friendly](https://react.dev/learn/writing-markup-with-jsx#converting-html-to-jsx). This
   tends to affect SVGs more than HTML.
2. Dynamic content can be included in the SVG, e.g. `<tspan>{card.cost}</tspan>`
   as with HTML, however this can make it quite difficult to maintain a workflow
   from your SVG editor into Boardzilla.

For this reason, it is often easier to place static SVG's into `<img>` tags and
position dynamic content over top of them in HTML. Alternatively for dynamic
content, it may be easier to maintain separate source SVG's for every variation.

## Fonts

Fonts can be added like any other asset. Since your game must embed all assets
it needs, you may not call an external URL for a font. If you include a 3rd
party font, first download this to a file inside your game directory and
reference it directly in your CSS, e.g.:

```css
  @font-face {
    font-family: "Font Name";
    src: url(./assets/font-file.ttf);
  }

  body {
    font-family: "Font Name";
  }
```

If you apply your font to the `body` element as above, bear in mind that it will
apply not only to everything on the game board, but all game messages, and the
setup page. See [CSS](css) for more information on the different elements that
can be targetted.

## Animations

By default Boardzilla will animate game elements as they change their position
and size. This is done by applying a CSS `transition` effect to a wrapper
element that controls size and position. You can add transition effects that
react to changes in your elements simply by adding style and class info in the
`render` and using CSS `transition`s to change how they animate as these
properties change. E.g. the Boardzilla starter game features Tokens that animate
their flip.

You can also provide CSS effects that listen for changes on your elements and
only apply when the elements changes into that state. E.g. if you have a `Card`
class with an `isTrump` property, and you want the `Card` to have a special
effect applied to it when `isTrump` transitions from `false` to `true`, you can
apply the effect with `appearance.effect`, e.g.:

```ts
  game.all(Card).appearance({
    effects: [{
      attributes: { isTrump: true },
      name: "newly-trump",
    }],
  });
```

Now, when a game change causes the `isTrump` property to become true on this
`Card`, its DOM element will have an attribute named `data-bz-effect` set on it
to the provided string `"newly-trump"`. This attribute can be targetted with a
CSS selector. You can attach a [one-time animation in this CSS
class](https://www.w3schools.com/css/css3_animations.asp) to cause the card to
flash or highlight in some way only when a card change to become trump, e.g.:

```
  .Card[data-bz-effect="newly-trump"] {
    animation: flash .5s;
  }
```

:::tip Disable default

When you are writing your custom UI, at some point you will want to get rid of
the Boardzilla default styling that appears when you start. As you add `render`
properties to each elements `appearance` you will replace this default UI for
those elements. However, you can turn it off entirely for all elements. Any
elements that have no custom appearance will then be left unrendered. To turn
off default rendering, simply add in the layout block:

```
game.disableDefaultAppearance();
```

:::

# Board size

You may notice that by default the playing area starts as a perfect square and
adjusting the size of the browser window causes the square to change size to be
as large as it can be and still fit in the viewport. You can customize the
aspect ratio of the playing area to something other than 1:1 (a square). This is
done by adding `boardSizes` function to the main
[`render`](../api/modules#render) function, e.g.:

```ts
  render({
    boardSizes: [{
      name: 'standard',
      aspectRatio: { min: 8 / 5, max: 2 / 1 },
    }]
```

The board size will always fill as much of the viewport on the player's device
as it staying within the specified aspect ratio range.

## Responsive and mobile

You can provide multiple aspect ratios and layouts for different screen sizes
and device types. All of the layout API above can also be targetted to a
particular screen size or device type. You can then supply different board sizes
depending on these values, for example having a portrait or landscape version,
or simply giving a different version for mobile devices. You can also specify
how the board fits within the screen if the screen's aspect ratio is outside the
provided range, e.g.:

```ts
  render({
    boardSizes: [{
      name: 'mobile',
      mobile: true, // only use on mobile devices
      // any aspect ratio within this range is allowed, whatever is closest to the device screen
      aspectRatio: { max: 16 / 9, min: 22 / 10 },
      orientation: 'landscape', // lock to landscape orientation
    }, {
      name: 'desktop',
      desktop: true, // only use on desktop
      aspectRatio: 8 / 5, // use this exact aspect ratio
      // instead of fitting within the screen size and adding space on either side, instead
      // stretch the board to fill the screen and use scrollbars as needed
      scaling: 'scroll'
    }]
```

The name provided is then passed to the main `layout` function in the
[`render`](../api/modules#render) function. You can use this to completely
change the layout and appearance of any element in the different layouts you
provide, e.g.:

```ts
  render({
    ...
    layout: (game, player, boardSize) => {
      if (boardSize === "mobile") {

        // mobile layout here

      } else {

        // desktop layout here

      }
    }
  });
```
