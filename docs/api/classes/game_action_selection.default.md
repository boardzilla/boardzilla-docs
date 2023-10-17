[boardzilla](../index.md) / [Modules](../modules.md) / [game/action/selection](../modules/game_action_selection.md) / default

# Class: default<P\>

[game/action/selection](../modules/game_action_selection.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

## Table of contents

### Constructors

- [constructor](game_action_selection.default.md#constructor)

### Properties

- [boardChoices](game_action_selection.default.md#boardchoices)
- [choices](game_action_selection.default.md#choices)
- [clientContext](game_action_selection.default.md#clientcontext)
- [expand](game_action_selection.default.md#expand)
- [initial](game_action_selection.default.md#initial)
- [max](game_action_selection.default.md#max)
- [min](game_action_selection.default.md#min)
- [prompt](game_action_selection.default.md#prompt)
- [regexp](game_action_selection.default.md#regexp)
- [skipIfOnlyOne](game_action_selection.default.md#skipifonlyone)
- [type](game_action_selection.default.md#type)
- [value](game_action_selection.default.md#value)

### Methods

- [isForced](game_action_selection.default.md#isforced)
- [isPossible](game_action_selection.default.md#ispossible)
- [isResolved](game_action_selection.default.md#isresolved)
- [isUnbounded](game_action_selection.default.md#isunbounded)
- [options](game_action_selection.default.md#options)
- [overrideOptions](game_action_selection.default.md#overrideoptions)
- [resolve](game_action_selection.default.md#resolve)
- [validate](game_action_selection.default.md#validate)

## Constructors

### constructor

• **new default**<`P`\>(`s`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | [`default`](game_action_selection.default.md)<`P`\> \| [`SelectionDefinition`](../modules/game_action_types.md#selectiondefinition)<`P`\> |

#### Defined in

[game/action/selection.ts:22](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L22)

## Properties

### boardChoices

• `Optional` **boardChoices**: [`BoardQueryMulti`](../modules/game_action_types.md#boardquerymulti)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Defined in

[game/action/selection.ts:15](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L15)

___

### choices

• `Optional` **choices**: [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] \| `Record`<`string`, [`Argument`](../modules/game_action_types.md#argument)<`P`\>\> \| (...`a`: [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]) => [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] \| `Record`<`string`, [`Argument`](../modules/game_action_types.md#argument)<`P`\>\>

#### Defined in

[game/action/selection.ts:14](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L14)

___

### clientContext

• `Optional` **clientContext**: `Record`<`any`, `any`\>

#### Defined in

[game/action/selection.ts:11](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L11)

___

### expand

• **expand**: `boolean` = `false`

#### Defined in

[game/action/selection.ts:13](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L13)

___

### initial

• `Optional` **initial**: [`Argument`](../modules/game_action_types.md#argument)<`P`\> \| (...`a`: [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]) => [`Argument`](../modules/game_action_types.md#argument)<`P`\>

#### Defined in

[game/action/selection.ts:18](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L18)

___

### max

• `Optional` **max**: `number` \| (...`a`: [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]) => `number`

#### Defined in

[game/action/selection.ts:17](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L17)

___

### min

• `Optional` **min**: `number` \| (...`a`: [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]) => `number`

#### Defined in

[game/action/selection.ts:16](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L16)

___

### prompt

• `Optional` **prompt**: `string` \| (...`a`: [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]) => `string`

#### Defined in

[game/action/selection.ts:10](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L10)

___

### regexp

• `Optional` **regexp**: `RegExp`

#### Defined in

[game/action/selection.ts:19](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L19)

___

### skipIfOnlyOne

• **skipIfOnlyOne**: `boolean` = `true`

#### Defined in

[game/action/selection.ts:12](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L12)

___

### type

• **type**: ``"number"`` \| ``"button"`` \| ``"text"`` \| ``"board"`` \| ``"choices"``

#### Defined in

[game/action/selection.ts:9](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L9)

___

### value

• `Optional` **value**: [`Argument`](../modules/game_action_types.md#argument)<`P`\>

#### Defined in

[game/action/selection.ts:20](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L20)

## Methods

### isForced

▸ **isForced**(`this`): `undefined` \| [`Argument`](../modules/game_action_types.md#argument)<`P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ResolvedSelection`](../modules/game_action_types.md#resolvedselection)<`P`\> |

#### Returns

`undefined` \| [`Argument`](../modules/game_action_types.md#argument)<`P`\>

#### Defined in

[game/action/selection.ts:159](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L159)

___

### isPossible

▸ **isPossible**(`this`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ResolvedSelection`](../modules/game_action_types.md#resolvedselection)<`P`\> |

#### Returns

`boolean`

#### Defined in

[game/action/selection.ts:147](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L147)

___

### isResolved

▸ **isResolved**(): this is ResolvedSelection<P\>

#### Returns

this is ResolvedSelection<P\>

#### Defined in

[game/action/selection.ts:125](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L125)

___

### isUnbounded

▸ **isUnbounded**(`this`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ResolvedSelection`](../modules/game_action_types.md#resolvedselection)<`P`\> |

#### Returns

`boolean`

#### Defined in

[game/action/selection.ts:120](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L120)

___

### options

▸ **options**(`this`): [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`ResolvedSelection`](../modules/game_action_types.md#resolvedselection)<`P`\> |

#### Returns

[`Argument`](../modules/game_action_types.md#argument)<`P`\>[]

#### Defined in

[game/action/selection.ts:112](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L112)

___

### overrideOptions

▸ **overrideOptions**(`options`): [`ResolvedSelection`](../modules/game_action_types.md#resolvedselection)<`P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] |

#### Returns

[`ResolvedSelection`](../modules/game_action_types.md#resolvedselection)<`P`\>

#### Defined in

[game/action/selection.ts:179](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L179)

___

### resolve

▸ **resolve**(`...args`): [`ResolvedSelection`](../modules/game_action_types.md#resolvedselection)<`P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] |

#### Returns

[`ResolvedSelection`](../modules/game_action_types.md#resolvedselection)<`P`\>

#### Defined in

[game/action/selection.ts:134](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L134)

___

### validate

▸ **validate**(`arg`, `previousArgs`): `undefined` \| `string`

check specific selection with a given arg. evaluates within the context of
previous args, so any selection elements that have previous-arg-function
forms are here evaluated with the previous args. returns new selection and
error if any

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | [`Argument`](../modules/game_action_types.md#argument)<`P`\> |
| `previousArgs` | [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] |

#### Returns

`undefined` \| `string`

#### Defined in

[game/action/selection.ts:75](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/action/selection.ts#L75)
