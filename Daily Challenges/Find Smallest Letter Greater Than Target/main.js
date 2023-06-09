// URL: https://leetcode.com/problems/find-smallest-letter-greater-than-target/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  const TARGET_ASCII = target.charCodeAt(0);
  const LETTERS = [...new Set(letters)];
  for (const letter of LETTERS) {
    if (TARGET_ASCII < letter.charCodeAt(0)) return letter;
  }
  return letters[0];
};
