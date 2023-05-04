// URL: https://leetcode.com/problems/dota2-senate/

/**
 * @param {string} senate
 * @return {string}
 */
function predictPartyVictory(senate) {
    const radiant = [];
    const dire = [];
    const n = senate.length;
  
    for (let i = 0; i < n; i++) {
      if (senate[i] === 'R') {
        radiant.push(i);
      } else {
        dire.push(i);
      }
    }
  
    const banned = new Set();
    let round = 0;
  
    while (radiant.length > 0 && dire.length > 0) {
      round++;
  
      const currentRadiant = radiant.shift();
      const currentDire = dire.shift();
  
      if (banned.has(currentRadiant)) {
        radiant.push(currentRadiant);
      } else if (banned.has(currentDire)) {
        dire.push(currentDire);
      } else {
        if (currentRadiant < currentDire) {
          radiant.push(currentRadiant + n);
        } else {
          dire.push(currentDire + n);
        }
        banned.add(currentRadiant);
        banned.add(currentDire);
      }
    }
  
    return radiant.length > 0 ? 'Radiant' : 'Dire';
  }

console.log(predictPartyVictory("RD"));
console.log(predictPartyVictory("RDD"));
console.log(predictPartyVictory("RDRD"));
