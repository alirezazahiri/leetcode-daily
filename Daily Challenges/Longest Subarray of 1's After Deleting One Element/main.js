// URL: https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let max = 0;
  let deleted = 0;
  let l = 0;
  let r = 0;

  while (r < nums.length) {
    if (nums[r] === 1 || deleted === 0) {
      if (nums[r] === 0) deleted = 1;
      max = Math.max(max, r - l + 1 - deleted);
      r++;
    } else {
      if (nums[l] === 0) deleted = 0;
      l++;
    }
  }

  return max === nums.length ? max - 1 : max;
};

console.log(longestSubarray([1, 1, 0, 1]));
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));
