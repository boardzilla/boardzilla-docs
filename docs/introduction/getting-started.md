---
sidebar_position: 2
---

# Getting started

## Before you get started

In order to make a game in Boardzilla you'll need to have:

- [Node 18 or higher](https://nodejs.org/)
- A code editor of your choice

As well, a knowledge of the following is essential to writing a game in Boardzilla:

- [TypeScript](https://www.typescriptlang.org/) or [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

As well, some familiarity with the following is useful:

- [React](https://react.dev/), particularly with [JSX](https://react.dev/learn/writing-markup-with-jsx)
- [esbuild](https://esbuild.github.io/) which is used to compile and build your game

## Installing the devtools

The devtools provides your interface for creating, developing and submitting games.

### Via homebrew tap

```console
brew install boardzilla/tap/boardzilla-devtools
```
And to upgrade:
```console
brew upgrade boardzilla-devtools
```


### Via go

This requires you have go version >=1.21 installed which can be obtained from here [https://go.dev/dl/](https://go.dev/dl/).

```console
go install github.com/boardzilla/boardzilla-devtools/cmd/bz@latest
```
And to upgrade:
```console
GOPROXY=direct go install github.com/boardzilla/boardzilla-devtools/cmd/bz@latest
```

### Via bash

```console
curl -sfL https://raw.githubusercontent.com/boardzilla/boardzilla-devtools/main/scripts/install | bash -s
```
And to upgrade re-run the same command.

### Via source

This requires you have go version >=1.21 installed which can be obtained from here [https://go.dev/dl/](https://go.dev/dl/).

```console
git clone https://github.com/boardzilla/boardzilla-devtools
cd boardzilla-devtools
go build -o bz cmd/bz/main.go
```

After building you'll need to place the `bz` binary in your path.
