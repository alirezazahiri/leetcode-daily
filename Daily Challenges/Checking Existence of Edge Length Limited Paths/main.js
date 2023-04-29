// URL: https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/

/**
 * @param {number} n
 * @param {number[][]} edgeList
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var distanceLimitedPathsExist = function(n, edgeList, queries) {
    const uf = new UnionFind(n), ans = [];

    // Create a list of index of queries in incresing order of limit in each query
    const order = Array(queries.length).fill().map((_, i) => i);
    order.sort((a,b) => queries[a][2] - queries[b][2]);

    // Sort edgeList in incresing order of distances
    edgeList.sort((a,b) => a[2] - b[2]);

    let index=0;
    for(const i of order) {
        const [p, q, limit] = queries[i];

        // For each query, add all edges having distance less than limit
        while(edgeList[index]?.[2] < limit){
            uf.union(edgeList[index][0], edgeList[index][1]);
            index++;
        }

        // If all edges dis is less than limit then below condition return true
        ans[i] = uf.find(p) === uf.find(q);
    }
    return ans;
};




/* Union Find Data Structure */
class UnionFind {
    constructor(n) {
        this.parent = Array(n).fill().map((_,i) => i);
    }

    find(i) {
        if(this.parent[i] !== i) this.parent[i] = this.find(this.parent[i]);
        return this.parent[i];
    }
    
    union(i, j) {
        this.parent[this.find(j)] = this.find(i);
    }
}