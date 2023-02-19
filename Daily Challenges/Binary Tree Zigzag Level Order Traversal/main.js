// URL: https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let result = [[root.val]];
  let depth = 0;
  while (q.length > 0) {
    depth++;
    let depthNodeCount = q.length;
    let nodes = [];
    for (let i = 0; i < depthNodeCount; i++) {
      let node = q.shift();
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    nodes = q.map((node) => node.val);
    if (nodes.length) result.push(depth % 2 ? nodes.reverse() : nodes);
  }

  return result;
};

console.log(
  zigzagLevelOrder(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);
