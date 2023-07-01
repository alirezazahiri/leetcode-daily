// URL: https://leetcode.com/problems/fair-distribution-of-cookies/

/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
function distributeCookies(cookies, k) {
  let sum = new Array(k).fill(0);
  let ans = Infinity;

  const distribution = (n) => {
    if (n === cookies.length) {
      const max = Math.max(...sum);
      ans = Math.min(ans, max);
      return;
    }
    for (let i = 0; i < k; i++) {
      sum[i] += cookies[n];
      distribution(n + 1);
      sum[i] -= cookies[n];
    }
  };

  distribution(0);
  return ans;
}
