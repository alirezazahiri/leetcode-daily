// URL: https://leetcode.com/problems/count-all-possible-routes/

/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function (locations, start, finish, fuel) {
  const mod = 1e9 + 7,
    cache = new Map();

  const dfs = (i, curFuel) => {
    // Return number of routes from i with curFuel
    if (curFuel < 0) return 0; // Base case
    const key = `${i}#${curFuel}`;
    if (cache.has(key)) return cache.get(key); // From cache

    let ans = 0;
    if (i == finish) ans++; // Reached at destination
    for (let j = 0; j < locations.length; ++j) {
      if (j === i) continue; // Same location
      ans += dfs(j, curFuel - Math.abs(locations[i] - locations[j]));
      ans %= mod;
    }
    cache.set(key, ans); // Store in cache
    return ans;
  };

  return dfs(start, fuel);
};
