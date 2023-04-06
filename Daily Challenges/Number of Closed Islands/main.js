/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
  let result = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  if (cols < 3 || rows < 3) return 0;

  let checkNeighbours = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols) return false;
    if (grid[i][j] === 1) return true;

    grid[i][j] = 1;

    let left = checkNeighbours(i, j - 1);
    let right = checkNeighbours(i, j + 1);
    let top = checkNeighbours(i - 1, j);
    let bottom = checkNeighbours(i + 1, j);

    return left && right && top && bottom;
  };

  for (let i = 1; i < rows - 1; i++) {
    for (let j = 1; j < cols - 1; j++) {
      if (grid[i][j] === 0) result += checkNeighbours(i, j);
    }
  }

  return result;
};
