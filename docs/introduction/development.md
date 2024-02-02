---
sidebar_position: 3
---

# Development

## Running your new game

Now that you've created a game, you can run it by doing the following, substituting `my-game` for the name of your game:

```console
cd my-game
npm run dev
```

:::tip Installing dependencies
If you elected to not install dependencies you'll need to run `npm install` before running `npm run dev`
:::

Once this is running you'll be able to go to [http://localhost:8080](http://localhost:8080) to see your new game and start developing.

# Devtools

Now that your game is loaded, you'll be presented with something like this in your browser:

![Devtools](/img/devtools.png)

From here you'll have access to your game. Any changes you make will be automatically reloaded without needing to refresh this page. Along the top of the devtools you'll have several controls available

<dl>
<dt>Autoswitch players</dt>
<dd>This toggle controls whether to go to the next player after a player has taken their turn.</dd>
<dt>Number of players</dt>
<dd>This controls the number of players available in the lobby.</dd>
<dt>Theme toggle</dt>
<dd>This allow you to see your game in either light or dark mode.</dd>
<dt>Reset seed</dt>
<dd>By default, random numbers will be deterministic in devtools. If you wish to get generate a new random seed, reset the seed with this function.
</dd>
<dt>History</dt>
<dd>This pane will contain a complete history of your game as you're developing. You can view or revert pack to a previous state to ease development.
</dd>
</dl>

# Building

The game is compiled using [esbuild](https://esbuild.github.io/). The configuration for the build is contained in `esbuild.game.mjs` and `esbuild.ui.mjs`. Feel free to change these files as you like, however, its important than any assets your game relies on be included in your build. As well, when it comes time to publish, it's important than any assets in your game have a unique name as once you've published an asset to a specific path, you cannot overwrite that asset. The default build configuration for ui includes a hash in the file name, so by default, everything is taken care of for you.

## Manifest file

Details about your game and how it is built are controlled through the `game.v1.json` file located at the root of your game. Here you define the minimum and maximum number of players along with the watch paths and build commands for your game.
