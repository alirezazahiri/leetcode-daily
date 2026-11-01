use std::collections::HashSet;

fn total_numbers_bf(digits: Vec<i32>) -> i32 {
    let mut visited = HashSet::new();

    for (i, di) in digits.iter().enumerate() {
        if *di == 0 {
            continue;
        }
        for (j, dj) in digits.iter().enumerate() {
            if i == j {
                continue;
            }
            for (k, dk) in digits.iter().enumerate() {
                let num = di * 100 + dj * 10 + dk;
                if i == k || j == k || dk % 2 != 0 || visited.contains(&num) {
                    continue;
                }
                visited.insert(num);
            }
        }
    }
    visited.len() as i32
}

fn total_numbers(digits: Vec<i32>) -> i32 {
    let mut freq = vec![0; 10];
    let mut count = 0;

    for d in digits {
        freq[d as usize] += 1;
    }

    for first in 1..10 {
        if freq[first] == 0 {
            continue;
        }

        freq[first] -= 1;

        for last in (0..9).step_by(2) {
            if freq[last] == 0 {
                continue;
            }

            freq[last] -= 1;

            for mid in 0..10 {
                if freq[mid] == 0 {
                    continue;
                }
                count += 1;
            }

            freq[last] += 1;
        }

        freq[first] += 1;
    }

    count
}

fn main() {}

#[test]
fn test_total_numbers() {
    assert_eq!(total_numbers(vec![9, 5, 2]), 2);
    assert_eq!(total_numbers(vec![1, 2, 3, 4]), 12);
    assert_eq!(total_numbers(vec![2, 1, 3, 0]), 10);
    assert_eq!(total_numbers(vec![2, 2, 8, 8, 2]), 7);
    assert_eq!(total_numbers(vec![3, 7, 5]), 0);
    assert_eq!(total_numbers(vec![0, 0, 0]), 0);
    assert_eq!(total_numbers(vec![1, 1, 2]), 1); // 112
    assert_eq!(total_numbers(vec![0, 1, 2]), 3); // 102, 120
    assert_eq!(total_numbers(vec![2, 0, 0]), 1); // 200
}
