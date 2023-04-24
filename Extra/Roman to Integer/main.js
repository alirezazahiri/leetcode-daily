// URL: https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbolValueDict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const cur = symbolValueDict[s[i]];
        const next = symbolValueDict[s[i + 1]];

        if (cur < next) {
            result += next - cur;
            i++;
        } else result += cur;
    }
    return result
};