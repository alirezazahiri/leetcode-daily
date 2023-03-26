// URL: https://leetcode.com/problems/validate-binary-search-tree/

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
var isValidBST = function (root, minimum, maximum) {
  // Base case: root is null...
  if (root == null) return true;
  // If the value of root is less or equal to minimum...
  // Or If the value of root is greater or equal to maximum...
  if (root.val <= minimum || root.val >= maximum) return false;
  // Recursively call the function for the left and right subtree...
  return (
    isValidBST(root.left, minimum, root.val) &&
    isValidBST(root.right, root.val, maximum)
  );
};

console.log(isValidBST(new TreeNode(2, new TreeNode(1), new TreeNode(3))));
console.log(
  isValidBST(
    new TreeNode(
      5,
      new TreeNode(1, new TreeNode(3), new TreeNode(6)),
      new TreeNode(4)
    )
  )
);
