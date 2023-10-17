[boardzilla](../index.md) / [Modules](../modules.md) / game/utils

# Module: game/utils

## Table of contents

### Functions

- [createInteface](game_utils.md#createinteface)
- [isA](game_utils.md#isa)
- [range](game_utils.md#range)
- [shuffleArray](game_utils.md#shufflearray)
- [times](game_utils.md#times)

## Functions

### createInteface

▸ **createInteface**(`setup`): [`GameInterface`](game_types.md#gameinterface)<[`default`](../classes/game_player_player.default.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `setup` | [`SetupFunction`](game_types.md#setupfunction)<[`default`](../classes/game_player_player.default.md), [`default`](../classes/game_board_board.default.md)<[`default`](../classes/game_player_player.default.md)\>\> |

#### Returns

[`GameInterface`](game_types.md#gameinterface)<[`default`](../classes/game_player_player.default.md)\>

#### Defined in

[game/utils.ts:10](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/utils.ts#L10)

___

### isA

▸ **isA**<`P`\>(`el`, `el2`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | [`default`](../classes/game_board_element.default.md)<`P`\> |
| `el2` | (...`a`: `any`[]) => `any` |
| `el2.name` | `string` |

#### Returns

`boolean`

#### Defined in

[game/utils.ts:60](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/utils.ts#L60)

___

### range

▸ **range**(`min`, `max`, `step?`): `any`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `min` | `number` | `undefined` |
| `max` | `number` | `undefined` |
| `step` | `number` | `1` |

#### Returns

`any`[]

#### Defined in

[game/utils.ts:71](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/utils.ts#L71)

___

### shuffleArray

▸ **shuffleArray**(`array`, `random`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any`[] |
| `random` | () => `number` |

#### Returns

`void`

#### Defined in

[game/utils.ts:62](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/utils.ts#L62)

___

### times

▸ **times**(`n`, `fn`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `fn` | (`n`: `number`) => `any` |

#### Returns

`any`[]

#### Defined in

[game/utils.ts:70](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/utils.ts#L70)
