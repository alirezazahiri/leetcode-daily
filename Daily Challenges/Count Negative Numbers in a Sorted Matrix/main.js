// URL: https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++)
        for (let j = grid[i].length - 1; i >= 0; j--)
            if (grid[i][j] < 0) count++;
            else break;

    return count;
};