# @hibanka/enum-utils

![CI](https://github.com/Hibanka/enum-utils/actions/workflows/ci.yml/badge.svg)
[![NPM Version](https://badgen.net/npm/v/@hibanka/enum-utils)](https://npmjs.com/package/@hibanka/enum-utils)
[![Minimum Node.JS Version](https://badgen.net/npm/node/@hibanka/enum-utils)](https://npmjs.com/package/@hibanka/enum-utils)

Node.js Utilities for TypeScript enums.

## Installation

```bash
npm install @hibanka/enum-utils
```

## Documentation

### 1. Get numeric enum keys

```ts
import { numericEnumKeys } from '@hibanka/enum-utils';

enum TestEnum {
  A,
  B,
  C,
}

numericEnumKeys(TestEnum); // ['A', 'B', 'C']
```

### 2. Get numeric enum values

```ts
import { numericEnumValues } from '@hibanka/enum-utils';

enum TestEnum {
  A,
  B,
  C,
} 

numericEnumValues(TestEnum); // [0, 1, 2]
```

### 3. Get numeric enum entries

```ts
import { numericEnumEntries } from '@hibanka/enum-utils';

enum TestEnum {
  A,
  B,
  C,
}

numericEnumEntries(TestEnum); // [['A', 0], ['B', 1], ['C', 2]]
```
