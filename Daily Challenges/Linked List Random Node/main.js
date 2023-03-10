/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head;
  this.size = 0;
  while (head) {
    head = head.next;
    this.size++;
  }
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let rand = Math.floor(Math.random() * this.size);
  let hc = this.head;
  let i = 0;
  while (hc) {
    if (i >= rand) return hc.val;
    hc = hc.next;
    i++;
  }
  return hc.val;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */
