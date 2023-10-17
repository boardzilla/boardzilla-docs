[boardzilla](../index.md) / [Modules](../modules.md) / [game/action/action](../modules/game_action_action.md) / default

# Class: default<P, A\>

[game/action/action](../modules/game_action_action.md).default

Actions represent discreet moves players can make. The Action object is responsible for:
- providing Selection objects to players to aid in supplying appropriate Arguments
- validating player Arguments and returning any Selections needed to complete
- accepting player Arguments and altering board state

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |
| `A` | extends [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] |

## Table of contents

### Constructors

- [constructor](game_action_action.default.md#constructor)

### Properties

- [condition](game_action_action.default.md#condition)
- [message](game_action_action.default.md#message)
- [moves](game_action_action.default.md#moves)
- [name](game_action_action.default.md#name)
- [prompt](game_action_action.default.md#prompt)
- [selections](game_action_action.default.md#selections)

### Methods

- [chooseFrom](game_action_action.default.md#choosefrom)
- [chooseNumber](game_action_action.default.md#choosenumber)
- [chooseOnBoard](game_action_action.default.md#chooseonboard)
- [confirm](game_action_action.default.md#confirm)
- [do](game_action_action.default.md#do)
- [enterText](game_action_action.default.md#entertext)
- [getResolvedSelections](game_action_action.default.md#getresolvedselections)
- [isPossible](game_action_action.default.md#ispossible)
- [move](game_action_action.default.md#move)
- [nextSelection](game_action_action.default.md#nextselection)
- [process](game_action_action.default.md#process)

## Constructors

### constructor

• **new default**<`P`, `A`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |
| `A` | extends [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `condition?` | `boolean` \| () => `boolean` |
| › `message?` | `string` \| (...`args`: [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]) => `string` |
| › `prompt` | `string` |

#### Defined in

[game/action/action.ts:27](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L27)

## Properties

### condition

• `Optional` **condition**: `boolean` \| () => `boolean`

#### Defined in

[game/action/action.ts:24](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L24)

___

### message

• `Optional` **message**: `string` \| (...`args`: [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]) => `string`

#### Defined in

[game/action/action.ts:25](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L25)

___

### moves

• **moves**: (...`args`: [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]) => `void`[] = `[]`

#### Defined in

[game/action/action.ts:23](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L23)

___

### name

• `Optional` **name**: `string`

#### Defined in

[game/action/action.ts:20](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L20)

___

### prompt

• **prompt**: `string`

#### Defined in

[game/action/action.ts:21](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L21)

___

### selections

• **selections**: [`default`](game_action_selection.default.md)<`P`\>[] = `[]`

#### Defined in

[game/action/action.ts:22](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L22)

## Methods

### chooseFrom

▸ **chooseFrom**<`T`\>(`«destructured»`): [`default`](game_action_action.default.md)<`P`, [...A[], `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `number` \| `boolean` \| [`default`](game_player_player.default.md) \| [`default`](game_board_element.default.md)<`P`\> \| [`SingleArgument`](../modules/game_action_types.md#singleargument)<`P`\>[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `choices` | `Record`<`string`, `T`\> \| `T`[] \| (...`arg`: `A`) => `Record`<`string`, `T`\> \| `T`[] |
| › `expand?` | `boolean` |
| › `initial?` | `T` \| (...`arg`: `A`) => [`Argument`](../modules/game_action_types.md#argument)<`P`\> |
| › `prompt?` | `string` \| (...`arg`: `A`) => `string` |
| › `skipIfOnlyOne?` | `boolean` |

#### Returns

[`default`](game_action_action.default.md)<`P`, [...A[], `T`]\>

#### Defined in

[game/action/action.ts:126](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L126)

___

### chooseNumber

▸ **chooseNumber**(`«destructured»`): [`default`](game_action_action.default.md)<`P`, [...A[], `number`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `expand?` | `boolean` |
| › `initial?` | `number` \| (...`arg`: `A`) => `number` |
| › `max?` | `number` \| (...`arg`: `A`) => `number` |
| › `min?` | `number` \| (...`arg`: `A`) => `number` |
| › `prompt?` | `string` \| (...`arg`: `A`) => `string` |
| › `skipIfOnlyOne?` | `boolean` |

#### Returns

[`default`](game_action_action.default.md)<`P`, [...A[], `number`]\>

#### Defined in

[game/action/action.ts:151](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L151)

___

### chooseOnBoard

▸ **chooseOnBoard**<`T`\>(`«destructured»`): [`default`](game_action_action.default.md)<`P`, [...A[], `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `choices` | [`BoardQueryMulti`](../modules/game_action_types.md#boardquerymulti)<`P`, `T`\> |
| › `expand?` | `boolean` |
| › `prompt?` | `string` \| (...`arg`: `A`) => `string` |
| › `skipIfOnlyOne?` | `boolean` |

#### Returns

[`default`](game_action_action.default.md)<`P`, [...A[], `T`]\>

#### Defined in

[game/action/action.ts:163](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L163)

▸ **chooseOnBoard**<`T`\>(`«destructured»`): [`default`](game_action_action.default.md)<`P`, [...A[], [`T`]]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `choices` | [`BoardQueryMulti`](../modules/game_action_types.md#boardquerymulti)<`P`, `T`\> |
| › `expand?` | `boolean` |
| › `max?` | `number` \| (...`arg`: `A`) => `number` |
| › `min?` | `number` \| (...`arg`: `A`) => `number` |
| › `prompt?` | `string` \| (...`arg`: `A`) => `string` |
| › `skipIfOnlyOne?` | `boolean` |

#### Returns

[`default`](game_action_action.default.md)<`P`, [...A[], [`T`]]\>

#### Defined in

[game/action/action.ts:169](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L169)

___

### confirm

▸ **confirm**(`prompt`): [`default`](game_action_action.default.md)<`P`, [...A[], ``"confirm"``]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `prompt` | `string` \| (...`arg`: `A`) => `string` |

#### Returns

[`default`](game_action_action.default.md)<`P`, [...A[], ``"confirm"``]\>

#### Defined in

[game/action/action.ts:146](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L146)

___

### do

▸ **do**(`move`): [`default`](game_action_action.default.md)<`P`, `A`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `move` | (...`args`: `A`) => `void` |

#### Returns

[`default`](game_action_action.default.md)<`P`, `A`\>

#### Defined in

[game/action/action.ts:121](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L121)

___

### enterText

▸ **enterText**(`«destructured»`): [`default`](game_action_action.default.md)<`P`, [...A[], `string`]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `initial?` | `string` \| (...`a`: [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]) => `string` |
| › `prompt` | `string` \| (...`arg`: `A`) => `string` |
| › `regexp?` | `RegExp` |

#### Returns

[`default`](game_action_action.default.md)<`P`, [...A[], `string`]\>

#### Defined in

[game/action/action.ts:137](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L137)

___

### getResolvedSelections

▸ **getResolvedSelections**(`...args`): `undefined` \| [`PendingMove`](../modules/game_action_types.md#pendingmove)<`P`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] |

#### Returns

`undefined` \| [`PendingMove`](../modules/game_action_types.md#pendingmove)<`P`\>[]

#### Defined in

[game/action/action.ts:43](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L43)

___

### isPossible

▸ **isPossible**(): `boolean`

#### Returns

`boolean`

#### Defined in

[game/action/action.ts:37](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L37)

___

### move

▸ **move**<`E`, `I`\>(`«destructured»`): [`default`](game_action_action.default.md)<`P`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`default`](game_board_piece.default.md)<`P`\> |
| `I` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `into` | [`BoardQuerySingle`](../modules/game_action_types.md#boardquerysingle)<`P`, `I`\> |
| › `piece` | [`BoardQuerySingle`](../modules/game_action_types.md#boardquerysingle)<`P`, `E`\> |
| › `prompt?` | `string` |

#### Returns

[`default`](game_action_action.default.md)<`P`, `A`\>

#### Defined in

[game/action/action.ts:192](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L192)

▸ **move**<`E`, `I`\>(`«destructured»`): [`default`](game_action_action.default.md)<`P`, [...A[], `E`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`default`](game_board_piece.default.md)<`P`\> |
| `I` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `choosePiece` | [`BoardQueryMulti`](../modules/game_action_types.md#boardquerymulti)<`P`, `E`\> |
| › `into` | [`BoardQuerySingle`](../modules/game_action_types.md#boardquerysingle)<`P`, `I`\> |
| › `prompt?` | `string` |

#### Returns

[`default`](game_action_action.default.md)<`P`, [...A[], `E`]\>

#### Defined in

[game/action/action.ts:197](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L197)

▸ **move**<`E`, `I`\>(`«destructured»`): [`default`](game_action_action.default.md)<`P`, [...A[], `I`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`default`](game_board_piece.default.md)<`P`\> |
| `I` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `chooseInto` | [`BoardQueryMulti`](../modules/game_action_types.md#boardquerymulti)<`P`, `I`\> |
| › `piece` | [`BoardQuerySingle`](../modules/game_action_types.md#boardquerysingle)<`P`, `E`\> |
| › `prompt?` | `string` |
| › `promptInto?` | `string` |

#### Returns

[`default`](game_action_action.default.md)<`P`, [...A[], `I`]\>

#### Defined in

[game/action/action.ts:202](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L202)

▸ **move**<`E`, `I`\>(`«destructured»`): [`default`](game_action_action.default.md)<`P`, [...A[], `E`, `I`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`default`](game_board_piece.default.md)<`P`\> |
| `I` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `chooseInto` | [`BoardQueryMulti`](../modules/game_action_types.md#boardquerymulti)<`P`, `I`\> |
| › `choosePiece` | [`BoardQueryMulti`](../modules/game_action_types.md#boardquerymulti)<`P`, `E`\> |
| › `prompt?` | `string` |
| › `promptInto?` | `string` |

#### Returns

[`default`](game_action_action.default.md)<`P`, [...A[], `E`, `I`]\>

#### Defined in

[game/action/action.ts:208](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L208)

___

### nextSelection

▸ **nextSelection**(`...args`): `undefined` \| [`ResolvedSelection`](../modules/game_action_types.md#resolvedselection)<`P`\>

given a partial arg list, returns a selection object for continuation if one exists.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] |

#### Returns

`undefined` \| [`ResolvedSelection`](../modules/game_action_types.md#resolvedselection)<`P`\>

#### Defined in

[game/action/action.ts:81](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L81)

___

### process

▸ **process**(`...args`): `undefined` \| `string`

process this action with supplied args. returns error if any

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] |

#### Returns

`undefined` \| `string`

#### Defined in

[game/action/action.ts:92](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/action.ts#L92)
