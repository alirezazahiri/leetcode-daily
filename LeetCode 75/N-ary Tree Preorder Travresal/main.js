// URL: https://leetcode.com/problems/n-ary-tree-preorder-traversal/

/**
 * * Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root, res = []) {
  if (!root) return [];

  res.push(root.val);

  while (root.children.length > 0) {
    preorder(root.children[0], res);
    root.children.shift();
  }

  return res;
};

let root = new Node(1);
root.children.push(new Node(2));
root.children.push(new Node(3));
root.children.push(new Node(4));
root.children[0].children.push(new Node(5));
root.children[0].children[0].children.push(new Node(10));
root.children[0].children.push(new Node(6));
root.children[0].children[1].children.push(new Node(11));
root.children[0].children[1].children.push(new Node(12));
root.children[0].children[1].children.push(new Node(13));
root.children[2].children.push(new Node(7));
root.children[2].children.push(new Node(8));
root.children[2].children.push(new Node(9));

console.log(preorder(root));
