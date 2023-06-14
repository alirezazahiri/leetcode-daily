// URL: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let nodesList = [];

  (function bfs(node) {
    if (!node) return;
    nodesList.push(node.val);
    bfs(node.left);
    bfs(node.right);
  })(root);

  let minAbsDiff = Math.max(...nodesList);

  for (let i = 0; i < nodesList.length; i++) {
    for (let j = i + 1; j < nodesList.length; j++) {
      let absDiff = Math.abs(nodesList[i] - nodesList[j]);
      if (absDiff < minAbsDiff) minAbsDiff = absDiff;
    }
  }
  return minAbsDiff;
};
