// URL: https://leetcode.com/problems/symmetric-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const LTRbfs = (root) => {
  let list = [];
  (function bfs(node) {
    if (!node) {
      list.push(null);
      return;
    }
    list.push(node.val);
    bfs(node.left);
    bfs(node.right);
  })(root);
  return list;
};
const RTLbfs = (root) => {
  let list = [];
  (function bfs(node) {
    if (!node) {
      list.push(null);
      return;
    }
    list.push(node.val);
    bfs(node.right);
    bfs(node.left);
  })(root);
  return list;
};
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const leftRoot = root.left;
  const rightRoot = root.right;

  const left = RTLbfs(rightRoot)
    .map((item) => `${item}`)
    .join(",");
  const right = LTRbfs(leftRoot)
    .map((item) => `${item}`)
    .join(",");

  return left === right;
};

console.log(
  isSymmetric(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    )
  )
);
console.log(
  isSymmetric(
    new TreeNode(
      1,
      new TreeNode(2, undefined, new TreeNode(3)),
      new TreeNode(2, new TreeNode(3), undefined)
    )
  )
);
