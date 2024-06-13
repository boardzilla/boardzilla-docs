---
sidebar_position: 8
---

# Modules

Modules are self-contained components for specialized purposes. These can be
imported directly and bring their own behavior and appearance, which can be
customized. You can even subclass or just copy and edit these modules to create
your own specialized components for your game.

## Flippable

A Piece with two sides: front and back. When the Piece is hidden, the back is
shown. When visible, the front is shown. When the visibility changes, the
included CSS animates a 3d flip. The starter token game uses this for flipping
the tokens to reveal their color, e.g.:

```ts
  import { Flippable } from '@boardzilla/core/components';

  ...
  // in the "ui/index.tsx" layout() method
   Piece.appearance({
      render: piece => (
        <Flippable>
          <Flippable.Front>{piece.name}</Flippable.Front>
          <Flippable.Back></Flippable.Back>
        </Flippable>
      );
    });

  // The resultant DOM structure inside the Piece element in this case would be:
    <div class="bz-flippable">
      <div class="front">{piece.name}</div>
      <div class="back"></div>
    </div>
```

## D6

The [`D6`](../api/classes/D6) is an animated 6-sided die. You can include this
in your game's by importing the class and creating instance of it, just like for
any other `Piece`, e.g.:

```ts
  import { D6 } from '@boardzilla/core/components';
  ...

    // then in the createGame() method
    game.create(D6, 'my-die');
```

The imported D6 is exactly like a normal `Piece` with only the following
additional properties and methods:
- `current`: the currently shown face
- `roll()`: randomly choose a new face

You can use these to incorporate the dice into your game rules. In order to
display the dice with the included styles and animations, add this to your
`ui/index.tsx`:

```ts
  import { useD6 } from '@boardzilla/core/components';
  ...

    // then in the layout() method
    useD6(game);
```

The dice can be further customized through CSS.
