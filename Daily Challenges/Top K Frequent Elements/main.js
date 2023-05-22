// URL: https://leetcode.com/problems/top-k-frequent-elements/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const numFreq = {};

  nums.forEach((num) => {
    numFreq[num] = numFreq[num] + 1 || 0;
  });

  return Object.keys(numFreq)
    .sort((a, b) => numFreq[b] - numFreq[a])
    .slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
