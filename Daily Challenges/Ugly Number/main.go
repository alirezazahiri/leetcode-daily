package main

import (
	"fmt"
	"sync"
)

func helper(n *int, d int, wg *sync.WaitGroup) {
	for *n%d == 0 {
		*n /= d
	}
	wg.Done()
}

func isUgly(n int) bool {
	if n <= 0 {
		return false
	}

	var wg sync.WaitGroup

	wg.Add(3)

	go helper(&n, 5, &wg)
	go helper(&n, 3, &wg)
	go helper(&n, 2, &wg)

	wg.Wait()

	return n == 1
}

func main() {
	fmt.Println(isUgly(6))
	fmt.Println(isUgly(1))
	fmt.Println(isUgly(14))
	fmt.Println(isUgly(270*(1<<31)*10000))
}
