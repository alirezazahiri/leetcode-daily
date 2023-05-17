// URL: https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let list = [];

  while (head) {
    list.push(head.val);
    head = head.next;
  }

  const N = list.length;
  let max = 0;
  
  for (let i = 0; i < N / 2; i++)
    if (list[i] + list[N - 1 - i] > max) max = list[i] + list[N - 1 - i];

  return max;
};

console.log(
  pairSum(new ListNode(5, new ListNode(4, new ListNode(2, new ListNode(1)))))
);
