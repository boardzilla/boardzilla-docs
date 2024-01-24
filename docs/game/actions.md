---
sidebar_position: 5
---
# Actions
Actions are the building blocks of your game as it relates to its players. A
player will play the game by selecting and taking actions. It's your job to
define the possible actions and when each player can perform each.

## What constitutes an Action?

An Action is a discrete unit of choice for a player. Even if an action has
several different choices, it must be taken altogether or not at all. If a
player makes one of the choices but then changes their mind, they can freely
cancel the action without an undo, and no other player will be aware of their
"partial" action.

:::info Actions are units of choice
A chess move as a Boardzilla Action would have two **selections**:
- Piece to move
- Space to move it to

You can select them each in turn (or both at once by dragging) but you if you
select a pawn and change your mind, you can unselect it and select a
knight. Selecting the piece by itself does not constitute an action until the
destination space is selected.

:::

Each action may contain several selections for the player to make, but they must
all be available to the player with the information they have at the time they
begin the action. If an action requires more choices as information is revealed,
that must be a separate action. (see [follow-ups](#follow-ups)).

:::tip Actions are like functions

Think of actions like function calls. An action for a chess move would be like a
function named `move` that takes two arguments `piece` and `space`. This is a
single action, not two. The player's client would essentially make a call like:

<img style="align:center" src="/img/move.png"/>

For this reason, you will sometimes see the values selected by the players
called "arguments".
:::

## Anatomy of an action

An action consists of several properties.
- a unique **name** by which it will be refered to, e.g. `playCard`
- a series of zero or more **selections** that a player must make to perform the
  action
- **behaviour** of the action such as moving or changing the board or sending a
  message
- any other special **properites** of the action, such as prompts, conditions,
  confirmations and validations

Actions are all created in a single place in `game/index.ts` inside the
[createGame](../api/modules#creategame) when you call
[`game.defineActions`](../api/classes/Game#defineactions). Each action is listed
with it's name, and the selections and behaviours of the action are chained onto
it, e.g.:

```ts title="Chaining action methods"
  game.defineActions({
    bid: player => action({
      prompt: 'Make a bid',
      condition: !player.passedThisAuction
    }).chooseNumber(
      'amount', {
        min: board.lastBid ?? 1
        max: player.money,
      }
    ).do(
      ({ amount }) => board.lastBid = amount
    ).message(
      `{{player}} bid {{amount}}`
    ),
  });
```

There's quite a bit going on with this action. Let's break it down:

- The **name** of the action is `"bid"`, defined as the key of the object.
- Notice that the action function accepts a `player` argument. This is the
  player performing this action, which is why later in the action we can refer
  to the player's `money` and use their name in the message.
- This action has one **selection** which is named `"amount"`. This is a number
  selection created with [`chooseNumber`](../api/classes/Action#choosenumber).
- This action has two **behaviour** function. One is a
  [`do`](../api/classes/Action#do) that records the bid amount as
  `board.lastBid` and one is a [`message`](../api/classes/Action#message) sent
  to the players.
- This action also has two **properties**. We've added a string `prompt`, and
  also a `condition` for performing this action, which is that the player must
  not have been marked as passing this auction.

## Selections

Selections are individual units of choice for the player. There are 5
fundamental types of selections available in Boardzilla, plus a `chooseGroup`
that can combine these:

| Type      | Method                                                 | Description                                                                             | Appearance                                                      |
|:----------|:-------------------------------------------------------|:----------------------------------------------------------------------------------------|:----------------------------------------------------------------|
| number    | [`chooseNumber`](../api/classes/Action#choosenumber)   | Select from a range of numbers, such as when spending an arbitrary amount of resources. | Number picker                                                   |
| text      | [`enterText`](../api/classes/Action#entertext)         | Enter text, such as in word-guessing games.                                             | Input box                                                       |
| choices   | [`chooseFrom`](../api/classes/Action#choosefrom)       | Select from a list of choices.                                                          | List of buttons                                                 |
| board     | [`chooseOnBoard`](../api/classes/Action#chooseonboard) | Select something on the board, a piece or space                                         | Selectable elements on the board can be clicked                 |
| placement | [`placePiece`](../api/classes/Action#placepiece)       | Select the exact position for a piece                                                   | The selected piece becomes movable and snaps to valid positions |
| group     | [`chooseGroup`](../api/classes/Action#choosegroup)     | Combination of any of the selections above                                              | Form combining the above                                        |

Each selection added to an Action must be one of these types, and must have a
name unique to this action. The methods above are called one by one, chained
onto the action in the order the player must select them. You can think of these
methods like [Chained
Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#chained_promises)
that are resolved by the choice the player makes. All the values selected by the
player become available to function calls later in the action, as a single
argument with key-value pairs for the selections. For example:
```ts
  action({
    prompt: "Pick a number and a word"
  }).chooseNumber(
    'amount'
  }).enterText(
    'guess'
  }).do(
    ({ amount, guess }) => {
      // amount equals the number the player chose
      // guess equals the text the player entered
    }
  );
```

Because of this, many of the properties of actions can be expressions *or
functions that return expressions based on the player selections up to that
point*. Whenever you're working with Boardzilla actions, and a property accepts
a function, the function will be called with the player selections up to that
point. In fact, often one selection will depend on the choices made in previous
selections.

Let's use an example. Suppose the player needs to select a type of resource to
purchase and the amount they wish to purchase. The `chooseNumber` method accepts
`min` and `max` to set the range of allowed values. We might set the `max` based
on the amount available for the resource they chose.

```ts
  action({
    prompt: "Purchase resources"
  }).chooseFrom(
    'resource', ['Lumber', 'Steel', 'Wheat']
  ).chooseNumber(
    'amount', {
      min: 1,
      // here the "resource" chosen is available to limit the range for the 2nd selection
      max: ({ resource }) => board.availableResources(resource)
    }
  );
```

:::tip Using Typescript for actions

Because the choose functions declare the type of selection, Typescript will
correctly type these arguments later when you use them. This is useful to double
check that you have entered the selections correctly.

:::

## Behaviours

After a player has made all the necessary choices and submitted the action, it's
time to actually do something! 

### Moving
The most common behaviour is to move a Piece or
Pieces into a new location. For most moves, we can just call
[`move`](../api/classes/Action#move) after the selections, e.g.

```ts
  player => action({
    prompt: 'Play a card'
  }).chooseOnBoard(
    'card', player.allMy(Card),
  // highlight-start
  ).move(
    // move the card selected into the "play" Space
    'card', $.play
  )
  // highlight-end
```

Notice that in this example we use a string as the **first argument**, meaning
"use the piece(s) the player selected in the selection with this name". For the
**second argument** we specify a predetermined location with a literal
Space. Both the piece(s) moved, or the location they're moved to, can either be
player choices (string names), or predetermined game elements (`GameElement`
expressions).

Boardzilla will make this move when the player has made all their selctions, and
will additionally permit a mouse drag if using a desktop browser.

:::tip placing pieces

[`placePiece`](../api/classes/Action#placepiece) is a special method that is
**both** a selection and a behaviour. The player selects the exact position to place
the element, and Boardzilla moves it to this location as part of the action.

:::

### Messaging
It's usually good to send a message to all players explaining what the action
just did. The easiest way to do this is by chaining a
[`message`](../api/classes/Action#message) call onto the end of the action. The
`message` function takes a string and can interpolate either the player name or
any of the items selected by using `{{handlebars}}`. For example in the play
card action above we can add a message like this:

```ts
  player => action({
    prompt: 'Play a card'
  }).chooseOnBoard(
    'card', player.allMy(Card),
  ).move(
    'card', $.play
  // highlight-start
  ).message(
    "{{player}} played {{card}}"
  )
  // highlight-end
```

We can add other expressions in the message string using concatenation or
template literals. We can also add more `{{handlebar}}` variables using the second argument, e.g.:

```ts
  .message(
    "{{player}} played {{card}} and now has a score of {{score}}",
    { score: player.score() }
  )
```

:::tip Using {{handlebars}}

It is good to use Boardzilla's `{{handlebar}}` syntax in messages when
referencing Players or Game objects or anything important in the message, as
Boardzilla will apply special formatting to this part of the message,
appropriate to the item referenced.

:::

:::tip Message strings

Boardzilla provides string representations of Players and Game Elements that use
their `"name"` using the standard `toString()`. You are free to override these
and provide your own `toString()` if you want these thing represented with more
appropriate strings in messages.

:::

### Other behaviour

All other behaviour can be acheived with the general
[`do`](../api/classes/Action#do) method. This just lets us add arbitrary code
to an action. Suppose that in our card play example above, we additionally want
to perform some logic if the drawn card is something special. An additonal `do`
clause might look like:

```ts
  player => action({
    prompt: 'Play a card'
  }).chooseOnBoard(
    'card', player.allMy(Card),
  ).move(
    'card', $.play
  ).message(
    "{{player}} played {{card}}"
  // highlight-start
  ).do(
    ({ card }) => {
      if (card.isSomethingSpecial()) {
        game.somethingSpecialHappened = true;
        game.message("Something special happened!");
      }        
    }
  )
  // highlight-end
```

We can add anything we want here, mutating and moving items on the board or
changing state in any way. Note that just like in all action-related functions,
the player's selections are passed to the `do` function in a single object of
key-value pairs using the names provided for each [Selection](#selections).

:::tip Order matters

Order matters! When mixing `message` and `do` or `move` keep in mind that if you
mutate the board, the `message` call will use the state *before or after* the
mutation depending on which order you chain the methods.

:::


## Tree-shaking and Skipping
Where possible, Boardzilla analyzes each possible action based on the state of
the board to determine what is possible or impossible, or what might be
forced. For example, if you have a `playCard` action that has a selection of any
card in the player's hand, if that player has no cards, then `playCard` will be
removed from the list of possible actions. Also if a player has only *one* card,
then Boardzilla will consider that when looking at what actions are possible.

In the example above with choosing `"resource"` and `"amount"`, consider what
would happen if `board.availableResources("Lumber")` returned `0`. In this case,
`min` would be `1` and the `max` would be `0`, an impossible choice. Boardzilla
would therefore eliminate `"Lumber"` from the possible resource to choose
from. It's possible that only one resource is selectable, in this case the
`"resource"` selection can be skipped and the player would be prompted only for
the `"amount"` when trying to perform this action.

:::tip Skipping forced selections

If there is ***only one*** possible action to move the game forward, the client
will automatically make this move.

For example, if a player is presented with options to play cards, use items, or
pass, if they have neither cards nor items, then the game will automatically
"pass".

This behaviour can be changed using `skipIf`.
:::

This is called "tree-shaking" the actions and it's a powerful aspect of
Boardzilla. This means you can add several possible actions to the list of
available actions, even if some of them depend on unusual circumstances. Perhaps
an action can only be taken if you have a particular card, or if the game is in
a particular phase, etc. Boardzilla will prune the tree of possible actions to
present the choices to the player that make sense under the circumstances.

### Customizing the tree-shaking

There are several ways Boardzilla can tree-shake an action, and ways you can
customize this behaviour. The principal way is by looking at the possible
selections. If you present a list of possible choices dynamically, e.g. the
cards in the player's hand, then Boardzilla will automatically evaluate that to
see if the selection can be removed or skipped.

You can also declare that an entire action is impossible based on other reasons
by adding a `condition` to the action. In the example above we set a condition
for the "bid" action, which is that the player must have not passed the auction,
which was recorded as `player.passedThisAuction`. In this case, the "bid" action
should be pruned from the player's choices, which we do by adding:

```ts
  action({
    prompt: 'Make a bid',
    // highlight-next-line
    condition: !player.passedThisAuction
  })...
```

### Skipping

Boardzilla has 3 different strategies it follows for choosing what to skip and
applies them by default to different actions and selections. Generally the
defaults create an intuitive set of prompts for players regardless of
situations, but it is easy to modify which strategy is used as it suits the
action. To modify the strategy, add a `skipIf` parameter to either a [selection
function](#selections), or to the
[`playerActions`](../api/modules#playeractions) function.

| Strategy         | `skipIf` value | Description                                                                                                                                                                                                                                                                                                     | Default                                            |
|------------------|----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| Never Skip       | `'never'`      | Boardzilla will always present this selection for choosing by the player even if the choice is forced.                                                                                                                                                                                                          | n/a                                                |
| Skip if Only One | `'always'`     | Boardzilla will skip this selection if there is only one viable option.                                                                                                                                                                                                                                         | Default for all [selection functions](#selections) |
| Always Skip      | <nobr>`'only-one'`</nobr>   | Rather than present this choice directly, the player will be prompted with choices from the *next choice* in the action for each possible choice here, essentially expanding the choices ahead of time to save the player a step. This option only has relevance if there are subsequent choices in the action. | Default for [`playerActions`](../api/modules#playeractions)                                                   |

For example, if you want the player to play a card from hand but want the player
to explicitly click the card, **even if there is only one card** in hand to
play, your action might look like:

```ts
  player => action({
    prompt: 'Play a card'
  }).chooseOnBoard(
    'card', player.allMy(Card),
      // highlight-next-line
    { skipIf: 'never' }
  )
```

## Follow-ups

Sometimes an action will trigger other actions based on new information, such as
when revealing a card that requires some choices and actions for the player. In
these cases the action can trigger additional actions using
[`game.followUp`](../api/classes/Game#followup). This can be called anywhere
that is triggered directly by the action, usually in the action `do`. This
causes Boardzilla to immediately prompt this action following the completion of
the current action.

```ts
  player => action({
    prompt: 'Play a card'
  }).chooseOnBoard(
    'card', player.allMy(Card),
  ).move(
    'card', $.play
  ).do(
    ({ card }) => {
      // highlight-start
      if (card.hasSpecialAction) {
        game.followUp({ name: 'specialAction' });
      }
      // highlight-end
    }
  )
```

In this example, certain cards trigger another action named
"specialAction". This action must be defined elsewhere in the `defineActions`
call with this name.

Often a variety of ways to trigger this follow-up will exist in play with
variations. Imagine a card game where drawing certain cards lets you take
resources of your choice, but different cards let you take different
amounts. Rather than define different actions for each amount, we can pass
arguments to the follow-up action. The triggering action might look like this:

```ts
  player => action({
    prompt: 'Play a card'
  }).chooseOnBoard(
    'card', player.allMy(Card),
  ).move(
    'card', $.play
  ).do(
    ({ card }) => {
      // highlight-start
      if (card.takeResources > 0) {
        game.followUp({ name: 'takeResources', amount: card.takeResources });
      }
      // highlight-end
    }
  )
```

In this case the `"amount"` becomes just another argument in the action named
`"takeResources"` except that instead of being a player selection, this one is
passed in. The `"takeResources"` action then might look something like this:

```ts
  player => action<{amount: number}>({
    prompt: 'Take resources'
  }).chooseFrom(
    'resource', ['Lumber', 'Steel', 'Wheat']
  ).do(
    ({ resource, amount }) => player.addResources(resource, amount)
  )
```

Note the use of the Typescript generic here `<{amount: number}>`. This is not
required but ensures that Typescript correctly types `amount` later in the `do`
call since it has no other way of knowing what that argument is.