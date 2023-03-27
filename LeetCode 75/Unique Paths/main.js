// URL: https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const memo = new Array(m).fill(1).map(() => new Array(n).fill(1));

  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++) memo[i][j] = memo[i - 1][j] + memo[i][j - 1];

  return memo[m - 1][n - 1];
};
