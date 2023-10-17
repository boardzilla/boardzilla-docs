[boardzilla](../index.md) / [Modules](../modules.md) / game/types

# Module: game/types

## Table of contents

### Type Aliases

- [GameInterface](game_types.md#gameinterface)
- [SetupFunction](game_types.md#setupfunction)
- [Sorter](game_types.md#sorter)

## Type Aliases

### GameInterface

Ƭ **GameInterface**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getPlayerState` | (`state`: [`GameState`](types.md#gamestate)<`P`\>, `position`: `number`) => [`GameState`](types.md#gamestate)<`P`\> |
| `initialState` | (`state`: [`SetupState`](types.md#setupstate)<`P`\>, `rseed`: `string`) => [`GameUpdate`](types.md#gameupdate)<`P`\> |
| `processMove` | (`previousState`: [`GameState`](types.md#gamestate)<`P`\>, `move`: { `data`: [`SerializedMove`](game_action_types.md#serializedmove) ; `position`: `number`  }, `rseed`: `string`) => [`GameUpdate`](types.md#gameupdate)<`P`\> |

#### Defined in

[game/types.d.ts:13](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/types.d.ts#L13)

___

### SetupFunction

Ƭ **SetupFunction**<`P`, `B`\>: (`state`: [`SetupState`](types.md#setupstate)<`P`\> \| [`GameState`](types.md#gamestate)<`P`\>, `start`: `boolean`) => [`default`](../classes/game_game.default.md)<`P`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `B` | extends [`default`](../classes/game_board_board.default.md)<`P`\> |

#### Type declaration

▸ (`state`, `start`): [`default`](../classes/game_game.default.md)<`P`, `B`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`SetupState`](types.md#setupstate)<`P`\> \| [`GameState`](types.md#gamestate)<`P`\> |
| `start` | `boolean` |

##### Returns

[`default`](../classes/game_game.default.md)<`P`, `B`\>

#### Defined in

[game/types.d.ts:11](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/types.d.ts#L11)

___

### Sorter

Ƭ **Sorter**<`T`\>: keyof { [K in keyof T]: T[K] extends number \| string ? never : K } \| (`e`: `T`) => `number` \| `string`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[game/types.d.ts:29](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/types.d.ts#L29)
