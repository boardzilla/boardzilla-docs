---
sidebar_position: 2
---
# Creating a game

After [installing](../introduction/installation) Boardzilla, creating a game in
Boardzilla usually follows these steps in this general order:

- Create the [Spaces](core-concepts#space) of your board
- Create the [Pieces](core-concepts#piece) of your game and add them onto the board
- Define some [Actions](core-concepts#action) that the player(s) can take
- Add these actions into the [Flow](core-concepts#flow)
- Test the action in the browser
- Add more actions
- Customize the flow to add rounds, phases, turns etc.
- Customize the [UI](/category/customizing-the-ui) by adding game art, custom HTML/CSS and animations

:::tip[UI Last]
It is generally best to customize the UI last. Boardzilla's default UI may not be pretty but it's the easiest way to see exactly what's going on, or why a rule is not behaving as you expect.
:::

From the moment you install Boardzilla, your game is runnable in the browser and
as you progress through the steps above, the browser instantly shows you how
your changes appear. You can "play" your game as soon as actions are added. You
can run the game backwards and forward to test it. As you progress the game
updates in real-time, even reflecting how the game in-progress would change
based on the new rules you enter.

In this way, a game can be created iteratively, testing each rule and revising
before adding more.
