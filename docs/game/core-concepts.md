---
sidebar_position: 1
---
# Core concepts

These are some of the basic core concepts of Boardzilla that will be refered to
throughout the documentation.

## Board
The Board is the class that defines the overall layout of the game. It is
composed of **Spaces** and **Pieces**. It itself is a Space but with special
behaviour.

### Space
Spaces are regions of the Board. They are **stable** and never change once the
game starts. They can be nested within each other.

### Piece
Pieces are **movable** objects in the game. They can freely move around to spaces,
and can also be placed inside other Pieces, such as when tokens are placed onto
a card.

Learn more in [Board Structure](./board).

## Player
The player is a core class that represents a user playing the game. Each game
will have a player class. Players can have pieces and spaces assigned to them,
and any piece that enters these becomes "owned" by the player.

Learn more in [Players](./players).

## Action
An Action is a discrete unit of choice for a player. An action has a **name**,
any possible **selections** for the action, and **behaviour**. In chess an
action might be called "move". It has two choices: the piece being moved, and
space it's moved to. It's behaviour would be to move the piece to its
destination and a message to the game log.

Learn more in [Actions](./actions).

## Flow
The Flow of your game is how the game runs from beginning to end. This describes
the phases, rounds and turns of the game, and what actions are avaiable to
players at which point in the Flow.

Learn more in [Flow](./flow).
