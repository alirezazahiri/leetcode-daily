// URL: https://leetcode.com/problems/merge-strings-alternately/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const L1 = word1.length,
    L2 = word2.length;
  let res = "";
  for (let i = 0; i < Math.max(L1, L2); i++)
    res += (i < L1 ? word1[i] : "") + (i < L2 ? word2[i] : "");
  return res;
};
