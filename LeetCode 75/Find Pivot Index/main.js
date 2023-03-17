// URL: https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const sum = (arr) => {
    return arr.reduce((prev, curr) => prev + curr, 0);
  };

  for (let i = 0; i < nums.length; i++) {
    let leftSum = sum(nums.slice(0, i)),
      rightSum = sum(nums.slice(i + 1));
    if (leftSum === rightSum) return i;
  }
  
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
