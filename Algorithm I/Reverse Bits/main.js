// URL: https://leetcode.com/problems/reverse-bits/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let num = 0;
  for (let i = 0; i < 32; i++) {
    if ((n & 1) == 1) num += Math.pow(2, 31 - i);
    n >>= 1;
  }
  return num;
};
