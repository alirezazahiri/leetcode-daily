// URL: https://leetcode.com/problems/string-compression/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  if (chars.length == 1) return 1;
  let prev = chars[0];
  let i = 0,
    count = 1;
  const len = chars.length;
  const toDeletes = [];
  while (i < len) {
    i++;
    if (chars[i] === prev) {
      count++;
    } else if (chars[i] !== prev) {
      toDeletes.push([prev, i - count, count]);
      prev = chars[i];
      prevIndex = i;
      i--;
      count = 0;
    }
  }
  chars.splice(
    0,
    len,
    ...toDeletes
      .map(([ch, _, counter]) =>
        `${ch}${counter > 1 ? `${counter}` : ""}`.split("")
      )
      .flat(1)
  );

  return chars.length;
};

const chars1 = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars1));
console.log(chars1);
const chars2 = [
  "a",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
];
console.log(compress(chars2));
console.log(chars2);
const chars3 = ["a", "a", "a", "b", "b", "b", "c", "c", "c"];
console.log(compress(chars3));
console.log(chars3);
const chars4 = [
  "a",
  "a",
  "a",
  "a",
  "a",
  "a",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
  "c",
];
console.log(compress(chars4));
console.log(chars4);
