// URL: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

class Node {
  constructor(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  const bfs = (root) => {
    if (!root) return;
    const queue = [root];
    const res = [];

    while (queue.length) {
      let len = queue.length;
      for (let i = 0; i < len; i++) {
        let node = queue.pop();
        if (node.left) queue.unshift(node.left);
        if (node.right) queue.unshift(node.right);
        res.push(node);
      }
      res.push(null);
    }
    for (let i = 0; i < res.length - 1; i++) {
      let node = res[i];
      if (node) {
        let nextNode = res[i + 1];
        node.next = nextNode;
      }
    }
  };

  bfs(root);
  return root;
};

console.log(
  connect(
    new Node(1, new Node(2, new Node(4), new Node(5))),
    new Node(3, new Node(6), new Node(7))
  )
);
