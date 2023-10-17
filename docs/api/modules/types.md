[boardzilla](../index.md) / [Modules](../modules.md) / types

# Module: types

## Table of contents

### Type Aliases

- [GameState](types.md#gamestate)
- [GameUpdate](types.md#gameupdate)
- [Message](types.md#message)
- [PlayerPositionState](types.md#playerpositionstate)
- [SetupState](types.md#setupstate)

## Type Aliases

### GameState

Ƭ **GameState**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `board` | [`ElementJSON`](game_board_types.md#elementjson)[] |
| `currentPlayerPosition?` | `number` |
| `players` | [`PlayerAttributes`](game_player_types.md#playerattributes)<`P`\>[] |
| `position` | [`FlowBranchJSON`](game_flow_types.md#flowbranchjson)[] |
| `rseed` | `string` |
| `settings` | `Record`<`string`, `any`\> |

#### Defined in

[types.d.ts:11](https://github.com/aghull/boardzilla-core/blob/1935b1b/types.d.ts#L11)

___

### GameUpdate

Ƭ **GameUpdate**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `game` | [`GameState`](types.md#gamestate)<`P`\> |
| `messages` | [`Message`](types.md#message)[] |
| `players` | [`PlayerPositionState`](types.md#playerpositionstate)<`P`\>[] |

#### Defined in

[types.d.ts:30](https://github.com/aghull/boardzilla-core/blob/1935b1b/types.d.ts#L30)

___

### Message

Ƭ **Message**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `body` | `string` |
| `position?` | `number` |

#### Defined in

[types.d.ts:25](https://github.com/aghull/boardzilla-core/blob/1935b1b/types.d.ts#L25)

___

### PlayerPositionState

Ƭ **PlayerPositionState**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `position` | `number` |
| `state` | [`GameState`](types.md#gamestate)<`P`\> |

#### Defined in

[types.d.ts:20](https://github.com/aghull/boardzilla-core/blob/1935b1b/types.d.ts#L20)

___

### SetupState

Ƭ **SetupState**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `players` | [`PlayerAttributes`](game_player_types.md#playerattributes)<`P`\> & `Record`<`string`, `any`\>[] |
| `settings` | `Record`<`string`, `any`\> |

#### Defined in

[types.d.ts:6](https://github.com/aghull/boardzilla-core/blob/1935b1b/types.d.ts#L6)
