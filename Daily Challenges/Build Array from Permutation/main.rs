fn build_array(nums: Vec<i32>) -> Vec<i32> {
    let n = nums.len();
    let mut _nums = nums.clone();
    for i in 0..n {
        let temp = nums[i] as usize;
        _nums[i] = nums[temp];
    }
    _nums
}

fn main() {}

#[test]
fn test_build_array() {
    let nums = vec![0, 2, 1, 5, 3, 4];
    assert_eq!(build_array(nums), vec![0, 1, 2, 4, 5, 3])
}
