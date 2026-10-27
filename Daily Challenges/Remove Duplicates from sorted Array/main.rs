fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let n = nums.len();

    if n <= 1 {
        return n as i32;
    }

    let (mut iw, mut ir) = (0, 1);

    loop {
        while ir < n && nums[iw] == nums[ir] {
            ir += 1;
        }
        
        if ir >= n {
            break iw as i32 + 1
        }

        iw += 1;
        nums[iw] = nums[ir];
    }
}

fn main() {}

#[test]
fn test_remove_duplicates() {
    let mut nums = vec![1, 1, 2];
    assert_eq!(remove_duplicates(&mut nums), 2);
    assert_eq!(nums[..2], vec![1, 2]);

    let mut nums = vec![0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    assert_eq!(remove_duplicates(&mut nums), 5);
    assert_eq!(nums[..5], vec![0, 1, 2, 3, 4]);

    let mut nums = vec![1, 2, 3, 4, 5];
    assert_eq!(remove_duplicates(&mut nums), 5);
    assert_eq!(nums[..5], vec![1, 2, 3, 4, 5]);

    let mut nums = vec![];
    assert_eq!(remove_duplicates(&mut nums), 0);
    assert_eq!(nums[..0], vec![]);

    let mut nums = vec![1];
    assert_eq!(remove_duplicates(&mut nums), 1);
    assert_eq!(nums[..1], vec![1]);

    let mut nums = vec![1, 1];
    assert_eq!(remove_duplicates(&mut nums), 1);
    assert_eq!(nums[..1], vec![1]);

    let mut nums = vec![1, 2];
    assert_eq!(remove_duplicates(&mut nums), 2);
    assert_eq!(nums[..2], vec![1, 2]);

    let mut nums = vec![1, 1, 2];
    assert_eq!(remove_duplicates(&mut nums), 2);
    assert_eq!(nums[..2], vec![1, 2]);
}
