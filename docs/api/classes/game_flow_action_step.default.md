[boardzilla](../index.md) / [Modules](../modules.md) / [game/flow/action-step](../modules/game_flow_action_step.md) / default

# Class: default<P\>

[game/flow/action-step](../modules/game_flow_action_step.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

## Hierarchy

- [`default`](game_flow_flow.default.md)<`P`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](game_flow_action_step.default.md#constructor)

### Properties

- [actions](game_flow_action_step.default.md#actions)
- [block](game_flow_action_step.default.md#block)
- [expand](game_flow_action_step.default.md#expand)
- [game](game_flow_action_step.default.md#game)
- [name](game_flow_action_step.default.md#name)
- [parent](game_flow_action_step.default.md#parent)
- [position](game_flow_action_step.default.md#position)
- [prompt](game_flow_action_step.default.md#prompt)
- [sequence](game_flow_action_step.default.md#sequence)
- [skipIfOnlyOne](game_flow_action_step.default.md#skipifonlyone)
- [step](game_flow_action_step.default.md#step)
- [top](game_flow_action_step.default.md#top)
- [type](game_flow_action_step.default.md#type)

### Methods

- [actionNeeded](game_flow_action_step.default.md#actionneeded)
- [advance](game_flow_action_step.default.md#advance)
- [awaitingAction](game_flow_action_step.default.md#awaitingaction)
- [branchJSON](game_flow_action_step.default.md#branchjson)
- [currentBlock](game_flow_action_step.default.md#currentblock)
- [currentFlow](game_flow_action_step.default.md#currentflow)
- [currentLoop](game_flow_action_step.default.md#currentloop)
- [flowStepArgs](game_flow_action_step.default.md#flowstepargs)
- [fromJSON](game_flow_action_step.default.md#fromjson)
- [play](game_flow_action_step.default.md#play)
- [playOneStep](game_flow_action_step.default.md#playonestep)
- [processMove](game_flow_action_step.default.md#processmove)
- [reset](game_flow_action_step.default.md#reset)
- [setBranchFromJSON](game_flow_action_step.default.md#setbranchfromjson)
- [setPosition](game_flow_action_step.default.md#setposition)
- [setPositionFromJSON](game_flow_action_step.default.md#setpositionfromjson)
- [toJSON](game_flow_action_step.default.md#tojson)
- [toString](game_flow_action_step.default.md#tostring)

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
| › `actions` | `Record`<`string`, ``null`` \| [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>\> |
| › `expand?` | `boolean` |
| › `name?` | `string` |
| › `prompt?` | `string` |
| › `skipIfOnlyOne?` | `boolean` |

#### Overrides

[default](game_flow_flow.default.md).[constructor](game_flow_flow.default.md#constructor)

#### Defined in

[game/flow/action-step.ts:16](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L16)

## Properties

### actions

• **actions**: `Record`<`string`, ``null`` \| [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>\>

#### Defined in

[game/flow/action-step.ts:10](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L10)

___

### block

• `Optional` **block**: [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Inherited from

[default](game_flow_flow.default.md).[block](game_flow_flow.default.md#block)

#### Defined in

[game/flow/flow.ts:22](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L22)

___

### expand

• **expand**: `boolean`

#### Defined in

[game/flow/action-step.ts:14](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L14)

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

• **position**: [`ActionStepPosition`](../modules/game_flow_types.md#actionstepposition)<`P`\>

#### Overrides

[default](game_flow_flow.default.md).[position](game_flow_flow.default.md#position)

#### Defined in

[game/flow/action-step.ts:9](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L9)

___

### prompt

• `Optional` **prompt**: `string`

#### Defined in

[game/flow/action-step.ts:12](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L12)

___

### sequence

• `Optional` **sequence**: `number`

#### Inherited from

[default](game_flow_flow.default.md).[sequence](game_flow_flow.default.md#sequence)

#### Defined in

[game/flow/flow.ts:19](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L19)

___

### skipIfOnlyOne

• **skipIfOnlyOne**: `boolean`

#### Defined in

[game/flow/action-step.ts:13](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L13)

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

• **type**: ``"action"`` \| ``"sequence"`` \| ``"loop"`` \| ``"foreach"`` \| ``"switch-case"`` = `"action"`

#### Overrides

[default](game_flow_flow.default.md).[type](game_flow_flow.default.md#type)

#### Defined in

[game/flow/action-step.ts:11](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L11)

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

#### Inherited from

[default](game_flow_flow.default.md).[advance](game_flow_flow.default.md#advance)

#### Defined in

[game/flow/flow.ts:199](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L199)

___

### awaitingAction

▸ **awaitingAction**(): `undefined` \| `string`[]

#### Returns

`undefined` \| `string`[]

#### Defined in

[game/flow/action-step.ts:40](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L40)

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

[game/flow/action-step.ts:34](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L34)

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

▸ **fromJSON**(`position`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `any` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `action` | `any` |
| `args` | `any` |
| `player` | `any` |

#### Overrides

[default](game_flow_flow.default.md).[fromJSON](game_flow_flow.default.md#fromjson)

#### Defined in

[game/flow/action-step.ts:83](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L83)

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
| `move` | `Required`<[`ActionStepPosition`](../modules/game_flow_types.md#actionstepposition)<`P`\>\> |

#### Returns

`undefined` \| `string`

#### Overrides

[default](game_flow_flow.default.md).[processMove](game_flow_flow.default.md#processmove)

#### Defined in

[game/flow/action-step.ts:46](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L46)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Overrides

[default](game_flow_flow.default.md).[reset](game_flow_flow.default.md#reset)

#### Defined in

[game/flow/action-step.ts:30](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L30)

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

▸ **toJSON**(`forPlayer?`): { `action?`: `undefined` ; `args?`: `undefined` ; `player?`: `undefined`  } \| { `action`: `string` ; `args`: `undefined` \| [`SerializedArg`](../modules/game_action_types.md#serializedarg)[] ; `player`: `undefined` \| `number`  }

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `forPlayer` | `boolean` | `true` |

#### Returns

{ `action?`: `undefined` ; `args?`: `undefined` ; `player?`: `undefined`  } \| { `action`: `string` ; `args`: `undefined` \| [`SerializedArg`](../modules/game_action_types.md#serializedarg)[] ; `player`: `undefined` \| `number`  }

#### Overrides

[default](game_flow_flow.default.md).[toJSON](game_flow_flow.default.md#tojson)

#### Defined in

[game/flow/action-step.ts:74](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L74)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[default](game_flow_flow.default.md).[toString](game_flow_flow.default.md#tostring)

#### Defined in

[game/flow/action-step.ts:91](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/action-step.ts#L91)
