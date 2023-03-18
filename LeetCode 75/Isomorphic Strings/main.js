// URL: https://leetcode.com/problems/isomorphic-strings/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let charDictionary = {};
  for (let i = 0; i < s.length; i++) {
    if (!charDictionary[s[i]] && !Object.values(charDictionary).includes(t[i]))
      charDictionary[s[i]] = t[i];
  }
  return [...s].map((ch) => charDictionary[ch]).join("") === t;
};

console.log(isIsomorphic("add", "egg"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("badc", "baba"));
