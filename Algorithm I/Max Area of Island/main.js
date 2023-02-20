// URL: https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
  let max = 0;
  let rows = grid.length;
  let cols = grid[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, helper(i, j, grid));
      }
    }
  }
  return max;
}

function helper(i, j, grid) {
  let count = 0;
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === 0
  ) {
    return 0;
  }
  grid[i][j] = 0;
  count++;
  count += helper(i + 1, j, grid);
  count += helper(i - 1, j, grid);
  count += helper(i, j + 1, grid);
  count += helper(i, j - 1, grid);
  return count;
}
