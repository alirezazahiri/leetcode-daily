// URL: https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (k > nums.length) 
        k = k%nums.length
    let startingArray = nums.splice(nums.length-k, k)
    nums.unshift(...startingArray)
};