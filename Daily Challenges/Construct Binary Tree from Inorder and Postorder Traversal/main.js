// URL: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const build = (inorderStart, inorderEnd, postorderStart, postorderEnd) => {
    if (inorderStart > inorderEnd || postorderStart > postorderEnd) {
      return null;
    }
    const root = new TreeNode(postorder[postorderEnd]);
    const inorderRootIndex = inorder.indexOf(postorder[postorderEnd]);
    const rightSubtreeSize = inorderEnd - inorderRootIndex;
    root.left = build(
      inorderStart,
      inorderRootIndex - 1,
      postorderStart,
      postorderEnd - rightSubtreeSize - 1
    );
    root.right = build(
      inorderRootIndex + 1,
      inorderEnd,
      postorderEnd - rightSubtreeSize,
      postorderEnd - 1
    );
    return root;
  };
  return build(0, inorder.length - 1, 0, postorder.length - 1);
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
