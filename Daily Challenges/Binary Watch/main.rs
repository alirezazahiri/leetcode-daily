use std::collections::HashMap;

fn read_binary_watch(turned_on: i32) -> Vec<String> {
    let mut result = vec![];
    let mut cache = HashMap::<i32, i32>::new();

    for i in 0..60 {
        cache.insert(i, calculate_ones(i));
    }

    for hour in 0..12 {
        if let Some(&hour_ones) = cache.get(&hour) {
            let remaining = turned_on - hour_ones;
            if remaining > 0 {
                for minute in 1..60 {
                    if let Some(&minute_ones) = cache.get(&minute) {
                        if remaining - minute_ones == 0 {
                            result.push(format!("{}:{:02}", hour, minute));
                        }
                    }
                }
            } else if remaining == 0 {
                result.push(format!("{}:{:02}", hour, 0));
            }
        }
    }
    result
}

fn calculate_ones(n: i32) -> i32 {
    let mut r = n;
    let mut ones = 0;
    while r > 0 {
        if r % 2 == 1 {
            ones += 1;
        }
        r = r >> 1;
    }
    ones
}

fn main() {
    for i in 0..60 {
        println!("{}: {}", i, calculate_ones(i));
    }
}

#[cfg(test)]
mod test {
    use super::{calculate_ones, read_binary_watch};

    fn brute_expected(turned_on: i32) -> Vec<String> {
        let mut out = Vec::new();
        for hour in 0..12 {
            for minute in 0..60 {
                if calculate_ones(hour) + calculate_ones(minute) == turned_on {
                    out.push(format!("{}:{:02}", hour, minute));
                }
            }
        }
        out
    }

    fn assert_matches_brute(turned_on: i32) {
        let mut got = read_binary_watch(turned_on);
        let mut want = brute_expected(turned_on);
        got.sort();
        want.sort();
        assert_eq!(
            got, want,
            "read_binary_watch({turned_on}) should list every time whose LEDs sum to {turned_on}"
        );
    }

    #[test]
    fn turned_on_1_matches_example() {
        assert_eq!(
            read_binary_watch(1),
            vec!["0:01", "0:02", "0:04", "0:08", "0:16", "0:32", "1:00", "2:00", "4:00", "8:00"]
        );
    }

    #[test]
    fn matches_brute_force_exhaustive() {
        for n in 0..=10 {
            assert_matches_brute(n);
        }
    }
}
