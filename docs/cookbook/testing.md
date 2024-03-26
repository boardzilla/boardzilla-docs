# Testing

Recipies about testing your game logic.

## Creating Tests

Create tests in the `test` folder. Each of your test files should end with `.test.ts`. For example `game.test.ts`.

The contents of the file would look something like this:

```ts
import { expect, test, beforeEach } from "vitest";
import { TestRunner } from "@boardzilla/core";
import {
  MyGame,
  SevenPlayer,
  Card,
  default as setup,
} from "../src/game/index.js";

let runner: TestRunner<MyPlayer, MyGame>;

beforeEach(() => {
  runner = new TestRunner(setup);
});

test("test setup", () => {
  const [p1, p2] = runner.start({
    players: 2,
    settings: {},
  });
  expect(runner.server.game.round).toBe(1);
});
```

Obviously adding more tests to the file as you go on.

## Getting Access To Player Objects

`p1` and `p2` from the example above gives you access to player data, but the `player` object is actually an attribute of each of those objects.

```ts
p1.player.my("hand")?.all().putInto(runner.server.game.first("discard")!);
```

## Getting Access To The Game Object

All of the server accessible objects, including `game` are on `runner.server` like so:

```ts
runner.server.game.first("draw");
```

## Creating Mock Objects

For unit testing it is often useful to create mock objects, such as a hand of cards.

```ts
import { MyGame, Space, Card } from "../src/game/index.js";

const game = new MyGame();
```

Then use that mock game object to create mock components with whatever
properties they need for testing:

```ts
const card1 = game.create(Card, "card1", { value: 2 });
const card1 = game.create(Card, "card2", { value: 7 });
const card1 = game.create(Card, "card3", { value: 4 });
```
