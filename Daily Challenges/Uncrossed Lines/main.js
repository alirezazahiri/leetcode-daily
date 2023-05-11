/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function (nums1, nums2) {
  /**
        dp[i][j] - max uncrossed lines within 0..i in nums1 and 0..j in nums2
        dp[i][j] =
            nums[i] === nums[j] ? 1 + dp[i-1][j-1], else
            max(dp[i][j-1], dp[i-1][j])
     */

  const dp = [];

  for (let i = 0; i < nums1.length; i++) {
    dp[i] = [];
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i][j] = 1 + (i > 0 && j > 0 ? dp[i - 1][j - 1] : 0);

        continue;
      }

      dp[i][j] = Math.max(
        0,
        i > 0 ? dp[i - 1][j] : Number.MIN_SAFE_INTEGER,
        j > 0 ? dp[i][j - 1] : Number.MIN_SAFE_INTEGER
      );
    }
  }

  return dp[nums1.length - 1][nums2.length - 1];
};
