// URL: https://leetcode.com/problems/promise-time-limit/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        const operationPromise = fn(...args);
        const timeoutPromise = timeout(t);

        return await Promise.race([operationPromise, timeoutPromise]);
    };

};

function timeout(ms) {
    return new Promise((_, reject) =>
        setTimeout(() => reject("Time Limit Exceeded"), ms)
    );
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */