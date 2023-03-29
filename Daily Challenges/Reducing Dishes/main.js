// URL: https://leetcode.com/problems/reducing-dishes/

/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b); // sort to part -ve and +ve numbers
  if (satisfaction.at(-1) <= 0) return 0;

  let len = satisfaction.length,
    index = 0,
    sum = 0,
    totalSum = 0,
    j = 1;

  while (satisfaction[index] < 0) index++; //set pointer at first non-negative number
  for (let i = index; i < len; i++)
    (sum += satisfaction[i]), (totalSum += satisfaction[i] * j), j++;

  index--; // set pointer at last negative number

  //keep adding a number in front and adding totalSum again( as time[i] is increased by 1 for all )
  while (index >= 0) {
    sum += satisfaction[index];
    totalSum = Math.max(totalSum, totalSum + sum);
    index--;
  }
  return totalSum;
};
