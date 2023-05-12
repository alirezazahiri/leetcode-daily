/**
 * @param {number[][]} questions
 * @return {number}
 */
function mostPoints(questions) {
    let n = questions.length;
    let dp = new Array(n).fill(BigInt(0));
    dp[n - 1] = questions[n - 1][0];
        
    for (let i = n - 2; i >= 0; --i) {
        dp[i] = questions[i][0];
        let skip = questions[i][1];
        if (i + skip + 1 < n) {
            dp[i] += dp[i + skip + 1];
        }
        
        // dp[i] = max(solve it, skip it)
        dp[i] = Math.max(dp[i], dp[i + 1]);
    }
        
    return dp[0];
}