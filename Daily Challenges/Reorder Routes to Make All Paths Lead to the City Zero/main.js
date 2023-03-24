// URL: https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let graph = {}
    let visited = {}
    for (const [a,b] of connections) {
        if (!graph[a]) graph[a] = []
        if (!graph[b]) graph[b] = []
        
        graph[a].push([b,1])
        graph[b].push([a,0])
    }
    
    let res = 0
    const dfs = (i) => {
        if (visited[i]) return 
        visited[i] = true
        for (const connection of graph[i]) {
            if (!visited[connection[0]]) res += connection[1]
            dfs(connection[0])
        }
    }
    dfs(0)
    return res
};