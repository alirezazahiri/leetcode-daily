// URL: https://leetcode.com/problems/number-of-ways-of-cutting-a-pizza/

/**
 * @param {string[]} pizza
 * @param {number} k
 * @return {number}
 */
const ways = (p, k) => {
  let apple = Array(p.length + 1)
      .fill()
      .map((_) => Array(p[0].length + 1).fill(0)),
    memo = apple.map((row) => row.map((_) => Array(k + 1).fill(-1))),
    dp = (i, j, k, ans = 0) => {
      if (k == 1) return apple[i][j] > 0 ? 1 : 0;
      if (apple[i][j] == 0) return 0;
      if (memo[i][j][k] >= 0) return memo[i][j][k];
      for (let row = i; row < p.length - 1; row++)
        if (apple[row + 1][j] != apple[i][j])
          ans = (ans + dp(row + 1, j, k - 1)) % (1e9 + 7);
      for (let col = j; col < p[0].length - 1; col++)
        if (apple[i][col + 1] != apple[i][j])
          ans = (ans + dp(i, col + 1, k - 1)) % (1e9 + 7);
      return (memo[i][j][k] = ans);
    };
  for (let i = p.length - 1; i >= 0; i--)
    for (let j = p[0].length - 1; j >= 0; j--)
      apple[i][j] =
        apple[i][j + 1] +
        apple[i + 1][j] -
        apple[i + 1][j + 1] +
        (p[i][j] == "A");
  return dp(0, 0, k);
};
