[boardzilla](../index.md) / [Modules](../modules.md) / [game/board/element-collection](../modules/game_board_element_collection.md) / default

# Class: default<P, T\>

[game/board/element-collection](../modules/game_board_element_collection.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

## Hierarchy

- `Array`<`T`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](game_board_element_collection.default.md#constructor)

### Properties

- [[unscopables]](game_board_element_collection.default.md#[unscopables])
- [bottom](game_board_element_collection.default.md#bottom)
- [bottomN](game_board_element_collection.default.md#bottomn)
- [length](game_board_element_collection.default.md#length)
- [top](game_board_element_collection.default.md#top)
- [topN](game_board_element_collection.default.md#topn)
- [[species]](game_board_element_collection.default.md#[species])

### Methods

- [[iterator]](game_board_element_collection.default.md#[iterator])
- [\_finder](game_board_element_collection.default.md#_finder)
- [all](game_board_element_collection.default.md#all)
- [appearance](game_board_element_collection.default.md#appearance)
- [at](game_board_element_collection.default.md#at)
- [concat](game_board_element_collection.default.md#concat)
- [copyWithin](game_board_element_collection.default.md#copywithin)
- [entries](game_board_element_collection.default.md#entries)
- [every](game_board_element_collection.default.md#every)
- [fill](game_board_element_collection.default.md#fill)
- [filter](game_board_element_collection.default.md#filter)
- [find](game_board_element_collection.default.md#find)
- [findIndex](game_board_element_collection.default.md#findindex)
- [first](game_board_element_collection.default.md#first)
- [firstN](game_board_element_collection.default.md#firstn)
- [flat](game_board_element_collection.default.md#flat)
- [flatMap](game_board_element_collection.default.md#flatmap)
- [forEach](game_board_element_collection.default.md#foreach)
- [includes](game_board_element_collection.default.md#includes)
- [indexOf](game_board_element_collection.default.md#indexof)
- [join](game_board_element_collection.default.md#join)
- [keys](game_board_element_collection.default.md#keys)
- [last](game_board_element_collection.default.md#last)
- [lastIndexOf](game_board_element_collection.default.md#lastindexof)
- [lastN](game_board_element_collection.default.md#lastn)
- [layout](game_board_element_collection.default.md#layout)
- [map](game_board_element_collection.default.md#map)
- [max](game_board_element_collection.default.md#max)
- [min](game_board_element_collection.default.md#min)
- [pop](game_board_element_collection.default.md#pop)
- [push](game_board_element_collection.default.md#push)
- [putInto](game_board_element_collection.default.md#putinto)
- [reduce](game_board_element_collection.default.md#reduce)
- [reduceRight](game_board_element_collection.default.md#reduceright)
- [remove](game_board_element_collection.default.md#remove)
- [reverse](game_board_element_collection.default.md#reverse)
- [shift](game_board_element_collection.default.md#shift)
- [slice](game_board_element_collection.default.md#slice)
- [some](game_board_element_collection.default.md#some)
- [sort](game_board_element_collection.default.md#sort)
- [sortBy](game_board_element_collection.default.md#sortby)
- [sortedBy](game_board_element_collection.default.md#sortedby)
- [splice](game_board_element_collection.default.md#splice)
- [sum](game_board_element_collection.default.md#sum)
- [toLocaleString](game_board_element_collection.default.md#tolocalestring)
- [toString](game_board_element_collection.default.md#tostring)
- [unshift](game_board_element_collection.default.md#unshift)
- [values](game_board_element_collection.default.md#values)
- [withHighest](game_board_element_collection.default.md#withhighest)
- [withLowest](game_board_element_collection.default.md#withlowest)
- [from](game_board_element_collection.default.md#from)
- [isArray](game_board_element_collection.default.md#isarray)
- [of](game_board_element_collection.default.md#of)

## Constructors

### constructor

• **new default**<`P`, `T`\>(`...collection`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |
| `T` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...collection` | `T`[] |

#### Overrides

Array&lt;T\&gt;.constructor

#### Defined in

[game/board/element-collection.ts:17](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L17)

## Properties

### [unscopables]

• `Readonly` **[unscopables]**: `Object`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `[unscopables]?` | `boolean` | Is an object whose properties have the value 'true' when they will be absent when used in a 'with' statement. |
| `length?` | `boolean` | Gets or sets the length of the array. This is a number one higher than the highest index in the array. |
| `[iterator]?` | {} | - |
| `at?` | {} | - |
| `concat?` | {} | - |
| `copyWithin?` | {} | - |
| `entries?` | {} | - |
| `every?` | {} | - |
| `fill?` | {} | - |
| `filter?` | {} | - |
| `find?` | {} | - |
| `findIndex?` | {} | - |
| `flat?` | {} | - |
| `flatMap?` | {} | - |
| `forEach?` | {} | - |
| `includes?` | {} | - |
| `indexOf?` | {} | - |
| `join?` | {} | - |
| `keys?` | {} | - |
| `lastIndexOf?` | {} | - |
| `map?` | {} | - |
| `pop?` | {} | - |
| `push?` | {} | - |
| `reduce?` | {} | - |
| `reduceRight?` | {} | - |
| `reverse?` | {} | - |
| `shift?` | {} | - |
| `slice?` | {} | - |
| `some?` | {} | - |
| `sort?` | {} | - |
| `splice?` | {} | - |
| `toLocaleString?` | {} | - |
| `toString?` | {} | - |
| `unshift?` | {} | - |
| `values?` | {} | - |

#### Inherited from

Array.[unscopables]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

___

### bottom

• **bottom**: <F\>(`className`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[]) => `undefined` \| [`default`](game_board_element.default.md)<`P`\><F\>(`className`: [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[]) => `undefined` \| `F`

#### Type declaration

▸ <`F`\>(`className`, `...finders`): `undefined` \| [`default`](game_board_element.default.md)<`P`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

##### Returns

`undefined` \| [`default`](game_board_element.default.md)<`P`\>

▸ <`F`\>(`className`, `...finders`): `undefined` \| `F`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

##### Returns

`undefined` \| `F`

#### Defined in

[game/board/element-collection.ts:13](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L13)

___

### bottomN

• **bottomN**: <F\>(`n`: `number`, `className`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[]) => [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\><F\>(`n`: `number`, `className`: [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[]) => [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type declaration

▸ <`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

##### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

▸ <`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

##### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Defined in

[game/board/element-collection.ts:15](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L15)

___

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1318

___

### top

• **top**: <F\>(`className`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[]) => `undefined` \| [`default`](game_board_element.default.md)<`P`\><F\>(`className`: [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[]) => `undefined` \| `F`

#### Type declaration

▸ <`F`\>(`className`, `...finders`): `undefined` \| [`default`](game_board_element.default.md)<`P`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

##### Returns

`undefined` \| [`default`](game_board_element.default.md)<`P`\>

▸ <`F`\>(`className`, `...finders`): `undefined` \| `F`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

##### Returns

`undefined` \| `F`

#### Defined in

[game/board/element-collection.ts:12](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L12)

___

### topN

• **topN**: <F\>(`n`: `number`, `className`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[]) => [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\><F\>(`n`: `number`, `className`: [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\>, ...`finders`: [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[]) => [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type declaration

▸ <`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

##### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

▸ <`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

##### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

##### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Defined in

[game/board/element-collection.ts:14](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L14)

___

### [species]

▪ `Static` `Readonly` **[species]**: `ArrayConstructor`

#### Inherited from

Array.[species]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:316

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`T`\>

Iterator

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

Array.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:58

___

### \_finder

▸ **_finder**<`F`\>(`className`, `options`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `options` | `Object` |
| `options.limit?` | `number` |
| `options.order?` | ``"desc"`` \| ``"asc"`` |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Defined in

[game/board/element-collection.ts:37](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L37)

___

### all

▸ **all**<`F`\>(`className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Defined in

[game/board/element-collection.ts:28](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L28)

▸ **all**<`F`\>(`className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Defined in

[game/board/element-collection.ts:29](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L29)

___

### appearance

▸ **appearance**(`appearance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `appearance` | `Object` |
| `appearance.aspectRatio?` | `number` |
| `appearance.connections?` | `Object` |
| `appearance.connections.color?` | `string` |
| `appearance.connections.fill?` | `string` |
| `appearance.connections.label?` | (`arg`: `any`) => ``null`` \| `Element` |
| `appearance.connections.labelScale?` | `number` |
| `appearance.connections.style?` | `string` |
| `appearance.connections.thickness?` | `number` |
| `appearance.render?` | ``false`` \| (`el`: `T`) => ``null`` \| `Element` |
| `appearance.zoomable?` | `boolean` |

#### Returns

`void`

#### Defined in

[game/board/element-collection.ts:201](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L201)

___

### at

▸ **at**(`index`): `undefined` \| `T`

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| `T`

#### Inherited from

Array.at

#### Defined in

node_modules/@types/node/globals.d.ts:116

___

### concat

▸ **concat**(`...items`): `T`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<`T`\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`T`[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1342

▸ **concat**(`...items`): `T`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | (`T` \| `ConcatArray`<`T`\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`T`[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1348

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`default`](game_board_element_collection.default.md)<`P`, `T`\>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `T`\>

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:62

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, `T`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, `T`]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:63

___

### every

▸ **every**<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1425

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1434

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`default`](game_board_element_collection.default.md)<`P`, `T`\>

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `T`\>

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:51

___

### filter

▸ **filter**<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1461

▸ **filter**(`predicate`, `thisArg?`): `T`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`T`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1467

___

### find

▸ **find**<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `obj`: `T`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:29

▸ **find**(`predicate`, `thisArg?`): `undefined` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `obj`: `T`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| `T`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:30

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `obj`: `T`[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:41

___

### first

▸ **first**<`F`\>(`className`, `...finders`): `undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

`undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Defined in

[game/board/element-collection.ts:97](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L97)

▸ **first**<`F`\>(`className`, `...finders`): `undefined` \| `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

`undefined` \| `F`

#### Defined in

[game/board/element-collection.ts:98](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L98)

___

### firstN

▸ **firstN**<`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Defined in

[game/board/element-collection.ts:107](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L107)

▸ **firstN**<`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Defined in

[game/board/element-collection.ts:108](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L108)

___

### flat

▸ **flat**<`A`, `D`\>(`this`, `depth?`): `FlatArray`<`A`, `D`\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `A` | `A` |
| `D` | extends `number` = ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `A` | - |
| `depth?` | `D` | The maximum recursion depth |

#### Returns

`FlatArray`<`A`, `D`\>[]

#### Inherited from

Array.flat

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:79

___

### flatMap

▸ **flatMap**<`U`, `This`\>(`callback`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `U` | `U` |
| `This` | `undefined` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`this`: `This`, `value`: `T`, `index`: `number`, `array`: `T`[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | `This` | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.flatMap

#### Defined in

node_modules/typescript/lib/lib.es2019.array.d.ts:68

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1449

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `T` | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:25

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `T` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1410

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1353

___

### keys

▸ **keys**(): `IterableIterator`<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`<`number`\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:68

___

### last

▸ **last**<`F`\>(`className`, `...finders`): `undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

`undefined` \| [`default`](game_board_element.default.md)<`P`\>

#### Defined in

[game/board/element-collection.ts:118](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L118)

▸ **last**<`F`\>(`className`, `...finders`): `undefined` \| `F`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

`undefined` \| `F`

#### Defined in

[game/board/element-collection.ts:119](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L119)

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `T` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1416

___

### lastN

▸ **lastN**<`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, [`default`](game_board_element.default.md)<`P`\>\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, [`default`](game_board_element.default.md)<`P`\>\>

#### Defined in

[game/board/element-collection.ts:128](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L128)

▸ **lastN**<`F`\>(`n`, `className`, `...finders`): [`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |
| `className` | [`ElementClass`](../modules/game_board_types.md#elementclass)<`P`, `F`\> |
| `...finders` | [`ElementFinder`](../modules/game_board_types.md#elementfinder)<`P`, `F`\>[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `F`\>

#### Defined in

[game/board/element-collection.ts:129](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L129)

___

### layout

▸ **layout**(`applyTo`, `attributes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `applyTo` | `T`[``"_ui"``][``"layouts"``][`number`][``"applyTo"``] |
| `attributes` | `Partial`<{ `area?`: [`Box`](../modules/game_board_types.md#box) ; `aspectRatio?`: `number` ; `columns?`: `number` \| { `max?`: `number` ; `min`: `number`  } \| { `max`: `number` ; `min?`: `number`  } ; `direction`: ``"ltr"`` \| ``"rtl"`` \| ``"square"`` \| ``"rtl-btt"`` \| ``"ltr-btt"`` \| ``"ttb"`` \| ``"ttb-rtl"`` \| ``"btt"`` \| ``"btt-rtl"`` ; `gap?`: `number` \| { `x`: `number` ; `y`: `number`  } ; `haphazardly?`: `number` ; `limit?`: `number` ; `margin?`: `number` \| { `bottom`: `number` ; `left`: `number` ; `right`: `number` ; `top`: `number`  } ; `offsetColumn?`: [`Vector`](../modules/game_board_types.md#vector) ; `offsetRow?`: [`Vector`](../modules/game_board_types.md#vector) ; `rows?`: `number` \| { `max?`: `number` ; `min`: `number`  } \| { `max`: `number` ; `min?`: `number`  } ; `scaling`: ``"fill"`` \| ``"none"`` \| ``"fit"`` ; `size?`: { `height`: `number` ; `width`: `number`  } ; `slots?`: [`Box`](../modules/game_board_types.md#box)[]  }\> |

#### Returns

`void`

#### Defined in

[game/board/element-collection.ts:194](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L194)

___

### map

▸ **map**<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1455

___

### max

▸ **max**<`K`\>(`key`): `undefined` \| `T`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `T`[`K`]

#### Defined in

[game/board/element-collection.ts:169](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L169)

___

### min

▸ **min**<`K`\>(`key`): `undefined` \| `T`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`undefined` \| `T`[`K`]

#### Defined in

[game/board/element-collection.ts:174](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L174)

___

### pop

▸ **pop**(): `undefined` \| `T`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `T`

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1331

___

### push

▸ **push**(`...items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1336

___

### putInto

▸ **putInto**(`to`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | [`default`](game_board_element.default.md)<`P`\> |
| `options?` | `Object` |
| `options.fromBottom?` | `number` |
| `options.fromTop?` | `number` |
| `options.position?` | `number` |

#### Returns

`void`

#### Defined in

[game/board/element-collection.ts:186](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L186)

___

### reduce

▸ **reduce**(`callbackfn`): `T`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `T` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`T`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1473

▸ **reduce**(`callbackfn`, `initialValue`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `T` |
| `initialValue` | `T` |

#### Returns

`T`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1474

▸ **reduce**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1480

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `T`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `T` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`T`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1486

▸ **reduceRight**(`callbackfn`, `initialValue`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `T`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `T` |
| `initialValue` | `T` |

#### Returns

`T`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1487

▸ **reduceRight**<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `T`, `currentIndex`: `number`, `array`: `T`[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1493

___

### remove

▸ **remove**(): `void`

#### Returns

`void`

#### Defined in

[game/board/element-collection.ts:179](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L179)

___

### reverse

▸ **reverse**(): `T`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`T`[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1358

___

### shift

▸ **shift**(): `undefined` \| `T`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `T`

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1363

___

### slice

▸ **slice**(`...a`): [`default`](game_board_element_collection.default.md)<`P`, `T`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `any`[] |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `T`\>

#### Overrides

Array.slice

#### Defined in

[game/board/element-collection.ts:25](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L25)

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `T`, `index`: `number`, `array`: `T`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1443

___

### sort

▸ **sort**(`compareFn?`): [`default`](game_board_element_collection.default.md)<`P`, `T`\>

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `T`, `b`: `T`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `T`\>

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1384

___

### sortBy

▸ **sortBy**<`E`\>(`key`, `direction?`): [`default`](game_board_element_collection.default.md)<`P`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`default`](game_board_element.default.md)<`P`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Sorter`](../modules/game_types.md#sorter)<`E`\> \| [`Sorter`](../modules/game_types.md#sorter)<`E`\>[] |
| `direction?` | ``"desc"`` \| ``"asc"`` |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `T`\>

#### Defined in

[game/board/element-collection.ts:138](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L138)

___

### sortedBy

▸ **sortedBy**(`key`, `direction?`): [`default`](game_board_element_collection.default.md)<`P`, `T`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`Sorter`](../modules/game_types.md#sorter)<`T`\> \| [`Sorter`](../modules/game_types.md#sorter)<`T`\>[] | `undefined` |
| `direction` | ``"desc"`` \| ``"asc"`` | `"asc"` |

#### Returns

[`default`](game_board_element_collection.default.md)<`P`, `T`\>

#### Defined in

[game/board/element-collection.ts:153](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L153)

___

### splice

▸ **splice**(`start`, `deleteCount?`): `T`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

`T`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1391

▸ **splice**(`start`, `deleteCount`, `...items`): `T`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `T`[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`T`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1399

___

### sum

▸ **sum**(`key`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | keyof `T` \| (`e`: `T`) => `number` |

#### Returns

`number`

#### Defined in

[game/board/element-collection.ts:157](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L157)

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1326

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1322

___

### unshift

▸ **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1404

___

### values

▸ **values**(): `IterableIterator`<`T`\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<`T`\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:73

___

### withHighest

▸ **withHighest**(`...attributes`): `undefined` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...attributes` | [`Sorter`](../modules/game_types.md#sorter)<`T`\>[] |

#### Returns

`undefined` \| `T`

#### Defined in

[game/board/element-collection.ts:161](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L161)

___

### withLowest

▸ **withLowest**(`...attributes`): `undefined` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...attributes` | [`Sorter`](../modules/game_types.md#sorter)<`T`\>[] |

#### Returns

`undefined` \| `T`

#### Defined in

[game/board/element-collection.ts:165](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/board/element-collection.ts#L165)

___

### from

▸ `Static` **from**<`T`\>(`arrayLike`): `T`[]

Creates an array from an array-like object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:70

▸ `Static` **from**<`T`, `U`\>(`arrayLike`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `arrayLike` | `ArrayLike`<`T`\> | An array-like object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:78

▸ `Static` **from**<`T`\>(`iterable`): `T`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |

#### Returns

`T`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:81

▸ `Static` **from**<`T`, `U`\>(`iterable`, `mapfn`, `thisArg?`): `U`[]

Creates an array from an iterable object.

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `iterable` | `Iterable`<`T`\> \| `ArrayLike`<`T`\> | An iterable object to convert to an array. |
| `mapfn` | (`v`: `T`, `k`: `number`) => `U` | A mapping function to call on every element of the array. |
| `thisArg?` | `any` | Value of 'this' used to invoke the mapfn. |

#### Returns

`U`[]

#### Inherited from

Array.from

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:89

___

### isArray

▸ `Static` **isArray**(`arg`): arg is any[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

arg is any[]

#### Inherited from

Array.isArray

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1505

___

### of

▸ `Static` **of**<`T`\>(`...items`): `T`[]

Returns a new array from a set of elements.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `T`[] | A set of elements to include in the new array object. |

#### Returns

`T`[]

#### Inherited from

Array.of

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:84
