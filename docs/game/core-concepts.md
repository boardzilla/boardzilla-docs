---
sidebar_position: 1
---

# Core concepts

These are some of the basic core concepts of Boardzilla that will be referred to
throughout the documentation.

## Game

The Game is the main class that defines the behaviour of the the game and it's
layout. The first order of business when creating a game is to subclass Game so
you can add your own methods. The Game class includes all the **Spaces** and
**Pieces** of the board. Together these are called **Elements**. The Game is
itself a Space but with special behaviour.

### Space

Spaces are regions or zones of the Board. They are **fixed** and never change
once the game starts. A Space can also contain other Spaces and Pieces.

### Piece

Pieces are **movable** objects in the game. They can move from Space to Space
and can also be moved inside other Pieces, such as for instance, when tokens are
placed onto a card.

### Pile

The Pile is a holding area for pieces that are not in use. Pieces can be moved
into and out of the Pile. It is never visible. Think of it as the box sitting
off to the side of the game.

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
being moved, and space it's moved to. Its behavior would be to move the piece
to its destination and a message to the game log.

You can read further about this in [Actions](./actions).

## Flow

The Flow of your game is how the game runs from beginning to end. This describes
the phases, rounds and turns of the game, and what actions are available to
players at which point in the Flow.

You can read further about this in [Flow](./flow).
