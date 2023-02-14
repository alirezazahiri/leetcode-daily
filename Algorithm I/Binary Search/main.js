/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left != right) {
    let mid = Math.floor((left + right) / 2);
    let focusedNumber = nums[mid];
    if (target == focusedNumber) return mid;
    if (target > focusedNumber) left = mid + 1;
    else right = mid;
  }
  if (left == right && nums[left] == target) return left;
  return -1;
};
