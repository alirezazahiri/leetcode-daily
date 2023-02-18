// URL: https://leetcode.com/problems/middle-of-the-linked-list/

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
 * @return {ListNode}
 */
var middleNode = function (head) {
  let l = [];
  while (head) {
    l.push(head);
    head = head.next;
  }
  return l[Math.floor(l.length / 2)];
};

console.log(
  middleNode(
    new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
      )
    )
  )
);
console.log(
  middleNode(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    )
  )
);
