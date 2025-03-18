# @orche/collect

[![npm version][badge-npm-version]][url-npm]
[![npm download monthly][badge-npm-download-monthly]][url-npm]
[![npm download total][badge-npm-download-total]][url-npm]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]
[![npm license][badge-npm-license]][url-npm]

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/v/@orche/collect
[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@orche/collect
[badge-npm-download-total]: https://flat.badgen.net/npm/dt/@orche/collect
[badge-npm-license]: https://flat.badgen.net/npm/license/@orche/collect
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/orche
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/orche

[//]: <> (Links)
[url-npm]: https://npmjs.org/package/@orche/collect
[url-github]: https://github.com/hoyeungw/orche

## Overview

Efficient async collection utilities for handling async iterables with powerful filtering and mapping capabilities.

## Features

- Async-first design
- Flexible collection strategies
- Conditional filtering
- Mapping transformations
- Zero dependencies
- ESM support

## Installation

```bash
# npm
$ npm install @orche/collect

# yarn
$ yarn add @orche/collect

# pnpm
$ pnpm add @orche/collect
```

## Usage

```js
import { asyncCollectOf, asyncCollectBy, asyncCollectTo } from '@orche/collect'

// Basic collection
const asyncIterable = async function* () {
  yield 1
  yield 2
  yield 3
}

// Collect all values
const all = await asyncCollectOf(asyncIterable())
// => [1, 2, 3]

// Collect with filtering
const even = await asyncCollectBy(asyncIterable(), x => x % 2 === 0)
// => [2]

// Collect with transformation
const doubled = await asyncCollectTo(asyncIterable(), x => x * 2)
// => [2, 4, 6]
```

## License

[BSD-3-Clause](LICENSE)