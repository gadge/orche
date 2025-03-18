import { test } from 'node:test'
import { asyncDistinctOf, asyncDistinctBy, asyncDistinctTo } from '../index.js'

test('distinct demo', async () => {
  const asyncIterable = async function* () {
    yield 1
    yield 2
    yield 2
    yield 3
    yield 3
    yield 4
  }

  console.log('Basic deduplication:')
  console.log(await asyncDistinctOf(asyncIterable()))

  console.log('\nDistinct even numbers:')
  console.log(await asyncDistinctBy(asyncIterable(), x => x % 2 === 0))

  console.log('\nDistinct and multiply by 2:')
  console.log(await asyncDistinctTo(asyncIterable(), x => x * 2))
})