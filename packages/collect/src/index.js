export async function asyncCollectOf(iter) {
  const list = []
  for await (const x of iter) {
    list.push(x)
  }
  return list
}

export async function asyncCollectBy(iter, by) {
  const list = []
  for await (const x of iter) {
    if (await by(x)) {
      list.push(x)
    }
  }
  return list
}

export async function asyncCollectTo(iter, to) {
  const list = []
  for await (const x of iter) {
    list.push(await to(x))
  }
  return list
}

export async function asyncCollect(iter, by, to) {
  if (!to) return (!by ? asyncCollectOf(iter) : asyncCollectBy(iter, by))
  const list = []
  let i = 0, y
  for await (const x of iter) if (by(x, i++)) list.push(to(x, i))
  return list
}