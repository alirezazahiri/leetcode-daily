// URL: https://leetcode.com/problems/number-of-operations-to-make-network-connected/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) 
{
    if(connections.length < n-1)
        return -1;

    /* Union find stuff. */
    let groups = Array(n);
    for(let i=0; i<n; i++)
        groups[i] = i;
    const find = function(loc)
    {
            let id = groups[loc];
            if(id === loc)
                    return id;      // This is the parent.
            return groups[loc] = find(id);
    };
        
    const union = (eater, eaten) => {groups[eaten] = eater;};

    /* Merge groups in connections. */
    for(let [g1,g2] of connections)
    {
        let p1 = find(g1);
        let p2 = find(g2);
        if(p1 !== p2)
            union(p1,p2);
    }    

    let nw_islands = new Set();
    for(let node of groups)
    {
        let p1 = find(node);
        nw_islands.add(p1);
    }

    return nw_islands.size-1;
};