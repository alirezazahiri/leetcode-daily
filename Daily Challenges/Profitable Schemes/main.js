// URL: https://leetcode.com/problems/profitable-schemes/

/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */

// Recursion [TLE]
var profitableSchemes = function (n, minProfit, group, profit) {
  const m = group.length;
  const MOD = 10 ** 9 + 7;

  function dp(i, remain, total) {
    if (i === m) return total >= minProfit;

    let notTake = dp(i + 1, remain, total);
    let take = 0;
    if (group[i] <= remain)
      take = dp(
        i + 1,
        remain - group[i],
        Math.min(minProfit, total + profit[i])
      );
    return (notTake + take) % MOD;
  }
  return dp(0, n, 0);
};
// TC: Exponential
// SC: O(n)

// Recursion + Memoization
var profitableSchemes = function (n, minProfit, group, profit) {
  const m = group.length;
  const MOD = 10 ** 9 + 7;
  const memo = [...new Array(m)].map(() =>
    [...new Array(n + 1)].map(() => new Array(minProfit + 1).fill(-1))
  );

  function dp(i, remain, total) {
    if (i === m) return total >= minProfit;

    if (memo[i][remain][total] !== -1) return memo[i][remain][total];

    let notTake = dp(i + 1, remain, total);
    let take = 0;
    if (group[i] <= remain)
      take = dp(
        i + 1,
        remain - group[i],
        Math.min(minProfit, total + profit[i])
      );
    return (memo[i][remain][total] = (notTake + take) % MOD);
  }
  return dp(0, n, 0);
};
// m = profit.length, k = minProfit
// TC: O(m * n * k)
// SC: O(m * n * k)

// Tabulation
var profitableSchemes = function (n, minProfit, group, profit) {
  const m = group.length;
  const MOD = 10 ** 9 + 7;
  const dp = [...new Array(m + 1)].map(() =>
    [...new Array(n + 1)].map(() => new Array(minProfit + 1).fill(0))
  );

  // base case
  for (let i = 0; i < n + 1; i++) {
    dp[m][i][minProfit] = 1;
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let remain = 0; remain < n + 1; remain++) {
      for (let total = minProfit; total >= 0; total--) {
        let notTake = dp[i + 1][remain][total];
        let take = 0;
        if (group[i] <= remain)
          take =
            dp[i + 1][remain - group[i]][
              Math.min(minProfit, total + profit[i])
            ];
        dp[i][remain][total] = (notTake + take) % MOD;
      }
    }
  }
  return dp[0][n][0];
};
// m = profit.length, k = minProfit
// TC: O(m * n * k)
// SC: O(m * n * k)

// Tabulation - Space optimized
var profitableSchemes = function (n, minProfit, group, profit) {
  const m = group.length;
  const MOD = 10 ** 9 + 7;
  let dp = [...new Array(n + 1)].map(() => new Array(minProfit + 1).fill(0));

  // base case
  for (let i = 0; i < n + 1; i++) {
    dp[i][minProfit] = 1;
  }

  for (let i = m - 1; i >= 0; i--) {
    let temp = [...new Array(n + 1)].map(() =>
      new Array(minProfit + 1).fill(0)
    );
    for (let remain = 0; remain < n + 1; remain++) {
      for (let total = minProfit; total >= 0; total--) {
        let notTake = dp[remain][total];
        let take = 0;
        if (group[i] <= remain)
          take = dp[remain - group[i]][Math.min(minProfit, total + profit[i])];
        temp[remain][total] = (notTake + take) % MOD;
      }
    }
    dp = temp;
  }
  return dp[n][0];
};
// k = minProfit
// TC: O(n * k)
// SC: O(n * k)
