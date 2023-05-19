// URL: https://leetcode.com/problems/debounce/

/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let ref = null;
  return function (...args) {
    if (ref) clearTimeout(ref);
    ref = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

const log = debounce(console.log, 100);
log("Hello"); // cancelled
log("Hello"); // cancelled
log("Hello"); // Logged at t=100ms
