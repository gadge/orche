async function asyncDistinctOf(iter) {
  const dedupe = [];
  for await (const x of iter)
    if (!dedupe.includes(x)) dedupe.push(x);
  return dedupe
}

async function asyncDistinctBy(iter, by) {
  const dedupe = [];
  let i = 0;
  for await (const x of iter)
    if (by(x, i++) && !dedupe.includes(x)) dedupe.push(x);
  return dedupe
}

async function asyncDistinctTo(iter, to) {
  if (!to) return asyncDistinctOf(iter)
  const dedupe = [];
  let i = 0, y;
  for await (const x of iter)
    if (!dedupe.includes(y = to(x, i++))) dedupe.push(y);
  return dedupe
}

async function asyncDistinct(iter, by, to) {
  if (!to) return (!by ? asyncDistinctOf(iter) : asyncDistinctBy(iter, by))
  const dedupe = [];
  let i = 0, y;
  for await (const x of iter)
    if (by(x, i++) && !dedupe.includes(y = to(x, i))) dedupe.push(y);
  return dedupe
}

export { asyncDistinct, asyncDistinctBy, asyncDistinctOf, asyncDistinctTo };
