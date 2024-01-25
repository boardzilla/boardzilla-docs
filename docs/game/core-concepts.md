---
sidebar_position: 1
---

# Core concepts

These are some of the basic core concepts of Boardzilla that will be refered to
throughout the documentation.

## Board

The Board is the class that defines the overall layout of the game. It is
composed of **Spaces** and **Pieces**. Together these are called
**Elements**. The board itself is a Space but with special behaviour.

### Space

Spaces are regions of the Board. They are **fixed** and never change once the
game starts. They can contain both other spaces and pieces.

### Piece

Pieces are **movable** objects in the game. They can move to other spaces or can
be moved inside other Pieces, such as for instance, when tokens are placed onto
a card.

You can read further about this in [Board Structure](./board).

## Player

The player is a class that represents a user playing the game. Each game will
have a player class specific to it. Players can have pieces and spaces assigned
to them, and any piece that enters these becomes "owned" by the player.

You can read further about this in [Players](./players).

## Action

An Action is a discrete unit of choice for a player. An action has a **name**,
any possible **selections** for the action, and **behavior**. In Chess, for
example, an action might be called "move". It has two selections: the piece
being moved, and space it's moved to. It's behavior would be to move the piece
to its destination and a message to the game log.

You can read further about this in [Actions](./actions).

## Flow

The Flow of your game is how the game runs from beginning to end. This describes
the phases, rounds and turns of the game, and what actions are available to
players at which point in the Flow.

You can read further about this in [Flow](./flow).
