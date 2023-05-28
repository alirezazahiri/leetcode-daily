// URL: https://leetcode.com/problems/minimum-cost-to-cut-a-stick/

/**
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
var minCost = function (n, cuts) {
  cuts.sort((a, b) => a - b);
  cuts = [0, ...cuts, n];

  const stickLen = cuts.length;

  const dp = Array(stickLen)
    .fill(0)
    .map(() => Array(stickLen).fill(0));

  for (let i = stickLen - 2; i >= 0; i--) {
    for (let j = i + 2; j < stickLen; j++) {
      let minCost = Infinity;
      for (let k = i + 1; k < j; k++) {
        const cost = cuts[j] - cuts[i] + dp[i][k] + dp[k][j];
        minCost = Math.min(minCost, cost);
      }

      dp[i][j] = minCost;
    }
  }
  return dp[0][stickLen - 1];
};
