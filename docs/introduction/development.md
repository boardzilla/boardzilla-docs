---
sidebar_position: 2
---

# Development

Once you've launched your new game, there are a few things you should know about the tooling before you begin.

## Refreshing

The tools will automatically build your game and refresh your interface on every file change, so there is no need to refresh the window once you've loaded it up. If you do refresh, you'll lose the state of your current game play.

## Building

The game is built using [esbuild](https://esbuild.github.io/) and the configuration is controlled through the `esbuild.game.mjs` and `esbuild.ui.mjs` files in your game. Feel free to change these files as you like, however, its important than any assets your game relies on be included in your build. As well, when it comes time to publish, it's important than any assets in your game have a unique name as once you've published an asset to a specific path, you cannot overwrite that asset. The default build configuration for ui includes a hash in the file name, so by default, everything is taken care of for you.

## Manifest file

Details about your game and how it is built is controlled through the `game.v1.json` file located at the root of your game. Here you define the minimum and maximum number of players along with the watch paths and build entry points for your game.
