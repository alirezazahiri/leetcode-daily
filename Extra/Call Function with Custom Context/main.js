// URL: https://leetcode.com/problems/call-function-with-custom-context/

/**
 * @param {Object} context
 * @param {any[]} args
 * @return {any}
 */
Function.prototype.callPolyfill = function(context, ...args) {
    Object.entries(context).forEach(([key, value]) => {
        this[key] = value;
    })
    return this.apply(this, args);
}


function increment() { this.count++; return this.count; }
increment.callPolyfill({count: 1}); // 2

