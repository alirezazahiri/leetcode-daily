use std::collections::HashMap;

fn coin_change(coins: Vec<i32>, amount: i32) -> i32 {
    if amount == 0 {
        return 0;
    }
    let mut cache = HashMap::<i32, i32>::new();

    fn dfs(current: i32, count: i32, coins: &[i32], cache: &mut HashMap<i32, i32>) -> i32 {
        if current == 0 {
            return count;
        }
        if let Some(&value) = cache.get(&current) {
            return if let Some(result) = value.checked_add(count) {
                result
            } else {
                i32::MAX
            };
        }

        let mut local_min = i32::MAX;

        for &coin in coins {
            let remaining = current - coin;

            if remaining < 0 {
                continue;
            }

            let result = dfs(remaining, count + 1, coins, cache);

            local_min = if result < local_min {
                result
            } else {
                local_min
            };
        }
        cache.insert(
            current,
            if local_min == i32::MAX {
                i32::MAX
            } else {
                local_min - count
            },
        );
        local_min
    }

    let result = dfs(amount, 0, &coins, &mut cache);
    return if result == i32::MAX { -1 } else { result };
}

fn main() {}

#[cfg(test)]
mod coin_change_test {
    use super::*;
    #[test]
    fn test1() {
        assert_eq!(coin_change(vec![1, 2, 5], 11), 3);
    }

    #[test]
    fn test2() {
        assert_eq!(coin_change(vec![186, 419, 83, 408], 6249), 20);
    }
}
