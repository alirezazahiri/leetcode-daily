// URL: https://leetcode.com/problems/tallest-billboard/

/**
 * @param {number[]} rods
 * @return {number}
 */
var tallestBillboard = function (rods) {
  const dp = new Map([[0, 0]]);
  for (const rod of rods) {
    const currDP = new Map(dp);
    for (const [diff, height] of dp.entries()) {
      const tallerDiff = diff + rod;
      const tallerHeight = Math.max(currDP.get(tallerDiff) || 0, height + rod);
      currDP.set(tallerDiff, tallerHeight);
      const shorterDiff = diff - rod;
      const shorterHeight = Math.max(currDP.get(shorterDiff) || 0, height);
      currDP.set(shorterDiff, shorterHeight);
    }
    dp.clear();
    for (const [key, value] of currDP.entries()) {
      dp.set(key, value);
    }
  }
  return dp.get(0) || 0;
};
