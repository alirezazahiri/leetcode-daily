// URL: https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

const validCapacity = (weights, maxDays, capacity) => {
  let currDay = 1;
  let total = 0;
  for (let weight of weights) {
    total += weight;
    if (total > capacity) {
      total = weight;
      currDay++;
    }
    if (currDay > maxDays) 
      return false;
  }
  return true;
};

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  let left = Math.max(...weights);
  let right = weights.reduce((acc, current) => acc + current, 0);
  while (left < right) {
    const m = left + Math.floor((right - left) / 2);
    if (validCapacity(weights, days, m)) right = m;
    else left = m + 1;
  }
  return left;
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
