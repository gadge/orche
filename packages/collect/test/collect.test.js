import { test } from 'node:test'
import { asyncCollectOf, asyncCollectBy, asyncCollectTo } from '../index.js'

test('collect demo', async () => {
  const asyncIterable = async function* () {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
  }

  console.log('Basic collection:')
  console.log(await asyncCollectOf(asyncIterable()))

  console.log('\nCollect even numbers:')
  console.log(await asyncCollectBy(asyncIterable(), x => x % 2 === 0))

  console.log('\nCollect and multiply by 2:')
  console.log(await asyncCollectTo(asyncIterable(), x => x * 2))
})