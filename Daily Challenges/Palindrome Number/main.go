package main

import "fmt"

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	xCopy := x
	revX := 0

	for x > 0 {
		r := x % 10
		revX = revX*10 + r
		x /= 10
	}

	return revX == xCopy
}

func main() {
	fmt.Println(isPalindrome(121))
	fmt.Println("-------------------")
	fmt.Println(isPalindrome(-121))
	fmt.Println("-------------------")
	fmt.Println(isPalindrome(10))
}
