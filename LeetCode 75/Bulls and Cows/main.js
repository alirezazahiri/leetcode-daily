// URL: https://leetcode.com/problems/bulls-and-cows/

/**
 * @param {string} sec
 * @param {string} guess
 * @return {string}
 */
var getHint = function (sec, guess) {
    let bulls = 0;
    let cows = 0;
    let zeros = Array(10).fill(0);

    for (let i = 0; i < sec.length; i++) {
        let gu = parseInt(guess[i]);
        let secret = parseInt(sec[i]);

        if (secret === gu) {
            bulls++;
            continue;
        }

        if (zeros[secret] < 0)
            cows++;

        if (zeros[gu] > 0)
            cows++;

        zeros[secret]++;
        zeros[gu]--;
    }

    return `${bulls}A${cows}B`;
};