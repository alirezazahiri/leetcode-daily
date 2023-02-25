// URL: https://leetcode.com/problems/triangle/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  for (let row = 1; row < triangle.length; row++) {
    const rowLength = triangle[row].length;
    for (let col = 0; col < rowLength; col++) {
      const leftValue = triangle[row - 1][col - 1] ?? Infinity;
      const rightValue = triangle[row - 1][col] ?? Infinity;
      triangle[row][col] += leftValue < rightValue ? leftValue : rightValue;
    }
  }

  return triangle[triangle.length - 1].reduce((prev, curr) =>
    prev < curr ? prev : curr
  );
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
