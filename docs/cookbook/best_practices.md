# Best Practices

Recipies that will help you achieve success easier.

## Build the Game Before the UI

The default UI will likely be sufficient to develop your game. Spend type implementing the rules to your game before you spend a bunch of time on UI layout.

## Break Pieces Into Modules

Turn your lists of game pieces, such as Cards into modules. This will keep your main game code less cluttered and easier to follow:

```ts
import { Card } from "./index.js";

export const cards: Partial<Card>[] = [
  {
    name: "red1",
    color: "red",
    value: 1,
    quantity: 4,
  },
];
```

## Do Blocks Are Arrays

Whenever you see a `do` parameter, like when you are using the `WhileLoop` in a Game Flow note that you should treat it like an array of functions.

```ts
whileLoop({
      while: () => game.match < 4,
      do: [ ... ]
})
```
