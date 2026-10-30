fn decrypt(code: Vec<i32>, k: i32) -> Vec<i32> {
    let n = code.len();

    if k == 0 {
        return vec![0; n];
    }

    let mut extended_code = code.clone();
    extended_code.extend_from_within(..);

    let prefix_sum = extended_code
        .iter()
        .scan(0, |acc, &n| {
            *acc += n;
            Some(*acc)
        })
        .collect::<Vec<_>>();

    (0..n)
        .map(|i| {
            if k > 0 {
                prefix_sum[i + k as usize] - prefix_sum[i]
            } else {
                prefix_sum[i + n - 1] - prefix_sum[i + n - 1 - k.unsigned_abs() as usize]
            }
        })
        .collect()
}

fn decrypt_sol1(code: Vec<i32>, k: i32) -> Vec<i32> {
    let n = code.len();
    let mut result = Vec::<i32>::new();
    let abs_k = (if k > 0 { k } else { -k }) as usize;

    if k == 0 {
        return vec![0; n];
    }

    for i in 0..n {
        let mut curr = 0;
        if k > 0 {
            for j in i + 1..=i + abs_k {
                curr += code[j % n];
            }
        } else {
            for j in (n + i - abs_k)..=(n + i - 1) {
                curr += code[j % n];
            }
        }
        result.push(curr);
    }

    result
}

fn main() {}

#[test]
fn test_decrypt() {
    assert_eq!(decrypt(vec![5, 7, 1, 4], 3), vec![12, 10, 16, 13]);
    assert_eq!(decrypt(vec![2, 4, 9, 3], -2), vec![12, 5, 6, 13]);
}

#[test]
fn test_decrypt_sol1() {
    assert_eq!(decrypt_sol1(vec![5, 7, 1, 4], 3), vec![12, 10, 16, 13]);
    assert_eq!(decrypt_sol1(vec![2, 4, 9, 3], -2), vec![12, 5, 6, 13]);
}
