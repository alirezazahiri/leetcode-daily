// URL: https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
    const indegree = new Array(n).fill(0);
    for (let edge of edges)
        indegree[edge[1]]++;
    const res = [];
    for (let i in indegree)
        if (indegree[i] == 0)
            res.push(i);
    return res;
}