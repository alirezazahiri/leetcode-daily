// URL: https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/

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
var maxLevelSum = function (root) {
    const q = [root];
    let levelSums = [];
    while (q.length) {
        let levelNodeCount = q.length;
        let s = 0;
        for (let i = 0; i < levelNodeCount; i++) {
            const { left, right, val } = q.shift();
            s += val;
            if (left) q.push(left);
            if (right) q.push(right);
        }
        levelSums.push(s);
    }
    return levelSums.indexOf(Math.max(...levelSums)) + 1;
};