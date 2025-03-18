async function asyncReduce(iter, accum, init) {
  let i = 0;
  for await (const x of iter) {
    init = await accum(init, x, i++);
  }
  return init
}

export { asyncReduce };
