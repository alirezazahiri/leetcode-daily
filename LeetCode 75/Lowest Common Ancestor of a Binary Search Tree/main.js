// URL: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let max = Math.max(p.val, q.val),
    min = Math.min(p.val, q.val);
  if (root.val == min || root.val == max) return root;
  if (root.val < max && root.val > min) return root;
  return lowestCommonAncestor(min > root.val ? root.right : root.left, p, q);
};

var lowestCommonAncestor2 = function (root, p, q) {
  while ((root.val - p.val) * (root.val - q.val) > 0)
    root = p.val < root.val ? root.left : root.right;
  return root;
};
