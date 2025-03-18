<div style="text-align:center">
  <img alt="banner" src="./media/orche-banner.svg">
  <p style="text-align:center">A collection of functional operations for JavaScript</p>
</div>

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

## Features

- 🚀 Lightweight and fast functional operations
- 📦 Small, focused modules - install only what you need
- 🔧 Modern JavaScript with full TypeScript support
- 🧩 Composable utilities that work great together

## Installation

```bash
# Using npm
npm install @orche/<package-name>

# Using yarn
yarn add @orche/<package-name>

# Using pnpm
pnpm add @orche/<package-name>
```

## Packages

|                                 |                                    |                   |
|---------------------------------|------------------------------------|-------------------|
| [**collect**](packages/collect) | Collection manipulation utilities  | ![v][collect-dm]  |
| [**distinct**](packages/distinct)| Remove duplicates from collections | ![v][distinct-dm] |
| [**reduce**](packages/reduce)    | Powerful array reduction utilities | ![v][reduce-dm]   |

[//]: <> (Package Download Metrics)
[collect-dm]: https://flat.badgen.net/npm/dm/@orche/collect
[distinct-dm]: https://flat.badgen.net/npm/dm/@orche/distinct
[reduce-dm]: https://flat.badgen.net/npm/dm/@orche/reduce

## Usage Examples

### Collect
```javascript
import { collect } from '@orche/collect'

// Async data fetching and transformation
const urls = ['api/user/1', 'api/user/2', 'api/user/3']
const users = await collect(urls, async url => {
  const response = await fetch(url)
  return response.json()
})
console.log(users) // [{ id: 1, ... }, { id: 2, ... }, { id: 3, ... }]
```

### Distinct
```javascript
import { distinct } from '@orche/distinct'

// Async deduplication with custom comparator
const userRecords = [
  { id: 1, name: 'Alice' },
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
]
const uniqueUsers = await distinct(userRecords, async (a, b) => {
  // Simulate async validation
  await new Promise(resolve => setTimeout(resolve, 100))
  return a.id === b.id
})
console.log(uniqueUsers) // [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
```

### Reduce
```javascript
import { reduce } from '@orche/reduce'

// Async accumulation of remote data
const fileIds = ['doc1', 'doc2', 'doc3']
const totalSize = await reduce(fileIds, async (acc, id) => {
  const stats = await fetch(`api/files/${id}/stats`)
  const { size } = await stats.json()
  return acc + size
}, 0)
console.log(totalSize) // Total size of all files
```

## License

[BSD-3-Clause](LICENSE) © Hoyeung Wong
