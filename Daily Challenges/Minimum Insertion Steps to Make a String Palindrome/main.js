// URL: https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    // reverse the input string
    const reversedS = s.split('').reverse().join('');
    // get the length of the input string
    const n = s.length;
    // create a 2D array to store the LCS of substrings
    const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
    
    // fill up the dp array using dynamic programming approach
    for(let i = 1; i <= n; i++) {
        for(let j = 1; j <= n; j++) {
            if(s[i-1] === reversedS[j-1]) {
                // if characters match, add 1 to LCS
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                // otherwise, take maximum LCS of two substrings
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    // return the minimum number of insertions required to make s a palindrome
    // this is the difference between the length of s and the length of its LCS
    return n - dp[n][n];
};