function sortArray_countingSort(arr: number[]): number[] {
  const [min, max] = [Math.min(...arr), Math.max(...arr)];
  const n = max + Math.abs(min) + 1;
  const freq: Array<number> = Array.from({ length: n }, () => 0);
  const SHIFT = Math.abs(min);
  const result: number[] = [];

  for (const item of arr) {
    freq[item + SHIFT]++;
  }

  for (let i = 0; i < n; i++) {
    if (freq[i]) result.push(...Array.from({ length: freq[i] }, () => i - SHIFT));
  }

  return result;
}

function sortArray(arr: number[]): number[] {
  const n = arr.length;
  if (n == 1) {
    return arr;
  }

  const left = arr.slice(0, Math.floor(n / 2));
  const right = arr.slice(Math.floor(n / 2));

  const sortedLeft = sortArray(left);
  const sortedRight = sortArray(right);

  let l = sortedLeft.length,
    r = sortedRight.length;
  const result: number[] = Array.from({ length: l + r });
  while (l > 0 && r > 0) {
    if (sortedRight[r - 1] > sortedLeft[l - 1]) {
      result[l + r - 1] = sortedRight[--r];
    } else {
      result[l + r - 1] = sortedLeft[--l];
    }
  }

  if (l > 0) {
    for (let i = 0; i < l; i++) result[i] = sortedLeft[i];
  } else if (r > 0) {
    for (let i = 0; i < r; i++) result[i] = sortedRight[i];
  }

  return result;
}

// this is a somewhat naive way to check array equality
Array.prototype.deepEqual = function <T>(arr: T[]): boolean {
  const n = this.length;
  for (let i = 0; i < n; i++) {
    if (Array.isArray(arr[i])) {
      if (!Array.isArray(this[i])) {
        return false;
      }
      return this[i].deepEqual(arr[i]);
    }
    if (arr[i] != this[i]) {
      return false;
    }
  }
  return true;
};
console.log(sortArray([5, 2, 3, 1]));
console.assert(sortArray([5, 2, 3, 1]).deepEqual([1, 2, 3, 5]));
