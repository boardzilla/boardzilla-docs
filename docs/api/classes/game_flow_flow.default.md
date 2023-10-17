[boardzilla](../index.md) / [Modules](../modules.md) / [game/flow/flow](../modules/game_flow_flow.md) / default

# Class: default<P\>

[game/flow/flow](../modules/game_flow_flow.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

## Hierarchy

- **`default`**

  ↳ [`default`](game_flow_action_step.default.md)

  ↳ [`default`](game_flow_for_loop.default.md)

  ↳ [`default`](game_flow_switch_case.default.md)

  ↳ [`default`](game_flow_while_loop.default.md)

## Table of contents

### Constructors

- [constructor](game_flow_flow.default.md#constructor)

### Properties

- [block](game_flow_flow.default.md#block)
- [game](game_flow_flow.default.md#game)
- [name](game_flow_flow.default.md#name)
- [parent](game_flow_flow.default.md#parent)
- [position](game_flow_flow.default.md#position)
- [sequence](game_flow_flow.default.md#sequence)
- [step](game_flow_flow.default.md#step)
- [top](game_flow_flow.default.md#top)
- [type](game_flow_flow.default.md#type)

### Methods

- [actionNeeded](game_flow_flow.default.md#actionneeded)
- [advance](game_flow_flow.default.md#advance)
- [branchJSON](game_flow_flow.default.md#branchjson)
- [currentBlock](game_flow_flow.default.md#currentblock)
- [currentFlow](game_flow_flow.default.md#currentflow)
- [currentLoop](game_flow_flow.default.md#currentloop)
- [flowStepArgs](game_flow_flow.default.md#flowstepargs)
- [fromJSON](game_flow_flow.default.md#fromjson)
- [play](game_flow_flow.default.md#play)
- [playOneStep](game_flow_flow.default.md#playonestep)
- [processMove](game_flow_flow.default.md#processmove)
- [reset](game_flow_flow.default.md#reset)
- [setBranchFromJSON](game_flow_flow.default.md#setbranchfromjson)
- [setPosition](game_flow_flow.default.md#setposition)
- [setPositionFromJSON](game_flow_flow.default.md#setpositionfromjson)
- [toJSON](game_flow_flow.default.md#tojson)
- [toString](game_flow_flow.default.md#tostring)

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
| › `do?` | [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\> |
| › `name?` | `string` |

#### Defined in

[game/flow/flow.ts:27](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L27)

## Properties

### block

• `Optional` **block**: [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Defined in

[game/flow/flow.ts:22](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L22)

___

### game

• **game**: [`default`](game_game.default.md)<`P`, [`default`](game_board_board.default.md)<`P`\>\>

#### Defined in

[game/flow/flow.ts:25](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L25)

___

### name

• `Optional` **name**: `string`

#### Defined in

[game/flow/flow.ts:17](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L17)

___

### parent

• `Optional` **parent**: [`default`](game_flow_flow.default.md)<`P`\>

#### Defined in

[game/flow/flow.ts:24](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L24)

___

### position

• `Optional` **position**: [`Position`](../modules/game_flow_types.md#position)<`P`\>

#### Defined in

[game/flow/flow.ts:18](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L18)

___

### sequence

• `Optional` **sequence**: `number`

#### Defined in

[game/flow/flow.ts:19](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L19)

___

### step

• `Optional` **step**: [`FlowStep`](../modules/game_flow_types.md#flowstep)<`P`\>

#### Defined in

[game/flow/flow.ts:21](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L21)

___

### top

• **top**: [`default`](game_flow_flow.default.md)<`P`\>

#### Defined in

[game/flow/flow.ts:23](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L23)

___

### type

• **type**: ``"action"`` \| ``"sequence"`` \| ``"loop"`` \| ``"foreach"`` \| ``"switch-case"`` = `'sequence'`

#### Defined in

[game/flow/flow.ts:20](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L20)

## Methods

### actionNeeded

▸ **actionNeeded**(): `undefined` \| { `actions`: `string`[] ; `expand`: `boolean` ; `prompt?`: `string` ; `skipIfOnlyOne`: `boolean`  }

#### Returns

`undefined` \| { `actions`: `string`[] ; `expand`: `boolean` ; `prompt?`: `string` ; `skipIfOnlyOne`: `boolean`  }

#### Defined in

[game/flow/flow.ts:111](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L111)

___

### advance

▸ **advance**(): ``"complete"`` \| ``"ok"``

#### Returns

``"complete"`` \| ``"ok"``

#### Defined in

[game/flow/flow.ts:199](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L199)

___

### branchJSON

▸ **branchJSON**(`forPlayer?`): [`FlowBranchJSON`](../modules/game_flow_types.md#flowbranchjson)[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `forPlayer` | `boolean` | `true` |

#### Returns

[`FlowBranchJSON`](../modules/game_flow_types.md#flowbranchjson)[]

#### Defined in

[game/flow/flow.ts:51](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L51)

___

### currentBlock

▸ **currentBlock**(): `undefined` \| [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Returns

`undefined` \| [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Defined in

[game/flow/flow.ts:184](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L184)

___

### currentFlow

▸ **currentFlow**(): [`default`](game_flow_flow.default.md)<`P`\>

#### Returns

[`default`](game_flow_flow.default.md)<`P`\>

#### Defined in

[game/flow/flow.ts:103](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L103)

___

### currentLoop

▸ **currentLoop**(): `undefined` \| [`default`](game_flow_flow.default.md)<`P`\> & { `repeat`: `Function`  }

#### Returns

`undefined` \| [`default`](game_flow_flow.default.md)<`P`\> & { `repeat`: `Function`  }

#### Defined in

[game/flow/flow.ts:107](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L107)

___

### flowStepArgs

▸ **flowStepArgs**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

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

#### Defined in

[game/flow/flow.ts:194](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L194)

___

### play

▸ **play**(): `void` \| `string`[]

#### Returns

`void` \| `string`[]

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

#### Defined in

[game/flow/flow.ts:124](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L124)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

[game/flow/flow.ts:179](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L179)

___

### setBranchFromJSON

▸ **setBranchFromJSON**(`branch`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `branch` | [`FlowBranchJSON`](../modules/game_flow_types.md#flowbranchjson)[] |

#### Returns

`void`

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

#### Defined in

[game/flow/flow.ts:189](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L189)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[game/flow/flow.ts:203](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L203)
