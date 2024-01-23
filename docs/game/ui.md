---
sidebar_position: 7
---
# UI

You can customize the appearance and layout behaviour of all your game
elements. In Boardzilla, it is easy to build the UI iteratively. By default
Boardzilla renders all your game elements in a plain but visible way. It is
possible to develop the entire game using the default UI, and only start
customizing once all the rules are working. In many ways, the default UI is
easier to use during development since when troubleshooting issues, you can
safely rule out the UI code.

Like editing the rules, you can edit the UI in the devtools while you're in the
middle of playtesting the game, watch your UI changes update in real-time, and
continue to playtest, rewind and replay to see how your changes look.

## React

The UI for Boardzilla is rendered in React. But there is very little React that
you need to know to work with the custom UI.  Essentially the only React skill
that is needed is to be able to write
[JSX](https://www.w3schools.com/react/react_jsx.asp).

## Layout

A layout is basically just a strategy for how items are visually placed inside
other items. A layout might say that items should be laid out in a row, or a
stack, or a grid. When many items enter the same space, it might say that they
should scale down to fit, should squish together, or that only a certain number
should actually be visible.

The Boardzilla layout engine works by applying different layout strategies to
each game element on the board. By default each element has a very simple layout
that divides up its space equally to hold as many items as it has and fits them
exactly within the allotted space. This is the layout you see when you start
building your board. Each layout strategy you apply creates a new invisible grid
layer on top in which things can fit. This invisible grid will grow or shrink as
needed to fill as much of the area as it can. Layouts are applied by calling
[`layout`](../api/classes/GameElement#layout) on an element or [group of
elements](../api/classes/ElementCollection#layout). When you apply a new layout
to a space, you declare what element(s), or class of elements, it should apply
to. Any element that enters this space gets put into one of the layouts
depending on whether it applies. If multiple layouts apply, Boardzilla
priortizes ones that apply more specifically (e.g. a specific element overrides
one that applies to a class of elements). If none apply, it falls through to the
default layout at the very bottom.

Each layout in a space operates completely independantly of the others in that
space. E.g. if you have a space that might have both Cards and Tokens in it and
you apply one layout to Cards and another to Tokens, each Card and Token in that
space will be laid out in accordance with its respective layout rules, but Cards
will not affect how Tokens are laid out, and vice versa. They are completely
free to overlap each other (with later layouts appearing over top of earlier
ones).

<div style={{textAlign: 'center'}}><img src="/img/layouts.png"/></div>

In the example pictured here, two layouts are declared for a space, one for
Circle elements and one for Rectangle elements. Each declares a different grid
for their respective elements. When Circles and Rectangles are both added to the
space, they overlap each other without interfering with each others grid. The
last one declared (Rectangles) appears on top.

## Layout parameters

Creating a layout for an area of the board is a series of questions, with
different [parameters](../api/modules#layoutattributes) used to define each one.

* What part of the area should be used to display its contents? (`area` or
  `margin`)
* How large should the grid be to accommodate its contents? (`rows` and
  `columns`)
* How tightly should they be packed? (`gap` or `offsetRow`/`offsetColumn`)
* Should they be in a square grid, or something non-orthogonal like a hexagon? (`gap`
  or `offsetRow`/`offsetColumn`)
* How should they fill up their grid as more are added? (`direction`,
  `alignment` and `limit`)
* How should they expand or squish to fit in the area? (`scaling` and `maxOverlap`)

How all the parameters interact is somewhat technical. The best way to find what
you're looking for is to experiment. A helpful [layout sandbox](layout-sandbox) is provided here
to let you try different parameters and see the results with different
elements. Also browsing the sample games to see how their layouts work is a good
resource. Of course, refer to [the
documentation](../api/modules#layoutattributes) for the technical descriptions.

Note that the layout code is evaluated every time the board changes, so if
e.g. you have a layout for the cards in the deck, the supplied `layout` might
look like:

```
$.deck.layout(Card, {
  ...
});
```

This will be applied to each `Card` in the `deck` Space, and as cards enter or
leave the deck, the layout will automatically be re-applied given the new set of
cards in the deck.

## Appearance

Getting the layout for your game elements is only one part of the UI. The other
major piece is the appearance of each item. This is where you tell Boardzilla
exactly what each item should look like. This is done by calling
[`appearance`](../api/classes/GameElement#appearance) on the elements you want
to set. Like layout, this is re-evaluated as the board changes, so if you want
e.g. `Card`'s to appear differently when they're in the deck vs the field, you
might call:

```
$.deck.all(Card).appearance({
  ...
});

$.field.all(Card).appearance({
  ...
});
```

The different appearances given will be applied to Cards whenever they move
between the deck and the field.

### Aspect ratio

The first item you might set is the aspect ratio. This works in concert with the
[`layout`](#layout) to determine how items should fill up their space. If you
give e.g. every `Card` an `aspectRatio` of `3 / 4`. It will appear in the
correct proportions as it moves around the board, even though the different
layouts that it's in might scale it up or down. Typically `Piece`'s have aspect
ratios, while `Space`'s do not, since they are simply given a `layout.area` to
fill up.

When you adjust the aspect ratio slider in the [layout sandbox](layout-sandbox),
it applies it to the pieces so you can see how layout and appearance work
together.

### Render

To set the actual HTML of a game element, add a `render` function to the
`appearance` parameters. This is a function that provides an element of the
correct type as its argument, and expects to have JSX returned to display that
element. Here's a simplified example of JSX to show a Card that has `name`,
`cost` and `description`:

```jsx
  board.all(Card).appearance({
    aspectRatio: 3 / 4,
    render: card => (
      <div>
        <div className="name">{card.name}</div>
        <div className="cost">{card.cost}</div>
        <div className="description">{card.description}</div>
      </div>
    )
  });
```

You can put as much logic here as you like to conditionally display elements
differently based on the state of the element, or of the game itself.

:::tip render false
Pass false to the `render` attribute to tell Boardzilla not to render these elements at all
:::

Bear in the mind that the elements in a game might be
[invisible](board#visibility) to players (e.g. a flipped Card) in which case the
properties of the element will be `undefined`. You can check for `undefined`
properties, or simply call
[`isVisible()`](../api/classes/GameElement#isvisible) to determine if
the back of the card should be displayed instead.

### Stack multiple appearances

If multiple appearance calls are made that apply to the same element, they are
stacked on top of each other and only overwrite the values if provided. You
might, e.g. call
```ts
Card.appearance({ aspectRatio: 3 / 4 });
```

to set the aspect ratio of all `Card`'s, but then call

```ts
$.deck.all(Card).appearance({ render: ... })
```

to set the appearance of cards more specifically in different board regions.

### CSS

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
If an element is [assigned](board#ownership) to a player, this also causes a
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

In this way, you can combine the `appearance` JSX and the custom CSS to create
anything you wish.

:::warning HTML attributes are strings
Remember that all HTML attributes are strings! Numbers and booleans are converted to strings.

If you have e.g. `Card.active` as a boolean property, it will appear as:

```html
<div class="Card..." data-active="true">
```

and must be targetted in CSS as:

```css
.Card[data-active="true"] {
```
:::

### Artwork

When it's time to add artwork to your game, this is as simple as adding the
asset into your game directory, including it, and placing it into the relevant
HTML element, e.g.:

```jsx
  import cardArt from './assets/card-art.webp;

  ...

  board.all(Card).appearance({
    aspectRatio: 3 / 4,
    render: card => (
      <div>
        <img src={cardArt} />
        <div className="name">{card.name}</div>
      </div>
    )
  });
```

Of course if you have multiple cards with different art, you may find this
easier to do in the CSS. You can use the data attributes to target a specific
card, e.g.:

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

### SVG

Boardzilla will happily render SVG as well as HTML, either by importing an SVG
assets and placing it into an `<img src>` or by including `<svg>` elements
inside the render JSX. In practice, including `<svg>` can be tricky for a couple
of reasons.

1. SVGs in JSX require editing to make the [attribute names
   JSX-friendly](https://react.dev/learn/writing-markup-with-jsx#converting-html-to-jsx). This
   tends to affect SVGs more than HTML.
2. Dynamic content can be included in the SVG, e.g. `<tspan>{card.cost}</tspan>`
   as with HTML, however this can make it quite difficult to maintain a workflow
   from your SVG editor into Boardzilla

For this reason, it is often easier to place static SVG's into `<img>` tags and
position dynamic content over top of them in HTML. Alternatively for dynamic
content, it may be easier to maintain separate source SVG's for every variation.

### Disable default

### Effects

## DOM

The game is displayed in the players browser using HTML and the data tree of the
Board described above is mapped to an actual tree in HTML. If you define a Space
that is a player's hand, with Pieces in them that are cards, then the DOM will
literally have a DOM element for each card as children of the DOM element
representing the hand. The class names of these will match the classes you
provide. So they're easy to target for CSS.

### Components of the DOM

## Animations
