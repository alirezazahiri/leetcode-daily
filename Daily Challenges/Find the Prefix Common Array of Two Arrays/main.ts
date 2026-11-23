function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  let n = A.length;
  const C = Array.from({ length: n }, () => 0);
  let visited = new Set<number>();
  for (let i = 0; i < n; i++) {
    if (A[i] === B[i]) {
      C[i]++;
    }
    if (visited.has(A[i])) {
      C[i]++;
    }
    if (visited.has(B[i])) {
      C[i]++;
    }
    if (i > 0) {
      C[i] += C[i - 1];
    }
    visited.add(A[i]);
    visited.add(B[i]);
  }
  return C;
}

const answer1 = [0, 1, 3];
console.assert(
  findThePrefixCommonArray([2, 3, 1], [3, 1, 2]).every((item, idx) => item === answer1[idx]),
);
const answer2 = [0, 2, 3, 4];
console.assert(
  findThePrefixCommonArray([1, 3, 2, 4], [3, 1, 2, 4]).every((item, idx) => item === answer2[idx]),
);
