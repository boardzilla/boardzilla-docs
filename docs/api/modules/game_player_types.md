[boardzilla](../index.md) / [Modules](../modules.md) / game/player/types

# Module: game/player/types

## Table of contents

### Type Aliases

- [PlayerAttributes](game_player_types.md#playerattributes)

## Type Aliases

### PlayerAttributes

Ƭ **PlayerAttributes**<`T`\>: { [K in keyof InstanceType<Function\> as InstanceType<Function\>[K] extends Function ? never : K]: InstanceType<Function\>[K] }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/player/types.d.ts:3](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/types.d.ts#L3)
