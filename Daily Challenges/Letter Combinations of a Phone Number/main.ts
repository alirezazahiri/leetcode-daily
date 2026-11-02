const LETTERS: Record<string, string> = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
};

function letterCombinations(digits: string): string[] {
  if (!digits) return [];
  const n = digits.length;
  const combos: string[] = [];

  const dfs = (index = 0, combo = "") => {
    if (index == n) {
      combos.push(combo);
      return;
    }

    const digit = digits[index];

    for (const c of LETTERS[digit]) {
      dfs(index + 1, combo + c);
    }
  };

  dfs();

  return combos;
}
