// URL: https://leetcode.com/problems/single-number-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let visited = [];
  for (const num of nums) {
    if (!visited.find((n) => n == num)) visited.push(num);
    else continue;
    if (nums.filter((n) => n == num).length == 1) return num;
  }
};
