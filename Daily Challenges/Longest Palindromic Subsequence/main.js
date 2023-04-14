// URL: https://leetcode.com/problems/longest-palindromic-subsequence/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const n = s.length;
  // Initialize a 2D array to store the length of the longest palindromic subsequence
  const dp = Array(n)
    .fill()
    .map(() => Array(n).fill(0));

  // Iterate over the substrings in reverse order to fill in the dp table bottom-up
  for (let i = n - 1; i >= 0; i--) {
    // Base case: the longest palindromic subsequence of a single character is 1
    dp[i][i] = 1;
    for (let j = i + 1; j < n; j++) {
      // If the two characters match, the longest palindromic subsequence can be extended by two
      if (s[i] === s[j]) {
        dp[i][j] = 2 + dp[i + 1][j - 1];
      } else {
        // Otherwise, we take the maximum of the two possible substrings
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }

  // The length of the longest palindromic subsequence is in the top-right corner of the dp table
  return dp[0][n - 1];
};
