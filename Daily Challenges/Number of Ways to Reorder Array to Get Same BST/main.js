// URL: https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/

/**
 * @param {number[]} nums
 * @return {number}
 */
var numOfWays = function (nums) {
  return (helper(nums) - 1n) % BigInt(1e9 + 7);
};

var nCr = (n, r) => {
  if (n < 2) return 1n;
  (n = BigInt(n)), (r = BigInt(r));
  return fact(n) / (fact(n - r) * fact(r));
};

const cache = new Map();

var fact = (n) => {
  if (n < 2) return 1n;
  if (cache.has(n)) return cache.get(n);
  const res = BigInt(n) * fact(n - 1n);
  cache.set(n, res);
  return res;
};

var helper = (nums) => {
  if (nums.length < 3) return 1n;

  const left = [],
    right = [];

  for (let i = 1; i < nums.length; ++i) {
    if (nums[i] < nums[0]) left.push(nums[i]);
    if (nums[i] > nums[0]) right.push(nums[i]);
  }

  const comb = nCr(nums.length - 1, left.length);
  return comb * helper(left) * helper(right);
};
