// URL: https://leetcode.com/problems/promise-pool/

/**
 * @param {Function[]} functions
 * @param {number} n
 * @return {Function}
 */
var promisePool = async function (functions, n) {
  return new Promise((resolve) => {
    // creates a new promise to return
    let inProgressCount = 0; // to track the count of ongoing promises
    let functionIndex = 0; // to track the index of current function to be exceuted.
    function helper() {
      if (functionIndex >= functions.length) {
        // check if are in the end
        if (inProgressCount === 0) resolve(); // resolve if we are done with all the promises
        return;
      }

      // if we have limit and the array has more function to excecute, we will keep looping
      while (inProgressCount < n && functionIndex < functions.length) {
        inProgressCount++; // increment the counter so that we know the limit
        const promise = functions[functionIndex](); // get the function from the current index
        functionIndex++; // increment the index as we are done processing the previous one.
        promise.then(() => {
          // when the promise is done, it will go inside the `then`.
          inProgressCount--; // since we are done with the current one, we will decrement the counter again so that we can add more items.
          helper(); // call the recursive function to process next set.
        });
      }
    }
    helper();
  });
};

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
