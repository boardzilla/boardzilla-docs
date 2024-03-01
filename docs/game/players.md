---
sidebar_position: 4
---

# Players

The [`Player`](../api/classes/Player) is a core class that represents a user
playing the game. Each game will have its own player class that contains any
special properties and methods particular to the game, such as `player.score()`
or `player.isDealer`. Boardzilla will manage seating the players to start the
game, and show each player what actions they can perform. The player object will
be passed back to you in your actions when the players perform them.

## Player List

The current list of players is always available as
[`game.players`](../api/classes/Game#players) which returns an Array-like of
players with other special methods added. The array is in the order the players
will normally act, but can be re-ordered with
[`sortBy`](../api/classes/PlayerCollection#sortby).

:::warning player order vs table position

Player order is not always the same as the seating order around the
table. Boardzilla will begin the game with players in order based on seating,
but if the order is changed, then `game.players` will be in turn order, but
looking at [`player.position`](../api/classes/Player#position) or
[`game.players.inPositionOrder()`](../api/classes/PlayerCollection#inpositionorder)
will tell you what the seating order is.

:::

[The API documentation](../api/classes/PlayerCollection) contains a full list of available methods on `PlayerCollection`.

## Current player

Boardzilla has a concept of a current player, that is currently allowed to
act. If not otherwise specified, when presenting possible player actions, they
are presented for the current player, and no other player can act until their
turn.

The current player is available by calling
[`game.players.current()`](../api/classes/PlayerCollection#current). You can set
the current player, with
[`player.setCurrent()`](../api/classes/Player#setcurrent). Typically however,
when letting each player take turns, you will simply use
[`eachPlayer`](flow#eachplayer) which automatically sets the current player.

It is possible for **multiple** players to be considered current, in which case
these players can act simultaneously. You can set multiple players by calling
[`game.players.setCurrent()`](../api/classes/PlayerCollection#setcurrent) with
an array. In these cases, you must use
[`game.players.allCurrent()`](../api/classes/PlayerCollection#allcurrent) to
retrieve the list of current players rather than
[`game.players.current()`](../api/classes/PlayerCollection#current).

[The API documentation](../api/classes/Player) contains a full list of available methods on `Player`.

## Customize player

When you create a Boardzilla game, you are automatically provided with a subclassed [`Player`](../api/classes/Player) class
where you can add properties and methods specific to your game. Typically this is where you keep
per-player state, such as score.

The player object is used throughout Boardzilla. Most importantly, it is
the argument sent to every [Action](actions). For this reason, the Player
subclass for your game is passed as an argument to
[createGame](../api/modules.md#creategame) so that every method and object that
uses player passes _your game's_ Player type, and you can access your custom methods and properties.

## Player Game elements

As described in [Board Structure](board#ownership), players can own game
elements by setting their `player` property to a particular player. This marks
the element as being assigned to this player, e.g. the player mat, the player's
hand, the player's unique tokens. All elements that enter a space assigned to a
player are considered to be "owned" by that player, and are accessible using the
[player.my](../api/classes/Player#my) and
[player.allMy](../api/classes/Player#allmy) methods for finding respectively one
or many owned elements.

## Profile badge

It is generally good practice to place the
[&lt;ProfileBadge/&gt;](../api/modules#profilebadge) component into the UI to
mark the player's area of the game and show information about the player, such
as score. This automatically displays if it's the player's turn, whether they're
online, and links to their profile, if any. It can be further customized with
CSS.
