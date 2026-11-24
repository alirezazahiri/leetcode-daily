function numberOfBeams(bank: string[]): number {
  const nonZero = bank
    .map((row) => [...row].filter((ch) => ch !== "0").length)
    .filter((len) => len > 0);

  return nonZero
    .map((c, i, nonZero) => c * nonZero[i + 1])
    .slice(0, nonZero.length - 1)
    .reduce((acc, curr) => acc + curr, 0);
}

console.log(numberOfBeams(["011001", "000000", "010100", "001000"]));
