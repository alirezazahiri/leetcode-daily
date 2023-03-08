// URL: https://leetcode.com/problems/koko-eating-bananas/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let low = 1;
  let high = Math.max(...piles);
  let res = high;

  while (low <= high) {
    let hours = 0;
    let mid = (low + high) >> 1;

    for (let pile of piles) {
      hours += Math.ceil(pile / mid);
    }

    if (hours <= h) {
      res = Math.min(res, mid);
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return res;
};
