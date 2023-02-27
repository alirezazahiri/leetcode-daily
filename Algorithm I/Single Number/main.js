// URL: https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  for (const item of [...new Set(nums)]) {
    if (nums.filter((num) => item == num).length > 1) continue;
    else return item;
  }
  return -1;
};

console.log(singleNumber([2, 2, 1]));
