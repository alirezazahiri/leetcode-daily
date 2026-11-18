fn search(nums: Vec<i32>, target: i32) -> i32 {
    let n = nums.len();
    let (mut left, mut right) = (0, n - 1);
    while left < right {
        let mid = (left + right) / 2;
        if nums[mid] < target {
            left = mid + 1;
        } else if nums[mid] > target {
            right = mid;
        } else {
            return mid as i32;
        }
    }
    if nums[left] == target {
        left as i32
    } else if nums[right] == target {
        right as i32
    } else {
        -1
    }
}

fn main() {}

#[test]
fn it_works() {
    let v = vec![-1, 0, 3, 5, 9, 12];
    assert_eq!(search(v, 9), 4);
    // assert_eq!(search(v, 2), -1);
}

#[test]
fn single() {
    let v = vec![5];
    // assert_eq!(search(v, -5), -1);
    assert_eq!(search(v, 5), 0);
}

#[test]
fn double() {
    let v = vec![2, 5];
    assert_eq!(search(v, -5), -1);
    // assert_eq!(search(v, 5), 1);
}
