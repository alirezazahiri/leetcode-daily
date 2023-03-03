// URL: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let idx = 0,
    i = 0,
    nc = 0;
  while (i < haystack.length) {
    nc = 0;
    if (haystack[i] == needle[nc]) {
      idx = i;
      let c = 0;
      let flag = true;
      while (nc < needle.length - 1) {
        c++;
        if (needle[++nc] !== haystack[++idx]) {
          flag = false;
          break;
        }
      }
      if (flag) return idx - c;
    }
    i++;
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode", "leeto"));
