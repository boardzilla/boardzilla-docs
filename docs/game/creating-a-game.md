---
sidebar_position: 2
---

# Creating a game

After [creating](../introduction/creating-a-game) a new Boardzilla game, writing a game in
Boardzilla usually follows these steps:

- Create the [Spaces](core-concepts#space) for your board
- Create the [Pieces](core-concepts#piece) for your game and add them onto the board
- Define some [Actions](core-concepts#action) that the player(s) can take
- Add these actions into the [Flow](core-concepts#flow)
- Test the action in the browser
- Add more actions and then test those
- Customize the flow to add rounds, phases, turns etc.
- Finally, customize the [UI](/category/customizing-the-ui) by adding game art, custom HTML/CSS and animations

:::tip[UI Last]
It is generally best to customize the UI last. Boardzilla's default UI may not be pretty but it's the easiest way to see exactly what's going on, or why a rule is not behaving as you expect.
:::

From the moment you create your new Boardzilla game, it is runnable in the browser and
as you progress through the steps above, the browser will immediately update with your changes.
You can begin "playing" your game as soon as actions are added. You
can also run the game backwards and forward to test it. As you progress, the game
updates in real-time, even reflecting how the in-progress game history would change
based on the new rules you've entered.

In this way, a game can be created iteratively, testing each rule and revising
before adding more.

See an example of creating a game using these steps in this video tutorial.

<iframe width="560" height="315" src="https://www.youtube.com/embed/vY9y1Qs8jKk?si=rDaUVsAvj5iFKzSL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
