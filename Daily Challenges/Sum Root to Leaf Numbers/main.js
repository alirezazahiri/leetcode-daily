// URL: https://leetcode.com/problems/sum-root-to-leaf-numbers/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root, num = 0) {
  if (!root) {
    return 0;
  }

  num = num * 10 + root.val;
  
  if (!root.left && !root.right) return num;

  return sumNumbers(root.left, num) + sumNumbers(root.right, num);
};

console.log(sumNumbers(new TreeNode(9)));
console.log(sumNumbers(new TreeNode(1, new TreeNode(0))));
console.log(sumNumbers(new TreeNode(1, new TreeNode(2), new TreeNode(3))));
console.log(
  sumNumbers(
    new TreeNode(
      4,
      new TreeNode(9, new TreeNode(5), new TreeNode(1)),
      new TreeNode(0)
    )
  )
);
