// URL: https://leetcode.com/problems/matrix-diagonal-sum/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let sum = 0;
  let ROWS_COUNT = mat.length,
    COLS_COUNT = mat[0].length;
  for (let i = 0; i < ROWS_COUNT; i++)
    for (let j = 0; j < COLS_COUNT; j++)
      if (i == j || j === COLS_COUNT - (i + 1)) sum += mat[i][j];
  return sum;
};

/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
  let result = 0;
  let left = 0,
    right = mat.length - 1;
  for (let i = 0; i < mat.length; i++) {
    if (left == right) {
      result += mat[i][left]; // or mat[i][right]
    } else {
      result += mat[i][left];
      result += mat[i][right];
    }
    left++;
    right--;
  }
  return result;
};

const diagonalSum = (mat) =>
  mat.reduce((sum, row, i) => sum + row[i] + row[row.length - i - 1], 0) -
  (mat.length % 2
    ? mat[Math.floor(mat.length / 2)][Math.floor(mat.length / 2)]
    : 0);
