---
sidebar_position: 7
---

# Adjacency and Grids

Boardzilla provides a few tools to help determine adjacency or distance between
game elements. This can be complicated since different games might have wildly
different needs for measuring distance and adjacency. So what is provided in
Boardzilla is intended to cover a few basic scenarios while affording
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
- Does not change size
- Useful for chessboards, Catan, etc.

**Flexible**
- Applies to [Pieces](core-concepts#piece)
- An "imaginary" grid that can change position and size depending on its contents
- Handles irregularly shaped pieces that occupy multiple cells
- Useful for tile placement games, dominoes, etc.

## Fixed grid

A fixed grid is a grid of [Spaces](../api/classes/Space) that are created when
we define our Game. These come in a few flavors:
[SquareGrid](../api/classes/SquareGrid), [HexGrid](../api/classes/HexGrid) and
[ConnectedSpaceMap](../api/classes/ConnectedSpaceMap).

### Square grids

For a typical chessboard, we would say:

```ts
  import { SquareGrid } from '@boardzilla/core';

  game.create(SquareGrid, 'chessBoard', { rows: 8, columns: 8});
```

<div style="textAlign: center; width: 30%"><img src="/img/chess.svg"/></div>

This creates 64 Spaces and automitically sets `row` and `column` properties on
each. We can query these like any other property, e.g.

```ts
  // the top-left corner
  const corner = $.chessBoard.first(Space, { row: 1, column: 1 })!;
```

<div style="textAlign: center; width: 30%"><img src="/img/chess2.svg"/></div>

And we can now use adjacency and distance methods on these spaces. For example,
to get the two spaces directly adjacent to the corner, we can say:

```ts
  corner.adjacencies(Space);
  // or
  $.chessBoard.allAdjacentTo(corner, Space);
```

<div style="textAlign: center; width: 30%"><img src="/img/chess3.svg"/></div>

We can also measure distance, for example a knight's move is a distance of 3
spaces:

```ts
  const knight = $.chessBoard.first(Space, { row: 3, column: 2 })!;

  corner.distanceTo(knight); // 3
  // or
  $.chessBoard.distanceBetween(corner, knight);
```

<div style="textAlign: center; width: 30%"><img src="/img/chess4.svg"/></div>

We can query for other spaces with a certain distance as well. For example:

```ts
  corner.withinDistance(5);
  // or
  map.allWithinDistanceOf(corner, 5, Space);
```

<div style="textAlign: center; width: 30%"><img src="/img/chess5.svg"/></div>

If diagonals need to be treated as adjacent, this can be done by setting
[`diagonalDistance`](../api/classes/SquareGrid#diagonaldistance) to some
number. The number will be the distance for diagonal moves, e.g.:

```ts
  game.create(SquareGrid, 'chessBoard2', { rows: 8, columns: 8, diagonalDistance: 1.5 });
```

This affects both adjacency:

```ts
  const corner = $.chessBoard2.first(Space, { row: 1, column: 1 })!;

  corner.adjacencies(); // now 3 Spaces
```

<div style="textAlign: center; width: 30%"><img src="/img/chess7.svg"/></div>

and distance:

```ts
  const corner = $.chessBoard2.first(Space, { row: 1, column: 1 })!;
  const knight = $.chessBoard2.first(Space, { row: 3, column: 2 })!;

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
6 directions, rather than 4 or 8. There are a few different shapes and row,
column configurations to choose from.

```ts
  import { HexGrid } from '@boardzilla/core';

  game.create(HexGrid, 'diamondBoard' { rows: 3, columns: 3 );
  game.create(HexGrid, 'hexBoard' { rows: 5, columns: 5, shape: 'hex' );
```

<div style="textAlign: center; width: 100%"><img src="/img/hex.svg"/></div>

Adjacency now applies in 6 directions, although the adjacent row, column pairs
will depend on which `axes` was used.

```ts
  game.create(HexGrid, 'hexBoard', { rows: 3, columns: 3, shape: 'hex' );

  const middle = $.hexBoard.first(Space, { row: 2, column: 2 })!;

  middle.adjacencies(Space); // 6 such Spaces
```

<div style="textAlign: center; width: 30%"><img src="/img/hex2.svg"/></div>

Distance calculations apply in the same way as square grids. However, there are
never special diagonals in hex grids, and all 6 directions are treated equally.

:::tip hex shapes

By default, this creates spaces at every row and column starting from 1,1 to the
`rows` and `columns` specified. This means that the shape we get by default is
rhomboid. If some other shape is desired, set `shape` to 'hex' or 'square'

:::

These create adjacencies for use by the rules of the game. And visually it
creates a default grid that matches the style and shape of grid specified. These
can have [layouts](../ui/layout) applied like other Spaces, however, these grids
only have a single layout for their Spaces. Rather than calling `layout` to
layer on more layouts, you modify the base layout by calling
[`configureLayout`](../api/classes/AdjacencySpace#configurelayout). See the
"hex" preset in [the layout sandbox](../ui/layout-sandbox) as an example.

### Custom adjacency

For all other styles of adjacency, use the base class
[ConnectedSpaceMap](../api/classes/ConnectedSpaceMap). Using this we can add
Spaces and connect them in whatever adjacency configuration is needed by calling
[connect](../api/classes/ConnectedSpaceMap#connect). These can have custom
distances applied to them to use for distance calculations. This is actually
just a [directed
graph](https://en.wikipedia.org/wiki/Graph_(discrete_mathematics)). There are
too many possibilities to describe fully. A simple example would be creating a
graph of spaces with travel distances:

```ts
  const map = game.create(ConnectedSpaceMap, 'map');

  const space1 = map.create(Space, 'space1');
  const space2 = map.create(Space, 'space2');
  const space3 = map.create(Space, 'space3');

  map.connectTo(space1, space2, 2);
  map.connectTo(space2, space3, 3);
  map.connectTo(space1, space3, 6);

  map.distanceBetween(space1, space3); // equals 5 using a path thru space2
```

<div style="textAlign: center; width: 30%"><img src="/img/connect-to.svg"/></div>

Note that any connection is considered "adjacent" but the distance provided as
the 2nd argument is used in any queries or methods that measure distance, e.g.
[`distanceBetween`](../api/classes/ConnectedSpaceMap#distancebetween) or
[`allWithinDistanceOf`](../api/classes/ConnectedSpaceMap#allwithindistanceof).

## Flexible Grid

The flexible grid is for placing Pieces on a space where the grid is not
necessarily part of the board, or even a physical, visible thing. For example,
when playing dominoes, you do not usually have an actual visible grid on the
table, but an imaginary one is created as tiles are placed, which becomes the
basis for determining if a domino is in a valid position based on adjacency to
the other dominoes.

The class [`PieceGrid`](../api/classes/PieceGrid) is the basis for all flexible
grids. It is a grid that only directly contains Pieces and provides some other
special behaviour for the pieces placed in it. Any pieces in the PieceGrid must
have a `row` and `column` assigned to them, either by the game or the
player. Players normally place pieces onto the grid using the special
[`placePiece`](../api/classes/Action#placepiece). choice, which is specifically
designed for this, and sets the `row` and `column` (and optionally `rotation` as
well).

Once a piece is placed on the PieceGrid, you can use the adjacency methods of
the class to determine what pieces are adjacent to each other. This is just like
the fixed grid, except for two very important characteristics:
- The grid can **extend**
- Pieces can have **irregular** shapes

### Extendable Grid

When players choose to place dominoes, there is no limit to the imaginary grid
on the table. Everyone playing the game has probably had the experience of
getting up to the edge of the table, and needing to slide the entire structure
to make room. The imaginary grid of a PieceGrid is likewise essentially
infinite! You can set the `rows` and `columns` properties of a PieceGrid just
like the SquareGrid and HexGrid, but it will automatically grow beyond the
initial size as players place pieces. This behaviour can be disabled if you
actually want a limited playing field by setting `extendableGrid` to `false`.

### Irregular Shapes

Pieces can be given irregular shapes by calling
[`setShape`](../api/classes/Piece#setshape). The shapes are represented as
strings with non-space characters to show filled in areas of the shape, and
spaces to show gaps. E.g. the squiggle tetris piece might look like this:

```ts
   tetrisPiece.setShape(
     'XX ',
     ' XX'
   );
```

The shape of a piece does not normally matter much, expect when placed on a
`PieceGrid`. When on a `PieceGrid`, the piece will fill the appropriate number
of rows and columns as its size increases. The exact shape determines what is
adjacent to what, or what overlaps what and is therefore invalid.

The cells can also be labelled. This is useful when we want to query exactly
which part of a piece is adjacent to another piece. For example in dominoes, we
need to know if the adjacent dominoes have matching numbers. We can do so with
labels, e.g.:

```ts
  domino12.setShape(
    '12'
  );

  domino23.setShape(
    '23'
  );
```

Now if we want to check the adjacency of `domino12` and `domino23` if they were
placed side-by-side, we can place them onto a `PieceGrid` and then use the
[`adjacenciesByCell`](../api/classes/PieceGrid#adjacenciesbycell) method of the
grid.

<div style="textAlign: center; width: 30%"><img src="/img/dominoes.svg"/></div>

```ts
  dominoGrid.adjacenciesByCell(domino12, domino23);
  // will return:
  [
    {
      piece: domino23,
      from: '2',
      to: '2'
    }
  ]
```

Like with a [SquareGrid](../api/classes/SquareGrid), we can also have diagonal
adjacent, by setting
[`diagonalAdjacency`](../api/classes/PieceGrid#diagonaladjacency), the
`adjacenciesByCell` method will also return cells that touch only by a corner.

We can further add labels to the edges themselves for games where the tiles have
distinctive edges that need be adjacent to other types of edges. Edge labels can
be added to each of the 4 cardinal directions of each cell. Here's an example of
2 tiles from a game with tiles that go together to build a countryside.

```ts
   bridge.setShape(
     'AB',
     'C '
   );
   bridge.setEdges({
     A: {
       up: 'road',
       left: 'river',
     },
     B: {
       right: 'river',
     },
     C: {
       down: 'road',
     },
   });

   // this is a simple one-celled shape, so we don't need cell labels
   roadTurn.setEdges({
     up: 'road',
     right: 'road',
   });
```

If these were placed together onto a PieceGrid named `countryGrid`
top-to-bottom, like this:

<div style="textAlign: center; width: 30%"><img src="/img/tiles.svg"/></div>

We could check if the edges match using the
[`adjacenciesByEdge`](../api/classes/PieceGrid#adjacenciesbyedge) method of
`countryGrid`, e.g.:

```ts
  countryGrid.adjacenciesByEdge(bridge));
  // will return:
  [
    {
      piece: roadTurn,
      from: 'river',
      to: 'river'
    }
  ]
```

The [tiles starter
template](https://github.com/boardzilla/boardzilla-tiles-starter-game) has a
simple example of using the PieceGrid for tile placement that can be used as a
starting point.
