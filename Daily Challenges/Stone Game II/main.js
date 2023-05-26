// URL: https://leetcode.com/problems/stone-game-ii/

/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    const sums = [...piles];
    const dp = Array(piles.length + 1).fill(null).map(_ => Array(piles.length + 1).fill(0));
    for (let i = piles.length - 2; i >= 0; i--) {
        sums[i] += sums[i + 1];
    }
    for (let i = 0; i < piles.length; i++) {
        dp[i][piles.length] = sums[i];
    }
    for (let i = piles.length - 1; i >= 0; i--) {
        for (let j = piles.length - 1; j >= 1; j--) {
            const x = 2 * j;
            const y = piles.length - i;
            for (let t = 1; t <= x && t <= y; t++) {
                dp[i][j] = Math.max(dp[i][j], sums[i] - dp[i + t][Math.max(j, t)]);
            }
        }
    }
    return dp[0][1];
};