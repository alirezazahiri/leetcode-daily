fn reverse_string(s: &mut Vec<char>) {
    let n = s.len();
    let (mut start, mut end) = (0 as usize, n);

    while end > start {
        s.swap(start, end - 1);
        start += 1;
        end -= 1;
    }
}

fn main() {}

#[test]
fn test_reverse_string() {
    let mut s = vec!['h', 'e', 'l', 'l', 'o'];
    reverse_string(&mut s);
    assert_eq!(s, vec!['o', 'l', 'l', 'e', 'h']);

    let mut s = vec!['H', 'a', 'n', 'n', 'a', 'h'];
    reverse_string(&mut s);
    assert_eq!(s, vec!['h', 'a', 'n', 'n', 'a', 'H']);
}