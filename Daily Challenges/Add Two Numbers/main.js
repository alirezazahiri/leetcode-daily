// URL: https://leetcode.com/problems/add-two-numbers/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const makeListNode = (list) => {
  let root = new ListNode();
  let iterator = root;

  for (let i = 0; i < list.length; i++) {
    iterator.val = list[i];
    if (i == list.length - 1) break;
    iterator.next = new ListNode();
    iterator = iterator.next;
  }

  return root;
};

const fetchNumber = (listNode) => {
  let num = `${listNode.val}`;
  while (listNode.next) {
    listNode = listNode.next;
    num = listNode.val + num;
  }
  return BigInt(num);
};

var addTwoNumbers = function (l1, l2) {
  const a = fetchNumber(l1),
    b = fetchNumber(l2);

  const sumDigits = (a + b)
    .toString()
    .split("")
    .reverse()
    .map((digit) => +digit);

  return makeListNode(sumDigits);
};
