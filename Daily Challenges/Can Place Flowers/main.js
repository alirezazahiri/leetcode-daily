// URL: https://leetcode.com/problems/can-place-flowers/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let fbCopy = [...flowerbed];
  for (let i = 0; i < fbCopy.length; i++) {
    if (
      n > 0 &&
      fbCopy[i - 1] !== 1 &&
      fbCopy[i] === 0 &&
      fbCopy[i + 1] !== 1
    ) {
      n--;
      fbCopy[i] = 1;
    }
  }
  return n === 0;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2)); // false
console.log(canPlaceFlowers([1, 0, 1, 0, 1, 0, 1], 1)); // false
console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2)); // true
console.log(canPlaceFlowers([0, 0, 0], 2)); // true
console.log(canPlaceFlowers([1, 0, 0, 0, 0], 2)); // true
