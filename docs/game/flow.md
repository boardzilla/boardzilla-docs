---
sidebar_position: 6
---

# Flow

The Flow of your game is how the game runs from beginning to end. This describes
the phases, rounds and turns of the game, and what actions are available to
players at various points in the Flow. You describe the Flow using the available
API and Boardzilla keeps track of where your players are in the Flow.

Your Flow definition will contain at minimum some player actions, and usually
some loops around them with logic to decide when the game is over.

## Typical flow structure

Flow is defined in `game/index.ts` inside the
[createGame](../api/modules#creategame) when you call
[`game.defineFlow`](../api/classes/Game#defineflow). The arguments to this
function are the steps for your game. There are two basic types of steps:

- Functions
- Flow commands

Functions alter the game state in some way, and Flow commands change the flow of
the game. You can keep adding as many functions and Flow commands as needed, in
any order. Let's look at a simple example from the Boardzilla starter game:

```ts Sample flow
  game.defineFlow(
    () => $.pool.shuffle(),
    loop(
      eachPlayer({
        name: "player",
        do: playerActions({
          actions: ["take"],
        }),
      })
    )
  );
```

This flow contains exactly two items: a function call that shuffles the pool,
and the main play loop. The first function makes a single change:

```ts
  () => $.pool.shuffle(),
```

Generally the first function of a flow will set up the board, shuffling decks,
dealing out opening hands and the like. Later in the flow you can use functions
as much as you like to make other changes to the board state, including moving
pieces around that are not part of a player action (e.g. dealing out a new hand)
or just changing state on the board or players (e.g. updating the score).

:::warning Flow may not create or destroy game elements

One thing you cannot do in the flow is create new elements. All Spaces and
Pieces in your game must be [created](board#creation) before calling
`defineFlow`. If pieces are only needed later in the game, they can be created
on the [`pile`](../api/classes/Game#pile) using `game.pile.create()` and moved
from the `pile` when needed. Similarly when elements are
[`removed`](../api/classes/Piece#remove) they actually are put into the `pile`.

:::

The next argument in this example calls `loop`. This is a basic Flow command
that causes a portion of the flow to be repeated until something interrupts
it. In this case, it sets up the basic game loop. Flow commands can set up other
types of loops, have players take turns, create branching logic, and most
importantly, prompt players for the actions they can perform.

In the example above the main loop itself includes other Flow commands, namely
`eachPlayer` and `playerActions`. This is an important distinction between the
two types of flow steps, plain functions and Flow commands:

:::warning Flow commands must be separated

Each Flow command is its own "step" in the flow. You cannot include flow
commands inside functions.

:::

For example, imagine you have a flow function that does some things, setting up
the deck, dealing some cards, and then cleaning up after the hand:

```ts Sample flow
  game.defineFlow(
    () => {
      // shuffle the deck
      // deal cards

      // put the cards back in the deck
    })
  );
```

If you now want to insert a Flow command in the middle to add a player action, you cannot just add it to the function, e.g.:

```ts Sample flow
  game.defineFlow(
    () => {
      // shuffle the deck
      // deal cards

      // highlight-next-line
      playerAction({ actions: ['playCard'] }); // ❌ wrong

      // put the cards back in the deck
    })
  );
```


you must break the function into two pieces and insert the flow function between
them, e.g.:

```ts Sample flow with playerAction added
  game.defineFlow(
    () => {
      // shuffle the deck
      // deal cards
    },

    // highlight-next-line
    playerAction({ actions: ['playCard'] }), // ✅ correct

    () => {
      // put the cards back in the deck
    })
  );
```

:::tip flow visualization

Getting the Flow right is critical, but it can be hard to conceptualize and
visualize game flow in a formalized way like this.

As an aid to understanding the flow, you can use the debug mode of the devtools
(the magnifying glass icon in the top left) to open up a visualization of the
flow showing where the game is currently in the flow at any point.

<div style="text-align:center">
  <img style="border: 1px solid black; width: clamp(50%, 500px, 100%)" src="/img/flow-debug.png"/>
</div>

Since the Flow is evaluated only once, what you see is what you get. If the flow
is missing something, it is likely defined in the wrong place.

:::

## Flow commands

All Flow commands are available on
[`game.flowCommands`](../api/classes/Game#flowcommands). It is common to
deconstruct all needed commands before defining flow, e.g.:

```ts
const { playerActions, eachPlayer, forEach, forLoop } = game.flowCommands;
```

Let's look at the various Flow commands. There are 3 main types of flow
commands, looping, branching and actions.

### Looping Flow commands

#### [`loop`](../api/modules#loop)

The most basic loop, this creates a loop that continues indefinitely until
explicitly interrupted. This would be like a C/Javascript `while(true)`.

#### [`whileLoop`](../api/modules#whileloop)

Like the basic `loop`, except that it accepts a condition and will only start a
new iteration of the loop if the condition is true. This is exaclty like the
C/Javascript `while(condition)`. In particular, note that this loop might not
execute even one iteration if the supplied condition is false to begin with.

#### [`forLoop`](../api/modules#forloop)

This loop sets a value, iterates that value at each loop iteration and continues
looping until that value meets some condition. In other words, a standard `for`
loop from C/Javascript.

#### [`forEach`](../api/modules#foreach)

This loop accepts a collection, and iterates over the members of that
collection. This is like `for ... of` or `Array#forEach` in Javascript.

#### [`eachPlayer`](../api/modules#eachplayer)

This is a loop that iterates over each player. This is the same as `forEach`
with one addition. On each iteration as the player changes, it also
automatically sets the ["current" player](players#current-player).

#### [`everyPlayer`](../api/modules#everyplayer)

Strictly speaking, this isn't a loop. However, it looks identical to
`eachPlayer` except that instead of operating on each player in turn, it let's
all players take their turn in parallel. This "loop" completes when all players
have completed the body of this command, or is otherwise interrupted.

### Branching Flow commands

#### [`ifElse`](../api/modules#ifelse)

Simply checks a condition and either takes one branch named `do` or an optional
`else` branch, just as an standard `if...else`

#### [`switchCase`](../api/modules#switchcase)

Like `ifElse` except the test expression can be compared with several possible
values and execute different branches depending on the outcome. It may also
execute a `default` branch if no other matches apply. This is similar to the
`switch...case` in C/Javascript but without [fall
through](https://en.wikipedia.org/wiki/Switch_statement#Fallthrough) behaviour.

### Player Actions

#### [`playerActions`](../api/modules#playeractions)

This is the sole Flow command for prompting player actions. This command accept
a list of allowed [actions](actions) that were defined in `defineActions` and
prompts the current player (or a particular player or players if specified).

Actions can be supplied as strings, corresponging to the names given in
`defineActions` e.g.:

```ts
actions: ["take", "pass"]
```

or as objects if additional properties are needed, e.g.:
```ts
actions: [
  {
    name: "take",
    do: Do.repeat,
  },
  'pass'
]
```

The properties available are:

- `name`: the name of the action
- `do`: a continuation for the flow if this action is taken. This can contain
   any number of nested Flow functions.
- `args`: args to pass to the action. If provided this pre-selects arguments to
   the action that the player does not select themselves, in the same way as
   [Follow up's](actions#follow-ups).
- `prompt`: a string prompt. If provided this overrides the prompt defined in
   the action. This can be useful if the same action should prompt differently
   at different points in the game

Note that like all other selections in Boardzilla, this list of actions has
[tree-shaking and skipping](actions#tree-shaking-and-skipping) behavior. If one
of the included actions is determined to have no possible valid moves, it will
not be included in player prompts. If only one of the supplied actions is
determined to be playable, it will be prompted with any required selections. If
such an action requires no further selections it will be auto-played. Just like
action selections this behavior can be configured for each `playerActions` with
a `skipIf` parameter.

For this reason, it is common to include a wide variety of possible actions in
the list of `playerActions` but let each action definition take responsibility
for determining whether it is actually playable at the time based on its
selections and/or `condition` parameter.

The Player Actions step in the flow can be further customized with a few optional paramters:

- `prompt`: A prompting message for the player to decide between multiple
actions that involve clicking on the board.
- `description`: A description of this step from a 3rd person perspective, used
to inform other players as to what the current player is doing.
- `player`: Which player can perform this action, if someone other than the current player
- `players`: Same as above, for multiple players that can act.
- `optional`: Make this action optional with a "Pass"
- `condition`: Skip this action completely if condition fails
- `skipIf`: One of 'always', 'never' or 'only-one' (Default
'always'). See [Skipping](../actions#skipping).
- `repeatUntil`: Make this action repeatable until the player passes
- `continueIfImpossible`: Skip this action completely if none of the actions are
  possible.

:::danger Flow commands are created once

Unlike [`Actions`](actions) that are created for each player **at the time** of
being played, Flow commands are created **at the beginning** of the game. Be
careful with passing expressions directly to Flow commands that rely on game
state.

For example if you want to loop through some cards laid out in a Space called
"field", something like the following is probably **not** what you want:

```ts
  forEach({
    name: "card",
    // highlight-next-line
    collection: $.field.all(Card), // ❌ only evaluated at the start of the game
    do: playerAction({ actions: ["chooseCard", "pass"] }),
  });
```

Instead use the functional form, so that the expression will be evaluated each
time this loop is entered:

```ts
  forEach({
    name: "card",
    // highlight-next-line
    collection: () => $.field.all(Card), // ✅
    do: playerAction({ actions: ["chooseCard", "pass"] }),
  });
```

:::

### Current Flow Position

For many Flow commands, it is necessary to know what the current position
is. For example in a simple `for i` loop, we need to access `i` and have logic
that depends on its current value.

All function parameters in Flow commands accept a single argument of
type [`FlowArguments`](../api/modules#flowarguments) for this purpose. The
argument is a single object that contains all the values "in scope" at this point in
the flow. There are two types of values included here:

- loop variables
- player action selections

#### Loop variables

The loop variables included here are from any loops that the flow is currently
inside of, namely the current iterator value in any [`forLoop`](#forloop)'s, the
current collection member of any [`forEach`](#foreach) loops, the evaluated test
expression in any [`switchCase`](#switchcase)'s.

The values are included as key value pairs where the key is the `name` parameter
supplied for the Flow command.

```ts Example of reading loop variables
  forLoop({
    // highlight-next-line
    name: "x", // x is declared here
    initial: 0,
    next: x => x + 1,
    while: x => x < 3,
    do: forLoop({
      // highlight-next-line
      name: "y", // y is declared here
      initial: 0,
      next: y => y + 1,
      while: y => y < 2,
      // highlight-start
      do: ({ x, y }) => {
        // x is available here as the value of the outer loop
        // and y will be the value of the inner loop
      },
      // highlight-end
    }),
  });
```

#### Player action selections

For player action selections, the arguments to the player action are included as
a single object. Again this only applies if the Flow command is inside the `do`
branch belonging to this player action. The name in this case is the name of the
actions. For example, here we have defined an action called "takeResource" and
later we want to know what choices the player made in the flow.

```ts example Player action selections
  game.defineActions({
    ...
    // highlight-next-line
    takeResources: player => action<{ amount: number }>({
      prompt: "Take resources",
    }).chooseFrom(
      "resource", ["Lumber", "Steel", "Wheat"]
    ).do(
      ({ resource, amount }) => player.addResources(resource, amount)
    ),
    ...
  });

  game.defineFlow(
    ...
    playerActions({
      actions: [
        {
          name: "takeResources",
          // The argument is the name of the action
          // highlight-start
          do: ({ takeResources }) => {
            // takeResoures.resource will be the name of the resource, e.g. 'Steel'
            // takeResoures.amount will be the selection number "amount"
          },
          // highlight-end
        },
      ],
    })
  );
```

:::tip Action vs playerActions

We can react to a player's action both in the action
[`do`](actions#other-behavior) and in the `do` of the playerActions. It can be
confusing which we should use for what.

In general the action `do` is the proper place to react to what a player just did. This
includes mutating the board, recording state, or triggering follow-up actions.

The playerActions `do` should be used only for changes to the flow of the game
as a result of the player action, e.g. ending a phase or somehow interrupting a
loop, or triggering other rounds of player actions, since Flow commands can only
be issued inside other Flow commands.

:::

## Loop interruption

It is important in a game to able to interrupt loops. In fact if we use the
basic `loop` Flow command, the loop will continue indefinitely _unless_ we
interrupt it. There are 3 basic [loop interruption
functions](../api/modules#do):

**`Do.break()`**

This causes the flow to exit loop and resume after the loop, like the
`break` keyword in C/Javascript.

**`Do.continue()`**

This causes the flow to skip the rest of the current loop iteration and restart
the loop at the next iteration, like the `continue` keyword in C/Javascript.

**`Do.repeat()`**

Similar to `Do.continue` except this restarts the loop on **the same iteration**
it's currently on.

These functions can be called anywhere that is called from a loop. Often it
is the only thing you want to call after a particular action, in which case you
can pass it as the action `do`, e.g.:

```ts
  loop(
    playerActions({
      actions: [
        "takeOneFromBag",
        {
          name: "done",
          // break out of the loop when a player selects 'Done'
          // highlight-next-line
          do: Do.break,
        },
      ],
    })
  );
```

All 3 flow interruption commands operate on the "current" loop, just as in
C/Javascript. If you wish to operate on another loop higher up, you can pass an
argument to the function with the name of the loop you wish to break out of,
e.g.:

```ts
  ...,
  whileLoop({
    while: () => true,
    name: 'outer-loop',
    do: whileLoop({
      while: () => true,
      name: 'inner-loop',
      // break here
      // highlight-next-line
      do: () => Do.break('outer-loop')
    }),
    () => { /* will never reach here */ }
  }),
  () => { /* will resume here */ }
```

This operates much the same as a [labelled
statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)
in Javascript.

:::danger These are not javascript keywords

Remember that the flow interruption functions are merely humble Javascript
functions, **not keywords**, despite being named similarly. They do not break control
flow all by themselves.

```ts
  loop({
    name: 'round',
    do: () => {
      if (game.isRoundFinished()) Do.break();
      // otherwise do other stuff
      // highlight-next-line
      game.doOtherStuff(); <-- will execute even if Do.break is called
    }
  });
```

Use e.g. `return` or `else` to control what executes, e.g.:

```ts
  loop({
    name: "round",
    do: () => {
      // highlight-next-line
      if (game.isRoundFinished()) return Do.break();
      // otherwise do other stuff
      game.doOtherStuff();
    },
  });
```
