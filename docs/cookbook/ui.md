import TOCInline from "@theme/TOCInline";

<TOCInline toc={toc} />

# UI Development
Recipies related to formatting the UI.


# Positioning Spaces
The UI automatically positions all of the `Space`s you define, but once your game is implemented and you start working on the UI you're going to want to position the spaces yourself. Imagine you have a space called `discard`. 

This will position the `discard` space on the game table:

```ts
game.layout('discard', {
    area: { left: 80, top: 0, width: 20, height: 100 },
});
```

Note the `area` defines where the space is positioned using percentages of the game table. 

This will position the `Piece`s within the `discard` space.

```ts
game.all('discard').layout(Card, {
    columns: 10,
    rows: 1,
});
```

The `columns` and rows define how the `Card`s (a type of `Piece`) will be laid out inside the `Space`.


# Area Math
Areas are defined in percentages:

```ts
{ area: { left: 80, top: 0, width: 20, height: 100 } }
```
Therefore this `area` will start 80% of the way across the game table from the `left` side, but will be up against the `top` edge of the game table. The maximum `width` that this space can then be is 20% because we're starting at 80% and we cannot go above 100%.


## Drawers
To turn a normal `Space` into a drawer that opens and closes to save space, you just need to apply a layout to it that looks similar to this:

```ts
game.layout('refdrawer', {
    area: {
        top: 0, left: 30, width: 40, height: 45
    },
    drawer: {
        closeDirection: 'up',
        tab: () => 'Scoring Reference',
    },
});
```

`refdrawer` is the name of the `Space` and the rest of the parameters set up the position and size of the drawer as well as the name printed on the drawer pull.


## Apply Image To Piece
You just need to add a style wrapper around the space type and name of the component to add an image to it:

```css
    .Reference {
        background-size: cover;

        &[data-name="scorecard"] {
            background-image: url("./assets/scorecard.png");
        }
    }
```
`.Reference` is the type of `Space` it is. `background-size` stretches the image to fit the size of the `Piece`. `scorecard` is the name of the `Piece` that you're applying the image to.

