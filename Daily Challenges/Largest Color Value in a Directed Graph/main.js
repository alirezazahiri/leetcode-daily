// URL: https://leetcode.com/problems/largest-color-value-in-a-directed-graph/

// Create graph + array with number of outgoing edges
function buildGraph(edges, n) {
  const incoming = new Array(n);
  const outgoing = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    incoming[i] = [];
  }

  for (let i = 0; i < edges.length; i++) {
    const [a, b] = edges[i];

    incoming[b].push(a);

    outgoing[a]++;
  }

  return [incoming, outgoing];
}

// Find sink node. (Node with no outgoing edges).
// Since graph might not be connected, we need to run this method.
// Visited array helps us to check whether this node was used as sink before.
function findSink(out, visited) {
  for (let i = 0; i < out.length; i++) {
    if (out[i] === 0 && !visited[i]) {
      return i;
    }
  }
  return -1;
}

/**
 * @param {string} colors
 * @param {number[][]} edges
 * @return {number}
 */
var largestPathValue = function (colors, edges) {
  const [incoming, outgoing] = buildGraph(edges, colors.length);

  let visited = new Array(colors.length).fill(false);
  let visitedCount = 0;

  // Maximum color value
  let max = 0;

  // Create cache for all nodes
  const memo = new Array(colors.length);
  for (let i = 0; i < memo.length; i++) {
    memo[i] = {};
  }

  let sink = findSink(outgoing, visited);

  // Graph has cycle. No nodes have 0 outgoing edges.
  if (sink === -1) {
    return -1;
  }

  while (sink !== -1) {
    // We count visited nodes just to improve performance.
    visitedCount++;
    visited[sink] = true;

    // Color is represented by a letter. charCode of "a" = 97, charCode of "b" = 98, so we can calculate 0 - based index using this approach.
    const colorIdx = colors[sink].charCodeAt(0) - 97;

    if (!memo[sink][colorIdx]) {
      memo[sink][colorIdx] = 0;
    }
    // Add color value of current node.
    memo[sink][colorIdx]++;

    // Update max for all color values.
    max = Math.max(max, memo[sink][colorIdx]);

    const adj = incoming[sink];
    let maybeSink = -1;
    // Traverse through all nodes which come to sink.
    for (let i = 0; i < adj.length; i++) {
      const n = adj[i];
      outgoing[n]--;

      const keys = Object.keys(memo[sink]);
      // We need to update color values for all adjacent nodes.
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (memo[n][key]) {
          memo[n][key] = Math.max(memo[n][key], memo[sink][key]);
        } else {
          memo[n][key] = memo[sink][key];
        }
      }

      // We create maybeSink in order to not call findSink every time since it causes TLE for some cases.
      if (outgoing[n] === 0) {
        maybeSink = n;
      }
    }

    // Graph might not be connected, so we need to find some other sink node.
    sink = maybeSink === -1 ? findSink(outgoing, visited) : maybeSink;
  }

  // If we did not traverse all nodes, then graph has cycle, return -1. Otherwise, return max for all nodes.
  return visitedCount === colors.length ? max : -1;
};
