// URL: https://leetcode.com/problems/find-duplicate-subtrees/

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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  let map = new Map(),
    res = [],
    curId = 1,
    idToCount = new Map();
  dfs(root, map, res);
  function dfs(root, map, res) {
    if (!root) return 0;
    let left = dfs(root.left, map, res);
    let right = dfs(root.right, map, res);
    let current = left + "*" + root.val + "*" + right;
    let id = map.get(current) || curId;
    if (id == curId) curId++;
    map.set(current, id);
    idToCount.set(id, (idToCount.get(id) || 0) + 1);
    if (idToCount.get(id) == 2) res.push(root);
    return id;
  }
  return res;
};

console.log(
  findDuplicateSubtrees(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4)),
      new TreeNode(3, new TreeNode(2, new TreeNode(4)), new TreeNode(4))
    )
  )
);
