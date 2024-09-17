package main

import "fmt"

func mySqrt(x int) int {
	left := 0
	right := x
	mid := 0

	for left <= right {
		mid = (right + left) / 2

		if x == mid*mid {
			return mid
		}
		if x > mid*mid {
			left = mid + 1
		} else {
			right = mid - 1
		}
	}

	return right
}

func main() {
	fmt.Println(mySqrt(4))
	fmt.Println("-----------")
	fmt.Println(mySqrt(8))
	fmt.Println("-----------")
	fmt.Println(mySqrt(6))
}
