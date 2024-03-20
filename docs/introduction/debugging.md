---
sidebar_position: 5
---

# Testing and Debugging

Boardzilla provides many tools for the all-important task of testing your game
code, and troubleshooting issues that might arise. You should be familiar with
these tools as you develop so you can constantly check your work.

## Test runner

Boardzilla includes a test runner class that mocks the playing environment of a
server plus a prescribed number of players all sending actions to the game so
you can set up automated tests that run through example games and test
assertions on the game state.

The test runner exposes both the player versions of the game and the server
version of the game which was complete knowledge of all hidden
information. It's important when testing player moves to use the correct version
for the given player.

```ts
import { TestRunner } from "@boardzilla/core";

const runner = new TestRunner(setup);

const [player1, player2] = runner.start({ players: 2, settings: {} });

// example move
player1.move("takeCard", { card: player1.game.first(Card) });

// example assertion on server game
console.assert(runner.server.game.someProperty === "some-value");

// example assertion on player actions
console.assert(player1.actions().length === 0);
```

You can import the test runner and set up tests using the testing library of
your choice. The starter game includes an [example working test
suite](https://github.com/boardzilla/boardzilla-starter-game/tree/main/test)
using `vitest`.

## Writing Unit Tests
You can create mock components for writing unit tests for things like scoring,
pathing, or other functions you'd like to test outside of a running game.

Imagine you had a function such the one below that could make sure you had 7 cards
in a hand that were all the same number, aka 'a set of 7' and return a score if it 
was a set of 7, or zero if it isn't a set of 7.

```ts
export const scoreSetOf7 = (hand: Card[]) => {
    const sorted = hand.sortedBy('value');
    if (sorted[0].value == sorted[6].value)
        return 6;
    return 0;
}
```

To test this you might want to generate various hands of cards. First you'll need
to import the relevant classes from your game.

```ts
import { MyGame, Space, Card } from '../src/game/index.js';
```

Then you can create a mock game object:

```ts
const game = new MyGame({ classRegistry: [Space, Card] });
```
Then use that mock game object to create mock components with whatever
properties they need for testing:

```ts
const card1 = game.create(Card, 'card1', { value: 2 });
const card2 = game.create(Card, 'card2', { value: 3 });
const card3 = game.create(Card, 'card3', { value: 2 });
const card4 = game.create(Card, 'card4', { value: 2 });
const card5 = game.create(Card, 'card5', { value: 2 });
const card6 = game.create(Card, 'card6', { value: 2 });
const card7 = game.create(Card, 'card7', { value: 2 });
```

And finally you can write your tests:

```ts
// no score, because only 6 of them are the same number
console.assert(scoreSetOf7(game.all(Card)) == 0);
card2.value = 2;
// score, because all are the same number
console.assert(scoreSetOf7(game.all(Card)) == 6);
```


## Browser developer tools

Boardzilla outputs some debug info about the current state of the game and the
current available actions at every step of the game flow into the console. To
see all these messages, set the console output levels to include `Verbose` or
`debug`.

While test playing your game in dev tools, it is often desirable to inspect the
state at a given point. Setting up breakpoints using the browser dev tools or by
inserting `debugger` into your game code is often useful. But even without
breakpoints, you can inspect the state of the game at any given point by opening
the console tab in your browser developer tools and switching the Javascript
context to `ui.html`. While in this context, you have access to the player's
[`game`](../api/classes/Game) object, as well as all custom classes registered
for your game.

<img src="/img/console.png" style="width: 60%"/>

As well, the DOM inspector in the browser developer tools is a useful tool for
quickly inspecting the state of the game. Since the game structure is output in
a DOM tree that matches the [Board structure](../game/board), it can be used to
quickly see if pieces and spaces are where they should be. As well the
properties of all elements are output as `data-` attributes on the DOM elements
so you can further see the state of inidividual game elements. See
[CSS](../ui/css) for full details.

## History controls

The history controls in devtools are useful for checking the state at any point
in the game's move history. You can switch between different points in the game
using the 'View' button on each history action. While viewing a different point
in history, the console object can be used as above to query the game state at
each step of the game. You can also press 'Revert' to return the game to a
previous state and make different actions.

As well, the save states in devtools can be used to record and reload various
points in your game to test a variety of conditions. The save state controls in
devtools can be accessed by pressing 'Shift-S' while focusing the game frame.

## God mode

God mode is another method of testing, allowing any game element to be moved or
modified in any way. It can be enabled by setting
[Game#godMode](../api/classes/Game#godmode) to true. It is a powerful but
dangerous tool as it can easily allow you to put the game into an invalid
state. Use with caution. It can be easier and safer to modify your game rules
temporarily to permit testing a scenario that is outside the game rules, by
e.g. allowing players to make selections they would not normally be permitted to
make.
