---
sidebar_position: 2
---

# Customizing the UI

Boardzilla renders and animates the board on the player's browser according to
the rules of your game. By default everything appears in a raw but usable
format.

You can customize the appearance and layout behavior of all your game
elements. The easiest approach to customizing your UI is to do so
iteratively. You can start with the default look during development and then
start customizing the UI once all the rules are working.  The default UI has
been designed to ease development. For instance, as you troubleshooting issues,
you can safely rule out the UI code and see plainly how the board changes
according to your rules.

Like editing the rules, you can edit the UI in the devtools while you're in the
middle of playtesting the game, and watch your UI changes update in
real-time. You can then continue to playtest, and rewind or replay to see how
your UI looks.

To customize your game's UI, open the `ui/index.tsx` file inside your game. This
contains a [`render`](../api/modules#render) function that has a named `layout`
argument which takes a function. This function where your layout code will go
that is discussed in this section.

## React

The UI for Boardzilla is rendered using React. However, there is very little
knowledge specifically of React necessary in order to customize the
UI. Essentially, the only React knowledge needed is how to write
[JSX](https://www.w3schools.com/react/react_jsx.asp).
