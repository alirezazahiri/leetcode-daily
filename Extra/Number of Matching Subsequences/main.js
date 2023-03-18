// URL: https://leetcode.com/problems/number-of-matching-subsequences/

var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;
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

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (t, words) {
  let answers = [];
  for (const s of words) if (isSubsequence(s, t)) answers.push(s);
  return answers.length;
};

console.log(numMatchingSubseq("abcde", ["a", "bb", "acd", "ace"]));
console.log(
  numMatchingSubseq("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"])
);
