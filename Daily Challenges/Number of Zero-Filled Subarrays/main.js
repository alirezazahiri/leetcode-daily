// URL: https://leetcode.com/problems/number-of-zero-filled-subarrays/

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let a = 0;
  let b = 0;

  for (const c of nums) {
    c === 0 ? (b++, (a = a + b)) : (b = 0);
  }

  return a;
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));
