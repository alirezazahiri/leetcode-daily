// URL: https://leetcode.com/problems/decode-string/

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = (s) => {
  if (s.length === 1) {
    if (Number.isInteger(+s)) return "";
    else return s;
  }

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let str = "";

      while (true) {
        const char = stack.pop();
        if (char === "[") break;
        str = char + str;
      }

      let n = "";

      while (Number.isInteger(+stack[stack.length - 1])) {
        const number = stack.pop();
        n = number + n;
      }

      stack.push(str.repeat(+n));
    } else stack.push(s[i]);
  }

  return stack.join("");
};

console.log(decodeString("3[a]2[bc]"));
console.log(decodeString("3[a2[c]]"));
