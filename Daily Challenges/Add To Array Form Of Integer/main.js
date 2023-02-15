// URL: https://leetcode.com/problems/add-to-array-form-of-integer/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */

const addTwoString = (a, b) => {
    bigIntA = BigInt(a);
    bigIntB = BigInt(b);
    return `${bigIntA+bigIntB}`;
}

var addToArrayForm = function(num, k) {
    const stringifiedNum = num.map(digit => `${digit}`).join("");
    const stringifiedK = `${k}`;
    return addTwoString(stringifiedNum, stringifiedK).split("").map(digit=>+digit)
};