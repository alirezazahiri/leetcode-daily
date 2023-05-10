/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let save = Array.from(Array(n), () => new Array(n).fill(0));
  let count = 1;
  let left = 0;
  let right = n - 1;
  let bottom = n - 1;
  let top = 0;
  let dir = 0;

  while (count <= n * n) {
    if (dir == 0) {
      for (let i = left; i <= right; i++) {
        save[top][i] = count;
        count++;
      }
      top++;
      dir++;
    }
    if (dir == 1) {
      for (let i = top; i <= bottom; i++) {
        save[i][right] = count;
        count++;
      }
      right--;
      dir++;
    }
    if (dir == 2) {
      for (let i = right; i >= left; i--) {
        save[bottom][i] = count;
        count++;
      }
      bottom--;
      dir++;
    }
    if (dir == 3) {
      for (let i = bottom; i >= top; i--) {
        save[i][left] = count;
        count++;
      }
      left++;
      dir++;
    }
    dir = 0;
  }

  return save;
};

console.log(generateMatrix(10));

/* 
[1, 2, 3, 4, 5, 6, 7, 8, 9]

1, 2, 3 -> [0][0:n]
4 -> [1][n-1]
5, 6, 7 -> [n-1][n-1:0:-1]
8, 9 -> [1][0:n-1]

---------------------------------
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

1, 2, 3, 4 -> [0][0:n]
5 -> [1][n-1]
6 -> [2][n-1]
7, 8, 9, 10 -> [n-1][n-1:0:-1]
11 -> [2][0]
12, 13, 14 -> [1][0:n-1]



*/
