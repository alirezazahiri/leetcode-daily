// URL: https://leetcode.com/problems/longest-arithmetic-subsequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function (nums) {
    let n = nums.length,
        dp = new Array(n + 1).fill(2).map(() => Array(n + 1).fill(2)),
        max = 2;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let diff = nums[j] - nums[i];
            for (let k = i - 1; k >= 0; k--) {
                if (nums[i] - nums[k] === diff) dp[i][j] = Math.max(dp[i][j], dp[k][i] + 1);
            }
            max = Math.max(dp[i][j], max);
        }
    }
    return max;
};