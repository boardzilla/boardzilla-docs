---
sidebar_position: 7
---

# Adjacency and Grids

Boardzilla provides a few tools to help determine adjacency or distance between
elements on the Board. This can be complicated since different games might have
wildly different needs for measuring distance and adjacency. So what is provided
in Boardzilla is intended to cover a few basic scenarios while affording
flexibility for a variety of non-traditional concepts of adjacency.

It's also important that we distinguish between the concept of positioning from
the perspective of the _game's rules_ as opposed to positioning from the
perspective of its _appearance_ on screen. The two are related. If adjacency is
important to the game's rules, keep reading. The relationship between rules and
appearance will be explained. If however, the positioning is only important from
a visual perspective, refer instead to [Layout](../ui/layout).

## Types of grids

To understand adjacency, we need to talk about the grid on which we're
playing. In Boardzilla there are two fundamentally different grid concepts that
can be leveraged, _fixed_ and _flexible_. Which one we use depends on the type
of game.

**Fixed**
- Applies to [Spaces](core-concepts#space)
- Is usually visible
- Does not change once set
- Useful for chessboards, Catan, etc.

**Flexible**
- Applies to [Pieces](core-concepts#piece)
- An "imaginary" grid that can change position and size depending on its contents
- Useful for tile placement games, dominoes, etc.

## Fixed grid

A fixed grid is a grid of [Spaces](../api/classes/Space) that are created when
we define our Board. These come in a few flavors: square, hex and custom. For
the square and hex grids, we start with the
[`createGrid`](../api/classes/Space#creategrid) method.

### Square grids

For a typical chessboard, we would say:

```ts
  board.createGrid({ rows: 8, columns: 8}, Space, 'chess-square');
```

<div style="textAlign: center; width: 30%"><img src="/img/chess.svg"/></div>

This creates 64 Spaces and automitically sets `row` and `column` properties on
each. We can query these like any other property, e.g.

```ts
  // the top-left corner
  const corner = board.first(Space, { row: 1, column: 1 })!;
```

<div style="textAlign: center; width: 30%"><img src="/img/chess2.svg"/></div>

And we can now use adjacency and distance methods on these spaces. For example,
to get the two spaces directly adjacent to the corner, we can say:

```ts
  corner.adjacencies(Space);
  // or
  corner.others(Space, { adjacent: true });
```

<div style="textAlign: center; width: 30%"><img src="/img/chess3.svg"/></div>

We can also measure distance, for example a knight's move is a distance of 3
spaces:

```ts
  const knight = board.first(Space, { row: 3, column: 2 })!;

  corner.distanceTo(knight); // 3
```

<div style="textAlign: center; width: 30%"><img src="/img/chess4.svg"/></div>

We can query for other spaces with a certain distance as well. For example:

```ts
  corner.withinDistance(5);
  // or
  corner.others(Space, {withinDistance: 3});
```

<div style="textAlign: center; width: 30%"><img src="/img/chess5.svg"/></div>

If diagonals need to be treated as adjacent, this can be done in the
`createGrid` call. We need to specify the distance for diagonal moves for
distance measurements, e.g.:

```ts
  board.createGrid({ rows: 8, columns: 8, diagonalDistance: 1.5 }, Space, 'square');
```

This affects both adjacency:

```ts
  const corner = board.first(Space, { row: 1, column: 1 })!;

  corner.adjacencies(); // now 3 Spaces
```

<div style="textAlign: center; width: 30%"><img src="/img/chess7.svg"/></div>

and distance:

```ts
  const corner = board.first(Space, { row: 1, column: 1 })!;
  const knight = board.first(Space, { row: 3, column: 2 })!;

  corner.distanceTo(knight); // 2.5
```

<div style="textAlign: center; width: 30%"><img src="/img/chess6.svg"/></div>

When we apply a visual [layout](../ui/layout) to spaces that have been created
with rows and columns, the layout API automatically uses that row/column
information to layout the space. Practically speaking that means it is usually
unnecessary to define `rows` and `columns` for such a layout as the default will
follow the grid structure.

In rare cases when unpositioned items are put into the same layout as positioned
grid items, the unpositioned ones will be fit around the grid.

### Hex grids

In the case of hex grids, specify the grid `style`. Essentially what this does
is create a grid with non-orthogonal rows and columns where adjacency applies in
6 directions, rather than 4 or 8. There are two styles depending on the
direction of adjacency.

```ts
  board.createGrid({ rows: 3, columns: 3, style: 'hex'}, Space, 'cell');
  board.createGrid({ rows: 3, columns: 3, style: 'hex-inverse'}, Space, 'cell');
```

<div style="textAlign: center; width: 100%"><img src="/img/hex.svg"/></div>

Adjacency now applies in 6 directions, depending on the whether `"hex"` or
`"hex-inverse"` was used.

```ts
  board.createGrid({ rows: 3, columns: 3, style: 'hex'}, Space, 'cell');

  const middle = board.first(Space, { row: 2, column: 2 })!;

  middle.adjacencies(Space); // 6 such Spaces
```

<div style="textAlign: center; width: 30%"><img src="/img/hex2.svg"/></div>

Distance calculations apply in the same way as square grids. However, there are
never special diagonals in hex grids, and all 6 directions are treated equally.

:::warning hex shapes

This creates rows and columns as specified meaning that the shape we initially
get is rhomboid. If some other shape is desired, one way to acheive that is by
[destroying](../api/classes/GameElement#destroy) the excess Spaces.

:::

Remember, these only apply to the _rules of the game_ in terms of adjacency and
distance. In order to _visually_ lay out a hex grid, it is usually necessary to
also specify a [layout](../ui/layout) for these spaces with non-orthogonal
vectors for the `offsetRow`, or `offsetColumn` or both. See the "hex" preset in
[the layout sandbox](../ui/layout-sandbox) as an example.

### Custom adjacency

For all other styles of adjacency, a
[`Space#connectTo`](../classes/Space#connectto) method is provided to permit
creating custom adjacencies, either on top of one of the grids above, or from
scratch. These can have custom distances applied to them to use for distance
calculations. This is basically an [undirected
graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)). There are
too many possibilities to describe fully. A simple example would be creating a
graph of spaces with travel distances:

```ts
  const space1 = board.create(Space, 'space1');
  const space2 = board.create(Space, 'space2');
  const space3 = board.create(Space, 'space3');

  space1.connectTo(space2, 2);
  space2.connectTo(space3, 3);
  space3.connectTo(space3, 6);

  space1.distanceTo(space3); // equals 5 using a path thru space2
```

<div style="textAlign: center; width: 30%"><img src="/img/connect-to.svg"/></div>

Note that any connection is considered "adjacent" but the distance provided as
the 2nd argument is used in any queries or methods that measure distance, e.g.
[`distanceTo`](../api/classes/Space#distanceto) or
[`withinDistance`](../api/classes/Space#withindistance).
