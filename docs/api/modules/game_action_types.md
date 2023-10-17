[boardzilla](../index.md) / [Modules](../modules.md) / game/action/types

# Module: game/action/types

## Table of contents

### Type Aliases

- [Argument](game_action_types.md#argument)
- [BoardQuery](game_action_types.md#boardquery)
- [BoardQueryMulti](game_action_types.md#boardquerymulti)
- [BoardQuerySingle](game_action_types.md#boardquerysingle)
- [BoardSelection](game_action_types.md#boardselection)
- [ButtonSelection](game_action_types.md#buttonselection)
- [ChoiceSelection](game_action_types.md#choiceselection)
- [IncompleteMove](game_action_types.md#incompletemove)
- [Move](game_action_types.md#move)
- [MoveResponse](game_action_types.md#moveresponse)
- [NumberSelection](game_action_types.md#numberselection)
- [PendingMove](game_action_types.md#pendingmove)
- [ResolvedSelection](game_action_types.md#resolvedselection)
- [SelectionDefinition](game_action_types.md#selectiondefinition)
- [Serializable](game_action_types.md#serializable)
- [SerializedArg](game_action_types.md#serializedarg)
- [SerializedMove](game_action_types.md#serializedmove)
- [SerializedSingleArg](game_action_types.md#serializedsinglearg)
- [SingleArgument](game_action_types.md#singleargument)
- [TextSelection](game_action_types.md#textselection)

## Type Aliases

### Argument

Ƭ **Argument**<`P`\>: [`SingleArgument`](game_action_types.md#singleargument)<`P`\> \| [`SingleArgument`](game_action_types.md#singleargument)<`P`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/action/types.d.ts:6](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L6)

___

### BoardQuery

Ƭ **BoardQuery**<`P`, `T`\>: [`BoardQuerySingle`](game_action_types.md#boardquerysingle)<`P`, `T`\> \| [`BoardQueryMulti`](game_action_types.md#boardquerymulti)<`P`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | extends [`default`](../classes/game_board_element.default.md)<`P`\> |

#### Defined in

[game/action/types.d.ts:13](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L13)

___

### BoardQueryMulti

Ƭ **BoardQueryMulti**<`P`, `T`\>: `string` \| `T`[] \| (...`a`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => `T`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | extends [`default`](../classes/game_board_element.default.md)<`P`\> |

#### Defined in

[game/action/types.d.ts:12](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L12)

___

### BoardQuerySingle

Ƭ **BoardQuerySingle**<`P`, `T`\>: `string` \| `T` \| `undefined` \| (...`a`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => `T` \| `undefined`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | extends [`default`](../classes/game_board_element.default.md)<`P`\> |

#### Defined in

[game/action/types.d.ts:11](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L11)

___

### BoardSelection

Ƭ **BoardSelection**<`P`, `T`\>: `Object`

Selection objects represent player choices. They either specify the options
or provide enough information for the client to contextually show options to
players at runtime

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | extends [`default`](../classes/game_board_element.default.md)<`P`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `chooseFrom` | [`BoardQueryMulti`](game_action_types.md#boardquerymulti)<`P`, `T`\> |
| `max?` | `number` \| (...`a`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => `number` |
| `min?` | `number` \| (...`a`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => `number` |

#### Defined in

[game/action/types.d.ts:45](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L45)

___

### ButtonSelection

Ƭ **ButtonSelection**<`P`\>: [`Argument`](game_action_types.md#argument)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/action/types.d.ts:67](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L67)

___

### ChoiceSelection

Ƭ **ChoiceSelection**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `choices` | [`Argument`](game_action_types.md#argument)<`P`\>[] \| `Record`<`string`, [`Argument`](game_action_types.md#argument)<`P`\>\> \| (...`a`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => [`Argument`](game_action_types.md#argument)<`P`\>[] \| `Record`<`string`, [`Argument`](game_action_types.md#argument)<`P`\>\> |
| `initial?` | [`Argument`](game_action_types.md#argument)<`P`\> \| (...`a`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => [`Argument`](game_action_types.md#argument)<`P`\> |

#### Defined in

[game/action/types.d.ts:51](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L51)

___

### IncompleteMove

Ƭ **IncompleteMove**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action?` | `string` |
| `args` | [`Argument`](game_action_types.md#argument)<`P`\>[] |
| `player` | `P` |

#### Defined in

[game/action/types.d.ts:23](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L23)

___

### Move

Ƭ **Move**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `args` | [`Argument`](game_action_types.md#argument)<`P`\>[] |
| `player` | `P` |

#### Defined in

[game/action/types.d.ts:16](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L16)

___

### MoveResponse

Ƭ **MoveResponse**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error?` | `string` |
| `move` | [`IncompleteMove`](game_action_types.md#incompletemove)<`P`\> |
| `selection?` | [`ResolvedSelection`](game_action_types.md#resolvedselection)<`P`\> |

#### Defined in

[game/action/types.d.ts:117](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L117)

___

### NumberSelection

Ƭ **NumberSelection**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `initial?` | `number` \| (...`a`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => `number` |
| `max?` | `number` \| (...`a`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => `number` |
| `min?` | `number` \| (...`a`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => `number` |

#### Defined in

[game/action/types.d.ts:56](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L56)

___

### PendingMove

Ƭ **PendingMove**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `args` | [`Argument`](game_action_types.md#argument)<`P`\>[] |
| `selection` | [`ResolvedSelection`](game_action_types.md#resolvedselection)<`P`\> |

#### Defined in

[game/action/types.d.ts:29](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L29)

___

### ResolvedSelection

Ƭ **ResolvedSelection**<`P`\>: `Omit`<[`default`](../classes/game_action_selection.default.md)<`P`\>, ``"prompt"`` \| ``"choices"`` \| ``"boardChoices"`` \| ``"min"`` \| ``"max"`` \| ``"initial"`` \| ``"regexp"``\> & { `boardChoices?`: [`default`](../classes/game_board_element.default.md)<`P`\>[] ; `choices?`: [`Argument`](game_action_types.md#argument)<`P`\>[] \| `Record`<`string`, [`Argument`](game_action_types.md#argument)<`P`\>\> ; `initial?`: [`Argument`](game_action_types.md#argument)<`P`\> ; `max?`: `number` ; `min?`: `number` ; `prompt?`: `string` ; `regexp?`: `RegExp`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/action/types.d.ts:106](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L106)

___

### SelectionDefinition

Ƭ **SelectionDefinition**<`P`\>: { `clientContext?`: `Record`<`any`, `any`\> ; `expand?`: `boolean` ; `prompt?`: `string` \| (...`a`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => `string` ; `skipIfOnlyOne?`: `boolean`  } & { `enterText?`: `never` ; `selectFromChoices?`: `never` ; `selectNumber?`: `never` ; `selectOnBoard`: [`BoardSelection`](game_action_types.md#boardselection)<`P`, [`default`](../classes/game_board_element.default.md)<`P`\>\> ; `value?`: `never`  } \| { `enterText?`: `never` ; `selectFromChoices`: [`ChoiceSelection`](game_action_types.md#choiceselection)<`P`\> ; `selectNumber?`: `never` ; `selectOnBoard?`: `never` ; `value?`: `never`  } \| { `enterText?`: `never` ; `selectFromChoices?`: `never` ; `selectNumber`: [`NumberSelection`](game_action_types.md#numberselection)<`P`\> ; `selectOnBoard?`: `never` ; `value?`: `never`  } \| { `enterText`: [`TextSelection`](game_action_types.md#textselection)<`P`\> ; `selectFromChoices?`: `never` ; `selectNumber?`: `never` ; `selectOnBoard?`: `never` ; `value?`: `never`  } \| { `enterText?`: `never` ; `selectFromChoices?`: `never` ; `selectNumber?`: `never` ; `selectOnBoard?`: `never` ; `value`: [`ButtonSelection`](game_action_types.md#buttonselection)<`P`\>  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/action/types.d.ts:69](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L69)

___

### Serializable

Ƭ **Serializable**<`P`\>: [`SingleArgument`](game_action_types.md#singleargument)<`P`\> \| ``null`` \| `undefined` \| [`Serializable`](game_action_types.md#serializable)<`P`\>[] \| { `[key: string]`: [`Serializable`](game_action_types.md#serializable)<`P`\>;  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/action/types.d.ts:9](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L9)

___

### SerializedArg

Ƭ **SerializedArg**: [`SerializedSingleArg`](game_action_types.md#serializedsinglearg) \| [`SerializedSingleArg`](game_action_types.md#serializedsinglearg)[]

#### Defined in

[game/action/types.d.ts:8](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L8)

___

### SerializedMove

Ƭ **SerializedMove**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `args` | [`SerializedArg`](game_action_types.md#serializedarg)[] |

#### Defined in

[game/action/types.d.ts:35](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L35)

___

### SerializedSingleArg

Ƭ **SerializedSingleArg**: `string` \| `number` \| `boolean`

#### Defined in

[game/action/types.d.ts:7](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L7)

___

### SingleArgument

Ƭ **SingleArgument**<`P`\>: `string` \| `number` \| `boolean` \| [`default`](../classes/game_board_element.default.md)<`P`\> \| `P`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/action/types.d.ts:5](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L5)

___

### TextSelection

Ƭ **TextSelection**<`P`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `initial?` | `string` \| (...`a`: [`Argument`](game_action_types.md#argument)<`P`\>[]) => `string` |
| `regexp?` | `RegExp` |

#### Defined in

[game/action/types.d.ts:62](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/types.d.ts#L62)
