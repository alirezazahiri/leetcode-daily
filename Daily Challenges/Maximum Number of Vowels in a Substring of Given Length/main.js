// URL: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

const checkString = (ch) => "aeiou".includes(ch);

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let c = 0;
  let maxCount = 0;
  let i = 0,
    j = 0;

  while (i < k) {
    if (checkString(s[i++])) c++;
  }

  maxCount = Math.max(maxCount, c);

  while (i < s.length) {
    if (checkString(s[j++])) c--;
    if (checkString(s[i++])) c++;
    maxCount = Math.max(maxCount, c);
  }

  return maxCount;
};

console.log(maxVowels("weallloveyou", 7));
