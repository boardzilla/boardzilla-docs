---
sidebar_position: 8
---

# Modules

Modules are self-contained components for specialized purposes. These can be
imported directly and bring their own behavior and appearance, which can be
customized. You can even subclass or just copy and edit these modules to create
your own specialized components for your game.

The only module is current the D6.

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
