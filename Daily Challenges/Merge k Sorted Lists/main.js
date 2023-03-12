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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let numsArr = [];
  lists.forEach((item) => {
    while (item && item.val !== null) {
      numsArr.push(item.val);
      item = item.next;
    }
  });
  numsArr = numsArr.sort((a, b) => b - a);
  let resultNode = null;
  numsArr.forEach((item) => {
    let tempNode = new ListNode(item);
    tempNode.next = resultNode;
    resultNode = tempNode;
  });
  return resultNode;
};

console.log(
  mergeKLists([
    new ListNode(1, new ListNode(4, new ListNode(5))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(2, new ListNode(6)),
  ])
);
