---
sidebar_position: 6
---

# Player information

Having the rules enforced and the various player choices presented well is
important to provide clarity to players, but there is a lot of information
needed for a player besides simply the choices available. In this section, we'll
cover the various other ways to provide helpful information for players.

## Messages

In [actions](../game/actions#messaging) we saw how to attach a message to an
action. This is one of the best places to put information since it will convey
exactly to all players what a particular action did. However there are many
other places where messages can be helpful. You can trigger messages at any
other time by calling [`game.message`](../api/classes/Game#message). This works
the same as [`Action#message`](../api/classes/Action#message). It also uses
`{{handlebars}}` syntax to interpolate game element or player objects, or any
variables for that matter. The only difference is that `game.message` does not
automatically provide any arguments to the message, so anything you want to
dynamically include needs to be provided, e.g.:

```ts
  game.message(
    "{{player}} just achieved a score of {{score}}", {
      player: game.players[0],
      score: game.players[0].score()
    }
  );
```

:::tip Using {{handlebars}}

Using Boardzilla's `{{handlebars}}` syntax in messages allows references to
Players or Game Element objects to have special formatting applied. You can
interpolate values into the message string directly, but for this reason, using
the `{{handlebars}}` syntax is recommended.

:::

Messages appear in the chat log of the game for all players. In devtools, they
appear in the history pane alongside diagnostic information about what action
was processed. You must be careful not to leak information to other players
since all messages appear the same way to all players.

:::tip Message strings

Boardzilla provides string representations of Players and Game Elements that use
their `"name"` using the standard `toString()`. Feel free to override these and
provide your own `toString()` if you want to customize how these things appear
in messages.

:::

## Announcements

A step up from messages are announcements. These are used more sparingly and
interrupt the game to make sure the players see something
important. Announcements are triggered with
[`game.announce`](../api/classes/Game#announce). You can put anything you want
into an announcement. Unlike messages, these are formatted blocks of JSX. The
only argument is the name of the announcement and refers to an announcement
specified in your [`render`](../api/modules#render) method.

As an example, an announcement to declare a new phase of the game might call:

```ts
  game.announce('newPhase');
```

and in the [`render`](../api/modules#render) method, this announcement would be
provided and might look like:

```jsx
  announcements: {
    newPhase: board => (
      <div>
        <h1>New phase</h1>
        The game has entered phase {board.phase}!
      </div>
    )
  }
```

Announcements interrupt the game and players must click to dismiss them before
they can take actions. Since you provide the HTML, you can style them however
you like. You can also style announcements generally by targetting the base
styles of either `#announcement` or `.modal-popup`. See [CSS](../ui/css) for
information on styling.

## Finishing the game

Probably the most important announcement is that the game is over! The game can
be ended by calling [`game.finish`](../api/classes/Game#finish) and providing
the winning player(s) as an argument. This creates a special built-in
announcement that simply says you won. You can create your own announcement to
convey whatever information you like about the game conclusion by supplying
another argument with the name of your announcement, just as in
[`game.announce`](../api/classes/Game#announce), e.g.:

```ts
  game.finish(player, 'victory');
```

and in the [`render`](../api/modules#render) method:

```jsx
  announcements: {
    victory: board => (
      <div>
        <h1>Victory</h1>
        {board.game.winner.name} wins the game with a score of {board.game.winner.score()}!
      </div>
    )
  }
```

## Element information

Any [`Space`](../api/classes/Space) or [`Piece`](../api/classes/Piece) in the
game can be given additional information that is not displayed on the board but
is available by clicking on the information icon in the top left. This is done by
adding an `info` property to the [`appearance`](appearance) of a given
element. The supplied function will be provided with the instance of the element
and return JSX, just like `render`. This JSX however, will not appear on the
board, but instead will cause the item to be highlighted after clicking the
information icon in the top left. Players can click the highlighted element to
see this additional info.

## Information Modals

Information modals are informational content that is always available for
players to help them along with the game. These might include score tables, or
more detailed information about the game state that you'd prefer not take up
room on the board at all times.

Information modals are supplied in the [`render`](../api/modules#render) method,
under `infoModals`. These appear in the information sidebar that is available by
clicking the info icon in the top left.

