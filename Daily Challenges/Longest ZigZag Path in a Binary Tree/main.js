// URL: https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/


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
var longestZigZag = function (root) {
    let ans = 0;
    const stack = [[root, 0, null]];
    while (stack.length > 0) {
        const [node, n, left] = stack.pop();
        if (node) {
            ans = Math.max(ans, n);
            stack.push([node.left, left != null && left == 0 ? n + 1 : 1, 1]);
            stack.push([node.right, left != null && left == 1 ? n + 1 : 1, 0]);
        }
    }
    return ans;
};