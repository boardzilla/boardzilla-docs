[boardzilla](../index.md) / [Modules](../modules.md) / game/action

# Module: game/action

## Table of contents

### References

- [Action](game_action.md#action)
- [Selection](game_action.md#selection)
- [deserializeArg](game_action.md#deserializearg)
- [humanizeArg](game_action.md#humanizearg)
- [serializeArg](game_action.md#serializearg)

### Functions

- [action](game_action.md#action-1)

## References

### Action

Renames and re-exports [default](../classes/game_action_action.default.md)

___

### Selection

Renames and re-exports [default](../classes/game_action_selection.default.md)

___

### deserializeArg

Re-exports [deserializeArg](game_action_utils.md#deserializearg)

___

### humanizeArg

Re-exports [humanizeArg](game_action_utils.md#humanizearg)

___

### serializeArg

Re-exports [serializeArg](game_action_utils.md#serializearg)

## Functions

### action

▸ **action**<`P`\>(`definition`): [`default`](../classes/game_action_action.default.md)<`P`, []\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `Object` |
| `definition.condition?` | `boolean` \| () => `boolean` |
| `definition.message?` | `string` \| (...`args`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => `string` |
| `definition.prompt` | `string` |

#### Returns

[`default`](../classes/game_action_action.default.md)<`P`, []\>

#### Defined in

[game/action/index.ts:15](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/index.ts#L15)
