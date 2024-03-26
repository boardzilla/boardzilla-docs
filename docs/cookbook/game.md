import TOCInline from "@theme/TOCInline";

<TOCInline toc={toc} />

# Game Development
Recipies about game development.


## Setup

### Sort Pieces

```ts
const hand = game.create(Space, 'hand', { player });
hand.onEnter(Card, c => {
    hand.sortBy('name');
});
```


### Make Pieces Visible Only To Owner

```ts
const hand = game.create(Space, 'hand', { player });
hand.onEnter(Card, c => {
    c.showOnlyTo(player.position);
});
```


## Actions


### Draw Multiple Cards At Once


```ts
game.defineActions({
    drawCards: player => action({ prompt: 'Draw 2 cards' })
    .chooseOnBoard('cards', $.drawPile.all(Card), {
        number: 2,
        confirm: 'Take these 2 cards?'
      })
      .move('cards', player.my('hand')!),
})
```


## Flow

### Draw an Initial Hand For Each Player

```ts
for (const player of game.players) {
    $.draw.firstN(3, Card).putInto(player.my('hand')!)
}
```

### Shuffle a Deck

```ts
$.drawPile.shuffle();
```

### Simultaneous Actions
If you need players to perform actions at the same time:
```ts
everyPlayer({
    do: playerActions({ actions: ['discardCard'] })
}),
```