// URL: https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/

/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  let maxRequests = 0;
  backtrack(0, 0, new Array(requests.length).fill(0));
  return maxRequests;

  function backtrack(index, count, selected) {
    if (index === requests.length) {
      let diff = calculateDifference(selected);
      if (diff === 0) {
        maxRequests = Math.max(maxRequests, count);
      }
      return;
    }

    // Select the current request
    selected[index] = 1;
    backtrack(index + 1, count + 1, selected);

    // Deselect the current request
    selected[index] = 0;
    backtrack(index + 1, count, selected);
  }

  function calculateDifference(selected) {
    let from = new Array(n).fill(0);
    let to = new Array(n).fill(0);

    for (let i = 0; i < selected.length; i++) {
      if (selected[i] === 1) {
        from[requests[i][0]]++;
        to[requests[i][1]]++;
      }
    }

    let diff = 0;
    for (let i = 0; i < n; i++) {
      diff += Math.abs(from[i] - to[i]);
    }

    return diff;
  }
};
