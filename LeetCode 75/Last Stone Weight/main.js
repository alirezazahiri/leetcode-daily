/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  const sortedStones = stones.sort((a, b) => a - b);

  while (sortedStones.length > 1) {
    let first = sortedStones.pop();
    let second = sortedStones.pop();
    let diff = 0;
    if (first && second) diff = Math.abs(first - second);
    else if (first) diff = first;
    else if (second) diff = second;
    sortedStones.push(diff);
    sortedStones.sort((a, b) => a - b);
  }
  
  return sortedStones;
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
console.log("====================");
console.log(lastStoneWeight([1]));
console.log("====================");
console.log(lastStoneWeight([1, 3]));
console.log("====================");
console.log(lastStoneWeight([8, 10, 4]));
console.log("====================");
console.log(
  lastStoneWeight([
    434, 667, 378, 919, 212, 902, 240, 257, 208, 996, 411, 222, 557, 634, 425,
    949, 755, 833, 785, 886, 40, 159, 932, 157, 764, 916, 85, 300, 130, 278,
  ])
);
