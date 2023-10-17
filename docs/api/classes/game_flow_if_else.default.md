[boardzilla](../index.md) / [Modules](../modules.md) / [game/flow/if-else](../modules/game_flow_if_else.md) / default

# Class: default<P\>

[game/flow/if-else](../modules/game_flow_if_else.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

## Hierarchy

- [`default`](game_flow_switch_case.default.md)<`P`, `boolean`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](game_flow_if_else.default.md#constructor)

### Properties

- [block](game_flow_if_else.default.md#block)
- [cases](game_flow_if_else.default.md#cases)
- [default](game_flow_if_else.default.md#default)
- [game](game_flow_if_else.default.md#game)
- [name](game_flow_if_else.default.md#name)
- [parent](game_flow_if_else.default.md#parent)
- [position](game_flow_if_else.default.md#position)
- [sequence](game_flow_if_else.default.md#sequence)
- [step](game_flow_if_else.default.md#step)
- [switch](game_flow_if_else.default.md#switch)
- [top](game_flow_if_else.default.md#top)
- [type](game_flow_if_else.default.md#type)

### Methods

- [actionNeeded](game_flow_if_else.default.md#actionneeded)
- [advance](game_flow_if_else.default.md#advance)
- [branchJSON](game_flow_if_else.default.md#branchjson)
- [currentBlock](game_flow_if_else.default.md#currentblock)
- [currentFlow](game_flow_if_else.default.md#currentflow)
- [currentLoop](game_flow_if_else.default.md#currentloop)
- [flowStepArgs](game_flow_if_else.default.md#flowstepargs)
- [fromJSON](game_flow_if_else.default.md#fromjson)
- [play](game_flow_if_else.default.md#play)
- [playOneStep](game_flow_if_else.default.md#playonestep)
- [processMove](game_flow_if_else.default.md#processmove)
- [reset](game_flow_if_else.default.md#reset)
- [setBranchFromJSON](game_flow_if_else.default.md#setbranchfromjson)
- [setPosition](game_flow_if_else.default.md#setposition)
- [setPositionFromJSON](game_flow_if_else.default.md#setpositionfromjson)
- [toJSON](game_flow_if_else.default.md#tojson)
- [toString](game_flow_if_else.default.md#tostring)

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
| › `else?` | [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\> |
| › `if` | (`r`: `Record`<`any`, `any`\>) => `boolean` |
| › `name?` | `string` |

#### Overrides

[default](game_flow_switch_case.default.md).[constructor](game_flow_switch_case.default.md#constructor)

#### Defined in

[game/flow/if-else.ts:7](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/if-else.ts#L7)

## Properties

### block

• `Optional` **block**: [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Inherited from

[default](game_flow_switch_case.default.md).[block](game_flow_switch_case.default.md#block)

#### Defined in

[game/flow/flow.ts:22](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L22)

___

### cases

• **cases**: [`SwitchCaseCases`](../modules/game_flow_types.md#switchcasecases)<`P`, `boolean`\>

#### Inherited from

[default](game_flow_switch_case.default.md).[cases](game_flow_switch_case.default.md#cases)

#### Defined in

[game/flow/switch-case.ts:12](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/switch-case.ts#L12)

___

### default

• `Optional` **default**: [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Inherited from

[default](game_flow_switch_case.default.md).[default](game_flow_switch_case.default.md#default)

#### Defined in

[game/flow/switch-case.ts:13](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/switch-case.ts#L13)

___

### game

• **game**: [`default`](game_game.default.md)<`P`, [`default`](game_board_board.default.md)<`P`\>\>

#### Inherited from

[default](game_flow_switch_case.default.md).[game](game_flow_switch_case.default.md#game)

#### Defined in

[game/flow/flow.ts:25](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L25)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[default](game_flow_switch_case.default.md).[name](game_flow_switch_case.default.md#name)

#### Defined in

[game/flow/flow.ts:17](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L17)

___

### parent

• `Optional` **parent**: [`default`](game_flow_flow.default.md)<`P`\>

#### Inherited from

[default](game_flow_switch_case.default.md).[parent](game_flow_switch_case.default.md#parent)

#### Defined in

[game/flow/flow.ts:24](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L24)

___

### position

• **position**: [`SwitchCasePostion`](../modules/game_flow_types.md#switchcasepostion)<`boolean`\>

#### Inherited from

[default](game_flow_switch_case.default.md).[position](game_flow_switch_case.default.md#position)

#### Defined in

[game/flow/switch-case.ts:10](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/switch-case.ts#L10)

___

### sequence

• `Optional` **sequence**: `number`

#### Inherited from

[default](game_flow_switch_case.default.md).[sequence](game_flow_switch_case.default.md#sequence)

#### Defined in

[game/flow/flow.ts:19](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L19)

___

### step

• `Optional` **step**: [`FlowStep`](../modules/game_flow_types.md#flowstep)<`P`\>

#### Inherited from

[default](game_flow_switch_case.default.md).[step](game_flow_switch_case.default.md#step)

#### Defined in

[game/flow/flow.ts:21](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L21)

___

### switch

• **switch**: `boolean` \| (`a?`: `Record`<`string`, `any`\>) => `boolean`

#### Inherited from

[default](game_flow_switch_case.default.md).[switch](game_flow_switch_case.default.md#switch)

#### Defined in

[game/flow/switch-case.ts:11](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/switch-case.ts#L11)

___

### top

• **top**: [`default`](game_flow_flow.default.md)<`P`\>

#### Inherited from

[default](game_flow_switch_case.default.md).[top](game_flow_switch_case.default.md#top)

#### Defined in

[game/flow/flow.ts:23](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L23)

___

### type

• **type**: ``"action"`` \| ``"sequence"`` \| ``"loop"`` \| ``"foreach"`` \| ``"switch-case"`` = `"switch-case"`

#### Inherited from

[default](game_flow_switch_case.default.md).[type](game_flow_switch_case.default.md#type)

#### Defined in

[game/flow/switch-case.ts:14](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/switch-case.ts#L14)

## Methods

### actionNeeded

▸ **actionNeeded**(): `undefined` \| { `actions`: `string`[] ; `expand`: `boolean` ; `prompt?`: `string` ; `skipIfOnlyOne`: `boolean`  }

#### Returns

`undefined` \| { `actions`: `string`[] ; `expand`: `boolean` ; `prompt?`: `string` ; `skipIfOnlyOne`: `boolean`  }

#### Inherited from

[default](game_flow_switch_case.default.md).[actionNeeded](game_flow_switch_case.default.md#actionneeded)

#### Defined in

[game/flow/flow.ts:111](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L111)

___

### advance

▸ **advance**(): ``"complete"`` \| ``"ok"``

#### Returns

``"complete"`` \| ``"ok"``

#### Inherited from

[default](game_flow_switch_case.default.md).[advance](game_flow_switch_case.default.md#advance)

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

#### Inherited from

[default](game_flow_switch_case.default.md).[branchJSON](game_flow_switch_case.default.md#branchjson)

#### Defined in

[game/flow/flow.ts:51](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L51)

___

### currentBlock

▸ **currentBlock**(): `undefined` \| [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Returns

`undefined` \| [`FlowDefinition`](../modules/game_flow_types.md#flowdefinition)<`P`\>

#### Inherited from

[default](game_flow_switch_case.default.md).[currentBlock](game_flow_switch_case.default.md#currentblock)

#### Defined in

[game/flow/switch-case.ts:41](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/switch-case.ts#L41)

___

### currentFlow

▸ **currentFlow**(): [`default`](game_flow_flow.default.md)<`P`\>

#### Returns

[`default`](game_flow_flow.default.md)<`P`\>

#### Inherited from

[default](game_flow_switch_case.default.md).[currentFlow](game_flow_switch_case.default.md#currentflow)

#### Defined in

[game/flow/flow.ts:103](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L103)

___

### currentLoop

▸ **currentLoop**(): `undefined` \| [`default`](game_flow_flow.default.md)<`P`\> & { `repeat`: `Function`  }

#### Returns

`undefined` \| [`default`](game_flow_flow.default.md)<`P`\> & { `repeat`: `Function`  }

#### Inherited from

[default](game_flow_switch_case.default.md).[currentLoop](game_flow_switch_case.default.md#currentloop)

#### Defined in

[game/flow/flow.ts:107](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L107)

___

### flowStepArgs

▸ **flowStepArgs**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Inherited from

[default](game_flow_switch_case.default.md).[flowStepArgs](game_flow_switch_case.default.md#flowstepargs)

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
| `default` | `any` |
| `index` | `any` |
| `value` | [`Serializable`](../modules/game_action_types.md#serializable)<`P`\> |

#### Inherited from

[default](game_flow_switch_case.default.md).[fromJSON](game_flow_switch_case.default.md#fromjson)

#### Defined in

[game/flow/switch-case.ts:56](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/switch-case.ts#L56)

___

### play

▸ **play**(): `void` \| `string`[]

#### Returns

`void` \| `string`[]

#### Inherited from

[default](game_flow_switch_case.default.md).[play](game_flow_switch_case.default.md#play)

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

[default](game_flow_switch_case.default.md).[playOneStep](game_flow_switch_case.default.md#playonestep)

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

[default](game_flow_switch_case.default.md).[processMove](game_flow_switch_case.default.md#processmove)

#### Defined in

[game/flow/flow.ts:124](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L124)

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[default](game_flow_switch_case.default.md).[reset](game_flow_switch_case.default.md#reset)

#### Defined in

[game/flow/switch-case.ts:28](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/switch-case.ts#L28)

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

[default](game_flow_switch_case.default.md).[setBranchFromJSON](game_flow_switch_case.default.md#setbranchfromjson)

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

[default](game_flow_switch_case.default.md).[setPosition](game_flow_switch_case.default.md#setposition)

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

[default](game_flow_switch_case.default.md).[setPositionFromJSON](game_flow_switch_case.default.md#setpositionfromjson)

#### Defined in

[game/flow/flow.ts:99](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/flow.ts#L99)

___

### toJSON

▸ **toJSON**(`forPlayer?`): `Object`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `forPlayer` | `boolean` | `true` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `default` | `boolean` |
| `index` | `undefined` \| `number` |
| `value` | `any` |

#### Inherited from

[default](game_flow_switch_case.default.md).[toJSON](game_flow_switch_case.default.md#tojson)

#### Defined in

[game/flow/switch-case.ts:48](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/switch-case.ts#L48)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[default](game_flow_switch_case.default.md).[toString](game_flow_switch_case.default.md#tostring)

#### Defined in

[game/flow/if-else.ts:16](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/if-else.ts#L16)
