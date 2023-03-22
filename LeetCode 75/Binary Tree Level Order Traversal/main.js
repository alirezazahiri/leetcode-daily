// URL: https://leetcode.com/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let levels = [],
    level = [];
  while (q.length) {
    let levelChildCount = q.length;
    for (let i = 0; i < levelChildCount; i++) {
      let top = q.shift();
      level.push(top?.val);
      if (top.left) q.push(top.left);
      if (top.right) q.push(top.right);
    }
    levels.push(level);
    level = [];
  }

  return levels;
};

console.log(
  levelOrder(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3)
    )
  )
);
