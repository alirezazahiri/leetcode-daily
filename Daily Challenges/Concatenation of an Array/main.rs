pub fn get_concatenation(nums: Vec<i32>) -> Vec<i32> {
    let n = nums.len();
    let mut nums_c: Vec<i32> = Vec::with_capacity(2 * n);
    for i in 0..(2 * n) {
        nums_c.push(nums[i % n]);
    }
    nums_c
}

fn main() {}

#[test]
fn test_get_concatenation() {
    let nums = vec![1, 2, 1];
    assert_eq!(get_concatenation(nums), vec![1, 2, 1, 1, 2, 1]);
}
