/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    if(node == null) return node;
    const visited = new Array();
    return cloneHelper(node,visited);
};

var cloneHelper = function(node,visited){
    const newNode =new Node(node.val);
    visited[node.val] = newNode;
    for(const neighbor of node.neighbors){
        if(!visited[neighbor.val]){
            const newNeighbor = cloneHelper(neighbor,visited);
            newNode.neighbors.push(newNeighbor);
        }
        else{
            const newNeighbor = visited[neighbor.val];
            newNode.neighbors.push(newNeighbor);
        }
    }
    return newNode;
}