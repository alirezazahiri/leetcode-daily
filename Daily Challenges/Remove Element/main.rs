fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
    let len = nums.len();

    if len == 0 {
        return 0;
    }

    let (mut start, mut end, mut k) = (0, len - 1, 0);

    loop {
        if start > end {
            return k;
        }

        if nums[start] == val {
            while start <= end && nums[end] == val {
                if end == 0 {
                    return k;
                }
                end -= 1;
            }

            if start > end {
                return k;
            }

            nums.swap(start, end);
            end -= 1;
        }

        start += 1;
        k += 1;
    }
}

fn remove_element_2(nums: &mut Vec<i32>, val: i32) -> i32 {
    let mut k = 0;

    for i in 0..nums.len() {
        if nums[i] != val {
            nums[k] = nums[i];
            k += 1;
        }
    }

    k as i32
}

fn main() {}

#[test]
fn test_remove_element() {
    let v1 = &mut vec![3, 2, 2, 3];
    assert_eq!(remove_element(v1, 3), 2);
    assert_eq!(*v1, vec![2, 2, 3, 3]);
    assert_eq!(remove_element(&mut vec![], 0), 0);
    assert_eq!(remove_element(&mut vec![1], 1), 0);
    assert_eq!(remove_element(&mut vec![4, 5], 5), 1);
}
