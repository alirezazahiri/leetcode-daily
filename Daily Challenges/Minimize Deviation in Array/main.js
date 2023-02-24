// URL: https://leetcode.com/problems/minimize-deviation-in-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeviation = function (nums) {
  const mpq = new MaxPriorityQueue();

  nums.forEach((num) => {
    if (num % 2 !== 0) {
      const value = num * 2;

      mpq.enqueue(value, value);
    } else {
      mpq.enqueue(num, num);
    }
  });

  let deviation = mpq.front().element - mpq.back().element;

  while (mpq.front().element % 2 === 0) {
    const { element } = mpq.dequeue();
    mpq.enqueue(element / 2, element / 2);
    deviation = Math.min(deviation, mpq.front().element - mpq.back().element);
  }

  return deviation;
};
