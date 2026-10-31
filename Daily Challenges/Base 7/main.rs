fn convert_to_base7(num: i32) -> String {
    if num < 0 {
        return format!("-{}", convert_to_base7(-num));
    }
    if num < 7 {
        return num.to_string()
    }

    let remainder = num % 7;

    format!("{}{}", convert_to_base7(num / 7), remainder)
}

fn main() {}

#[test]
fn test_convert_to_base7() {
    assert_eq!(convert_to_base7(100), "202");
    assert_eq!(convert_to_base7(-7), "-10");
    assert_eq!(convert_to_base7(0), "0");
    assert_eq!(convert_to_base7(1), "1");
    assert_eq!(convert_to_base7(2), "2");
    assert_eq!(convert_to_base7(3), "3");
    assert_eq!(convert_to_base7(4), "4");
    assert_eq!(convert_to_base7(5), "5");
    assert_eq!(convert_to_base7(6), "6");
}
