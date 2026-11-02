const LETTERS: [&str; 8] = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

fn letter_combinations(digits: String) -> Vec<String> {
    if digits.is_empty() {
        return Vec::new();
    }

    let digits = digits.as_bytes();
    let mut result = Vec::new();
    let mut combo = String::new();

    fn dfs(index: usize, combo: &mut String, result: &mut Vec<String>, digits: &[u8]) {
        if index == digits.len() {
            result.push(combo.clone());
            return;
        }
        for ch in LETTERS[(digits[index] - b'2') as usize].chars() {
            combo.push(ch);
            dfs(index + 1, combo, result, digits);
            combo.pop();
        }
    }

    dfs(0, &mut combo, &mut result, digits);
    result
}

fn main() {}

#[test]
fn test_letter_combinations() {
    assert_eq!(letter_combinations(String::new()), Vec::<String>::new());

    assert_eq!(
        letter_combinations("2".into()),
        vec!["a", "b", "c"]
            .into_iter()
            .map(String::from)
            .collect::<Vec<_>>()
    );

    assert_eq!(
        letter_combinations("23".into()),
        vec!["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
            .into_iter()
            .map(String::from)
            .collect::<Vec<_>>()
    );
}
