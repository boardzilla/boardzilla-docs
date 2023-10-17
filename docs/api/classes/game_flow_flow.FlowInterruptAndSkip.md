[boardzilla](../index.md) / [Modules](../modules.md) / [game/flow/flow](../modules/game_flow_flow.md) / FlowInterruptAndSkip

# Class: FlowInterruptAndSkip

[game/flow/flow](../modules/game_flow_flow.md).FlowInterruptAndSkip

## Hierarchy

- `Error`

  ↳ **`FlowInterruptAndSkip`**

## Table of contents

### Constructors

- [constructor](game_flow_flow.FlowInterruptAndSkip.md#constructor)

### Properties

- [message](game_flow_flow.FlowInterruptAndSkip.md#message)
- [name](game_flow_flow.FlowInterruptAndSkip.md#name)
- [stack](game_flow_flow.FlowInterruptAndSkip.md#stack)
- [prepareStackTrace](game_flow_flow.FlowInterruptAndSkip.md#preparestacktrace)
- [stackTraceLimit](game_flow_flow.FlowInterruptAndSkip.md#stacktracelimit)

### Methods

- [captureStackTrace](game_flow_flow.FlowInterruptAndSkip.md#capturestacktrace)

## Constructors

### constructor

• **new FlowInterruptAndSkip**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1073

## Properties

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1068

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1067

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1069

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

**`See`**

https://v8.dev/docs/stack-trace-api#customizing-stack-traces

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
