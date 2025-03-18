import { test } from 'node:test'
import { asyncReduce } from '../index.js'

test('reduce demo', async () => {
  const asyncIterable = async function* () {
    yield 1
    yield 2
    yield 3
    yield 4
    yield 5
  }

  console.log('Sum of numbers:')
  console.log(await asyncReduce(asyncIterable(), (acc, x) => acc + x, 0))

  console.log('\nProduct of numbers:')
  console.log(await asyncReduce(asyncIterable(), (acc, x) => acc * x, 1))

  console.log('\nConcatenate numbers as string:')
  console.log(await asyncReduce(asyncIterable(), (acc, x) => acc + String(x), ''))
})