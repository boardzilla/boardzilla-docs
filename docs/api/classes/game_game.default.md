[boardzilla](../index.md) / [Modules](../modules.md) / [game/game](../modules/game_game.md) / default

# Class: default<P, B\>

[game/game](../modules/game_game.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |
| `B` | extends [`default`](game_board_board.default.md)<`P`\> |

## Table of contents

### Constructors

- [constructor](game_game.default.md#constructor)

### Properties

- [actions](game_game.default.md#actions)
- [board](game_game.default.md#board)
- [flow](game_game.default.md#flow)
- [flowDefinition](game_game.default.md#flowdefinition)
- [godMode](game_game.default.md#godmode)
- [messages](game_game.default.md#messages)
- [phase](game_game.default.md#phase)
- [players](game_game.default.md#players)
- [random](game_game.default.md#random)
- [rseed](game_game.default.md#rseed)
- [settings](game_game.default.md#settings)
- [setupLayout](game_game.default.md#setuplayout)

### Methods

- [action](game_game.default.md#action)
- [allowedActions](game_game.default.md#allowedactions)
- [buildFlow](game_game.default.md#buildflow)
- [contextualizeBoardToPlayer](game_game.default.md#contextualizeboardtoplayer)
- [defineActions](game_game.default.md#defineactions)
- [defineBoard](game_game.default.md#defineboard)
- [defineFlow](game_game.default.md#defineflow)
- [definePlayers](game_game.default.md#defineplayers)
- [getPlayerStates](game_game.default.md#getplayerstates)
- [getResolvedSelections](game_game.default.md#getresolvedselections)
- [getState](game_game.default.md#getstate)
- [godModeActions](game_game.default.md#godmodeactions)
- [inContextOfPlayer](game_game.default.md#incontextofplayer)
- [message](game_game.default.md#message)
- [play](game_game.default.md#play)
- [processMove](game_game.default.md#processmove)
- [setRandomSeed](game_game.default.md#setrandomseed)
- [setSettings](game_game.default.md#setsettings)
- [setState](game_game.default.md#setstate)
- [start](game_game.default.md#start)

## Constructors

### constructor

• **new default**<`P`, `B`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |
| `B` | extends [`default`](game_board_board.default.md)<`P`\> |

## Properties

### actions

• **actions**: (`game`: [`default`](game_game.default.md)<`P`, `B`\>, `board`: `B`) => `Record`<`string`, (`p`: `P`) => [`default`](game_action_action.default.md)<`P`, [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]\>\>

#### Type declaration

▸ (`game`, `board`): `Record`<`string`, (`p`: `P`) => [`default`](game_action_action.default.md)<`P`, [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `game` | [`default`](game_game.default.md)<`P`, `B`\> |
| `board` | `B` |

##### Returns

`Record`<`string`, (`p`: `P`) => [`default`](game_action_action.default.md)<`P`, [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]\>\>

#### Defined in

[game/game.ts:35](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L35)

___

### board

• **board**: `B`

#### Defined in

[game/game.ts:33](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L33)

___

### flow

• **flow**: [`default`](game_flow_flow.default.md)<`P`\>

#### Defined in

[game/game.ts:30](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L30)

___

### flowDefinition

• **flowDefinition**: (`game`: [`default`](game_game.default.md)<`P`, `B`\>, `board`: `B`) => [`default`](game_flow_flow.default.md)<`P`\>

#### Type declaration

▸ (`game`, `board`): [`default`](game_flow_flow.default.md)<`P`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `game` | [`default`](game_game.default.md)<`P`, `B`\> |
| `board` | `B` |

##### Returns

[`default`](game_flow_flow.default.md)<`P`\>

#### Defined in

[game/game.ts:31](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L31)

___

### godMode

• **godMode**: `boolean` = `false`

#### Defined in

[game/game.ts:40](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L40)

___

### messages

• **messages**: [`Message`](../modules/types.md#message)[] = `[]`

#### Defined in

[game/game.ts:39](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L39)

___

### phase

• **phase**: ``"new"`` \| ``"define"`` \| ``"started"`` = `'define'`

#### Defined in

[game/game.ts:36](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L36)

___

### players

• **players**: [`default`](game_player_collection.default.md)<`P`\>

#### Defined in

[game/game.ts:32](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L32)

___

### random

• **random**: () => `number`

#### Type declaration

▸ (): `number`

##### Returns

`number`

#### Defined in

[game/game.ts:38](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L38)

___

### rseed

• **rseed**: `string`

#### Defined in

[game/game.ts:37](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L37)

___

### settings

• **settings**: `Record`<`string`, `any`\>

#### Defined in

[game/game.ts:34](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L34)

___

### setupLayout

• `Optional` **setupLayout**: (`board`: `B`, `aspectRatio`: `number`) => `void`

#### Type declaration

▸ (`board`, `aspectRatio`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `board` | `B` |
| `aspectRatio` | `number` |

##### Returns

`void`

#### Defined in

[game/game.ts:41](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L41)

## Methods

### action

▸ **action**(`name`, `player`): [`default`](game_action_action.default.md)<`P`, `any`\> & { `name`: `string`  }

action functions

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `player` | `P` |

#### Returns

[`default`](game_action_action.default.md)<`P`, `any`\> & { `name`: `string`  }

#### Defined in

[game/game.ts:154](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L154)

___

### allowedActions

▸ **allowedActions**(`player`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `P` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `actions` | `string`[] |
| `expand` | `boolean` |
| `prompt?` | `string` |
| `skipIfOnlyOne` | `boolean` |

#### Defined in

[game/game.ts:232](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L232)

___

### buildFlow

▸ **buildFlow**(): `void`

#### Returns

`void`

#### Defined in

[game/game.ts:101](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L101)

___

### contextualizeBoardToPlayer

▸ **contextualizeBoardToPlayer**(`player?`): `undefined` \| `P`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player?` | `P` |

#### Returns

`undefined` \| `P`

#### Defined in

[game/game.ts:138](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L138)

___

### defineActions

▸ **defineActions**(`actions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `actions` | (`game`: [`default`](game_game.default.md)<`P`, `B`\>, `board`: `B`) => `Record`<`string`, (`p`: `P`) => [`default`](game_action_action.default.md)<`P`, [`Argument`](../modules/game_action_types.md#argument)<`P`\>[]\>\> |

#### Returns

`void`

#### Defined in

[game/game.ts:51](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L51)

___

### defineBoard

▸ **defineBoard**(`className`, `classRegistry`): `B`

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | (...`classes`: [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[]) => `B` |
| `className.isGameElement` | `boolean` |
| `classRegistry` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

`B`

#### Defined in

[game/game.ts:56](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L56)

___

### defineFlow

▸ **defineFlow**(`flowDefinition`): `void`

configuration functions

#### Parameters

| Name | Type |
| :------ | :------ |
| `flowDefinition` | (`game`: [`default`](game_game.default.md)<`P`, `B`\>, `board`: `B`) => [`default`](game_flow_flow.default.md)<`P`\> |

#### Returns

`void`

#### Defined in

[game/game.ts:46](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L46)

___

### definePlayers

▸ **definePlayers**(`className`): [`default`](game_player_collection.default.md)<`P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | (...`a`: `any`[]) => `P` |

#### Returns

[`default`](game_player_collection.default.md)<`P`\>

#### Defined in

[game/game.ts:69](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L69)

___

### getPlayerStates

▸ **getPlayerStates**(): [`PlayerPositionState`](../modules/types.md#playerpositionstate)<`P`\>[]

#### Returns

[`PlayerPositionState`](../modules/types.md#playerpositionstate)<`P`\>[]

#### Defined in

[game/game.ts:131](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L131)

___

### getResolvedSelections

▸ **getResolvedSelections**(`player`, `action?`, `...args`): `undefined` \| { `moves`: [`PendingMove`](../modules/game_action_types.md#pendingmove)<`P`\>[] ; `prompt?`: `string`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `P` |
| `action?` | `string` |
| `...args` | [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] |

#### Returns

`undefined` \| { `moves`: [`PendingMove`](../modules/game_action_types.md#pendingmove)<`P`\>[] ; `prompt?`: `string`  }

#### Defined in

[game/game.ts:257](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L257)

___

### getState

▸ **getState**(`forPlayer?`): [`GameState`](../modules/types.md#gamestate)<`P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `forPlayer?` | `number` |

#### Returns

[`GameState`](../modules/types.md#gamestate)<`P`\>

#### Defined in

[game/game.ts:120](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L120)

___

### godModeActions

▸ **godModeActions**(): `Record`<`string`, [`default`](game_action_action.default.md)<`P`, `any`\>\>

#### Returns

`Record`<`string`, [`default`](game_action_action.default.md)<`P`, `any`\>\>

#### Defined in

[game/game.ts:171](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L171)

___

### inContextOfPlayer

▸ **inContextOfPlayer**<`T`\>(`player`, `fn`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `P` |
| `fn` | () => `T` |

#### Returns

`T`

#### Defined in

[game/game.ts:144](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L144)

___

### message

▸ **message**(`message`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `...args` | [...Argument<P\>[], `Record`<`string`, [`Argument`](../modules/game_action_types.md#argument)<`P`\>\>] \| [`Argument`](../modules/game_action_types.md#argument)<`P`\>[] |

#### Returns

`void`

#### Defined in

[game/game.ts:303](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L303)

___

### play

▸ **play**(): `void` \| `string`[]

#### Returns

`void` \| `string`[]

#### Defined in

[game/game.ts:205](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L205)

___

### processMove

▸ **processMove**(`«destructured»`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Move`](../modules/game_action_types.md#move)<`P`\> |

#### Returns

`undefined` \| `string`

#### Defined in

[game/game.ts:213](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L213)

___

### setRandomSeed

▸ **setRandomSeed**(`rseed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rseed` | `string` |

#### Returns

`void`

#### Defined in

[game/game.ts:83](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L83)

___

### setSettings

▸ **setSettings**(`settings`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | `Record`<`string`, `any`\> |

#### Returns

`void`

#### Defined in

[game/game.ts:79](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L79)

___

### setState

▸ **setState**(`state`): `void`

state management functions

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`GameState`](../modules/types.md#gamestate)<`P`\> |

#### Returns

`void`

#### Defined in

[game/game.ts:109](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L109)

___

### start

▸ **start**(): `void`

flow functions

#### Returns

`void`

#### Defined in

[game/game.ts:91](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/game.ts#L91)
