fn minimum_recolors(blocks: String, k: i32) -> i32 {
    let n = blocks.len();
    let s = blocks.as_bytes();

    let (mut start, mut end) = (1 as usize, k as usize);
    let mut min = 0;

    for &c in &s[..k as usize] {
        if c == b'W' {
            min += 1;
        }
    }

    let mut curr = min;
    while end < n {
        if s[start - 1] == b'W' {
            curr -= 1;
        }
        if s[end] == b'W' {
            curr += 1;
        }

        if curr < min {
            min = curr;
        }

        start += 1;
        end += 1;
    }

    min
}

fn main() {}

#[test]
fn test_minimum_recolors() {
    assert_eq!(minimum_recolors("WBBWWBBWBW".to_string(), 7), 3);
    assert_eq!(minimum_recolors("WBWBBBW".to_string(), 2), 0);
}
