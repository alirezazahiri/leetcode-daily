// URL: https://leetcode.com/problems/top-k-frequent-words/

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let dict = {};

  words.forEach((word) => {
    dict[word] = dict[word] ?? 0;
    dict[word]++;
  });

  let entries = Object.entries(dict).sort(([a, cA], [b, cB]) => {
    const diff = cB - cA;
    return diff === 0 ? (a > b ? 1 : -1) : diff;
  });

  let freq_words = [];

  for (let i = 0; i < k; i++) freq_words.push(entries[i][0]);

  return freq_words;
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3));
console.log(
  topKFrequent(
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4
  )
);
