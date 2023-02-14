/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    let temp = 0;
    while (left != right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) temp = mid;
      else left = mid + 1;
      if (temp != 0 && isBadVersion(mid)) right = mid;
    }
    return left == right ? left : temp;
  };
};
