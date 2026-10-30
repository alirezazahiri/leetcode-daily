fn two_sum(numbers: Vec<i32>, target: i32) -> Vec<i32> {
    let n = numbers.len();
    let (mut start, mut end) = (0 as usize, n);

    while end > start {
        let curr = numbers[end - 1] + numbers[start];
        if curr > target {
            end -= 1;
        } else if curr < target {
            start+= 1;
        } else {
            return vec![start as i32+1, end as i32];
        }
    }

    return vec![]
}

fn main() {}

#[test]
fn test_two_sum() {
    assert_eq!(two_sum(vec![2,7,11,15], 9), vec![1, 2]);
    assert_eq!(two_sum(vec![2,3, 4], 6), vec![1, 3]);
    assert_eq!(two_sum(vec![-1, 0], -1), vec![1, 2]);
}