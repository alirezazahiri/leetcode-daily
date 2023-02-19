// URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/

const isDistinct = (s) => {
  return [...new Set([...s])].length === s.length;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let subStrings = [];

  for (let i = 0; i < s.length; i++) {
    let temp = s[i];
    for (let j = i + 1; j < s.length; j++) {
      if (temp.includes(s[j])) break;
      temp += s[j];
    }
    if (isDistinct(temp)) subStrings.push(temp);
  }

  if (subStrings.length)
    return [...new Set(subStrings)].sort((a, b) => b.length - a.length)[0]
      .length;
  return 0;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("pwpwkew"));
console.log(lengthOfLongestSubstring("pwpkew"));
console.log(lengthOfLongestSubstring(""));
console.log(lengthOfLongestSubstring(" "));
console.log(lengthOfLongestSubstring("  "));
console.log(lengthOfLongestSubstring("aa"));
console.log(lengthOfLongestSubstring("bbbbbbb"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("anviaj"));
