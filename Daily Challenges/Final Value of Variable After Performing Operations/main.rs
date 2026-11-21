fn final_value_after_operations(operations: Vec<String>) -> i32 {
    let mut x = 0;

    for op in operations.iter() {
        if Some('-') == op.chars().nth(1) {
            x -= 1;
        } else {
            x += 1;
        }
    }

    x
}

fn main() {}

#[test]
fn test_final_value_after_operations() {
    let operations: Vec<String> = vec!["--X".to_string(), "X++".to_string(), "X++".to_string()];
    assert_eq!(final_value_after_operations(operations), 1);
}
