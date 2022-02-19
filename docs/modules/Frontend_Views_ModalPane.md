# Module: Frontend/Views/ModalPane

## Table of contents

### Interfaces

- [ModalFrame](../interfaces/Frontend_Views_ModalPane.ModalFrame.md)
- [ModalHandle](../interfaces/Frontend_Views_ModalPane.ModalHandle.md)

### Type aliases

- [ModalProps](Frontend_Views_ModalPane.md#modalprops)

### Functions

- [ModalPane](Frontend_Views_ModalPane.md#modalpane)

## Type aliases

<<<<<<< HEAD
### ModalHook

Ƭ **ModalHook**: [`Hook`](types_global_GlobalTypes.md#hook)<`boolean`\>

---

### ModalProps

Ƭ **ModalProps**: [`PaneProps`](Frontend_Components_GameWindowComponents.md#paneprops) & { `borderColor?`: `string` ; `hideClose?`: `boolean` ; `hook`: [`Hook`](types_global_GlobalTypes.md#hook)<`boolean`\> ; `initialPosition?`: { `x`: `number` ; `y`: `number` } ; `name?`: [`ModalName`](../enums/Frontend_Views_ModalPane.ModalName.md) ; `noPadding?`: `boolean` ; `style?`: `React.CSSProperties` ; `title`: `string` \| `React.ReactNode` ; `width?`: `string` ; `helpContent?`: () => `ReactNode` }
=======
### ModalProps

Ƭ **ModalProps**: [`PaneProps`](Frontend_Components_GameWindowComponents.md#paneprops) & { `hideClose?`: `boolean` ; `id`: `ModalId` ; `initialPosition?`: { `x`: `number` ; `y`: `number` } ; `style?`: `CSSStyleDeclaration` & `React.CSSProperties` ; `title`: `string` \| `React.ReactNode` ; `visible`: `boolean` ; `width?`: `string` ; `helpContent?`: () => `ReactNode` ; `onClose`: () => `void` }
>>>>>>> slytherin

## Functions

### ModalPane

▸ **ModalPane**(`__namedParameters`): `null` \| `Element`

#### Parameters

| Name                | Type                                                   |
| :------------------ | :----------------------------------------------------- |
| `__namedParameters` | [`ModalProps`](Frontend_Views_ModalPane.md#modalprops) |

#### Returns

`null` \| `Element`
