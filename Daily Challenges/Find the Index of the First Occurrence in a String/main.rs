fn str_str(haystack: String, needle: String) -> i32 {
    let (hsize, nsize) = (haystack.len(), needle.len());

    if nsize == 0 {
        return 0;
    }

    if nsize > hsize {
        return -1;
    } else if nsize == hsize {
        return if haystack == needle { 0 } else { -1 };
    }

    let (mut h, mut n, mut hptr) = (0 as usize, 0 as usize, 0 as usize);

    let (s1, s2) = (haystack.as_bytes(), needle.as_bytes());

    loop {
        if h + nsize <= hsize && s1[hptr] == s2[n] {
            hptr += 1;
            n += 1;
        } else {
            h += 1;
            hptr = h;
            n = 0;
        }

        if h >= hsize {
            return -1;
        }

        if n >= nsize {
            return h as i32;
        }
    }
}

fn main() {}

#[test]
fn test_str_str() {
    assert_eq!(
        str_str("sasbutsad".to_string(), "sad".to_string()),
        6,
        "haystack: sasbutsad, needle: sad, expected: 6"
    );
    assert_eq!(
        str_str("sadbutsad".to_string(), "sad".to_string()),
        0,
        "haystack: sadbutsad, needle: sad, expected: 0"
    );
    assert_eq!(
        str_str("leetcode".to_string(), "leeto".to_string()),
        -1,
        "haystack: leetcode, needle: leeto, expected: -1"
    );
    assert_eq!(
        str_str("hello".to_string(), "ll".to_string()),
        2,
        "haystack: hello, needle: ll, expected: 2"
    );
    assert_eq!(
        str_str("aaaaa".to_string(), "bba".to_string()),
        -1,
        "haystack: aaaaa, needle: bba, expected: -1"
    );
    assert_eq!(
        str_str("abc".to_string(), "".to_string()),
        0,
        "haystack: abc, needle: , expected: 0"
    );
    assert_eq!(
        str_str("a".to_string(), "a".to_string()),
        0,
        "haystack: a, needle: a, expected: 0"
    );
    assert_eq!(
        str_str("mississippi".to_string(), "issip".to_string()),
        4,
        "haystack: mississippi, needle: issip, expected: 4"
    );
    assert_eq!(
        str_str("mississippi".to_string(), "issipi".to_string()),
        -1,
        "haystack: mississippi, needle: issipi, expected: -1"
    );
}
