package main

import "fmt"

func isHappy(n int) bool {
	if n == 1 {
		return true
	} else {
		if n > 1 && n < 10 {
			switch n {
			case 7:
				return true
			default:
				return false
			}
		}
	}

	var r int
	var sumSquaredDigits int = 0

	for n > 0 {
		r = n % 10
		n /= 10

		sumSquaredDigits += r * r
	}

	return isHappy(sumSquaredDigits)
}

func main() {
	fmt.Println(isHappy(19))
	fmt.Println("--------------------")
	fmt.Println(isHappy(2))
	fmt.Println("--------------------")
	fmt.Println(isHappy(1))
}
