---
sidebar_position: 2
---

# Installation

To create a new Boardzilla game, simply run the following:

```console
npx @boardzilla/create-game
```

You'll be guided through a series of prompts to scaffold a new game. One of the choices you'll be prompted with is which game template you'd like to use.
The **[simple template](https://github.com/boardzilla/boardzilla-starter-game)** gives you a very basic game to edit right away. The **[empty template](https://github.com/boardzilla/boardzilla-empty-game)** gives you a completely empty game to use. If this is your first time making a game, the simple template is probably best as it gives you a working example to play with.

## Running your new game

Once you've created your new game, run the following to start your game, where `my-game` is the name of the game you've selected:

```console
cd my-game
npm run dev
```

Congrats! Now you'll be able to go to [http://localhost:8080](http://localhost:8080) to see your new game and start developing.
