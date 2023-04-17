// URL: https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let max = Math.max(...candies);
    let res = [];
    for (const candy of candies) res.push(candy + extraCandies >= max);
    return res;
};