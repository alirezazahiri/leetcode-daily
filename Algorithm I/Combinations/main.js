// URL: https://leetcode.com/problems/combinations/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];
  const track = [];

  (function backtrack(n, k, start) {
    if (track.length === k) return res.push(track.slice());
    if (track.length > k) return;

    for (let i = start; i <= n; i++) {
      track.push(i);
      backtrack(n, k, i + 1);
      track.pop();
    }
  })(n, k, 1);

  return res;
};

console.log(combine(4, 2));
