function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  const dfs = (current: string = "", open: number = 0, close: number = 0) => {
    if (close === n) {
      if (current.length === 2 * n) result.push(current);
      return;
    }
    if (close < open) {
      dfs(current + ")", open, close + 1);
    }
    if (open < n) {
      dfs(current + "(", open + 1, close);
    }
  };
  dfs();
  return result;
}

console.log(generateParenthesis(1));
console.log("--------------------------------");
console.log(generateParenthesis(2));
console.log("--------------------------------");
console.log(generateParenthesis(3));
