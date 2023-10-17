[boardzilla](../index.md) / [Modules](../modules.md) / game

# Module: game

## Table of contents

### References

- [Flow](game.md#flow)
- [Game](game.md#game)
- [Player](game.md#player)
- [action](game.md#action)
- [eachPlayer](game.md#eachplayer)
- [forEach](game.md#foreach)
- [forLoop](game.md#forloop)
- [ifElse](game.md#ifelse)
- [isA](game.md#isa)
- [playerActions](game.md#playeractions)
- [repeat](game.md#repeat)
- [skip](game.md#skip)
- [switchCase](game.md#switchcase)
- [times](game.md#times)
- [union](game.md#union)
- [whileLoop](game.md#whileloop)

### Functions

- [default](game.md#default)
- [imports](game.md#imports)

## References

### Flow

Renames and re-exports [default](../classes/game_flow_flow.default.md)

___

### Game

Renames and re-exports [default](../classes/game_game.default.md)

___

### Player

Renames and re-exports [default](../classes/game_player_player.default.md)

___

### action

Re-exports [action](game_action.md#action-1)

___

### eachPlayer

Re-exports [eachPlayer](game_flow.md#eachplayer)

___

### forEach

Re-exports [forEach](game_flow.md#foreach)

___

### forLoop

Re-exports [forLoop](game_flow.md#forloop)

___

### ifElse

Re-exports [ifElse](game_flow.md#ifelse)

___

### isA

Re-exports [isA](game_utils.md#isa)

___

### playerActions

Re-exports [playerActions](game_flow.md#playeractions)

___

### repeat

Re-exports [repeat](game_flow.md#repeat)

___

### skip

Re-exports [skip](game_flow.md#skip)

___

### switchCase

Re-exports [switchCase](game_flow.md#switchcase)

___

### times

Re-exports [times](game_utils.md#times)

___

### union

Re-exports [union](game_board_utils.md#union)

___

### whileLoop

Re-exports [whileLoop](game_flow.md#whileloop)

## Functions

### default

▸ **default**<`P`, `B`\>(`«destructured»`): [`SetupFunction`](game_types.md#setupfunction)<`P`, `B`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `B` | extends [`default`](../classes/game_board_board.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `actions` | (`game`: [`default`](../classes/game_game.default.md)<`P`, `B`\>, `board`: `B`) => `Record`<`string`, (`player`: `P`) => [`default`](../classes/game_action_action.default.md)<`P`, [`Argument`](game_action_types.md#argument)<`P`\>[]\>\> |
| › `boardClass` | [`ElementClass`](game_board_types.md#elementclass)<`P`, `B`\> |
| › `elementClasses?` | [`ElementClass`](game_board_types.md#elementclass)<`P`, [`default`](../classes/game_board_element.default.md)<`P`\>\>[] |
| › `playerClass` | (`a`: [`PlayerAttributes`](game_player_types.md#playerattributes)<`P`\>) => `P` |
| › `setupBoard?` | (`game`: [`default`](../classes/game_game.default.md)<`P`, `B`\>, `board`: `B`) => `any` |
| › `setupFlow` | (`game`: [`default`](../classes/game_game.default.md)<`P`, `B`\>, `board`: `B`) => [`default`](../classes/game_flow_flow.default.md)<`P`\> |
| › `setupLayout?` | (`board`: `B`, `aspectRatio`: `number`) => `void` |

#### Returns

[`SetupFunction`](game_types.md#setupfunction)<`P`, `B`\>

#### Defined in

[game/index.ts:51](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/index.ts#L51)

___

### imports

▸ **imports**<`P`\>(): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `Board` | `Object` |
| `Piece` | `Object` |
| `Space` | `Object` |
| `action` | `Function` |

#### Defined in

[game/index.ts:44](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/index.ts#L44)
