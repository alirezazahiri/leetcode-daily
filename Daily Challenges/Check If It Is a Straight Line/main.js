// URL: https://leetcode.com/problems/check-if-it-is-a-straight-line/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let temp = null;
  coordinates.sort((a, b) => a[0] - b[0]);
  coordinates.sort((a, b) => a[1] - b[1]);
  for (let i = 1; i < coordinates.length; i++) {
    let [p1, p2] = [coordinates[i - 1], coordinates[i]];
    m = (p2[1] - p1[1]) / (p2[0] - p1[0]);
    if (temp) if (temp !== m) return false;
    temp = m;
  }
  return true;
};

console.log(
  checkStraightLine([
    [0, 0],
    [0, 1],
    [0, -1],
  ])
);
