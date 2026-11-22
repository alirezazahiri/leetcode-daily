use std::collections::HashMap;
fn num_identical_pairs_1(nums: Vec<i32>) -> i32 {
    let n = nums.len();
    let mut count = 0;
    let mut visited = HashMap::<i32, i32>::new();
    for &num in nums.iter().take(n) {
        visited.entry(num).and_modify(|e| *e += 1).or_insert(1);
    }
    for &v in visited.values() {
        count += (v * (v - 1)) / 2;
    }
    count
}

fn num_identical_pairs_2(nums: Vec<i32>) -> i32 {
    let n = nums.len();
    let mut count = 0;
    let mut visited = HashMap::<i32, i32>::new();
    for i in 0..n {
        if !visited.contains_key(&nums[i]) {
            visited.insert(nums[i], 1);
        } else {
            let Some(&v) = visited.get(&nums[i]) else {
                return 0;
            };
            visited.insert(nums[i], v + 1);
        }
    }
    for (_, &v) in visited.iter() {
        count += (v * (v - 1)) / 2;
    }
    count
}

fn num_identical_pairs(nums: Vec<i32>) -> i32 {
    let n = nums.len();
    let mut count = 0;
    let mut visited = HashMap::<i32, i32>::new();
    for &num in nums.iter().take(n) {
        visited
            .entry(num)
            .and_modify(|e| {
                count += *e;
                *e += 1;
            })
            .or_insert(1);
    }
    count
}

fn main() {}

#[test]
fn test_num_identical_pairs() {
    let nums: Vec<i32> = vec![1, 2, 3, 1, 1, 3];
    assert_eq!(num_identical_pairs(nums), 4);
}
