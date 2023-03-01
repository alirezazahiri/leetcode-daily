// URL: https://leetcode.com/problems/sort-an-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums;
  }

  // Divide the numsay into two halves
  const mid = Math.floor(nums.length / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  // Recursively sort each half
  const sortedLeft = sortArray(left);
  const sortedRight = sortArray(right);

  // Merge the sorted halves back together
  const merged = [];
  let i = 0;
  let j = 0;
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      merged.push(sortedLeft[i]);
      i++;
    } else {
      merged.push(sortedRight[j]);
      j++;
    }
  }
  return [...merged, ...sortedLeft.slice(i), ...sortedRight.slice(j)];
};

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));
console.log(sortArray([4, 2, 2, 8, 3, 3, 1]));
console.log(sortArray([3, -1]));
