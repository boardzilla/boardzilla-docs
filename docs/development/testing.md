---
sidebar_position: 1
---

# Testing

Your game also comes with the ability to write tests for it. In your game you will find a `test` folder. This contains a basic test written using [Vitest](https://vitest.dev/) and Boardzilla's [TestRunner](../api/test_runner). Let's look at the structure of a test and how to test moves in your game.

```ts
import { expect, test, beforeEach } from "vitest";
import { TestRunner } from "@boardzilla/core";
import { Token, default as setup } from "../src/game/index.js";

let runner: TestRunner;

beforeEach(() => {
  runner = new TestRunner(setup);
});

test("allows you to take turns", () => {
  const [player1, player2] = runner.start({
    players: 2,
    settings: { tokens: 4 },
  });

  expect(player1.actions()).toStrictEqual(["take"]);
  expect(player2.actions()).toStrictEqual([]);

  player1.move("take", {
    token: player1.board.first("pool")!.last(Token)!,
  });

  expect(player1.actions()).toStrictEqual([]);
  expect(player2.actions()).toStrictEqual(["take"]);

  player2.move("take", {
    token: player2.board.first("pool")!.first(Token)!,
  });

  expect(runner.server.game().phase).toBe("finished");
});
```

Here, `TestRunner` lets you create a version of your game where you can process moves and make assertions about the result. The `start` method gives you back handles to the players in your game, which you can
now use to check which moves are available to the players and take moves within the game.
