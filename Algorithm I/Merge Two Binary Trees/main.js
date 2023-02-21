// URL: https://leetcode.com/problems/merge-two-binary-trees/

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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 || !root2) return root1 || root2;

  let node = new TreeNode(root1.val + root2.val);

  node.left = mergeTrees(root1.left, root2.left);
  node.right = mergeTrees(root1.right, root2.right);

  return node;
};

console.log(
  mergeTrees(
    new TreeNode(1, new TreeNode(3, new TreeNode(5)), new TreeNode(2)),
    new TreeNode(
      2,
      new TreeNode(1, null, new TreeNode(4)),
      new TreeNode(3, null, new TreeNode(7))
    )
  )
);
