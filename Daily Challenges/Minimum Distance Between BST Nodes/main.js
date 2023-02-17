// URL: https://leetcode.com/problems/minimum-distance-between-bst-nodes/

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

function traverseIntoList(root) {
  const q = [];
  
  (function recursiveTraversal(node) {
    if (!node) return;
    q.push(node.val);
    recursiveTraversal(node.left);
    recursiveTraversal(node.right);
  })(root);

  return q;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let q = traverseIntoList(root).sort((a, b) => a - b);
  let min = q[q.length-1]
  for (let i=1; i < q.length; i++) {
    let diff = q[i] - q[i-1]
    if (diff < min) 
        min = diff
  }

  return min;
};

console.log(
  minDiffInBST(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);

console.log(
  minDiffInBST(
    new TreeNode(
      27,
      undefined,
      new TreeNode(
        34,
        undefined,
        new TreeNode(58, new TreeNode(50, undefined, new TreeNode(44)))
      )
    )
  )
);
