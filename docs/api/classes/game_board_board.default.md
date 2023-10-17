[boardzilla](../index.md) / [Modules](../modules.md) / [game/board/board](../modules/game_board_board.md) / default

# Class: default<P\>

[game/board/board](../modules/game_board_board.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

## Hierarchy

- [`default`](game_board_space.default.md)<`P`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](game_board_board.default.md#constructor)

### Properties

- [\_ctx](game_board_board.default.md#_ctx)
- [\_eventHandlers](game_board_board.default.md#_eventhandlers)
- [\_t](game_board_board.default.md#_t)
- [\_ui](game_board_board.default.md#_ui)
- [\_visible](game_board_board.default.md#_visible)
- [board](game_board_board.default.md#board)
- [bottom](game_board_board.default.md#bottom)
- [bottomN](game_board_board.default.md#bottomn)
- [game](game_board_board.default.md#game)
- [name](game_board_board.default.md#name)
- [pile](game_board_board.default.md#pile)
- [player](game_board_board.default.md#player)
- [top](game_board_board.default.md#top)
- [topN](game_board_board.default.md#topn)
- [hiddenAttributes](game_board_board.default.md#hiddenattributes)
- [isGameElement](game_board_board.default.md#isgameelement)

### Accessors

- [mine](game_board_board.default.md#mine)

### Methods

- [\_otherFinder](game_board_board.default.md#_otherfinder)
- [absoluteTransform](game_board_board.default.md#absolutetransform)
- [addEventHandler](game_board_board.default.md#addeventhandler)
- [adjacentTo](game_board_board.default.md#adjacentto)
- [all](game_board_board.default.md#all)
- [allJSON](game_board_board.default.md#alljson)
- [appearance](game_board_board.default.md#appearance)
- [applyLayouts](game_board_board.default.md#applylayouts)
- [atBranch](game_board_board.default.md#atbranch)
- [atID](game_board_board.default.md#atid)
- [branch](game_board_board.default.md#branch)
- [closest](game_board_board.default.md#closest)
- [connectTo](game_board_board.default.md#connectto)
- [container](game_board_board.default.md#container)
- [create](game_board_board.default.md#create)
- [createChildrenFromJSON](game_board_board.default.md#createchildrenfromjson)
- [createElement](game_board_board.default.md#createelement)
- [createMany](game_board_board.default.md#createmany)
- [distanceTo](game_board_board.default.md#distanceto)
- [first](game_board_board.default.md#first)
- [firstN](game_board_board.default.md#firstn)
- [fromJSON](game_board_board.default.md#fromjson)
- [getArea](game_board_board.default.md#getarea)
- [getLayoutItems](game_board_board.default.md#getlayoutitems)
- [has](game_board_board.default.md#has)
- [hidden](game_board_board.default.md#hidden)
- [hideFrom](game_board_board.default.md#hidefrom)
- [hideFromAll](game_board_board.default.md#hidefromall)
- [isDescendantOf](game_board_board.default.md#isdescendantof)
- [isEmpty](game_board_board.default.md#isempty)
- [isSpace](game_board_board.default.md#isspace)
- [isVisible](game_board_board.default.md#isvisible)
- [isVisibleTo](game_board_board.default.md#isvisibleto)
- [last](game_board_board.default.md#last)
- [lastN](game_board_board.default.md#lastn)
- [layout](game_board_board.default.md#layout)
- [onEnter](game_board_board.default.md#onenter)
- [others](game_board_board.default.md#others)
- [owner](game_board_board.default.md#owner)
- [setId](game_board_board.default.md#setid)
- [showOnlyTo](game_board_board.default.md#showonlyto)
- [showTo](game_board_board.default.md#showto)
- [showToAll](game_board_board.default.md#showtoall)
- [shuffle](game_board_board.default.md#shuffle)
- [sortBy](game_board_board.default.md#sortby)
- [toJSON](game_board_board.default.md#tojson)
- [triggerEvent](game_board_board.default.md#triggerevent)
- [withinDistance](game_board_board.default.md#withindistance)
- [hide](game_board_board.default.md#hide)

## Constructors

### constructor

• **new default**<`P`\>(`...classes`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...classes` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Overrides

[default](game_board_space.default.md).[constructor](game_board_space.default.md#constructor)

#### Defined in

[game/board/board.ts:16](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/board.ts#L16)

## Properties

### \_ctx

• **\_ctx**: [`ElementContext`](../modules/game_board_types.md#elementcontext)<`P`\>

#### Inherited from

[default](game_board_space.default.md).[_ctx](game_board_space.default.md#_ctx)

#### Defined in

[game/board/element.ts:36](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L36)

___

### \_eventHandlers

• **\_eventHandlers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `enter` | [`ElementEventHandler`](../modules/game_board_types.md#elementeventhandler)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Inherited from

[default](game_board_space.default.md).[_eventHandlers](game_board_space.default.md#_eventhandlers)

#### Defined in

[game/board/space.ts:18](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L18)

___

### \_t

• **\_t**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children` | [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `graph?` | `UndirectedGraph`<`Attributes`, `Attributes`, `Attributes`\> |
| `id` | `number` |
| `parent?` | [`default`](game_board_element.default.md)<`P`\> |

#### Inherited from

[default](game_board_space.default.md).[_t](game_board_space.default.md#_t)

#### Defined in

[game/board/element.ts:39](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L39)

___

### \_ui

• **\_ui**: [`ElementUI`](../modules/game_board_types.md#elementui)<`P`, [`default`](game_board_element.default.md)<`P`\>\> & { `frame?`: [`Box`](../modules/game_board_types.md#box)  }

UI

#### Overrides

[default](game_board_space.default.md).[_ui](game_board_space.default.md#_ui)

#### Defined in

[game/board/board.ts:47](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/board.ts#L47)

___

### \_visible

• `Optional` **\_visible**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default` | `boolean` |
| `except?` | `number`[] |

#### Inherited from

[default](game_board_space.default.md).[_visible](game_board_space.default.md#_visible)

#### Defined in

[game/board/element.ts:46](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L46)

___

### board

• **board**: [`default`](game_board_board.default.md)<`P`\>

#### Inherited from

[default](game_board_space.default.md).[board](game_board_space.default.md#board)

#### Defined in

[game/board/element.ts:28](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L28)

___

### bottom

• **bottom**: <F\>(`className`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[]) => `undefined` \| [`default`](game_board_element.default.md)<`P`\><F\>(`className`: [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[]) => `undefined` \| `F`

#### Type declaration

▸ <`F`\>(`className`, `...finders`): `undefined` \| [`default`](game_board_element.default.md)<`P`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

##### Returns

`undefined` \| [`default`](game_board_element.default.md)<`P`\>

▸ <`F`\>(`className`, `...finders`): `undefined` \| `F`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

##### Returns

`undefined` \| `F`

#### Inherited from

[default](game_board_space.default.md).[bottom](game_board_space.default.md#bottom)

#### Defined in

[game/board/element.ts:31](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L31)

___

### bottomN

• **bottomN**: <F\>(`n`: `number`, `className`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[]) => [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\><F\>(`n`: `number`, `className`: [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[]) => [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type declaration

▸ <`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

##### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

▸ <`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

##### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Inherited from

[default](game_board_space.default.md).[bottomN](game_board_space.default.md#bottomn)

#### Defined in

[game/board/element.ts:33](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L33)

___

### game

• **game**: [`default`](game_game.default.md)<`P`, [`default`](game_board_board.default.md)<`P`\>\>

#### Inherited from

[default](game_board_space.default.md).[game](game_board_space.default.md#game)

#### Defined in

[game/board/element.ts:29](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L29)

___

### name

• **name**: `string`

#### Inherited from

[default](game_board_space.default.md).[name](game_board_space.default.md#name)

#### Defined in

[game/board/element.ts:26](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L26)

___

### pile

• **pile**: [`default`](game_board_element.default.md)<`P`\>

#### Defined in

[game/board/board.ts:14](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/board.ts#L14)

___

### player

• `Optional` **player**: `P`

#### Inherited from

[default](game_board_space.default.md).[player](game_board_space.default.md#player)

#### Defined in

[game/board/element.ts:27](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L27)

___

### top

• **top**: <F\>(`className`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[]) => `undefined` \| [`default`](game_board_element.default.md)<`P`\><F\>(`className`: [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[]) => `undefined` \| `F`

#### Type declaration

▸ <`F`\>(`className`, `...finders`): `undefined` \| [`default`](game_board_element.default.md)<`P`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

##### Returns

`undefined` \| [`default`](game_board_element.default.md)<`P`\>

▸ <`F`\>(`className`, `...finders`): `undefined` \| `F`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

##### Returns

`undefined` \| `F`

#### Inherited from

[default](game_board_space.default.md).[top](game_board_space.default.md#top)

#### Defined in

[game/board/element.ts:30](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L30)

___

### topN

• **topN**: <F\>(`n`: `number`, `className`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[]) => [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\><F\>(`n`: `number`, `className`: [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[]) => [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type declaration

▸ <`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

##### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

▸ <`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

##### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Inherited from

[default](game_board_space.default.md).[topN](game_board_space.default.md#topn)

#### Defined in

[game/board/element.ts:32](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L32)

___

### hiddenAttributes

▪ `Static` **hiddenAttributes**: `string`[] = `[]`

#### Inherited from

[default](game_board_space.default.md).[hiddenAttributes](game_board_space.default.md#hiddenattributes)

#### Defined in

[game/board/element.ts:52](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L52)

___

### isGameElement

▪ `Static` **isGameElement**: `boolean` = `true`

#### Inherited from

[default](game_board_space.default.md).[isGameElement](game_board_space.default.md#isgameelement)

#### Defined in

[game/board/element.ts:51](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L51)

## Accessors

### mine

• `get` **mine**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Space.mine

#### Defined in

[game/board/element.ts:176](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L176)

## Methods

### \_otherFinder

▸ **_otherFinder**<`T`\>(`finders`): [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `T`\>[] |

#### Returns

[`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Inherited from

[default](game_board_space.default.md).[_otherFinder](game_board_space.default.md#_otherfinder)

#### Defined in

[game/board/space.ts:110](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L110)

___

### absoluteTransform

▸ **absoluteTransform**(): [`Box`](../modules/game_board_types.md#box)

#### Returns

[`Box`](../modules/game_board_types.md#box)

#### Inherited from

[default](game_board_space.default.md).[absoluteTransform](game_board_space.default.md#absolutetransform)

#### Defined in

[game/board/element.ts:384](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L384)

___

### addEventHandler

▸ **addEventHandler**<`T`\>(`type`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"enter"`` |
| `handler` | [`ElementEventHandler`](../modules/game_board_types.md#elementeventhandler)<`P`, `T`\> |

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[addEventHandler](game_board_space.default.md#addeventhandler)

#### Defined in

[game/board/space.ts:30](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L30)

___

### adjacentTo

▸ **adjacentTo**(`el`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | [`default`](game_board_element.default.md)<`P`\> |

#### Returns

`boolean`

#### Inherited from

[default](game_board_space.default.md).[adjacentTo](game_board_space.default.md#adjacentto)

#### Defined in

[game/board/space.ts:58](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L58)

___

### all

▸ **all**<`F`\>(`className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Inherited from

[default](game_board_space.default.md).[all](game_board_space.default.md#all)

#### Defined in

[game/board/element.ts:79](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L79)

▸ **all**<`F`\>(`className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Inherited from

[default](game_board_space.default.md).[all](game_board_space.default.md#all)

#### Defined in

[game/board/element.ts:80](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L80)

___

### allJSON

▸ **allJSON**(`seenBy?`): [`ElementJSON`](../modules/game_board_types.md#elementjson)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `seenBy?` | `number` |

#### Returns

[`ElementJSON`](../modules/game_board_types.md#elementjson)[]

#### Defined in

[game/board/board.ts:24](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/board.ts#L24)

___

### appearance

▸ **appearance**(`appearance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appearance` | `Object` |
| `appearance.aspectRatio?` | `number` |
| `appearance.connections?` | `Object` |
| `appearance.connections.color?` | `string` |
| `appearance.connections.fill?` | `string` |
| `appearance.connections.label?` | (`arg`: `any`) => ``null`` \| `Element` |
| `appearance.connections.labelScale?` | `number` |
| `appearance.connections.style?` | `string` |
| `appearance.connections.thickness?` | `number` |
| `appearance.render?` | ``false`` \| (`el`: [`default`](game_board_board.default.md)<`P`\>) => ``null`` \| `Element` |
| `appearance.zoomable?` | `boolean` |

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[appearance](game_board_space.default.md#appearance)

#### Defined in

[game/board/element.ts:801](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L801)

___

### applyLayouts

▸ **applyLayouts**(`force?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `force` | `boolean` | `false` |

#### Returns

`void`

#### Overrides

[default](game_board_space.default.md).[applyLayouts](game_board_space.default.md#applylayouts)

#### Defined in

[game/board/board.ts:49](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/board.ts#L49)

___

### atBranch

▸ **atBranch**(`b`): [`default`](game_board_element.default.md)<`P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `b` | `string` |

#### Returns

[`default`](game_board_element.default.md)<`P`\>

#### Inherited from

[default](game_board_space.default.md).[atBranch](game_board_space.default.md#atbranch)

#### Defined in

[game/board/element.ts:288](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L288)

___

### atID

▸ **atID**(`id`): `undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |

#### Returns

`undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Inherited from

[default](game_board_space.default.md).[atID](game_board_space.default.md#atid)

#### Defined in

[game/board/element.ts:300](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L300)

___

### branch

▸ **branch**(): `string`

#### Returns

`string`

#### Inherited from

[default](game_board_space.default.md).[branch](game_board_space.default.md#branch)

#### Defined in

[game/board/element.ts:277](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L277)

___

### closest

▸ **closest**<`F`\>(`className?`, `...finders`): `undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className?` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

`undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Inherited from

[default](game_board_space.default.md).[closest](game_board_space.default.md#closest)

#### Defined in

[game/board/space.ts:78](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L78)

▸ **closest**<`F`\>(`className`, `...finders`): `undefined` \| `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

`undefined` \| `F`

#### Inherited from

[default](game_board_space.default.md).[closest](game_board_space.default.md#closest)

#### Defined in

[game/board/space.ts:79](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L79)

___

### connectTo

▸ **connectTo**(`el`, `cost?`): [`default`](game_board_board.default.md)<`P`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `el` | [`default`](game_board_element.default.md)<`P`\> | `undefined` |
| `cost` | `number` | `1` |

#### Returns

[`default`](game_board_board.default.md)<`P`\>

#### Inherited from

[default](game_board_space.default.md).[connectTo](game_board_space.default.md#connectto)

#### Defined in

[game/board/space.ts:45](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L45)

___

### container

▸ **container**<`T`\>(`className?`): `undefined` \| `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className?` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `T`\> |

#### Returns

`undefined` \| `T`

#### Inherited from

[default](game_board_space.default.md).[container](game_board_space.default.md#container)

#### Defined in

[game/board/element.ts:153](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L153)

___

### create

▸ **create**<`T`\>(`className`, `name`, `attrs?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `T`\> |
| `name` | `string` |
| `attrs?` | `Partial`<`Pick`<`T`, ``"name"`` \| ``"player"`` \| { [K in string \| number \| symbol]: K extends keyof default<P\> ? never : T[K] extends Function ? never : K }[keyof `T`]\>\> |

#### Returns

`T`

#### Inherited from

[default](game_board_space.default.md).[create](game_board_space.default.md#create)

#### Defined in

[game/board/element.ts:250](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L250)

___

### createChildrenFromJSON

▸ **createChildrenFromJSON**(`childrenJSON`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `childrenJSON` | [`ElementJSON`](../modules/game_board_types.md#elementjson)[] |

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[createChildrenFromJSON](game_board_space.default.md#createchildrenfromjson)

#### Defined in

[game/board/element.ts:334](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L334)

___

### createElement

▸ **createElement**<`T`\>(`className`, `name`, `attrs?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `T`\> |
| `name` | `string` |
| `attrs?` | `Partial`<`Pick`<`T`, ``"name"`` \| ``"player"`` \| { [K in string \| number \| symbol]: K extends keyof default<P\> ? never : T[K] extends Function ? never : K }[keyof `T`]\>\> |

#### Returns

`T`

#### Inherited from

[default](game_board_space.default.md).[createElement](game_board_space.default.md#createelement)

#### Defined in

[game/board/space.ts:24](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L24)

___

### createMany

▸ **createMany**<`T`\>(`n`, `className`, `name`, `attrs?`): [`default`](game_board_element_collection.default.md)<`P`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `T`\> |
| `name` | `string` |
| `attrs?` | `Partial`<`Pick`<`T`, ``"name"`` \| ``"player"`` \| { [K in string \| number \| symbol]: K extends keyof default<P\> ? never : T[K] extends Function ? never : K }[keyof `T`]\>\> |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `T`\>

#### Inherited from

[default](game_board_space.default.md).[createMany](game_board_space.default.md#createmany)

#### Defined in

[game/board/element.ts:258](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L258)

___

### distanceTo

▸ **distanceTo**(`el`): `undefined` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | [`default`](game_board_element.default.md)<`P`\> |

#### Returns

`undefined` \| `number`

#### Inherited from

[default](game_board_space.default.md).[distanceTo](game_board_space.default.md#distanceto)

#### Defined in

[game/board/space.ts:63](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L63)

___

### first

▸ **first**<`F`\>(`className`, `...finders`): `undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

`undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Inherited from

[default](game_board_space.default.md).[first](game_board_space.default.md#first)

#### Defined in

[game/board/element.ts:88](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L88)

▸ **first**<`F`\>(`className`, `...finders`): `undefined` \| `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

`undefined` \| `F`

#### Inherited from

[default](game_board_space.default.md).[first](game_board_space.default.md#first)

#### Defined in

[game/board/element.ts:89](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L89)

___

### firstN

▸ **firstN**<`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Inherited from

[default](game_board_space.default.md).[firstN](game_board_space.default.md#firstn)

#### Defined in

[game/board/element.ts:97](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L97)

▸ **firstN**<`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Inherited from

[default](game_board_space.default.md).[firstN](game_board_space.default.md#firstn)

#### Defined in

[game/board/element.ts:98](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L98)

___

### fromJSON

▸ **fromJSON**(`boardJSON`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `boardJSON` | [`ElementJSON`](../modules/game_board_types.md#elementjson)[] |

#### Returns

`void`

#### Defined in

[game/board/board.ts:30](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/board.ts#L30)

___

### getArea

▸ **getArea**(`attributes`): [`Box`](../modules/game_board_types.md#box)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `Object` |
| `attributes.area?` | [`Box`](../modules/game_board_types.md#box) |
| `attributes.margin?` | `number` \| { `bottom`: `number` ; `left`: `number` ; `right`: `number` ; `top`: `number`  } |

#### Returns

[`Box`](../modules/game_board_types.md#box)

#### Inherited from

[default](game_board_space.default.md).[getArea](game_board_space.default.md#getarea)

#### Defined in

[game/board/element.ts:775](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L775)

___

### getLayoutItems

▸ **getLayoutItems**(): [`default`](game_board_element.default.md)<`P`\>[][]

#### Returns

[`default`](game_board_element.default.md)<`P`\>[][]

#### Inherited from

[default](game_board_space.default.md).[getLayoutItems](game_board_space.default.md#getlayoutitems)

#### Defined in

[game/board/element.ts:755](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L755)

___

### has

▸ **has**<`F`\>(`className`, `...finders`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

`boolean`

#### Inherited from

[default](game_board_space.default.md).[has](game_board_space.default.md#has)

#### Defined in

[game/board/element.ts:139](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L139)

▸ **has**<`F`\>(`className`, `...finders`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

`boolean`

#### Inherited from

[default](game_board_space.default.md).[has](game_board_space.default.md#has)

#### Defined in

[game/board/element.ts:140](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L140)

___

### hidden

▸ **hidden**(): [`default`](game_board_board.default.md)<`P`\>

#### Returns

[`default`](game_board_board.default.md)<`P`\>

#### Inherited from

[default](game_board_space.default.md).[hidden](game_board_space.default.md#hidden)

#### Defined in

[game/board/element.ts:238](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L238)

___

### hideFrom

▸ **hideFrom**(`...player`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...player` | `number`[] |

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[hideFrom](game_board_space.default.md#hidefrom)

#### Defined in

[game/board/element.ts:206](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L206)

___

### hideFromAll

▸ **hideFromAll**(): `void`

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[hideFromAll](game_board_space.default.md#hidefromall)

#### Defined in

[game/board/element.ts:202](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L202)

___

### isDescendantOf

▸ **isDescendantOf**(`el`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | [`default`](game_board_element.default.md)<`P`\> |

#### Returns

`boolean`

#### Inherited from

[default](game_board_space.default.md).[isDescendantOf](game_board_space.default.md#isdescendantof)

#### Defined in

[game/board/element.ts:304](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L304)

___

### isEmpty

▸ **isEmpty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[default](game_board_space.default.md).[isEmpty](game_board_space.default.md#isempty)

#### Defined in

[game/board/element.ts:160](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L160)

___

### isSpace

▸ **isSpace**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[default](game_board_space.default.md).[isSpace](game_board_space.default.md#isspace)

#### Defined in

[game/board/space.ts:22](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L22)

___

### isVisible

▸ **isVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[default](game_board_space.default.md).[isVisible](game_board_space.default.md#isvisible)

#### Defined in

[game/board/element.ts:228](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L228)

___

### isVisibleTo

▸ **isVisibleTo**(`p`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `number` |

#### Returns

`boolean`

#### Inherited from

[default](game_board_space.default.md).[isVisibleTo](game_board_space.default.md#isvisibleto)

#### Defined in

[game/board/element.ts:219](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L219)

___

### last

▸ **last**<`F`\>(`className`, `...finders`): `undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

`undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Inherited from

[default](game_board_space.default.md).[last](game_board_space.default.md#last)

#### Defined in

[game/board/element.ts:107](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L107)

▸ **last**<`F`\>(`className`, `...finders`): `undefined` \| `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

`undefined` \| `F`

#### Inherited from

[default](game_board_space.default.md).[last](game_board_space.default.md#last)

#### Defined in

[game/board/element.ts:108](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L108)

___

### lastN

▸ **lastN**<`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Inherited from

[default](game_board_space.default.md).[lastN](game_board_space.default.md#lastn)

#### Defined in

[game/board/element.ts:116](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L116)

▸ **lastN**<`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Inherited from

[default](game_board_space.default.md).[lastN](game_board_space.default.md#lastn)

#### Defined in

[game/board/element.ts:117](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L117)

___

### layout

▸ **layout**(`applyTo`, `attributes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `applyTo` | `string` \| [`default`](game_board_element.default.md)<`P`\> \| [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, [`default`](game_board_element.default.md)<`P`\>\> \| [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `attributes` | `Partial`<{ `area?`: [`Box`](../modules/game_board_types.md#box) ; `aspectRatio?`: `number` ; `columns?`: `number` \| { `max?`: `number` ; `min`: `number`  } \| { `max`: `number` ; `min?`: `number`  } ; `direction`: ``"ltr"`` \| ``"rtl"`` \| ``"square"`` \| ``"rtl-btt"`` \| ``"ltr-btt"`` \| ``"ttb"`` \| ``"ttb-rtl"`` \| ``"btt"`` \| ``"btt-rtl"`` ; `gap?`: `number` \| { `x`: `number` ; `y`: `number`  } ; `haphazardly?`: `number` ; `limit?`: `number` ; `margin?`: `number` \| { `bottom`: `number` ; `left`: `number` ; `right`: `number` ; `top`: `number`  } ; `offsetColumn?`: [`Vector`](../modules/game_board_types.md#vector) ; `offsetRow?`: [`Vector`](../modules/game_board_types.md#vector) ; `rows?`: `number` \| { `max?`: `number` ; `min`: `number`  } \| { `max`: `number` ; `min?`: `number`  } ; `scaling`: ``"fill"`` \| ``"none"`` \| ``"fit"`` ; `size?`: { `height`: `number` ; `width`: `number`  } ; `slots?`: [`Box`](../modules/game_board_types.md#box)[]  }\> |

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[layout](game_board_space.default.md#layout)

#### Defined in

[game/board/element.ts:395](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L395)

___

### onEnter

▸ **onEnter**<`T`\>(`type`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `T`\> |
| `callback` | (`el`: `T`) => `void` |

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[onEnter](game_board_space.default.md#onenter)

#### Defined in

[game/board/space.ts:34](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L34)

___

### others

▸ **others**<`F`\>(`className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Inherited from

[default](game_board_space.default.md).[others](game_board_space.default.md#others)

#### Defined in

[game/board/element.ts:127](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L127)

▸ **others**<`F`\>(`className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Inherited from

[default](game_board_space.default.md).[others](game_board_space.default.md#others)

#### Defined in

[game/board/element.ts:128](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L128)

___

### owner

▸ **owner**(): `undefined` \| `P`

#### Returns

`undefined` \| `P`

#### Inherited from

[default](game_board_space.default.md).[owner](game_board_space.default.md#owner)

#### Defined in

[game/board/element.ts:172](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L172)

___

### setId

▸ **setId**(`id?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `number` |

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[setId](game_board_space.default.md#setid)

#### Defined in

[game/board/element.ts:72](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L72)

___

### showOnlyTo

▸ **showOnlyTo**(`player`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `number` |

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[showOnlyTo](game_board_space.default.md#showonlyto)

#### Defined in

[game/board/element.ts:185](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L185)

___

### showTo

▸ **showTo**(`...player`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...player` | `number`[] |

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[showTo](game_board_space.default.md#showto)

#### Defined in

[game/board/element.ts:192](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L192)

___

### showToAll

▸ **showToAll**(): `void`

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[showToAll](game_board_space.default.md#showtoall)

#### Defined in

[game/board/element.ts:181](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L181)

___

### shuffle

▸ **shuffle**(): `void`

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[shuffle](game_board_space.default.md#shuffle)

#### Defined in

[game/board/element.ts:168](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L168)

___

### sortBy

▸ **sortBy**<`E`\>(`key`, `direction?`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Sorter`](../modules/game_types.md#sorter)<`E`\> \| [`Sorter`](../modules/game_types.md#sorter)<`E`\>[] |
| `direction?` | ``"desc"`` \| ``"asc"`` |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Inherited from

[default](game_board_space.default.md).[sortBy](game_board_space.default.md#sortby)

#### Defined in

[game/board/element.ts:164](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L164)

___

### toJSON

▸ **toJSON**(`seenBy?`): [`ElementJSON`](../modules/game_board_types.md#elementjson)

#### Parameters

| Name | Type |
| :------ | :------ |
| `seenBy?` | `number` |

#### Returns

[`ElementJSON`](../modules/game_board_types.md#elementjson)

#### Inherited from

[default](game_board_space.default.md).[toJSON](game_board_space.default.md#tojson)

#### Defined in

[game/board/element.ts:308](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L308)

___

### triggerEvent

▸ **triggerEvent**(`event`, `entering`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"enter"`` |
| `entering` | [`default`](game_board_element.default.md)<`P`\> |

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[triggerEvent](game_board_space.default.md#triggerevent)

#### Defined in

[game/board/space.ts:38](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L38)

___

### withinDistance

▸ **withinDistance**(`distance`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_space.default.md)<`P`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `distance` | `number` |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_space.default.md)<`P`\>\>

#### Inherited from

[default](game_board_space.default.md).[withinDistance](game_board_space.default.md#withindistance)

#### Defined in

[game/board/space.ts:95](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/space.ts#L95)

___

### hide

▸ `Static` **hide**<`P`, `T`\>(`this`, `...attrs`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `T`\> |
| `...attrs` | `string` & keyof `T`[] |

#### Returns

`void`

#### Inherited from

[default](game_board_space.default.md).[hide](game_board_space.default.md#hide)

#### Defined in

[game/board/element.ts:233](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element.ts#L233)
