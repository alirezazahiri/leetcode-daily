// URL: https://leetcode.com/problems/check-completeness-of-a-binary-tree/

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
 * @return {boolean}
 */
var isCompleteTree = function (root) {
  let q = [root];

  while (q[0]) {
    let first = q.shift();
    q.push(first.left);
    q.push(first.right);
  }

  while (q.length > 0 && !q[0]) q.shift();
  return q.length === 0;
};

console.log(
  isCompleteTree(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6))
    )
  )
);
console.log("========================");
console.log(
  isCompleteTree(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4), new TreeNode(5)),
      new TreeNode(3, undefined, new TreeNode(7))
    )
  )
);
console.log("========================");
console.log(
  isCompleteTree(
    new TreeNode(1, new TreeNode(2, new TreeNode(5)), new TreeNode(3))
  )
);
console.log("========================");
console.log(
  isCompleteTree(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(5)),
      new TreeNode(3, new TreeNode(7), new TreeNode(8))
    )
  )
);
