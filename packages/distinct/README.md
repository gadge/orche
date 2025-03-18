# @orche/distinct

[![npm version][badge-npm-version]][url-npm]
[![npm download monthly][badge-npm-download-monthly]][url-npm]
[![npm download total][badge-npm-download-total]][url-npm]
[![github commit last][badge-github-last-commit]][url-github]
[![github commit total][badge-github-commit-count]][url-github]
[![npm license][badge-npm-license]][url-npm]

[//]: <> (Shields)
[badge-npm-version]: https://flat.badgen.net/npm/v/@orche/distinct
[badge-npm-download-monthly]: https://flat.badgen.net/npm/dm/@orche/distinct
[badge-npm-download-total]: https://flat.badgen.net/npm/dt/@orche/distinct
[badge-npm-license]: https://flat.badgen.net/npm/license/@orche/distinct
[badge-github-last-commit]: https://flat.badgen.net/github/last-commit/hoyeungw/orche
[badge-github-commit-count]: https://flat.badgen.net/github/commits/hoyeungw/orche

[//]: <> (Links)
[url-npm]: https://npmjs.org/package/@orche/distinct
[url-github]: https://github.com/hoyeungw/orche

## Overview

A lightweight identity function that returns its input unchanged. Perfect for functional composition and default transformations.

## Features

- Zero dependencies
- Tiny footprint (<1KB)
- Pure function
- ESM support

## Installation

```bash
# npm
$ npm install @orche/distinct

# yarn
$ yarn add @orche/distinct

# pnpm
$ pnpm add @orche/distinct
```

## Usage

```js
import { oneself } from '@orche/distinct'

// Basic usage
oneself(42)           // => 42
oneself('hello')      // => 'hello'
oneself([1, 2, 3])    // => [1, 2, 3]

// Function composition
const pipeline = [oneself, String, parseInt]
const result = pipeline.reduce((x, f) => f(x), 42)  // => 42

// Default transformer
const transform = condition ? complexTransform : oneself
```

## License

[BSD-3-Clause](LICENSE)
