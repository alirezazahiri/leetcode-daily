use std::collections::HashSet;

fn find_the_prefix_common_array(a: Vec<i32>, b: Vec<i32>) -> Vec<i32> {
    let n = a.len();
    let mut c: Vec<i32> = vec![0; n];
    let mut visited = HashSet::<i32>::new();
    for i in 0..n {
        if a[i] == b[i] {
            c[i] += 1;
        }
        if visited.contains(&a[i]) {
            c[i] += 1;
        }
        if visited.contains(&b[i]) {
            c[i] += 1;
        }
        if i > 0 {
            c[i] += c[i - 1];
        }
        visited.insert(a[i]);
        visited.insert(b[i]);
    }
    c
}

fn main() {}

#[test]
fn test_find_the_prefix_common_array() {
    let a: Vec<i32> = vec![1, 3, 2, 4];
    let b: Vec<i32> = vec![3, 1, 2, 4];
    assert_eq!(find_the_prefix_common_array(a, b), vec![0, 2, 3, 4])
}
