use std::cmp::min;

fn minimum_operations(nums: Vec<i32>) -> i32 {
    let mut diff = 0;
    nums.iter().for_each(|&e| {
        let r = e % 3;
        diff += min(r, 3 - r);
    });
    diff
}

fn main() {}

#[test]
fn test_minimum_operations() {
    let nums = vec![1, 2, 3, 4];
    assert_eq!(minimum_operations(nums), 3);
}
