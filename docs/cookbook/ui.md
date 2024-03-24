import TOCInline from "@theme/TOCInline";

<TOCInline toc={toc} />

# UI

## Drawers
To turn a normal `Space` into a drawer that opens and closes to save space, you just need to apply a layout to it that looks similar to this:

```ts
game.layout('refdrawer', {
    area: {
        top: 0, left: 30, width: 40, height: 45
    },
    drawer: {
        closeDirection: 'up',
        tab: () => 'Scoring Reference',
    },
});
```
