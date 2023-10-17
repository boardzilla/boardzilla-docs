[boardzilla](../index.md) / [Modules](../modules.md) / [game/flow/each-player](../modules/game_flow_each_player.md) / default

# Class: default<P\>

[game/flow/each-player](../modules/game_flow_each_player.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

## Hierarchy

- [`default`](game_flow_for_loop.default.md)<`P`, `P`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](game_flow_each_player.default.md#constructor)

### Properties

- [block](game_flow_each_player.default.md#block)
- [game](game_flow_each_player.default.md#game)
- [initial](game_flow_each_player.default.md#initial)
- [name](game_flow_each_player.default.md#name)
- [next](game_flow_each_player.default.md#next)
- [parent](game_flow_each_player.default.md#parent)
- [position](game_flow_each_player.default.md#position)
- [sequence](game_flow_each_player.default.md#sequence)
- [step](game_flow_each_player.default.md#step)
- [top](game_flow_each_player.default.md#top)
- [type](game_flow_each_player.default.md#type)
- [while](game_flow_each_player.default.md#while)

### Methods

- [actionNeeded](game_flow_each_player.default.md#actionneeded)
- [advance](game_flow_each_player.default.md#advance)
- [branchJSON](game_flow_each_player.default.md#branchjson)
- [currentBlock](game_flow_each_player.default.md#currentblock)
- [currentFlow](game_flow_each_player.default.md#currentflow)
- [currentLoop](game_flow_each_player.default.md#currentloop)
- [flowStepArgs](game_flow_each_player.default.md#flowstepargs)
- [fromJSON](game_flow_each_player.default.md#fromjson)
- [play](game_flow_each_player.default.md#play)
- [playOneStep](game_flow_each_player.default.md#playonestep)
- [processMove](game_flow_each_player.default.md#processmove)
- [repeat](game_flow_each_player.default.md#repeat)
- [reset](game_flow_each_player.default.md#reset)
- [setBranchFromJSON](game_flow_each_player.default.md#setbranchfromjson)
- [setPosition](game_flow_each_player.default.md#setposition)
- [setPositionFromJSON](game_flow_each_player.default.md#setpositionfromjson)
- [toJSON](game_flow_each_player.default.md#tojson)
- [toString](game_flow_each_player.default.md#tostring)

## Constructors

### constructor

• **new default**<`P`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `continueUntil?` | (`p`: `P`) => `boolean` |
| › `do` | [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\> |
| › `name` | `string` |
| › `nextPlayer?` | (`p`: `P`) => `P` |
| › `startingPlayer?` | `P` \| (`a`: `Record`<`any`, `any`\>) => `P` |
| › `turns?` | `number` |

#### Overrides

[default](game_flow_for_loop.default.md).[constructor](game_flow_for_loop.default.md#constructor)

#### Defined in

[game/flow/each-player.ts:8](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/each-player.ts#L8)

## Properties

### block

• **block**: [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Inherited from

[default](game_flow_for_loop.default.md).[block](game_flow_for_loop.default.md#block)

#### Defined in

[game/flow/for-loop.ts:8](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/for-loop.ts#L8)

___

### game

• **game**: [`default`](game_game.default.md)<`P`, [`default`](game_board_board.default.md)<`P`\>\>

#### Inherited from

[default](game_flow_for_loop.default.md).[game](game_flow_for_loop.default.md#game)

#### Defined in

[game/flow/flow.ts:25](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L25)

___

### initial

• **initial**: `P` \| (`a?`: `Record`<`string`, `any`\>) => `P`

#### Inherited from

[default](game_flow_for_loop.default.md).[initial](game_flow_for_loop.default.md#initial)

#### Defined in

[game/flow/for-loop.ts:10](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/for-loop.ts#L10)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[default](game_flow_for_loop.default.md).[name](game_flow_for_loop.default.md#name)

#### Defined in

[game/flow/flow.ts:17](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L17)

___

### next

• **next**: (`a`: `P`) => `P`

#### Type declaration

▸ (`a`): `P`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `P` |

##### Returns

`P`

#### Inherited from

[default](game_flow_for_loop.default.md).[next](game_flow_for_loop.default.md#next)

#### Defined in

[game/flow/for-loop.ts:11](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/for-loop.ts#L11)

___

### parent

• `Optional` **parent**: [`default`](game_flow_flow.default.md)<`P`\>

#### Inherited from

[default](game_flow_for_loop.default.md).[parent](game_flow_for_loop.default.md#parent)

#### Defined in

[game/flow/flow.ts:24](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L24)

___

### position

• **position**: [`ForLoopPosition`](../modules/game_flow_types.md#forloopposition)<`P`\>

#### Inherited from

[default](game_flow_for_loop.default.md).[position](game_flow_for_loop.default.md#position)

#### Defined in

[game/flow/for-loop.ts:9](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/for-loop.ts#L9)

___

### sequence

• `Optional` **sequence**: `number`

#### Inherited from

[default](game_flow_for_loop.default.md).[sequence](game_flow_for_loop.default.md#sequence)

#### Defined in

[game/flow/flow.ts:19](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L19)

___

### step

• `Optional` **step**: [`FlowStep`](../modules/game_flow_types.md#flowstep)<`P`\>

#### Inherited from

[default](game_flow_for_loop.default.md).[step](game_flow_for_loop.default.md#step)

#### Defined in

[game/flow/flow.ts:21](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L21)

___

### top

• **top**: [`default`](game_flow_flow.default.md)<`P`\>

#### Inherited from

[default](game_flow_for_loop.default.md).[top](game_flow_for_loop.default.md#top)

#### Defined in

[game/flow/flow.ts:23](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L23)

___

### type

• **type**: ``"action"`` \| ``"sequence"`` \| ``"loop"`` \| ``"foreach"`` \| ``"switch-case"`` = `'loop'`

#### Inherited from

[default](game_flow_for_loop.default.md).[type](game_flow_for_loop.default.md#type)

#### Defined in

[game/flow/for-loop.ts:13](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/for-loop.ts#L13)

___

### while

• **while**: (`a`: `P`) => `boolean`

#### Type declaration

▸ (`a`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `P` |

##### Returns

`boolean`

#### Inherited from

[default](game_flow_for_loop.default.md).[while](game_flow_for_loop.default.md#while)

#### Defined in

[game/flow/for-loop.ts:12](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/for-loop.ts#L12)

## Methods

### actionNeeded

▸ **actionNeeded**(): `undefined` \| { `actions`: `string`[] ; `expand`: `boolean` ; `prompt?`: `string` ; `skipIfOnlyOne`: `boolean`  }

#### Returns

`undefined` \| { `actions`: `string`[] ; `expand`: `boolean` ; `prompt?`: `string` ; `skipIfOnlyOne`: `boolean`  }

#### Inherited from

[default](game_flow_for_loop.default.md).[actionNeeded](game_flow_for_loop.default.md#actionneeded)

#### Defined in

[game/flow/flow.ts:111](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L111)

___

### advance

▸ **advance**(): ``"complete"`` \| ``"ok"``

#### Returns

``"complete"`` \| ``"ok"``

#### Inherited from

[default](game_flow_for_loop.default.md).[advance](game_flow_for_loop.default.md#advance)

#### Defined in

[game/flow/for-loop.ts:41](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/for-loop.ts#L41)

___

### branchJSON

▸ **branchJSON**(`forPlayer?`): [`FlowBranchJSON`](../modules/game_flow_types.md#flowbranchjson)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `forPlayer` | `boolean` | `true` |

#### Returns

[`FlowBranchJSON`](../modules/game_flow_types.md#flowbranchjson)[]

#### Inherited from

[default](game_flow_for_loop.default.md).[branchJSON](game_flow_for_loop.default.md#branchjson)

#### Defined in

[game/flow/flow.ts:51](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L51)

___

### currentBlock

▸ **currentBlock**(): `undefined` \| [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Returns

`undefined` \| [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Inherited from

[default](game_flow_for_loop.default.md).[currentBlock](game_flow_for_loop.default.md#currentblock)

#### Defined in

[game/flow/for-loop.ts:37](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/for-loop.ts#L37)

___

### currentFlow

▸ **currentFlow**(): [`default`](game_flow_flow.default.md)<`P`\>

#### Returns

[`default`](game_flow_flow.default.md)<`P`\>

#### Inherited from

[default](game_flow_for_loop.default.md).[currentFlow](game_flow_for_loop.default.md#currentflow)

#### Defined in

[game/flow/flow.ts:103](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L103)

___

### currentLoop

▸ **currentLoop**(): `undefined` \| [`default`](game_flow_flow.default.md)<`P`\> & { `repeat`: `Function`  }

#### Returns

`undefined` \| [`default`](game_flow_flow.default.md)<`P`\> & { `repeat`: `Function`  }

#### Inherited from

[default](game_flow_for_loop.default.md).[currentLoop](game_flow_for_loop.default.md#currentloop)

#### Defined in

[game/flow/flow.ts:107](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L107)

___

### flowStepArgs

▸ **flowStepArgs**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

[default](game_flow_for_loop.default.md).[flowStepArgs](game_flow_for_loop.default.md#flowstepargs)

#### Defined in

[game/flow/flow.ts:34](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L34)

___

### fromJSON

▸ **fromJSON**(`position`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `index` | `any` |
| `value` | `undefined` \| `P` |

#### Overrides

[default](game_flow_for_loop.default.md).[fromJSON](game_flow_for_loop.default.md#fromjson)

#### Defined in

[game/flow/each-player.ts:49](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/each-player.ts#L49)

___

### play

▸ **play**(): `void` \| `string`[]

#### Returns

`void` \| `string`[]

#### Inherited from

[default](game_flow_for_loop.default.md).[play](game_flow_for_loop.default.md#play)

#### Defined in

[game/flow/flow.ts:172](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L172)

___

### playOneStep

▸ **playOneStep**(): `string`[] \| ``"complete"`` \| ``"ok"``

advance flow one step and return 'complete' if complete, 'ok' if can
continue, 'skip'/'repeat' to skip/repeat the current loop. return a list of
actions if now waiting for player input. override for self-contained flows
that do not have subflows.

#### Returns

`string`[] \| ``"complete"`` \| ``"ok"``

#### Inherited from

[default](game_flow_for_loop.default.md).[playOneStep](game_flow_for_loop.default.md#playonestep)

#### Defined in

[game/flow/flow.ts:136](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L136)

___

### processMove

▸ **processMove**(`move`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `move` | [`ActionStepPosition`](../modules/game_flow_types.md#actionstepposition)<`P`\> |

#### Returns

`undefined` \| `string`

#### Inherited from

[default](game_flow_for_loop.default.md).[processMove](game_flow_for_loop.default.md#processmove)

#### Defined in

[game/flow/flow.ts:124](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L124)

___

### repeat

▸ **repeat**(): ``"complete"`` \| ``"ok"``

#### Returns

``"complete"`` \| ``"ok"``

#### Inherited from

[default](game_flow_for_loop.default.md).[repeat](game_flow_for_loop.default.md#repeat)

#### Defined in

[game/flow/for-loop.ts:52](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/for-loop.ts#L52)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[default](game_flow_for_loop.default.md).[reset](game_flow_for_loop.default.md#reset)

#### Defined in

[game/flow/for-loop.ts:28](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/for-loop.ts#L28)

___

### setBranchFromJSON

▸ **setBranchFromJSON**(`branch`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `branch` | [`FlowBranchJSON`](../modules/game_flow_types.md#flowbranchjson)[] |

#### Returns

`void`

#### Inherited from

[default](game_flow_for_loop.default.md).[setBranchFromJSON](game_flow_for_loop.default.md#setbranchfromjson)

#### Defined in

[game/flow/flow.ts:64](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L64)

___

### setPosition

▸ **setPosition**(`position`, `sequence?`, `reset?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `position` | [`ForLoopPosition`](../modules/game_flow_types.md#forloopposition)<`P`\> | `undefined` |
| `sequence?` | `number` | `undefined` |
| `reset` | `boolean` | `true` |

#### Returns

`void`

#### Overrides

[default](game_flow_for_loop.default.md).[setPosition](game_flow_for_loop.default.md#setposition)

#### Defined in

[game/flow/each-player.ts:33](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/each-player.ts#L33)

___

### setPositionFromJSON

▸ **setPositionFromJSON**(`positionJSON`, `sequence?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `positionJSON` | `any` |
| `sequence?` | `number` |

#### Returns

`void`

#### Inherited from

[default](game_flow_for_loop.default.md).[setPositionFromJSON](game_flow_for_loop.default.md#setpositionfromjson)

#### Defined in

[game/flow/flow.ts:99](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L99)

___

### toJSON

▸ **toJSON**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `undefined` \| [`SerializedSingleArg`](../modules/game_action_types.md#serializedsinglearg) |

#### Overrides

[default](game_flow_for_loop.default.md).[toJSON](game_flow_for_loop.default.md#tojson)

#### Defined in

[game/flow/each-player.ts:42](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/each-player.ts#L42)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[default](game_flow_for_loop.default.md).[toString](game_flow_for_loop.default.md#tostring)

#### Defined in

[game/flow/each-player.ts:56](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/each-player.ts#L56)
