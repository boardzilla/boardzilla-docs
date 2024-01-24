---
sidebar_position: 3
---
# Layout

Customizing the game UI probably requires declaring several layouts. Each layout
provides a strategy for a given game element about how items should be visually
placed inside it. A layout might declare that for a given area, items should be
laid out in a row, or a stack, or a grid. When many items enter the same space,
it might declare whether they should scale down to fit, should squish together,
or whether only a certain number of them should actually be visible.

All layout declarations go in the `layout` of the main
[`render`](../api/modules#render) function, e.g.:

```ts
  render(setup, {
    ...
    layout: (board) => {
      // layout declarations go here
      ...
    }

  });
```

The Boardzilla layout engine works by applying different layout strategies to
game elements on the board. By default each element has a very simple layout
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

<div style="textAlign: center"><img src="/img/layouts.svg"/></div>

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

:::tip relative percentages

Most of the sizing attributes in the `layout` parameters are percentage
values. These are generally percentages of the container element's layout, so e.g.

```ts
$.deck.layout(Card, {
  area: { left: 25, top: 25, width: 50, height: 50 }
});
```

Would place the `Card`s in the `deck` space into an inner region that is 50% of
the deck's width and height.
:::

Note that the layout code is evaluated every time the board changes, so if
e.g. you have a layout for the cards in the deck, the supplied `layout` might
look like:

```ts
$.deck.layout(Card, {
  ...
});
```

This will be applied to each `Card` in the `deck` Space, and as cards enter or
leave the deck, the layout will automatically be re-applied given the new set of
cards in the deck.

:::tip layout bounding box

While working on a particular layout declaration, adding a `showBoundingBox`
attribute causes the layout's area to visibly appear on screen as a dotted
bounding box. This is an easy way to visually see if your layout is correct.

:::

## Customize Controls

The controls (floating boxes with player prompts and inputs) can have their
location customized to be contextual with the action taken. There are two
methods for controlling placement of these, depending on whether you want the
placement to be specific to an Action or specific to a step in the Flow:
- [`board.layoutAction`](../api/classes/Board#layoutaction)
- [`board.layoutStep`](../api/classes/Board#layoutstep)

Both of these apply layout rules to a control by specifying the
[`Action`](../game/actions) or the
[`playerActions.name`](../game/flow#player-actions) respectively and providing
parameters to anchor it to the board in a particular location. This is to allow
your game to place these in a suitable location of the board that corresponds to
the action needed, and does not obscure game elements. See
[`ActionLayout`](../api/modules#actionlayout) for details.

The controls can also be targetted with CSS like all Boardzilla elements. The
controls box always have the HTML class `player-controls` applied, and other
classes are used for specific elements and actions. See [CSS](css) for details.
