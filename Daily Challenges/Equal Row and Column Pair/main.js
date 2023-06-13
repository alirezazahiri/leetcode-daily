// URL: https://leetcode.com/problems/equal-row-and-column-pairs/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  let cols = [],
    rows = [];
  let col = [],
    row = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      row.push(grid[i][j]);
      col.push(grid[j][i]);
    }
    cols.push(col.join(","));
    rows.push(row.join(","));
    col = [];
    row = [];
  }
  let count = 0;

  for (let i = 0; i < rows.length; i++)
    for (let j = 0; j < cols.length; j++) if (rows[i] === cols[j]) count++;

  return count;
};
