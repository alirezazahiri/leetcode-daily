// URL: https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countPairs = function (n, edges) {
  const union = Array.from({ length: n }, (_, idx) => idx);
  edges.forEach(([i1, i2]) => {
    unify(i1, i2);
  });

  const hash = new Map();
  const res = union.reduce((sum, num) => {
    num = find(num);
    const before = hash.get(num) || 0;
    hash.set(num, before + 1);
    return (sum =
      sum - before * (n - before) + (before + 1) * (n - before - 1));
  }, 0);

  return res / 2;

  function find(idx) {
    return idx != union[idx] ? (union[idx] = find(union[idx])) : idx;
  }

  function unify(idx1, idx2) {
    const lead1 = find(idx1);
    const lead2 = find(idx2);
    if (lead1 == lead2) return;
    union[lead2] = lead1;
  }
};
