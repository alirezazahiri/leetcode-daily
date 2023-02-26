// URL: https://leetcode.com/problems/power-of-two/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  let res = 1;
  while (true) {
    if (res > n) return false;
    if (res == n) return true;
    res *= 2;
  }
};
