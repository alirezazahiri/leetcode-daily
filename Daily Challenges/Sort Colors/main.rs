const RED: i32 = 0;
const WHITE: i32 = 1;
const BLUE: i32 = 2;

fn sort_colors(nums: &mut Vec<i32>) {
    let n = nums.len();

    let (mut start, mut iw, mut end) = (0, 0, n);

    while end > iw {
        match nums[iw] {
            RED => {
                nums.swap(iw, start);
                start += 1;
                iw += 1;
            }
            WHITE => iw += 1,
            BLUE => {
                end -= 1;
                nums.swap(iw, end);
            }
            _ => unreachable!(),
        }
    }
}

fn main() {}

#[test]
fn test_sort_colors() {
    let test_cases = vec![
        (vec![2, 0, 2, 1, 1, 0], vec![0, 0, 1, 1, 2, 2]),
        (vec![2, 0, 1], vec![0, 1, 2]),
        (vec![0], vec![0]),
        (vec![1], vec![1]),
        (vec![2], vec![2]),
        (vec![0, 0, 0], vec![0, 0, 0]),
        (vec![1, 1, 1], vec![1, 1, 1]),
        (vec![2, 2, 2], vec![2, 2, 2]),
        (vec![0, 1, 2], vec![0, 1, 2]),
        (vec![2, 1, 0], vec![0, 1, 2]),
        (vec![1, 0, 1, 0], vec![0, 0, 1, 1]),
        (vec![2, 1, 2, 1, 0], vec![0, 1, 1, 2, 2]),
        (vec![1, 2, 0, 1, 2, 0], vec![0, 0, 1, 1, 2, 2]),
        (vec![0, 2, 0, 2, 1, 1], vec![0, 0, 1, 1, 2, 2]),
    ];

    for (mut nums, expected) in test_cases {
        sort_colors(&mut nums);
        println!("-----");
        assert_eq!(nums, expected);
    }
}
