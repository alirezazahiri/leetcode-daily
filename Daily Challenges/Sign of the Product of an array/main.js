// URL: https://leetcode.com/problems/sign-of-the-product-of-an-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    sign = 1;
    for (let num of nums) 
        if (num < 0) sign *= -1; 
        else if (num == 0) {
            sign = 0;
            break;
        } else continue;
    return sign;
};