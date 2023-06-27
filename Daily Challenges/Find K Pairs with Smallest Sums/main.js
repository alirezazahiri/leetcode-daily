// URL: https://leetcode.com/problems/find-k-pairs-with-smallest-sums

class Pair {
  constructor(num1, num2, index2) {
    this.num1 = num1;
    this.num2 = num2;
    this.index2 = index2;
    this.sum = num1 + num2;
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
  const result = [];
  if (nums1.length === 0 || nums2.length === 0 || k === 0) {
    return result;
  }

  const minHeap = new MinHeap();

  for (let i = 0; i < Math.min(nums1.length, k); i++) {
    minHeap.insert(new Pair(nums1[i], nums2[0], 0));
  }

  while (k > 0 && !minHeap.isEmpty()) {
    const min = minHeap.remove();
    result.push([min.num1, min.num2]);

    if (min.index2 + 1 < nums2.length) {
      minHeap.insert(new Pair(min.num1, nums2[min.index2 + 1], min.index2 + 1));
    }

    k--;
  }

  return result;
};

// MinHeap class implementation
class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(value) {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  remove() {
    if (this.isEmpty()) {
      return null;
    }

    this.swap(0, this.heap.length - 1);
    const min = this.heap.pop();
    this.bubbleDown(0);

    return min;
  }

  bubbleUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex].sum > this.heap[index].sum) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  bubbleDown(index) {
    const lastIndex = this.heap.length - 1;

    while (true) {
      let smallestIndex = index;
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      if (
        leftChildIndex <= lastIndex &&
        this.heap[leftChildIndex].sum < this.heap[smallestIndex].sum
      ) {
        smallestIndex = leftChildIndex;
      }

      if (
        rightChildIndex <= lastIndex &&
        this.heap[rightChildIndex].sum < this.heap[smallestIndex].sum
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex !== index) {
        this.swap(smallestIndex, index);
        index = smallestIndex;
      } else {
        break;
      }
    }
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }
}
