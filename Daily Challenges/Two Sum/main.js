// URL: https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (const [i, num_i] of Object.entries(nums))
    for (const [j, num_j] of Object.entries(nums).slice(+i + 1))
      if (num_i + num_j == target) return [+i, +j];
};

var twoSum2 = function (nums, target) {
  const n = nums.length;
  const a = [...nums];

  nums.sort((a, b) => a - b);

  let l = 0;
  let r = n - 1;

  while (l < r) {
    const sum = nums[l] + nums[r];

    if (sum === target) {
      break;
    } else if (sum > target) {
      r--;
    } else {
      l++;
    }
  }

  const v = [];

  for (let i = 0; i < n; i++) {
    if (nums[l] === a[i]) {
      v.push(i);
    } else if (nums[r] === a[i]) {
      v.push(i);
    }
  }

  return v;
};

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));
console.log(twoSum2([3, 3], 6));
