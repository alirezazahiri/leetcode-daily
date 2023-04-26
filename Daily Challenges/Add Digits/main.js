// URL: https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (`${num}`.length == 1) return num;

    let sum = 0;
    while (`${num}`.length != 1) {
        sum = 0;
        for (const ch of `${num}`) sum += +ch;
        num = sum;
    }

    return sum;
};

var addDigits = function(num) {
    let sum = 0;
    
    if (num < 10) return num;

    for (const ch of `${num}`) sum += +ch;

    if (sum >= 10) return addDigits(sum);

    return sum;
}

var addDigits = function(num) {
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
};
