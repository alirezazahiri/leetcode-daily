package main

import "fmt"

func isHappy(n int) bool {
	slow, fast := n, sumOfSsquares(n)

	for fast != 1 && fast != slow { 
		// if fast pointer reaches 1 the break the loop
		// or when the fast pointer catches up with the slow pointer,
		// it means that we have detected a cycle
		// then we should break the loop
		slow = sumOfSsquares(slow) // one step 
		fast = sumOfSsquares(sumOfSsquares(fast)) // two steps 
	}

	return fast == 1
}

func sumOfSsquares(n int) int {
	sum := 0

	for n > 0 {
		digit := n % 10
		sum += digit * digit
		n /= 10
	}

	return sum
}

func main() {
	fmt.Println(isHappy(19))
	fmt.Println("--------------------")
	fmt.Println(isHappy(2))
	fmt.Println("--------------------")
	fmt.Println(isHappy(1))
}
