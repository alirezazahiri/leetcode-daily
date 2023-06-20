// URL: https://leetcode.com/problems/k-radius-subarray-averages/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const getAverages = (nums, k) => {
  const n = nums.length;
  const avgs = Array(n).fill(-1);
  const diameter = k * 2 + 1;
  let [left, right, sum] = [0, 0, 0];

  while (right < diameter) sum += nums[right++];

  while (right <= n) {
    avgs[right - k - 1] = Math.floor(sum / diameter);
    sum += nums[right++];
    sum -= nums[left++];
  }

  return avgs;
};

console.log(getAverages([7, 4, 3, 9, 1, 8, 5, 2, 6], 3));
