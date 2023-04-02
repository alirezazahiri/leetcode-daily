// URL: https://leetcode.com/problems/successful-pairs-of-spells-and-potions/

let countingSort = (arr) => {
  return arr
    .reduce((acc, v) => ((acc[v] = (acc[v] || 0) + 1), acc), [])
    .reduce((acc, n, i) => acc.concat(Array(n).fill(i)), []);
};

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  let counts = [];
  let sortedPotions = potions.sort((a, b) => a - b);
  
  spells.forEach((spell) => {
    let flag = false;
    for (let i = 0; i < sortedPotions.length; i++)
      if (sortedPotions[i] * spell >= success) {
        counts.push(potions.length - i);
        flag = true;
        break;
      }
    if (!flag) counts.push(0);
  });

  return counts;
};

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
