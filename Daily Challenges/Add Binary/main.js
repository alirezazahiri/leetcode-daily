// URL: https://leetcode.com/problems/add-binary/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
  let carry = 0;
  let result = "";
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) {
      sum += Number(a[i]);
      i--;
    }
    if (j >= 0) {
      sum += Number(b[j]);
      j--;
    }
    result = (sum % 2) + result;
    carry = sum >= 2 ? 1 : 0;
  }

  return result;
}
