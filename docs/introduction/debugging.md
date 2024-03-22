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

### Manipulating data in the test runner
It's often useful to be able to manipulate data within the test runner to 
set up specific scenarios. Because you're in the test runner rather than inside
the game's logic, some things are not in the same locations.

```ts
// if you want to manipulate anything about the game from the server's pespective use `runner.server.game`
const top3cards = runner.server.game.first('drawPile')?.firstN(3, Card);

// if you want to manipulate anything from a player perspective, use `player1.player`
const player1hand = player1.player.my('hand')?.all();

// putting the above 2 together
player1.player.my('hand')?.first(Card)!.putInto(runner.server.game.first('discard')!);
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
