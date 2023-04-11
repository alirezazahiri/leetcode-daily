// URL: https://leetcode.com/problems/removing-stars-from-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let res = [];

  for (let i = 0; i < s.length; i++)
    if (s[i] === "*") res.pop();
    else res.push(s[i]);

  return res.join("");
};


console.log(removeStars("leet**cod*e"));