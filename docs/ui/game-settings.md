---
sidebar_position: 7
---

# Game Settings

If you have specific settings for your game that can be set on a per-game basis,
these are also added in the [`render`](../api/modules#render) function in
`ui/index.tsx` using a `settings` property.

Here you can add a property of the game that the host can set when setting up
the game. Boardzilla will render the controls to adjust this setting depending
on whether it's a number, a multiple choice, a toggle or a string. Provide a key
for the setting and then the selection that the host made is available by
calling [`game.setting`](../api/classes/Game#setting) in your game rules.

For example, to include an option for the host to turn on/off real-time VP in
your game, you might add:

```ts
  render(setup, {
    ...
    settings: {
      realtimeVp: toggleSetting("Show VP in real-time")
    },
    ...
  });
```

And somewhere in your UI code you will lookup the game's setting to see if this
value is turned on to determine whether to show VP:

```ts
  if (board.game.setting("realtimeVp")) {
    // show VP
  }
```
