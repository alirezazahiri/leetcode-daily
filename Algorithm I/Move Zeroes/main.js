// URL: https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const indices = [];
  nums.forEach((num, idx) => {
    if (!num) indices.push(idx);
  });
  while (indices.length) {
    nums.splice(indices.pop(), 1);
    nums.push(0);
  }
};
