// URL: https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  const arr = [];
  
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  return (function bst(arr, left, right) {
    if (left > right) return null;
    const mid = Math.floor((left + right) / 2);
    const tree = new TreeNode(arr[mid]);
    tree.left = bst(arr, left, mid - 1);
    tree.right = bst(arr, mid + 1, right);
    return tree;
  })(arr, 0, arr.length - 1);
};
