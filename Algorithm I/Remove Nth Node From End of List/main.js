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

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let l = [];

  while (head) {
    l.push(head.val);
    head = head.next;
  }

  l.splice(l.length - n, 1);
  let newLinkedList= null;
  if (l.length > 0) newLinkedList = makeListNode(l);

  return newLinkedList;
};

console.log(
  removeNthFromEnd(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    ),
    2
  )
);
console.log(removeNthFromEnd(new ListNode(1), 1));
