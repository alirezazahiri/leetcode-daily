// URL: https://leetcode.com/problems/is-subsequence/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let charCount = {},
    lastPos = 0;
  for (const ch of s) {
    let newPos = t.indexOf(ch, lastPos);
    if (newPos === -1) return false;
    if (charCount[ch] === undefined) charCount[ch] = 1;
    else charCount[ch] += 1;
    lastPos = newPos + 1;
  }
  return [...s].reduce((prev, curr) => charCount[curr] + prev, 0) >= s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("acb", "ahbgdc"));
console.log(isSubsequence("aaaaaa", "bbaaaa"));
console.log(isSubsequence("aaaaaa", "bbaaaaaa"));
