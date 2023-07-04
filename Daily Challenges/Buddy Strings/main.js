// URL: https://leetcode.com/problems/buddy-strings/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  if (s.length !== goal.length) return false;
  let indexes = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[i]) indexes.push(i);
    if (indexes.length > 2) return false;
  }
  if (!indexes.length) return s.length !== [...new Set(s)].length;
  const [i, j] = indexes;
  return s[i] === goal[j] && goal[i] === s[j];
};
