[boardzilla](../index.md) / [Modules](../modules.md) / game/flow

# Module: game/flow

## Table of contents

### References

- [Flow](game_flow.md#flow)

### Functions

- [eachPlayer](game_flow.md#eachplayer)
- [forEach](game_flow.md#foreach)
- [forLoop](game_flow.md#forloop)
- [ifElse](game_flow.md#ifelse)
- [playerActions](game_flow.md#playeractions)
- [repeat](game_flow.md#repeat)
- [skip](game_flow.md#skip)
- [switchCase](game_flow.md#switchcase)
- [whileLoop](game_flow.md#whileloop)

## References

### Flow

Renames and re-exports [default](../classes/game_flow_flow.default.md)

## Functions

### eachPlayer

▸ **eachPlayer**<`P`\>(`eachPlayerConfig`): [`default`](../classes/game_flow_each_player.default.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eachPlayerConfig` | `Object` |
| `eachPlayerConfig.continueUntil?` | (`p`: `P`) => `boolean` |
| `eachPlayerConfig.do` | [`FlowDefinition`](game_flow_types.md#flowdefinition)<`P`\> |
| `eachPlayerConfig.name` | `string` |
| `eachPlayerConfig.nextPlayer?` | (`p`: `P`) => `P` |
| `eachPlayerConfig.startingPlayer?` | `P` \| (`a`: `Record`<`any`, `any`\>) => `P` |
| `eachPlayerConfig.turns?` | `number` |

#### Returns

[`default`](../classes/game_flow_each_player.default.md)<`P`\>

#### Defined in

[game/flow/index.ts:24](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/index.ts#L24)

___

### forEach

▸ **forEach**<`P`, `T`\>(`forEachConfig`): [`default`](../classes/game_flow_foreach.default.md)<`P`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | extends `undefined` \| ``null`` \| `string` \| `number` \| `boolean` \| [`default`](../classes/game_player_player.default.md) \| [`default`](../classes/game_board_element.default.md)<`P`\> \| [`Serializable`](game_action_types.md#serializable)<`P`\>[] \| { `[key: string]`: [`Serializable`](game_action_types.md#serializable)<`P`\>;  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `forEachConfig` | `Object` |
| `forEachConfig.collection` | `T`[] \| (`a`: `Record`<`string`, `any`\>) => `T`[] |
| `forEachConfig.do` | [`FlowDefinition`](game_flow_types.md#flowdefinition)<`P`\> |
| `forEachConfig.name` | `string` |

#### Returns

[`default`](../classes/game_flow_foreach.default.md)<`P`, `T`\>

#### Defined in

[game/flow/index.ts:23](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/index.ts#L23)

___

### forLoop

▸ **forLoop**<`P`, `T`\>(`forLoopConfig`): [`default`](../classes/game_flow_for_loop.default.md)<`P`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | [`Serializable`](game_action_types.md#serializable)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `forLoopConfig` | `Object` |
| `forLoopConfig.do` | [`FlowDefinition`](game_flow_types.md#flowdefinition)<`P`\> |
| `forLoopConfig.initial` | `T` \| (`a`: `Record`<`string`, `any`\>) => `T` |
| `forLoopConfig.name` | `string` |
| `forLoopConfig.next` | (`a`: `T`) => `T` |
| `forLoopConfig.while` | (`a`: `T`) => `boolean` |

#### Returns

[`default`](../classes/game_flow_for_loop.default.md)<`P`, `T`\>

#### Defined in

[game/flow/index.ts:22](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/index.ts#L22)

___

### ifElse

▸ **ifElse**<`P`\>(`ifElseConfig`): [`default`](../classes/game_flow_if_else.default.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ifElseConfig` | `Object` |
| `ifElseConfig.do` | [`FlowDefinition`](game_flow_types.md#flowdefinition)<`P`\> |
| `ifElseConfig.else?` | [`FlowDefinition`](game_flow_types.md#flowdefinition)<`P`\> |
| `ifElseConfig.if` | (`r`: `Record`<`any`, `any`\>) => `boolean` |
| `ifElseConfig.name?` | `string` |

#### Returns

[`default`](../classes/game_flow_if_else.default.md)<`P`\>

#### Defined in

[game/flow/index.ts:25](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/index.ts#L25)

___

### playerActions

▸ **playerActions**<`P`\>(`playerActionsConfig`): [`default`](../classes/game_flow_action_step.default.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `playerActionsConfig` | `Object` |
| `playerActionsConfig.actions` | `Record`<`string`, ``null`` \| [`FlowDefinition`](game_flow_types.md#flowdefinition)<`P`\>\> |
| `playerActionsConfig.expand?` | `boolean` |
| `playerActionsConfig.name?` | `string` |
| `playerActionsConfig.prompt?` | `string` |
| `playerActionsConfig.skipIfOnlyOne?` | `boolean` |

#### Returns

[`default`](../classes/game_flow_action_step.default.md)<`P`\>

#### Defined in

[game/flow/index.ts:20](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/index.ts#L20)

___

### repeat

▸ **repeat**(): `never`

#### Returns

`never`

#### Defined in

[game/flow/index.ts:28](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/index.ts#L28)

___

### skip

▸ **skip**(): `never`

#### Returns

`never`

#### Defined in

[game/flow/index.ts:29](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/index.ts#L29)

___

### switchCase

▸ **switchCase**<`P`, `T`\>(`switchCaseConfig`): [`default`](../classes/game_flow_switch_case.default.md)<`P`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | extends `undefined` \| ``null`` \| `string` \| `number` \| `boolean` \| [`default`](../classes/game_player_player.default.md) \| [`default`](../classes/game_board_element.default.md)<`P`\> \| [`Serializable`](game_action_types.md#serializable)<`P`\>[] \| { `[key: string]`: [`Serializable`](game_action_types.md#serializable)<`P`\>;  } |

#### Parameters

| Name | Type |
| :------ | :------ |
| `switchCaseConfig` | `Object` |
| `switchCaseConfig.cases` | [`SwitchCaseCases`](game_flow_types.md#switchcasecases)<`P`, `T`\> |
| `switchCaseConfig.default?` | [`FlowDefinition`](game_flow_types.md#flowdefinition)<`P`\> |
| `switchCaseConfig.name?` | `string` |
| `switchCaseConfig.switch` | `T` \| (`r`: `Record`<`string`, `any`\>) => `T` |

#### Returns

[`default`](../classes/game_flow_switch_case.default.md)<`P`, `T`\>

#### Defined in

[game/flow/index.ts:26](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/index.ts#L26)

___

### whileLoop

▸ **whileLoop**<`P`\>(`whileLoopConfig`): [`default`](../classes/game_flow_while_loop.default.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `whileLoopConfig` | `Object` |
| `whileLoopConfig.do` | [`FlowDefinition`](game_flow_types.md#flowdefinition)<`P`\> |
| `whileLoopConfig.name?` | `string` |
| `whileLoopConfig.while` | () => `boolean` |

#### Returns

[`default`](../classes/game_flow_while_loop.default.md)<`P`\>

#### Defined in

[game/flow/index.ts:21](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/flow/index.ts#L21)
