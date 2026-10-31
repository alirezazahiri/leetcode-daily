fn is_power_of_three(n: i32) -> bool {
    if n == 0 {
        false
    } else if n == 1 {
        true
    } else if n % 3 != 0 {
        false
    } else {
        is_power_of_three(n / 3)
    }
}

fn main() {}

#[test]
fn test_is_power_of_three() {
    assert_eq!(is_power_of_three(27), true);
    assert_eq!(is_power_of_three(0), false);
    assert_eq!(is_power_of_three(9), true);
    assert_eq!(is_power_of_three(45), false);
    assert_eq!(is_power_of_three(1), true);
    assert_eq!(is_power_of_three(2), false);
    assert_eq!(is_power_of_three(3), true);
    assert_eq!(is_power_of_three(4), false);
    assert_eq!(is_power_of_three(5), false);
}
