function findMatrix(nums: number[]): number[][] {
  let n = nums.length;
  const result: number[][] = [];
  const freq = Array.from({ length: n + 1 }, () => 0);
  for (const num of nums) freq[num]++;
  for (let i = 1; i <= n; i++) {
    const repeats = freq[i];
    for (let j = 0; j < repeats; j++) {
      if (j < result.length) {
        result[j].push(i);
      } else {
        result.push([i]);
      }
    }
  }
  return result;
}

console.assert(
  JSON.stringify(findMatrix([1, 3, 4, 1, 2, 3, 1])) === JSON.stringify([[1, 2, 3, 4], [1, 3], [1]]),
);
