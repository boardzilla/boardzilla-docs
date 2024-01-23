---
sidebar_position: 6
---
# Flow

The Flow of your game is how the game runs from beginning to end. This describes
the phases, rounds and turns of the game, and what actions are avaiable to
players at which point in the Flow. You describe the Flow using the API and
Boardzilla keeps track of where your players are in the game, even if the game
sits idle for periods of time.

Your Flow definition will contain at minimum some player actions, and usually
some loops around them with logic to decide when the game is over.

## Typical flow structure

Flow is defined inside the [createGame](../api/modules#creategame) when you call
[`game.defineFlow`](../api/classes/game#defineflow). The arguments to this
function are the steps for your game. There are two basic types of steps:
- a function
- a flow command

Functions alter the game state in some way, and flow commands change the flow of
the game. You can keep adding as many functions and flow commands as needed, in
any order.  Let's look at a simple example from the Boardzilla starter game:

``` ts Sample flow
  game.defineFlow(
    () => $.pool.shuffle(),
    loop(
      eachPlayer({
        name: 'player',
        do: playerActions({
          actions: ['take']
        }),
      })
    )
  );
```

This flow contains exactly two items: a function call that shuffles the pool,
and the main play loop. The first function makes a single change to the board:

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
on the [`pile`](../api/classes/Board#pile) using `board.pile.create()` and moved
from the `pile` when needed. Similarly when elements are
[`removed`](../api/classes/GameElement#remove) they actually are put into the
`pile`.

:::

The next argument in this example calls `loop`. This is a basic flow command
that causes a portion of the flow to be repeated until something interupts
it. In this case, it sets up the basic game loop. Flow commands can set up other
types of loops, have players take turns, create branching logic, and most
importantly, prompt players for the actions they can perform.

In the example above the main loop itself includes other flow commands, namely
`eachPlayer` and `playerActions`. This is an important distinction between the
two types of flow steps, functions and flow commands:

:::tip

***Flow commands can only be added directly by other flow commands.***

:::

For example, imagine you have a flow function that does some things, setting up
the deck, dealing some cards, and then cleaning up after the hand:

``` ts Sample flow
  game.defineFlow(
    () => {
      // shuffle the deck
      // deal cards

      // put the cards back in the deck
    })
  );
```

If you now want to insert a flow command in the middle to add a player action,
you must break the function into two pieces and insert the flow function between
them, e.g.:

``` ts Sample flow with playerAction added
  game.defineFlow(
    () => {
      // shuffle the deck
      // deal cards
    },

    // highlight-next-line
    playerAction({ actions: ['playCard'] }),

    () => {
      // put the cards back in the deck
    })
  );
```

## Flow commands

All flow commands are available on
[`game.flowCommands`](../api/classes/game#flowcommands). It is common to
deconstruct all needed commands before defining flow, e.g.: 

```ts
  const {
    playerActions,
    eachPlayer,
    forEach,
    forLoop,
  } = game.flowCommands;
```

Let's look at the
various flow commands. There are 3 main types of flow commands, looping,
branching and actions.

### Looping flow commands

#### [`loop`](../api/modules#loop)

The most basic loop, this creates a loop that continues indefinitely until
explicitly interupted. This would be like a C/Javascript `while(true)`.

#### [`whileLoop`](../api/modules#whileloop)

Like the basic `loop`, except that it accepts a condition and will only start a
new iteration of the loop if the condition is true. This is exaclty like the
C/Javascript `while(condition)`. In particular, note that this loop might never
execute even the first iteration if the supplied condition is false to begin
with.

#### [`forLoop`](../api/modules#forloop)

This loop sets a value, iterates that value at each loop iteration and continues
looping until that value meets some condition. In other words, a standard `for`
loop from C/Javascript.

#### [`forEach`](../api/modules#foreach)

This loop accepts a collection, and iterates over the members of that
collection. This is like `for ... of` or `Array#forEach` in Javascript.

#### [`eachPlayer`](../api/modules#eachplayer)

This is a loop that iterates over each player. This is the same as `forEach`
with the additional behaviour that it sets the the "current" player on each
iteration of the loop.

#### [`everyPlayer`](../api/modules#everyplayer)

Strictly speaking, this does not create a loop at all. It looks identical to
`eachPlayer` above except that instead of taking each iteration for each player
in turn, it let's all players take they turn simultaneously in parallel. This
"loop" completes when all players have completed the body of the loop, or when
the loop is otherwise interrupted.

### Branching flow commands

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

The sole flow command for prompting player actions. This command accept a list
of allowed [actions](actions) that were defined in `defineActions` and prompts
the current player (or a particular player or players if specified).

Note that like all other selections in Boardzilla, this list of actions has
[tree-shaking and skipping](actions#tree-shaking-and-skipping) behaviour. If one
of the included actions is determined to have possible valid moves, it will not
be included in player prompts. If only one of the supplied actions is determined
to be playable, it will be prompted. If such an action requires no further
prompts it will be auto-played. Just like action selections this behaviour can
be configured for each `playerActions` with a `skipIf` parameter.

For this reason, it is common to include a wide variety of possible actions in
the list of `playerActions` but let each action definition take responsibility
for determining whether it is actually playable at the time based on its
selections and/or `condition` parameter.

:::danger flow commands are created once

Unlike [`Actions`](actions) that are created for each player **at the time** of
being played, flow commands are created **at the beginning** of the game. Be
careful with passing expressions directly to Flow commands that rely on game
state.

For example if you want to loop through some cards laid out in a board Space
called "field", something like the following is probably **not** what you want:

```ts
 forEach({
   name: 'card',
   // highlight-next-line
   collection: deck.all(Card), // only evaluated at the start of the game
   do: playerAction({ actions: ['chooseCard', 'pass'] })
  })
```

Instead use the functional form, so that the expression will be evaluated each
time this loop is entered:

```ts
 forEach({
   name: 'card',
   // highlight-next-line
   collection: () => deck.all(Card),
   do: playerAction({ actions: ['chooseCard', 'pass'] })
  })
```

:::

### Current Flow Position

For many flow commands, it is necessary to know what the current position
is. For example in a simple `for i` loop, we need to access `i` and have logic
that depends on its current value.

Basically all function parameters in flow commands accept a single argument of
type [`FlowArguments`](../api/modules#flowarguments) for this purpose. The
argument is a single object that contains all values "in scope" at this point in
the flow. There are two types of values included here:
* loop variables
* player action selections

#### Loop variables

The loop variables included here are from any loops that the flow is currently
inside of, namely the current iterator value in any [`forLoop`](#forloop)'s, the
current collection member of any [`forEach`](#foreach) loops, the evaluated test
expression in any [`switchCase`](#switchcase)'s.

The values are included as key value pairs where the key is the `name` parameter
supplied for the flow command.

```ts Example of reading loop variables
  forLoop({
    // highlight-next-line
    name: 'x', // x is declared here
    initial: 0,
    next: x => x + 1,
    while: x => x < 3,
    do: forLoop({
      // highlight-next-line
      name: 'y', // y is declared here
      initial: 0,
      next: y => y + 1,
      while: y => y < 2,
      // highlight-start
      do: ({ x, y }) => {
        // x is available here as the value of the outer loop
        // and y will be the value of the inner loop
      }
      // highlight-end
    })
  })
```

#### Player action selections

For player action selections, the arguments to the player action are included as
a single object. Again this only applies if the flow command is inside the `do`
branch belonging to this player action. The name in this case is the name of the
actions. For example, here we have defined an action called "takeResource" and
later we want to know what choices the player made in the flow.

```ts example Player action selections
  game.defineActions({
    ...
    takeResources: player => action<{amount: number}>({
      prompt: 'Take resources'
    }).chooseFrom(
      'resource', ['Lumber', 'Steel', 'Wheat']
    ).do(
      ({ resource, amount }) => player.addResources(resource, amount)
    )
    ...
  });

  game.defineFlow(
    ...
    playerActions({ 
      actions: [
        { 
          name: 'takeResources',
          do: ({ takeResources }) => {
            // highlight-start
            // takeResoures.resource will be the name of the resource, e.g. 'Steel'
            // takeResoures.amount will be the selection number "amount"
            // highlight-end
          }
        }
      ]
    })
  );
```

:::tip Action vs playerActions

We can react to a player's action both in the action
[`do`](actions#other-behaviour) and in the `do` of the playerActions. It can be
confusing which we should use for what.

In general the action `do` is the proper place to react to what a player just did. This
includes mutating the board, recording state, or triggering follow-up actions.

The playerActions `do` should be used only if the player action changes the flow
of the game, e.g. ending a phase or somehow interrupting a loop, or triggering
other rounds of player actions, since flow commands can only be issued inside
other flow commands.

:::

## Loop interuption

It is important in a game to able to interrupt loops. In fact if we use the
basic `loop` flow command, the loop will continue indefinitely **unless** we
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

These functions can be called in any loop function or action. Often it is the
only thing you want to call after a particular action, in which case you can
pass it as the action `do`, e.g.:

```ts
  loop(playerActions({
    actions: [
      'takeOneFromBag',
      {
        name: 'done',
        // break out of the loop when a player selects 'Done'
        // highlight-next-line
        do: Do.break
      }
    ]
  }));
```

:::danger These are not javascript keywords

Remember that the flow interuption functions are merely humble Javascript
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
    name: 'round',
    do: () => {
      // highlight-next-line
      if (game.isRoundFinished()) return Do.break();
      // otherwise do other stuff
      game.doOtherStuff();
    }
  });
```
