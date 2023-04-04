// URL: https://leetcode.com/problems/optimal-partition-of-string/

/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let ans = 1;
  let marker = 0;
  let counts = {};

  while (marker < s.length) {
    let ch = s[marker];
    if (ch in counts) {
      counts = {};
      ans++;
    }
    counts[ch] = 1;
    marker++;
  }

  return ans;
};
