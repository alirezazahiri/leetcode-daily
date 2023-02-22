// URL: https://leetcode.com/problems/01-matrix/

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (matrix) => {
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const N = matrix.length;
  const M = matrix[0].length;
  const output = new Array(N).fill().map(() => Array(M).fill(0));
  const queue = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) queue.push([r, c]);
      else output[r][c] = -1;
    }
  }

  while (queue.length) {
    const len = queue.length;

    for (let i = 0; i < len; i++) {
      const [row, col] = queue.shift();

      for (const [dx, dy] of directions) {
        const x = row + dx;
        const y = col + dy;

        if (x < 0 || x >= matrix.length) continue;
        if (y < 0 || y >= matrix[0].length) continue;
        if (matrix[x][y] === 0) continue;

        if (output[x][y] !== -1) continue;

        output[x][y] = output[row][col] + 1;
        queue.push([x, y]);
      }
    }
  }

  return output;
};
