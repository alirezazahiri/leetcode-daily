/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res = []
    let l = 0;
    let r = matrix[0].length;
    let t = 0;
    let b = matrix.length;

    while (l < r && t < b) {
        for (let i = l; i < r; i++)
            res.push(matrix[t][i])
        t++;

        for (let i = t; i < b; i++)
            res.push(matrix[i][r - 1]);
        r--;

        if (!(l < r && t < b))
            break;

        for (let i = r - 1; i >= l; i--)
            res.push(matrix[b - 1][i])
        b--;

        for (let i = b - 1; i >= t; i--)
            res.push(matrix[i][l])
        l++;
    }

    return res;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiralOrder([[1, 2, 3], [8, 9, 4], [7, 6, 5]]));