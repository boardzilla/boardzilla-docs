[boardzilla](../index.md) / [Modules](../modules.md) / game/board/types

# Module: game/board/types

## Table of contents

### Type Aliases

- [Box](game_board_types.md#box)
- [ElementAttributes](game_board_types.md#elementattributes)
- [ElementClass](game_board_types.md#elementclass)
- [ElementContext](game_board_types.md#elementcontext)
- [ElementEventHandler](game_board_types.md#elementeventhandler)
- [ElementFinder](game_board_types.md#elementfinder)
- [ElementJSON](game_board_types.md#elementjson)
- [ElementUI](game_board_types.md#elementui)
- [GameElementSerialization](game_board_types.md#gameelementserialization)
- [Vector](game_board_types.md#vector)

## Type Aliases

### Box

Ƭ **Box**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `left` | `number` |
| `top` | `number` |
| `width` | `number` |

#### Defined in

[game/board/types.d.ts:36](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/types.d.ts#L36)

___

### ElementAttributes

Ƭ **ElementAttributes**<`P`, `T`\>: `Partial`<`Pick`<`T`, { [K in keyof T]: K extends keyof default<P\> ? never : T[K] extends Function ? never : K }[keyof `T`] \| ``"name"`` \| ``"player"``\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | extends [`default`](../classes/game_board_element.default.md)<`P`\> |

#### Defined in

[game/board/types.d.ts:17](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/types.d.ts#L17)

___

### ElementClass

Ƭ **ElementClass**<`P`, `T`\>: (`ctx`: `Partial`<[`ElementContext`](game_board_types.md#elementcontext)<`P`\>\>) => `T` & `Record`<`any`, `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | extends [`default`](../classes/game_board_element.default.md)<`P`\> |

#### Defined in

[game/board/types.d.ts:6](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/types.d.ts#L6)

___

### ElementContext

Ƭ **ElementContext**<`P`\>: { `classRegistry`: [`ElementClass`](game_board_types.md#elementclass)<`P`, [`default`](../classes/game_board_element.default.md)<`P`\>\>[] ; `player?`: `P` ; `removed`: [`default`](../classes/game_board_element.default.md)<`P`\> ; `sequence`: `number` ; `top`: [`default`](../classes/game_board_element.default.md)<`P`\>  } & `Record`<`string`, `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |

#### Defined in

[game/board/types.d.ts:20](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/types.d.ts#L20)

___

### ElementEventHandler

Ƭ **ElementEventHandler**<`P`, `T`\>: { `callback`: (`el`: `T`) => `void`  } & `Record`<`any`, `any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | extends [`default`](../classes/game_board_element.default.md)<`P`\> |

#### Defined in

[game/board/types.d.ts:34](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/types.d.ts#L34)

___

### ElementFinder

Ƭ **ElementFinder**<`P`, `T`\>: (`e`: `T`) => `boolean` \| [`ElementAttributes`](game_board_types.md#elementattributes)<`P`, `T`\> & { `adjacent?`: `boolean` ; `empty?`: `boolean` ; `mine?`: `boolean` ; `withinDistance?`: `number`  } \| `string`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | extends [`default`](../classes/game_board_element.default.md)<`P`\> |

#### Defined in

[game/board/types.d.ts:28](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/types.d.ts#L28)

___

### ElementJSON

Ƭ **ElementJSON**: { `children?`: [`ElementJSON`](game_board_types.md#elementjson)[] ; `className`: `string`  } & `Record`<`string`, `any`\>

#### Defined in

[game/board/types.d.ts:4](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/types.d.ts#L4)

___

### ElementUI

Ƭ **ElementUI**<`P`, `T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](../classes/game_player_player.default.md) |
| `T` | extends [`default`](../classes/game_board_element.default.md)<`P`\> |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `appearance` | { `aspectRatio?`: `number` ; `connections?`: { `color?`: `string` ; `fill?`: `string` ; `label?`: (`arg`: `any`) => `JSX.Element` \| ``null`` ; `labelScale?`: `number` ; `style?`: `string` ; `thickness?`: `number`  } ; `render?`: (`el`: `T`) => `JSX.Element` \| ``null`` \| ``false`` ; `zoomable?`: `boolean`  } |
| `appearance.aspectRatio?` | `number` |
| `appearance.connections?` | { `color?`: `string` ; `fill?`: `string` ; `label?`: (`arg`: `any`) => `JSX.Element` \| ``null`` ; `labelScale?`: `number` ; `style?`: `string` ; `thickness?`: `number`  } |
| `appearance.connections.color?` | `string` |
| `appearance.connections.fill?` | `string` |
| `appearance.connections.label?` | (`arg`: `any`) => `JSX.Element` \| ``null`` |
| `appearance.connections.labelScale?` | `number` |
| `appearance.connections.style?` | `string` |
| `appearance.connections.thickness?` | `number` |
| `appearance.render?` | (`el`: `T`) => `JSX.Element` \| ``null`` \| ``false`` |
| `appearance.zoomable?` | `boolean` |
| `computedStyle?` | [`Box`](game_board_types.md#box) |
| `layouts` | { `applyTo`: [`ElementClass`](game_board_types.md#elementclass)<`P`, [`default`](../classes/game_board_element.default.md)<`P`\>\> \| [`default`](../classes/game_board_element.default.md)<`P`\> \| [`default`](../classes/game_board_element_collection.default.md)<`P`, [`default`](../classes/game_board_element.default.md)<`P`\>\> \| `string` ; `attributes`: { `area?`: [`Box`](game_board_types.md#box) ; `aspectRatio?`: `number` ; `columns?`: `number` \| { `max?`: `number` ; `min`: `number`  } \| { `max`: `number` ; `min?`: `number`  } ; `direction`: ``"square"`` \| ``"ltr"`` \| ``"rtl"`` \| ``"rtl-btt"`` \| ``"ltr-btt"`` \| ``"ttb"`` \| ``"ttb-rtl"`` \| ``"btt"`` \| ``"btt-rtl"`` ; `gap?`: `number` \| { `x`: `number` ; `y`: `number`  } ; `haphazardly?`: `number` ; `limit?`: `number` ; `margin?`: `number` \| { `bottom`: `number` ; `left`: `number` ; `right`: `number` ; `top`: `number`  } ; `offsetColumn?`: [`Vector`](game_board_types.md#vector) ; `offsetRow?`: [`Vector`](game_board_types.md#vector) ; `rows?`: `number` \| { `max?`: `number` ; `min`: `number`  } \| { `max`: `number` ; `min?`: `number`  } ; `scaling`: ``"fit"`` \| ``"fill"`` \| ``"none"`` ; `size?`: { `height`: `number` ; `width`: `number`  } ; `slots?`: [`Box`](game_board_types.md#box)[]  }  }[] |

#### Defined in

[game/board/types.d.ts:39](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/types.d.ts#L39)

___

### GameElementSerialization

Ƭ **GameElementSerialization**: ``"player"`` \| ``"name"``

#### Defined in

[game/board/types.d.ts:11](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/types.d.ts#L11)

___

### Vector

Ƭ **Vector**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[game/board/types.d.ts:37](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/types.d.ts#L37)
