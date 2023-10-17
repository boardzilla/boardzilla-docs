[boardzilla](../index.md) / [Modules](../modules.md) / ui/types

# Module: ui/types

## Table of contents

### Type Aliases

- [GameSettings](ui_types.md#gamesettings)
- [GameUpdateEvent](ui_types.md#gameupdateevent)
- [Layout](ui_types.md#layout)
- [MessageProcessedEvent](ui_types.md#messageprocessedevent)
- [MoveMessage](ui_types.md#movemessage)
- [PlayerOperation](ui_types.md#playeroperation)
- [PlayersEvent](ui_types.md#playersevent)
- [ReadyMessage](ui_types.md#readymessage)
- [ReserveOperation](ui_types.md#reserveoperation)
- [SeatOperation](ui_types.md#seatoperation)
- [SettingsUpdateEvent](ui_types.md#settingsupdateevent)
- [SetupComponentProps](ui_types.md#setupcomponentprops)
- [SetupPlayer](ui_types.md#setupplayer)
- [StartMessage](ui_types.md#startmessage)
- [SwitchPlayerMessage](ui_types.md#switchplayermessage)
- [UIOptions](ui_types.md#uioptions)
- [UnseatOperation](ui_types.md#unseatoperation)
- [UpdateOperation](ui_types.md#updateoperation)
- [UpdatePlayersMessage](ui_types.md#updateplayersmessage)
- [UpdateSettingsMessage](ui_types.md#updatesettingsmessage)
- [User](ui_types.md#user)
- [UserPlayer](ui_types.md#userplayer)

## Type Aliases

### GameSettings

Ƭ **GameSettings**: `Record`<`string`, `any`\>

#### Defined in

[ui/types.d.ts:34](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L34)

___

### GameUpdateEvent

Ƭ **GameUpdateEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `state` | { `position`: `number` ; `state`: [`GameState`](types.md#gamestate)<[`default`](../classes/game_player_player.default.md)\>  } |
| `state.position` | `number` |
| `state.state` | [`GameState`](types.md#gamestate)<[`default`](../classes/game_player_player.default.md)\> |
| `type` | ``"gameUpdate"`` |

#### Defined in

[ui/types.d.ts:48](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L48)

___

### Layout

Ƭ **Layout**: `Record`<`string`, `any`\>

#### Defined in

[ui/types.d.ts:5](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L5)

___

### MessageProcessedEvent

Ƭ **MessageProcessedEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `error?` | `string` |
| `id` | `string` |
| `type` | ``"messageProcessed"`` |

#### Defined in

[ui/types.d.ts:57](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L57)

___

### MoveMessage

Ƭ **MoveMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | { `action`: `string` ; `args`: [`SerializedArg`](game_action_types.md#serializedarg)[]  } |
| `data.action` | `string` |
| `data.args` | [`SerializedArg`](game_action_types.md#serializedarg)[] |
| `id` | `string` |
| `type` | ``"move"`` |

#### Defined in

[ui/types.d.ts:108](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L108)

___

### PlayerOperation

Ƭ **PlayerOperation**: [`SeatOperation`](ui_types.md#seatoperation) \| [`UnseatOperation`](ui_types.md#unseatoperation) \| [`UpdateOperation`](ui_types.md#updateoperation) \| [`ReserveOperation`](ui_types.md#reserveoperation)

#### Defined in

[ui/types.d.ts:93](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L93)

___

### PlayersEvent

Ƭ **PlayersEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `players` | [`UserPlayer`](ui_types.md#userplayer)[] |
| `type` | ``"players"`` |
| `users` | [`User`](ui_types.md#user)[] |

#### Defined in

[ui/types.d.ts:36](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L36)

___

### ReadyMessage

Ƭ **ReadyMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"ready"`` |

#### Defined in

[ui/types.d.ts:124](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L124)

___

### ReserveOperation

Ƭ **ReserveOperation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `name` | `string` |
| `position` | `number` |
| `settings?` | `any` |
| `type` | ``"reserve"`` |

#### Defined in

[ui/types.d.ts:85](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L85)

___

### SeatOperation

Ƭ **SeatOperation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `name` | `string` |
| `position` | `number` |
| `settings?` | `any` |
| `type` | ``"seat"`` |
| `userID` | `string` |

#### Defined in

[ui/types.d.ts:63](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L63)

___

### SettingsUpdateEvent

Ƭ **SettingsUpdateEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `settings` | [`GameSettings`](ui_types.md#gamesettings) |
| `type` | ``"settingsUpdate"`` |

#### Defined in

[ui/types.d.ts:43](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L43)

___

### SetupComponentProps

Ƭ **SetupComponentProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `players` | [`SetupPlayer`](ui_types.md#setupplayer)[] |
| `settings` | `Record`<`string`, `any`\> |
| `updateKey` | (`key`: `string`, `value`: `any`) => `void` |

#### Defined in

[ui/types.d.ts:7](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L7)

___

### SetupPlayer

Ƭ **SetupPlayer**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color` | `string` |
| `name` | `string` |
| `position` | `number` |
| `settings?` | `any` |

#### Defined in

[ui/types.d.ts:23](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L23)

___

### StartMessage

Ƭ **StartMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | ``"start"`` |

#### Defined in

[ui/types.d.ts:118](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L118)

___

### SwitchPlayerMessage

Ƭ **SwitchPlayerMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `type` | ``"switchPlayer"`` |

#### Defined in

[ui/types.d.ts:128](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L128)

___

### UIOptions

Ƭ **UIOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `settings?` | `Record`<`string`, (`p`: [`SetupComponentProps`](ui_types.md#setupcomponentprops)) => `JSX.Element`\> |

#### Defined in

[ui/types.d.ts:14](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L14)

___

### UnseatOperation

Ƭ **UnseatOperation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `position` | `number` |
| `type` | ``"unseat"`` |

#### Defined in

[ui/types.d.ts:72](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L72)

___

### UpdateOperation

Ƭ **UpdateOperation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `color?` | `string` |
| `name?` | `string` |
| `position` | `number` |
| `settings?` | `any` |
| `type` | ``"update"`` |

#### Defined in

[ui/types.d.ts:77](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L77)

___

### UpdatePlayersMessage

Ƭ **UpdatePlayersMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `operations` | [`PlayerOperation`](ui_types.md#playeroperation)[] |
| `type` | ``"updatePlayers"`` |

#### Defined in

[ui/types.d.ts:95](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L95)

___

### UpdateSettingsMessage

Ƭ **UpdateSettingsMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `settings` | [`GameSettings`](ui_types.md#gamesettings) |
| `type` | ``"updateSettings"`` |

#### Defined in

[ui/types.d.ts:101](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L101)

___

### User

Ƭ **User**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `name` | `string` |

#### Defined in

[ui/types.d.ts:18](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L18)

___

### UserPlayer

Ƭ **UserPlayer**: [`SetupPlayer`](ui_types.md#setupplayer) & { `userID?`: `string`  }

#### Defined in

[ui/types.d.ts:30](https://github.com/aghull/boardzilla-core/blob/1935b1b/ui/types.d.ts#L30)
