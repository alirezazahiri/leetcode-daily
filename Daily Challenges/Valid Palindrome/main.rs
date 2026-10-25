fn is_palindrome(s: String) -> bool {
    let bytes = s.as_bytes();
    let (mut start, mut end) = (0, bytes.len());

    loop {
        while start < end && !bytes[start].is_ascii_alphanumeric() {
            start += 1;
        }

        while start < end && !bytes[end - 1].is_ascii_alphanumeric() {
            end -= 1;
        }

        if start >= end {
            break true;
        }

        if !bytes[start].eq_ignore_ascii_case(&bytes[end - 1]) {
            break false;
        }

        start += 1;
        end -= 1;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_is_palindrome() {
        assert_eq!(
            is_palindrome("A man, a plan, a canal: Panama".to_string()),
            true
        );
        assert_eq!(is_palindrome("".to_string()), true);
        assert_eq!(is_palindrome("a".to_string()), true);
        assert_eq!(is_palindrome("aa".to_string()), true);
        assert_eq!(is_palindrome("ab".to_string()), false);
        assert_eq!(is_palindrome("aba".to_string()), true);
        assert_eq!(is_palindrome("abba".to_string()), true);
        assert_eq!(is_palindrome("abcba".to_string()), true);
        assert_eq!(is_palindrome(".,".to_string()), true);
    }

    #[test]
    fn test_non_palindromes() {
        assert_eq!(is_palindrome("race a car".to_string()), false);
        assert!(!is_palindrome("hello".to_string()));
        assert!(!is_palindrome("ab,ca".to_string()));
    }
}
