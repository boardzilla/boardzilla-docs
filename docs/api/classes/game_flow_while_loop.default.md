[boardzilla](../index.md) / [Modules](../modules.md) / [game/flow/while-loop](../modules/game_flow_while_loop.md) / default

# Class: default<P\>

[game/flow/while-loop](../modules/game_flow_while_loop.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

## Hierarchy

- [`default`](game_flow_flow.default.md)<`P`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](game_flow_while_loop.default.md#constructor)

### Properties

- [block](game_flow_while_loop.default.md#block)
- [game](game_flow_while_loop.default.md#game)
- [name](game_flow_while_loop.default.md#name)
- [parent](game_flow_while_loop.default.md#parent)
- [position](game_flow_while_loop.default.md#position)
- [sequence](game_flow_while_loop.default.md#sequence)
- [step](game_flow_while_loop.default.md#step)
- [top](game_flow_while_loop.default.md#top)
- [type](game_flow_while_loop.default.md#type)
- [while](game_flow_while_loop.default.md#while)

### Methods

- [actionNeeded](game_flow_while_loop.default.md#actionneeded)
- [advance](game_flow_while_loop.default.md#advance)
- [branchJSON](game_flow_while_loop.default.md#branchjson)
- [currentBlock](game_flow_while_loop.default.md#currentblock)
- [currentFlow](game_flow_while_loop.default.md#currentflow)
- [currentLoop](game_flow_while_loop.default.md#currentloop)
- [flowStepArgs](game_flow_while_loop.default.md#flowstepargs)
- [fromJSON](game_flow_while_loop.default.md#fromjson)
- [play](game_flow_while_loop.default.md#play)
- [playOneStep](game_flow_while_loop.default.md#playonestep)
- [processMove](game_flow_while_loop.default.md#processmove)
- [repeat](game_flow_while_loop.default.md#repeat)
- [reset](game_flow_while_loop.default.md#reset)
- [setBranchFromJSON](game_flow_while_loop.default.md#setbranchfromjson)
- [setPosition](game_flow_while_loop.default.md#setposition)
- [setPositionFromJSON](game_flow_while_loop.default.md#setpositionfromjson)
- [toJSON](game_flow_while_loop.default.md#tojson)
- [toString](game_flow_while_loop.default.md#tostring)

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
| › `do` | [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\> |
| › `name?` | `string` |
| › `while` | () => `boolean` |

#### Overrides

[default](game_flow_flow.default.md).[constructor](game_flow_flow.default.md#constructor)

#### Defined in

[game/flow/while-loop.ts:12](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/while-loop.ts#L12)

## Properties

### block

• **block**: [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Overrides

[default](game_flow_flow.default.md).[block](game_flow_flow.default.md#block)

#### Defined in

[game/flow/while-loop.ts:7](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/while-loop.ts#L7)

___

### game

• **game**: [`default`](game_game.default.md)<`P`, [`default`](game_board_board.default.md)<`P`\>\>

#### Inherited from

[default](game_flow_flow.default.md).[game](game_flow_flow.default.md#game)

#### Defined in

[game/flow/flow.ts:25](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L25)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[default](game_flow_flow.default.md).[name](game_flow_flow.default.md#name)

#### Defined in

[game/flow/flow.ts:17](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L17)

___

### parent

• `Optional` **parent**: [`default`](game_flow_flow.default.md)<`P`\>

#### Inherited from

[default](game_flow_flow.default.md).[parent](game_flow_flow.default.md#parent)

#### Defined in

[game/flow/flow.ts:24](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L24)

___

### position

• **position**: [`WhileLoopPosition`](../modules/game_flow_types.md#whileloopposition)

#### Overrides

[default](game_flow_flow.default.md).[position](game_flow_flow.default.md#position)

#### Defined in

[game/flow/while-loop.ts:8](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/while-loop.ts#L8)

___

### sequence

• `Optional` **sequence**: `number`

#### Inherited from

[default](game_flow_flow.default.md).[sequence](game_flow_flow.default.md#sequence)

#### Defined in

[game/flow/flow.ts:19](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L19)

___

### step

• `Optional` **step**: [`FlowStep`](../modules/game_flow_types.md#flowstep)<`P`\>

#### Inherited from

[default](game_flow_flow.default.md).[step](game_flow_flow.default.md#step)

#### Defined in

[game/flow/flow.ts:21](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L21)

___

### top

• **top**: [`default`](game_flow_flow.default.md)<`P`\>

#### Inherited from

[default](game_flow_flow.default.md).[top](game_flow_flow.default.md#top)

#### Defined in

[game/flow/flow.ts:23](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L23)

___

### type

• **type**: ``"action"`` \| ``"sequence"`` \| ``"loop"`` \| ``"foreach"`` \| ``"switch-case"`` = `'loop'`

#### Overrides

[default](game_flow_flow.default.md).[type](game_flow_flow.default.md#type)

#### Defined in

[game/flow/while-loop.ts:10](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/while-loop.ts#L10)

___

### while

• **while**: () => `boolean`

#### Type declaration

▸ (): `boolean`

##### Returns

`boolean`

#### Defined in

[game/flow/while-loop.ts:9](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/while-loop.ts#L9)

## Methods

### actionNeeded

▸ **actionNeeded**(): `undefined` \| { `actions`: `string`[] ; `expand`: `boolean` ; `prompt?`: `string` ; `skipIfOnlyOne`: `boolean`  }

#### Returns

`undefined` \| { `actions`: `string`[] ; `expand`: `boolean` ; `prompt?`: `string` ; `skipIfOnlyOne`: `boolean`  }

#### Inherited from

[default](game_flow_flow.default.md).[actionNeeded](game_flow_flow.default.md#actionneeded)

#### Defined in

[game/flow/flow.ts:111](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L111)

___

### advance

▸ **advance**(): ``"complete"`` \| ``"ok"``

#### Returns

``"complete"`` \| ``"ok"``

#### Overrides

[default](game_flow_flow.default.md).[advance](game_flow_flow.default.md#advance)

#### Defined in

[game/flow/while-loop.ts:31](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/while-loop.ts#L31)

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

[default](game_flow_flow.default.md).[branchJSON](game_flow_flow.default.md#branchjson)

#### Defined in

[game/flow/flow.ts:51](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L51)

___

### currentBlock

▸ **currentBlock**(): `undefined` \| [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Returns

`undefined` \| [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Overrides

[default](game_flow_flow.default.md).[currentBlock](game_flow_flow.default.md#currentblock)

#### Defined in

[game/flow/while-loop.ts:27](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/while-loop.ts#L27)

___

### currentFlow

▸ **currentFlow**(): [`default`](game_flow_flow.default.md)<`P`\>

#### Returns

[`default`](game_flow_flow.default.md)<`P`\>

#### Inherited from

[default](game_flow_flow.default.md).[currentFlow](game_flow_flow.default.md#currentflow)

#### Defined in

[game/flow/flow.ts:103](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L103)

___

### currentLoop

▸ **currentLoop**(): `undefined` \| [`default`](game_flow_flow.default.md)<`P`\> & { `repeat`: `Function`  }

#### Returns

`undefined` \| [`default`](game_flow_flow.default.md)<`P`\> & { `repeat`: `Function`  }

#### Inherited from

[default](game_flow_flow.default.md).[currentLoop](game_flow_flow.default.md#currentloop)

#### Defined in

[game/flow/flow.ts:107](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L107)

___

### flowStepArgs

▸ **flowStepArgs**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

[default](game_flow_flow.default.md).[flowStepArgs](game_flow_flow.default.md#flowstepargs)

#### Defined in

[game/flow/flow.ts:34](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L34)

___

### fromJSON

▸ **fromJSON**(`json`): `undefined` \| [`Position`](../modules/game_flow_types.md#position)<`P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

`undefined` \| [`Position`](../modules/game_flow_types.md#position)<`P`\>

#### Inherited from

[default](game_flow_flow.default.md).[fromJSON](game_flow_flow.default.md#fromjson)

#### Defined in

[game/flow/flow.ts:194](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L194)

___

### play

▸ **play**(): `void` \| `string`[]

#### Returns

`void` \| `string`[]

#### Inherited from

[default](game_flow_flow.default.md).[play](game_flow_flow.default.md#play)

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

[default](game_flow_flow.default.md).[playOneStep](game_flow_flow.default.md#playonestep)

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

[default](game_flow_flow.default.md).[processMove](game_flow_flow.default.md#processmove)

#### Defined in

[game/flow/flow.ts:124](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L124)

___

### repeat

▸ **repeat**(): ``"complete"`` \| ``"ok"``

#### Returns

``"complete"`` \| ``"ok"``

#### Defined in

[game/flow/while-loop.ts:41](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/while-loop.ts#L41)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Overrides

[default](game_flow_flow.default.md).[reset](game_flow_flow.default.md#reset)

#### Defined in

[game/flow/while-loop.ts:21](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/while-loop.ts#L21)

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

[default](game_flow_flow.default.md).[setBranchFromJSON](game_flow_flow.default.md#setbranchfromjson)

#### Defined in

[game/flow/flow.ts:64](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L64)

___

### setPosition

▸ **setPosition**(`position`, `sequence?`, `reset?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `position` | `any` | `undefined` |
| `sequence?` | `number` | `undefined` |
| `reset` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[default](game_flow_flow.default.md).[setPosition](game_flow_flow.default.md#setposition)

#### Defined in

[game/flow/flow.ts:76](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L76)

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

[default](game_flow_flow.default.md).[setPositionFromJSON](game_flow_flow.default.md#setpositionfromjson)

#### Defined in

[game/flow/flow.ts:99](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L99)

___

### toJSON

▸ **toJSON**(`forPlayer?`): `any`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `forPlayer` | `boolean` | `true` |

#### Returns

`any`

#### Inherited from

[default](game_flow_flow.default.md).[toJSON](game_flow_flow.default.md#tojson)

#### Defined in

[game/flow/flow.ts:189](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L189)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[default](game_flow_flow.default.md).[toString](game_flow_flow.default.md#tostring)

#### Defined in

[game/flow/while-loop.ts:50](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/while-loop.ts#L50)
