function coinChange(coins: number[], amount: number): number {
  if (amount === 0) return 0;

  let min = Infinity;
  const cache = new Map<number, number>();

  const dfs = (current: number, count: number) => {
    if (current === 0) return count;
    if (cache.has(current)) return cache.get(current)! + count;

    let localMin = Infinity;

    for (const c of coins) {
      const remaining = current - c;

      if (remaining < 0) continue;

      const result = dfs(remaining, count + 1);
      localMin = Math.min(result, localMin);
    }

    cache.set(current, localMin - count);
    min = Math.min(min, localMin);

    return localMin;
  };

  dfs(amount, 0);

  return min === Infinity ? -1 : min;
}

console.assert(coinChange([186, 419, 83, 408], 6249) == 20, "test 1");
console.assert(coinChange([1, 2, 5], 100) === 20, "test 2");
console.assert(coinChange([1, 2, 5], 11) === 3, "test 3");
console.assert(coinChange([2], 3) === -1, "test 4");
