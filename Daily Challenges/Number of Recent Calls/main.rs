use std::collections::VecDeque;

struct RecentCounter {
    pings: VecDeque<i32>,
}

impl RecentCounter {
    fn new() -> Self {
        Self {
            pings: VecDeque::new(),
        }
    }

    fn ping(&mut self, t: i32) -> i32 {
        self.pings.push_back(t);

        while t - 3000 > self.pings[0] {
            self.pings.pop_front();
        }

        self.pings.len() as i32
    }
}

fn main() {
    number_of_recent_calls();
}

fn number_of_recent_calls() {
    let mut obj = RecentCounter::new();
    let ret_1: i32 = obj.ping(1);
    let ret_2: i32 = obj.ping(100);
    let ret_3: i32 = obj.ping(3001);
    let ret_4: i32 = obj.ping(3002);
    assert_eq!(ret_1, 1);
    assert_eq!(ret_2, 2);
    assert_eq!(ret_3, 3);
    assert_eq!(ret_4, 3);
}
