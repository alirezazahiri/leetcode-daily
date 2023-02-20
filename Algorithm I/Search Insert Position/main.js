// URL: https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  let mid;
  while (left != right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] == target) return mid;
    else if (target > nums[mid]) left = mid + 1;
    else right = mid;
  }
  if (target > nums[left]) return left + 1;
  return left;
};

/* SOLUTION 2 */
var searchInsert = function (nums, target) {
  if (nums.includes(target)) return nums.findIndex((val) => val == target);
  const idx = nums.findIndex((val) => val > target);
  return idx == -1 ? nums.length : idx;
};
