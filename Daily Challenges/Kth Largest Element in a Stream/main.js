// URL: https://leetcode.com/problems/kth-largest-element-in-a-stream/

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    // set main as min-priority-queue
    this.main = new MinPriorityQueue();
    // set size for compare
    this.size = k;

    // loop each num
    for (let num of nums) {
      // transfer add
      this.add(num);
    }
  }

  /**
   *
   * @param {number} val
   * @returns {number}
   */
  add(val) {
    // set queue as num
    this.main.enqueue(val);

    // if size of main is more than current size
    if (this.main.size() > this.size) {
      // element of main
      this.main.dequeue();
    }

    // element of front
    return this.main.front().element;
  }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
