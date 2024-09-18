package main

import "fmt"

// ! TIME LIMIT 
// func climbStairs(n int) int {
// 	if 1 <= n && n <= 3 { 
// 		return n
// 	}

// 	return climbStairs(n-1) + climbStairs(n-2)
// }


func climbStairs(n int) int {
	memo := make([]int, n)

	if n <= 3 {
		return n
	}

    memo[0] = 1
    memo[1] = 2
    memo[2] = 3

	for i := 3; i < n; i++ {
		memo[i] = memo[i-1] + memo[i-2]
	}

	return memo[n-2] + memo[n-3] 
}

func main() {
	fmt.Println(climbStairs(7))
	fmt.Println("---------------")
	fmt.Println(climbStairs(6))
	fmt.Println("---------------")
	fmt.Println(climbStairs(5))

}