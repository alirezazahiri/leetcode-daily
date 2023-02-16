// URL: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function searchMatchingResult(start, nums, curr, target) {
  let left = start,
    right = nums.length;
  let mid;
  while (left != right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] + curr == target) return mid;
    if (nums[mid] + curr > target) right = mid;
    else left = mid + 1;
  }
  return -1;
}

var twoSum = function (numbers, target) {
  for (const [i, num_i] of Object.entries(numbers)) {
    const idx = searchMatchingResult(+i, numbers, +num_i, target);
    if (idx != -1) return [+i + 1, idx + 1];
  }
};


/* TIME LIMIT */
// function findNextNumberIdx(current, numbers) {
//   return numbers.findIndex((value) => value > current);
// }

// var twoSum = function (numbers, target) {
//   let i = 0;
//   while (true) {
//     let wanted = target - numbers[i];
//     if (wanted < 0)
//       i = i + 1 + findNextNumberIdx(numbers[i], numbers.slice(i + 1));
//     let wantedIdx = numbers.slice(i + 1).findIndex((value) => value == wanted);
//     if (wantedIdx == -1)
//       i = i + 1 + findNextNumberIdx(numbers[i], numbers.slice(i + 1));
//     else return [i + 1, wantedIdx + i + 1 + 1];
//   }
// };