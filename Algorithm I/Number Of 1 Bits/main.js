// URL: https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let counter = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & 1) == 1) counter++;
    n >>= 1;
  }
  return counter;
};

console.log(hammingWeight(00000000000000000000000000001011));
