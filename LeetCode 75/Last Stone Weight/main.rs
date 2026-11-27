fn last_stone_weight(stones: Vec<i32>) -> i32 {
    let mut sorted = stones.clone();
    sorted.sort();
    while sorted.len() > 1 {
        let Some(last) = sorted.pop() else {
            return 0;
        };
        let Some(second_last) = sorted.pop() else {
            return 0;
        };
        let result = last - second_last;
        if result == 0 {
            continue;
        }
        let insertion_idx = match sorted.binary_search(&result) {
            Ok(i) => i,
            Err(i) => i,
        };
        sorted.push(result);
        sorted[insertion_idx..].rotate_right(1);
    }

    if !sorted.is_empty() {
        sorted[0]
    } else {
        0
    }
}

fn main() {}

#[test]
fn test_last_stone_weight() {
    let stones = vec![2, 7, 4, 1, 8, 1];
    assert_eq!(last_stone_weight(stones), 1);
}

#[test]
fn test_last_stone_weight_1() {
    let stones = vec![2, 2];
    assert_eq!(last_stone_weight(stones), 0);
}
