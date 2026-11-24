function sortTheStudents(score: number[][], k: number): number[][] {
  return score.sort((a, b) => b[k] - a[k]);
}

console.log(
  sortTheStudents(
    [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15],
    ],
    2,
  ),
);
