// URL: https://leetcode.com/problems/rotting-oranges/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const dirs = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  const q = [];
  for (let row = 0; row < grid.length; ++row) {
    for (let col = 0; col < grid[0].length; ++col) {
      if (grid[row][col] === 2) {
        q.push([row, col]);
      }
    }
  }
  let min = 0;
  while (q.length > 0) {
    const size = q.length;
    let ifOne = false;
    for (let i = 0; i < size; i++) {
      const [r, c] = q.shift();
      for (let dir of dirs) {
        const [r1, c1] = [dir[0] + r, c + dir[1]];
        if (
          r1 >= 0 &&
          c1 >= 0 &&
          r1 < grid.length &&
          c1 < grid[0].length &&
          grid[r1][c1] === 1
        ) {
          ifOne = true;
          grid[r1][c1] = 2;
          q.push([r1, c1]);
        }
      }
    }
    min = ifOne ? min + 1 : min;
  }
  for (let row = 0; row < grid.length; ++row) {
    for (let col = 0; col < grid[0].length; ++col) {
      if (grid[row][col] === 1) {
        return -1;
      }
    }
  }
  return min;
};
