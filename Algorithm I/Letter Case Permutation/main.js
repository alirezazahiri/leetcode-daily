// URL: https://leetcode.com/problems/letter-case-permutation/

/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let res = [];
  bt(res, "", s, 0);

  return res;
};

var bt = (results, curr, s, i) => {
  if (curr.length == s.length) {
    results.push(curr);
    return;
  }

  if (s[i].match(/[a-zA-Z]/)) {
    var next1 = curr + s[i].toUpperCase();
    var next2 = curr + s[i].toLowerCase();

    bt(results, next1, s, i + 1);
    bt(results, next2, s, i + 1);
  } else {
    let next = curr + s[i];
    bt(results, next, s, i + 1);
  }
};


console.log(letterCasePermutation("a1b2"));