// URL: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (const [i, num_i] of Object.entries(nums))
    for (const [j, num_j] of Object.entries(nums).slice(+i+1))
      if (num_i + num_j == target) return [+i, +j];
};
