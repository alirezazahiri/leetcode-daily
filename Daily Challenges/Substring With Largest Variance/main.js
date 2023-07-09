// URL: https://leetcode.com/problems/substring-with-largest-variance/

/**
 * @param {string} s
 * @return {number}
 */
var largestVariance = function (s) {
    let l = s.length, codes = new Array(l);
    let aCode = 'a'.charCodeAt(0);
    let result = 0;
    let counter = new Array(26).fill(0);

    for (let i = 0; i < l; i++) {
        codes[i] = s.charCodeAt(i) - aCode;
        counter[codes[i]]++;
    }
    
    for (let i = 0; i < 26; i++) {//major
        for (let j = 0; j < 26; j++) {//minor
            if (i == j || counter[i] == 0 || counter[j] == 0) {
                continue;
            }
            let majorCount = 0, minorCount = 0, restMinor = counter[j];
            for (k = 0; k < l; k++) {
                if (codes[k] == i) {
                    majorCount++;
                } else if (codes[k] == j) {
                    minorCount++;
                    restMinor--;
                }
                if (minorCount > 0) {
                    result = Math.max(result, majorCount - minorCount);
                }
                if (majorCount < minorCount && restMinor > 0) {
                    majorCount = 0;
                    minorCount = 0;
                }
            }
        }
    }
    return result;
};