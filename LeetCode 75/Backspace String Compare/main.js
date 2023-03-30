// URL: https://leetcode.com/problems/backspace-string-compare/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let resA = backspace(s);
  let resB = backspace(t);
  
  return resA === resB;
};

/**
 *
 * @param {string} s
 */
function backspace(s) {
  let res = [];

  for (let i = 0; i < s.length; i++)
    if (s[i] === "#") res.pop();
    else res.push(s[i]);

  return res.join("");
}

console.log(backspaceCompare("ad#c", "ab#c"));
console.log(backspaceCompare("ab##", "c#d#"));
console.log(backspaceCompare("a#c", "b"));
console.log(backspaceCompare("a#b", "b"));
console.log(backspaceCompare("hd#dp#czsp#####", "hd#dp#czsp######"));
