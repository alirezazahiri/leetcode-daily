// URL: https://leetcode.com/problems/edit-distance/

const minDistance = (word1, word2) => {
  const tbl = [...Array(word1.length + 1)].map(() => Array(word2.length + 1));
  for (let i = 0; i <= word1.length; i++) tbl[i][0] = i;
  for (let i = 0; i <= word2.length; i++) tbl[0][i] = i;

  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      const cost = word1[i - 1] === word2[j - 1] ? 0 : 1;
      tbl[i][j] = Math.min(
        tbl[i - 1][j] + 1,
        tbl[i][j - 1] + 1,
        tbl[i - 1][j - 1] + cost
      );
    }
  }

  return tbl[word1.length][word2.length];
};
