struct Solution {}

impl Solution {
    pub fn fib(n: i32) -> i32 {
        if n < 2 {
            n
        } else {
            Self::fib(n-1) + Self::fib(n-2)
        }
    }
}

fn main() {}

#[test]
fn test_fib() {
    let f = Solution::fib(0);
    assert_eq!(f, 0);
    let f = Solution::fib(1);
    assert_eq!(f, 1);
    let f = Solution::fib(2);
    assert_eq!(f, 1);
    let f = Solution::fib(3);
    assert_eq!(f, 2);
    let f = Solution::fib(4);
    assert_eq!(f, 3);
    let f = Solution::fib(5);
    assert_eq!(f, 5);
    let f = Solution::fib(6);
    assert_eq!(f, 8);
    let f = Solution::fib(7);
    assert_eq!(f, 13);
    let f = Solution::fib(8);
    assert_eq!(f, 21);
    let f = Solution::fib(9);
    assert_eq!(f, 34);
    let f = Solution::fib(10);
    assert_eq!(f, 55);
    let f = Solution::fib(11);
    assert_eq!(f, 89);
    let f = Solution::fib(12);
    assert_eq!(f, 144);
    let f = Solution::fib(13);
    assert_eq!(f, 233);
    let f = Solution::fib(14);
    assert_eq!(f, 377);
    let f = Solution::fib(15);
    assert_eq!(f, 610);
}