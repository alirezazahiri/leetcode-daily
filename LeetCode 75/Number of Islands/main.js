// URL: https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let totalIslands = 0;

  const rowList = [1, 0, 0, -1];
  const colList = [0, 1, -1, 0];

  const rowLen = grid.length;
  const colLen = grid[0].length;

  const visited = new Array(rowLen)
    .fill()
    .map(() => new Array(colLen).fill(false));

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        totalIslands++;
        bfsUtils(i, j, grid, rowLen, colLen, rowList, colList, visited);
      }
    }
  }

  return totalIslands;
};

const bfsUtils = (sr, sc, grid, rowLen, colLen, rowList, colList, visited) => {
  const queue = new Queue();

  queue.enqueue([sr, sc]);
  visited[sr][sc] = true;

  while (!queue.isEmpty()) {
    const [row, col] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const deltaRow = row + rowList[i];
      const deltaCol = col + colList[i];

      if (
        deltaRow < 0 ||
        deltaCol < 0 ||
        deltaRow >= rowLen ||
        deltaCol >= colLen
      )
        continue;

      if (deltaRow === row && deltaCol === col) continue;
      if (grid[deltaRow][deltaCol] === "1" && !visited[deltaRow][deltaCol]) {
        visited[deltaRow][deltaCol] = true;
        queue.enqueue([deltaRow, deltaCol]);
      }
    }
  }
};
