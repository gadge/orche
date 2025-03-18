# @orche/reduce

[![npm version][badge-npm-version]][url-npm]
[![npm download monthly][badge-npm-download-monthly]][url-npm]
[![npm download total][badge-npm-download-total]][url-npm]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]
[![npm license][badge-npm-license]][url-npm]

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/v/@orche/reduce
[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@orche/reduce
[badge-npm-download-total]: https://flat.badgen.net/npm/dt/@orche/reduce
[badge-npm-license]: https://flat.badgen.net/npm/license/@orche/reduce
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/orche
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/orche

[//]: <> (Links)
[url-npm]: https://npmjs.org/package/@orche/reduce
[url-github]: https://github.com/hoyeungw/orche

## Overview

Async reduction utility for async iterables with support for index-aware accumulation.

## Features

- Async-first design
- Index-aware reduction
- Flexible accumulator patterns
- Promise-based accumulation
- Zero dependencies
- ESM support

## Installation

```bash
# npm
$ npm install @orche/reduce

# yarn
$ yarn add @orche/reduce

# pnpm
$ pnpm add @orche/reduce
```

## Usage

```js
import { asyncReduce } from '@orche/reduce'

// Basic sum reduction
const asyncIterable = async function* () {
  yield 1
  yield 2
  yield 3
}

const sum = await asyncReduce(asyncIterable(), (acc, x) => acc + x, 0)
// => 6

// Index-aware reduction
const indexedSum = await asyncReduce(
  asyncIterable(),
  (acc, x, i) => acc + x * i,
  0
)
// => 0*1 + 1*2 + 2*3 = 8

// Async accumulator
const asyncSum = await asyncReduce(
  asyncIterable(),
  async (acc, x) => (await acc) + x,
  Promise.resolve(0)
)
// => 6
```

## License

[BSD-3-Clause](LICENSE)