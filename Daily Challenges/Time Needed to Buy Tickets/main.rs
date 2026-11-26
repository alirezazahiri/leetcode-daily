use std::collections::VecDeque;

fn time_required_to_buy_1(tickets: Vec<i32>, k: i32) -> i32 {
    let n = tickets.len();
    let mut q = VecDeque::from_iter(tickets.into_iter());
    let mine = q[k as usize];
    let mut total_time = 0;
    for i in 0..(k as usize) {
        if q[i] <= mine {
            total_time += q[i];
            q[i] = 0;
        } else {
            total_time += mine;
            q[i] -= mine;
        }
    }
    for i in (k as usize + 1)..n {
        if q[i] <= mine - 1 {
            total_time += q[i];
            q[i] = 0;
        } else {
            total_time += mine - 1;
            q[i] -= mine - 1;
        }
    }
    total_time + mine
}

fn time_required_to_buy(tickets: Vec<i32>, k: i32) -> i32 {
    let mine = tickets[k as usize];

    let total_time: i32 = tickets
        .iter()
        .enumerate()
        .map(|(i, &ticket)| {
            let limit = if i <= k as usize { mine } else { mine - 1 };
            ticket.min(limit)
        })
        .sum();

    total_time
}

fn main() {}

#[test]
fn test_time_needed_to_buy() {
    let tickets = vec![2, 3, 2];
    assert_eq!(time_required_to_buy(tickets, 2), 6);
}

#[test]
fn test_time_needed_to_buy_1() {
    let tickets = vec![5, 1, 1, 1];
    assert_eq!(time_required_to_buy(tickets, 0), 8);
}
