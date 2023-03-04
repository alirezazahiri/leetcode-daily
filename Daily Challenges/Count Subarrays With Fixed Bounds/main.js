// URL: https://leetcode.com/problems/count-subarrays-with-fixed-bounds/

/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
const countSubarrays = (nums, minK, maxK) => {
  let left = -1,
    min = -1,
    max = -1,
    count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < minK || nums[i] > maxK) left = i;

    if (nums[i] === minK) min = i;

    if (nums[i] === maxK) max = i;

    let c = Math.min(min, max) - left;

    if (c > 0) count += c;
  }

  return count;
};
