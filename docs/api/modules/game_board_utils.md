[boardzilla](../index.md) / [Modules](../modules.md) / game/board/utils

# Module: game/board/utils

## Table of contents

### Functions

- [cellSizeForArea](game_board_utils.md#cellsizeforarea)
- [scale](game_board_utils.md#scale)
- [shift](game_board_utils.md#shift)
- [translate](game_board_utils.md#translate)
- [union](game_board_utils.md#union)

## Functions

### cellSizeForArea

▸ **cellSizeForArea**(`rows`, `columns`, `area`, `gap?`, `offsetColumn?`, `offsetRow?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rows` | `number` |
| `columns` | `number` |
| `area` | `Object` |
| `area.height` | `number` |
| `area.width` | `number` |
| `gap?` | [`Vector`](game_board_types.md#vector) |
| `offsetColumn?` | [`Vector`](game_board_types.md#vector) |
| `offsetRow?` | [`Vector`](game_board_types.md#vector) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `width` | `number` |

#### Defined in

[game/board/utils.ts:45](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/utils.ts#L45)

___

### scale

▸ **scale**(`a`, `v`): [`Box`](game_board_types.md#box)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Box`](game_board_types.md#box) |
| `v` | [`Vector`](game_board_types.md#vector) |

#### Returns

[`Box`](game_board_types.md#box)

#### Defined in

[game/board/utils.ts:27](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/utils.ts#L27)

___

### shift

▸ **shift**(`a`, `v`): [`Box`](game_board_types.md#box)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Box`](game_board_types.md#box) |
| `v` | [`Vector`](game_board_types.md#vector) |

#### Returns

[`Box`](game_board_types.md#box)

#### Defined in

[game/board/utils.ts:36](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/utils.ts#L36)

___

### translate

▸ **translate**(`original`, `transform`): [`Box`](game_board_types.md#box)

#### Parameters

| Name | Type |
| :------ | :------ |
| `original` | [`Box`](game_board_types.md#box) |
| `transform` | [`Box`](game_board_types.md#box) |

#### Returns

[`Box`](game_board_types.md#box)

#### Defined in

[game/board/utils.ts:20](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/utils.ts#L20)

___

### union

▸ **union**<`P`\>(`...queries`): [`default`](../classes/game_board_element_collection.default.md)<`P`, [`default`](../classes/game_board_element.default.md)<`P`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...queries` | (`undefined` \| [`default`](../classes/game_board_element.default.md)<`P`\> \| [`default`](../classes/game_board_element_collection.default.md)<`P`, [`default`](../classes/game_board_element.default.md)<`P`\>\>)[] |

#### Returns

[`default`](../classes/game_board_element_collection.default.md)<`P`, [`default`](../classes/game_board_element.default.md)<`P`\>\>

#### Defined in

[game/board/utils.ts:6](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/utils.ts#L6)
