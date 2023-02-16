// URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/

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
 * @return {number}
 */
/* using recursion */
function maxDepthRecursive(root) {
  if (!root)
    return 0;
  
  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

/* using while loop */
function maxDepthLoop(root) {
  if (!root) 
    return 0;

  let q = [root];
  let depth = 0;

  while (q.length > 0) {
    depth++;
    let depthNodeCount = q.length;
    for (let i = 0; i < depthNodeCount; i++) {
      let node = q.shift();
      if (node.left) 
        q.push(node.left);
      if (node.right) 
        q.push(node.right);
    }
  }

  return depth;
}

console.log(
  maxDepth(
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4)),
      new TreeNode(3, undefined, new TreeNode(5))
    )
  )
);

console.log("====================");

console.log(
  maxDepth(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);
