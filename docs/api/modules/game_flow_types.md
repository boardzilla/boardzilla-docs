[boardzilla](../index.md) / [Modules](../modules.md) / game/flow/types

# Module: game/flow/types

## Table of contents

### Type Aliases

- [ActionStepPosition](game_flow_types.md#actionstepposition)
- [FlowBranchJSON](game_flow_types.md#flowbranchjson)
- [FlowBranchNode](game_flow_types.md#flowbranchnode)
- [FlowDefinition](game_flow_types.md#flowdefinition)
- [FlowStep](game_flow_types.md#flowstep)
- [ForEachPosition](game_flow_types.md#foreachposition)
- [ForLoopPosition](game_flow_types.md#forloopposition)
- [Position](game_flow_types.md#position)
- [SwitchCaseCases](game_flow_types.md#switchcasecases)
- [SwitchCasePostion](game_flow_types.md#switchcasepostion)
- [WhileLoopPosition](game_flow_types.md#whileloopposition)

## Type Aliases

### ActionStepPosition

Ƭ **ActionStepPosition**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action?` | `string` |
| `args?` | [`Argument`](game_action_types.md#argument)<`P`\>[] |
| `player?` | `number` |

#### Defined in

[game/flow/types.d.ts:8](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/types.d.ts#L8)

___

### FlowBranchJSON

Ƭ **FlowBranchJSON**: `Omit`<[`FlowBranchNode`](game_flow_types.md#flowbranchnode)<[`default`](../classes/game_player_player.default.md)\>, ``"position"``\> & { `position?`: `any`  }

#### Defined in

[game/flow/types.d.ts:40](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/types.d.ts#L40)

___

### FlowBranchNode

Ƭ **FlowBranchNode**<`P`\>: { `type`: ``"sequence"``  } \| { `position`: [`ActionStepPosition`](game_flow_types.md#actionstepposition)<`P`\> ; `type`: ``"action"``  } \| { `position`: [`WhileLoopPosition`](game_flow_types.md#whileloopposition) \| [`ForLoopPosition`](game_flow_types.md#forloopposition)<`any`\> ; `type`: ``"loop"``  } \| { `position`: [`ForEachPosition`](game_flow_types.md#foreachposition)<`any`\> ; `type`: ``"foreach"``  } \| { `position`: [`SwitchCasePostion`](game_flow_types.md#switchcasepostion)<`any`\> ; `type`: ``"switch-case"``  } & { `name?`: `string` ; `sequence?`: `number`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/flow/types.d.ts:21](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/types.d.ts#L21)

___

### FlowDefinition

Ƭ **FlowDefinition**<`P`\>: [`FlowStep`](game_flow_types.md#flowstep)<`P`\> \| [`FlowStep`](game_flow_types.md#flowstep)<`P`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/flow/types.d.ts:6](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/types.d.ts#L6)

___

### FlowStep

Ƭ **FlowStep**<`P`\>: [`default`](../classes/game_flow_flow.default.md)<`P`\> \| (`args`: `Record`<`string`, `any`\>) => `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/flow/types.d.ts:5](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/types.d.ts#L5)

___

### ForEachPosition

Ƭ **ForEachPosition**<`T`\>: [`ForLoopPosition`](game_flow_types.md#forloopposition)<`T`\> & { `collection`: `T`[]  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[game/flow/types.d.ts:15](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/types.d.ts#L15)

___

### ForLoopPosition

Ƭ **ForLoopPosition**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | `T` |

#### Defined in

[game/flow/types.d.ts:14](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/types.d.ts#L14)

___

### Position

Ƭ **Position**<`P`\>: [`ActionStepPosition`](game_flow_types.md#actionstepposition)<`P`\> \| [`ForLoopPosition`](game_flow_types.md#forloopposition)<`any`\> \| [`WhileLoopPosition`](game_flow_types.md#whileloopposition) \| [`ForEachPosition`](game_flow_types.md#foreachposition)<`any`\> \| [`SwitchCasePostion`](game_flow_types.md#switchcasepostion)<`any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/flow/types.d.ts:17](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/types.d.ts#L17)

___

### SwitchCaseCases

Ƭ **SwitchCaseCases**<`P`, `T`\>: { `do`: [`FlowDefinition`](game_flow_types.md#flowdefinition)<`P`\> ; `eq`: `T`  }[] \| { `do`: [`FlowDefinition`](game_flow_types.md#flowdefinition)<`P`\> ; `test`: (`a`: `T`) => `boolean`  }[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | `T` |

#### Defined in

[game/flow/types.d.ts:42](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/types.d.ts#L42)

___

### SwitchCasePostion

Ƭ **SwitchCasePostion**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `default?` | `boolean` |
| `index?` | `number` |
| `value?` | `T` |

#### Defined in

[game/flow/types.d.ts:16](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/types.d.ts#L16)

___

### WhileLoopPosition

Ƭ **WhileLoopPosition**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Defined in

[game/flow/types.d.ts:13](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/types.d.ts#L13)
