// URL: https://leetcode.com/problems/running-sum-of-1d-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  return nums.map(
    (value, idx, arr) =>
      value + arr.slice(0, idx).reduce((prev, curr) => prev + curr, 0)
  );
};

console.log(runningSum([1, 2, 3, 4]));

