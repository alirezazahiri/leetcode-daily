// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const c1 = [...s1].reduce((counter, c) => {
    counter[c] = (counter[c] ?? 0) + 1;
    return counter;
  }, {});

  for (let left = 0, right = 0, c2 = {}; right < s2.length; right++) {
    const c = s2[right];
    c2[c] = (c2[c] ?? 0) + 1;
    while (c2[c] > (c1[c] ?? 0)) {
      c2[s2[left++]]--;
    }
    if (right - left + 1 === s1.length) {
      return true;
    }
  }
  return false;
};

console.log(checkInclusion("ab", "eidbaooo"));
console.log(checkInclusion("ab", "eidboaoo"));
console.log(checkInclusion("abc", "bbbca"));
console.log(checkInclusion("dinitrophenylhydrazine", "acetylphenylhydrazine"));
console.log(
  checkInclusion(
    "trinitrophenylmethylnitramine",
    "dinitrophenylhydrazinetrinitrophenylmethylnitramine"
  )
);
