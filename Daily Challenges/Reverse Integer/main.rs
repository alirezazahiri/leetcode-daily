fn reverse(x: i32) -> i32 {
    let mut n = x.clone();
    let mut rev = 0 as i32;

    let sign = if n < 0 {
        n = -n;
        -1
    } else {
        1
    };

    while n > 0 {
        let d = n % 10;
        let Some(res) = rev.checked_mul(10) else { return 0 };
        rev = res + d;
        n /= 10;
    }

    rev * sign
}

fn main() {}

#[test]
fn test_reverse() {
    assert_eq!(reverse(123), 321);
    assert_eq!(reverse(-123), -321);
    assert_eq!(reverse(120), 21);
    assert_eq!(reverse(1534236469), 0);
}
