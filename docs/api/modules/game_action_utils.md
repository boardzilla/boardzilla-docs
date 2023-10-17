[boardzilla](../index.md) / [Modules](../modules.md) / game/action/utils

# Module: game/action/utils

## Table of contents

### Functions

- [deserialize](game_action_utils.md#deserialize)
- [deserializeArg](game_action_utils.md#deserializearg)
- [deserializeObject](game_action_utils.md#deserializeobject)
- [deserializeSingleArg](game_action_utils.md#deserializesinglearg)
- [escapeArgument](game_action_utils.md#escapeargument)
- [humanizeArg](game_action_utils.md#humanizearg)
- [serialize](game_action_utils.md#serialize)
- [serializeArg](game_action_utils.md#serializearg)
- [serializeObject](game_action_utils.md#serializeobject)
- [serializeSingleArg](game_action_utils.md#serializesinglearg)

## Functions

### deserialize

▸ **deserialize**<`P`\>(`arg`, `game`): [`Serializable`](game_action_types.md#serializable)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |
| `game` | [`default`](../classes/game_game.default.md)<`P`, [`default`](../classes/game_board_board.default.md)<`P`\>\> |

#### Returns

[`Serializable`](game_action_types.md#serializable)<`P`\>

#### Defined in

[game/action/utils.ts:72](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/utils.ts#L72)

___

### deserializeArg

▸ **deserializeArg**<`P`\>(`arg`, `game`): [`Argument`](game_action_types.md#argument)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`SerializedArg`](game_action_types.md#serializedarg) |
| `game` | [`default`](../classes/game_game.default.md)<`P`, [`default`](../classes/game_board_board.default.md)<`P`\>\> |

#### Returns

[`Argument`](game_action_types.md#argument)<`P`\>

#### Defined in

[game/action/utils.ts:31](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/utils.ts#L31)

___

### deserializeObject

▸ **deserializeObject**<`P`\>(`obj`, `game`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `any`\> |
| `game` | [`default`](../classes/game_game.default.md)<`P`, [`default`](../classes/game_board_board.default.md)<`P`\>\> |

#### Returns

`Object`

#### Defined in

[game/action/utils.ts:57](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/utils.ts#L57)

___

### deserializeSingleArg

▸ **deserializeSingleArg**<`P`\>(`arg`, `game`): [`SingleArgument`](game_action_types.md#singleargument)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`SerializedSingleArg`](game_action_types.md#serializedsinglearg) |
| `game` | [`default`](../classes/game_game.default.md)<`P`, [`default`](../classes/game_board_board.default.md)<`P`\>\> |

#### Returns

[`SingleArgument`](game_action_types.md#singleargument)<`P`\>

#### Defined in

[game/action/utils.ts:36](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/utils.ts#L36)

___

### escapeArgument

▸ **escapeArgument**<`P`\>(`arg`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`Argument`](game_action_types.md#argument)<`P`\> |

#### Returns

`string`

#### Defined in

[game/action/utils.ts:82](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/utils.ts#L82)

___

### humanizeArg

▸ **humanizeArg**<`P`\>(`arg`): `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`Argument`](game_action_types.md#argument)<`P`\> |

#### Returns

`string`

#### Defined in

[game/action/utils.ts:14](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/utils.ts#L14)

___

### serialize

▸ **serialize**<`P`\>(`arg`, `forPlayer?`): `any`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arg` | [`Serializable`](game_action_types.md#serializable)<`P`\> | `undefined` |
| `forPlayer` | `boolean` | `true` |

#### Returns

`any`

#### Defined in

[game/action/utils.ts:61](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/utils.ts#L61)

___

### serializeArg

▸ **serializeArg**<`P`\>(`arg`, `forPlayer?`): [`SerializedArg`](game_action_types.md#serializedarg)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arg` | [`Argument`](game_action_types.md#argument)<`P`\> | `undefined` |
| `forPlayer` | `boolean` | `true` |

#### Returns

[`SerializedArg`](game_action_types.md#serializedarg)

#### Defined in

[game/action/utils.ts:20](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/utils.ts#L20)

___

### serializeObject

▸ **serializeObject**(`obj`, `forPlayer?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `Record`<`string`, `any`\> | `undefined` |
| `forPlayer` | `boolean` | `true` |

#### Returns

`Object`

#### Defined in

[game/action/utils.ts:53](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/utils.ts#L53)

___

### serializeSingleArg

▸ **serializeSingleArg**<`P`\>(`arg`, `forPlayer?`): [`SerializedSingleArg`](game_action_types.md#serializedsinglearg)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `arg` | [`SingleArgument`](game_action_types.md#singleargument)<`P`\> | `undefined` |
| `forPlayer` | `boolean` | `true` |

#### Returns

[`SerializedSingleArg`](game_action_types.md#serializedsinglearg)

#### Defined in

[game/action/utils.ts:25](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/utils.ts#L25)
