// URL: https://leetcode.com/problems/kth-missing-positive-number/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  const rangeArray = new Array(arr[arr.length - 1])
    .fill(0)
    .map((_, index) => index + 1);
  const nonAvailableNumbers = rangeArray.filter((num) => !arr.includes(num));
  const nonAvailableNumbersCount = nonAvailableNumbers.length;
  return nonAvailableNumbersCount < k
    ? arr[arr.length - 1] + (k - nonAvailableNumbersCount)
    : nonAvailableNumbers[k - 1];
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));
console.log(findKthPositive([2], 1));
console.log(findKthPositive([5, 6, 7, 8, 9], 9));
