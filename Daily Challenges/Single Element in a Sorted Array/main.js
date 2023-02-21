// URL: https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let i = 0;
  while (i < nums.length) {
    i++;
    if (nums[i] == nums[i - 1]) {
      i++;
      continue;
    }
    if (nums[i] != nums[i - 1]) {
        if (++i == nums.length-1)
            if (nums[i] != nums[i-1]) 
                return nums[i]
        return nums[i-2]
    }
  }
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
console.log(singleNonDuplicate([3, 3, 7, 7, 11, 11, 12]));
