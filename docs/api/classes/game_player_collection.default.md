[boardzilla](../index.md) / [Modules](../modules.md) / [game/player/collection](../modules/game_player_collection.md) / default

# Class: default<P\>

[game/player/collection](../modules/game_player_collection.md).default

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

## Hierarchy

- `Array`<`P`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](game_player_collection.default.md#constructor)

### Properties

- [[unscopables]](game_player_collection.default.md#[unscopables])
- [className](game_player_collection.default.md#classname)
- [currentPosition](game_player_collection.default.md#currentposition)
- [game](game_player_collection.default.md#game)
- [length](game_player_collection.default.md#length)
- [[species]](game_player_collection.default.md#[species])

### Methods

- [[iterator]](game_player_collection.default.md#[iterator])
- [addPlayer](game_player_collection.default.md#addplayer)
- [after](game_player_collection.default.md#after)
- [at](game_player_collection.default.md#at)
- [atPosition](game_player_collection.default.md#atposition)
- [concat](game_player_collection.default.md#concat)
- [copyWithin](game_player_collection.default.md#copywithin)
- [current](game_player_collection.default.md#current)
- [entries](game_player_collection.default.md#entries)
- [every](game_player_collection.default.md#every)
- [fill](game_player_collection.default.md#fill)
- [filter](game_player_collection.default.md#filter)
- [find](game_player_collection.default.md#find)
- [findIndex](game_player_collection.default.md#findindex)
- [flat](game_player_collection.default.md#flat)
- [flatMap](game_player_collection.default.md#flatmap)
- [forEach](game_player_collection.default.md#foreach)
- [fromJSON](game_player_collection.default.md#fromjson)
- [inPositionOrder](game_player_collection.default.md#inpositionorder)
- [includes](game_player_collection.default.md#includes)
- [indexOf](game_player_collection.default.md#indexof)
- [join](game_player_collection.default.md#join)
- [keys](game_player_collection.default.md#keys)
- [lastIndexOf](game_player_collection.default.md#lastindexof)
- [map](game_player_collection.default.md#map)
- [max](game_player_collection.default.md#max)
- [min](game_player_collection.default.md#min)
- [next](game_player_collection.default.md#next)
- [notCurrent](game_player_collection.default.md#notcurrent)
- [pop](game_player_collection.default.md#pop)
- [push](game_player_collection.default.md#push)
- [reduce](game_player_collection.default.md#reduce)
- [reduceRight](game_player_collection.default.md#reduceright)
- [reverse](game_player_collection.default.md#reverse)
- [setCurrent](game_player_collection.default.md#setcurrent)
- [shift](game_player_collection.default.md#shift)
- [shuffle](game_player_collection.default.md#shuffle)
- [slice](game_player_collection.default.md#slice)
- [some](game_player_collection.default.md#some)
- [sort](game_player_collection.default.md#sort)
- [sortBy](game_player_collection.default.md#sortby)
- [sortedBy](game_player_collection.default.md#sortedby)
- [splice](game_player_collection.default.md#splice)
- [sum](game_player_collection.default.md#sum)
- [toLocaleString](game_player_collection.default.md#tolocalestring)
- [toString](game_player_collection.default.md#tostring)
- [turnOrderOf](game_player_collection.default.md#turnorderof)
- [unshift](game_player_collection.default.md#unshift)
- [values](game_player_collection.default.md#values)
- [withHighest](game_player_collection.default.md#withhighest)
- [withLowest](game_player_collection.default.md#withlowest)
- [from](game_player_collection.default.md#from)
- [isArray](game_player_collection.default.md#isarray)
- [of](game_player_collection.default.md#of)

## Constructors

### constructor

• **new default**<`P`\>(`arrayLength`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arrayLength` | `number` |

#### Inherited from

Array<P\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1500

• **new default**<`P`\>(`...items`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | extends [`default`](game_player_player.default.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `...items` | `P`[] |

#### Inherited from

Array<P\>.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1501

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

### className

• **className**: (...`a`: `any`[]) => `P`

#### Type declaration

• **new className**(`...a`)

##### Parameters

| Name | Type |
| :------ | :------ |
| `...a` | `any`[] |

#### Defined in

[game/player/collection.ts:12](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L12)

___

### currentPosition

• `Optional` **currentPosition**: `number`

#### Defined in

[game/player/collection.ts:11](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L11)

___

### game

• **game**: [`default`](game_game.default.md)<`P`, [`default`](game_board_board.default.md)<`P`\>\>

#### Defined in

[game/player/collection.ts:13](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L13)

___

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1318

___

### [species]

▪ `Static` `Readonly` **[species]**: `ArrayConstructor`

#### Inherited from

Array.[species]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:316

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`P`\>

Iterator

#### Returns

`IterableIterator`<`P`\>

#### Inherited from

Array.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:58

___

### addPlayer

▸ **addPlayer**(`attrs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrs` | [`PlayerAttributes`](../modules/game_player_types.md#playerattributes)<`P`\> |

#### Returns

`void`

#### Defined in

[game/player/collection.ts:15](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L15)

___

### after

▸ **after**(`player`): `P`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `number` \| `P` |

#### Returns

`P`

#### Defined in

[game/player/collection.ts:57](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L57)

___

### at

▸ **at**(`index`): `undefined` \| `P`

Takes an integer value and returns the item at that index,
allowing for positive and negative integers.
Negative integers count back from the last item in the array.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`undefined` \| `P`

#### Inherited from

Array.at

#### Defined in

node_modules/@types/node/globals.d.ts:116

___

### atPosition

▸ **atPosition**(`position`): `undefined` \| `P`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | `number` |

#### Returns

`undefined` \| `P`

#### Defined in

[game/player/collection.ts:22](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L22)

___

### concat

▸ **concat**(`...items`): `P`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`<`P`\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`P`[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1342

▸ **concat**(`...items`): `P`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | (`P` \| `ConcatArray`<`P`\>)[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`P`[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1348

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): [`default`](game_player_collection.default.md)<`P`\>

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

[`default`](game_player_collection.default.md)<`P`\>

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:62

___

### current

▸ **current**(): `P`

#### Returns

`P`

#### Defined in

[game/player/collection.ts:26](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L26)

___

### entries

▸ **entries**(): `IterableIterator`<[`number`, `P`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`<[`number`, `P`]\>

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
| `S` | extends [`default`](game_player_player.default.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `P`, `index`: `number`, `array`: `P`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
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
| `predicate` | (`value`: `P`, `index`: `number`, `array`: `P`[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1434

___

### fill

▸ **fill**(`value`, `start?`, `end?`): [`default`](game_player_collection.default.md)<`P`\>

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `P` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

[`default`](game_player_collection.default.md)<`P`\>

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
| `S` | extends [`default`](game_player_player.default.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `P`, `index`: `number`, `array`: `P`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1461

▸ **filter**(`predicate`, `thisArg?`): `P`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `P`, `index`: `number`, `array`: `P`[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`P`[]

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
| `S` | extends [`default`](game_player_player.default.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `P`, `index`: `number`, `obj`: `P`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:29

▸ **find**(`predicate`, `thisArg?`): `undefined` \| `P`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `P`, `index`: `number`, `obj`: `P`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`undefined` \| `P`

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
| `predicate` | (`value`: `P`, `index`: `number`, `obj`: `P`[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:41

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
| `callback` | (`this`: `This`, `value`: `P`, `index`: `number`, `array`: `P`[]) => `U` \| readonly `U`[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
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
| `callbackfn` | (`value`: `P`, `index`: `number`, `array`: `P`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1449

___

### fromJSON

▸ **fromJSON**(`players`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `players` | [`PlayerAttributes`](../modules/game_player_types.md#playerattributes)<`P`\>[] |

#### Returns

`void`

#### Defined in

[game/player/collection.ts:112](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L112)

___

### inPositionOrder

▸ **inPositionOrder**(): [`default`](game_player_collection.default.md)<`P`\>

#### Returns

[`default`](game_player_collection.default.md)<`P`\>

#### Defined in

[game/player/collection.ts:35](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L35)

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `P` | The element to search for. |
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
| `searchElement` | `P` | The value to locate in the array. |
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

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `P` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1416

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
| `callbackfn` | (`value`: `P`, `index`: `number`, `array`: `P`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1455

___

### max

▸ **max**<`K`\>(`key`): `P`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`P`[`K`]

#### Defined in

[game/player/collection.ts:104](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L104)

___

### min

▸ **min**<`K`\>(`key`): `P`[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `K` |

#### Returns

`P`[`K`]

#### Defined in

[game/player/collection.ts:108](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L108)

___

### next

▸ **next**(): `P`

#### Returns

`P`

#### Defined in

[game/player/collection.ts:48](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L48)

___

### notCurrent

▸ **notCurrent**(): `P`[]

#### Returns

`P`[]

#### Defined in

[game/player/collection.ts:31](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L31)

___

### pop

▸ **pop**(): `undefined` \| `P`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `P`

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
| `...items` | `P`[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1336

___

### reduce

▸ **reduce**(`callbackfn`): `P`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `P`, `currentValue`: `P`, `currentIndex`: `number`, `array`: `P`[]) => `P` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`P`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1473

▸ **reduce**(`callbackfn`, `initialValue`): `P`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `P`, `currentValue`: `P`, `currentIndex`: `number`, `array`: `P`[]) => `P` |
| `initialValue` | `P` |

#### Returns

`P`

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
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `P`, `currentIndex`: `number`, `array`: `P`[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1480

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `P`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `P`, `currentValue`: `P`, `currentIndex`: `number`, `array`: `P`[]) => `P` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`P`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1486

▸ **reduceRight**(`callbackfn`, `initialValue`): `P`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `P`, `currentValue`: `P`, `currentIndex`: `number`, `array`: `P`[]) => `P` |
| `initialValue` | `P` |

#### Returns

`P`

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
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `P`, `currentIndex`: `number`, `array`: `P`[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1493

___

### reverse

▸ **reverse**(): `P`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`P`[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1358

___

### setCurrent

▸ **setCurrent**(`player`): `P`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `number` \| `P` |

#### Returns

`P`

#### Defined in

[game/player/collection.ts:39](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L39)

___

### shift

▸ **shift**(): `undefined` \| `P`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`undefined` \| `P`

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1363

___

### shuffle

▸ **shuffle**(): `void`

#### Returns

`void`

#### Defined in

[game/player/collection.ts:100](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L100)

___

### slice

▸ **slice**(`start?`, `end?`): `P`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

`P`[]

#### Inherited from

Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1373

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `P`, `index`: `number`, `array`: `P`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1443

___

### sort

▸ **sort**(`compareFn?`): [`default`](game_player_collection.default.md)<`P`\>

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `P`, `b`: `P`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

[`default`](game_player_collection.default.md)<`P`\>

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1384

___

### sortBy

▸ **sortBy**(`key`, `direction?`): [`default`](game_player_collection.default.md)<`P`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Sorter`](../modules/game_types.md#sorter)<`P`\> \| [`Sorter`](../modules/game_types.md#sorter)<`P`\>[] |
| `direction?` | ``"desc"`` \| ``"asc"`` |

#### Returns

[`default`](game_player_collection.default.md)<`P`\>

#### Defined in

[game/player/collection.ts:69](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L69)

___

### sortedBy

▸ **sortedBy**(`key`, `direction?`): [`default`](game_player_collection.default.md)<`P`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | [`Sorter`](../modules/game_types.md#sorter)<`P`\> \| [`Sorter`](../modules/game_types.md#sorter)<`P`\>[] | `undefined` |
| `direction` | ``"desc"`` \| ``"asc"`` | `"asc"` |

#### Returns

[`default`](game_player_collection.default.md)<`P`\>

#### Defined in

[game/player/collection.ts:84](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L84)

___

### splice

▸ **splice**(`start`, `deleteCount?`): `P`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

`P`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1391

▸ **splice**(`start`, `deleteCount`, `...items`): `P`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `P`[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`P`[]

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
| `key` | keyof `P` \| (`e`: `P`) => `number` |

#### Returns

`number`

#### Defined in

[game/player/collection.ts:88](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L88)

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

### turnOrderOf

▸ **turnOrderOf**(`player`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `player` | `number` \| `P` |

#### Returns

`number`

#### Defined in

[game/player/collection.ts:62](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L62)

___

### unshift

▸ **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `P`[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1404

___

### values

▸ **values**(): `IterableIterator`<`P`\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`<`P`\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:73

___

### withHighest

▸ **withHighest**(`...attributes`): `P`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...attributes` | [`Sorter`](../modules/game_types.md#sorter)<`P`\>[] |

#### Returns

`P`

#### Defined in

[game/player/collection.ts:92](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L92)

___

### withLowest

▸ **withLowest**(`...attributes`): `P`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...attributes` | [`Sorter`](../modules/game_types.md#sorter)<`P`\>[] |

#### Returns

`P`

#### Defined in

[game/player/collection.ts:96](https://github.com/aghull/boardzilla-core/blob/1935b1b/game/player/collection.ts#L96)

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
