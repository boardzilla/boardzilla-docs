---
sidebar_position: 2
---
# Customizing the UI

Boardzilla renders and animates the board on the player's browser according to
the rules of your game. By default everything appears in a very raw but usable
format.

You can customize the appearance and layout behaviour of all your game
elements. In Boardzilla, it is easy to build the UI iteratively. You start with
the default raw look. It is possible to develop the entire game using the
default UI, and only start customizing once all the rules are working. In many
ways, the default UI is easier to use during development since when
troubleshooting issues, you can safely rule out the UI code and see plainly how
the board changes according to your rules.

Like editing the rules, you can edit the UI in the devtools while you're in the
middle of playtesting the game, watch your UI changes update in real-time, and
continue to playtest, rewind and replay to see how your changes look.

Inside the game template, open the `ui/index.tsx` file. This contains a
[`render`](../api/modules#render) function that contains a `layout` block. This
is the block where you will put all the code discussed in this section.

## React

The UI for Boardzilla is rendered in React. But there is very little React that
you need to know to work with the custom UI.  Essentially the only React skill
that is needed is to be able to write
[JSX](https://www.w3schools.com/react/react_jsx.asp).
