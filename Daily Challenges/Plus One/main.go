package main

import "fmt"

func plusOne(digits []int) []int {
	carry := false
	length := len(digits)

	result := make([]int, length+1, length+1)

	for i := length - 1; i >= 0; i-- {
        if i == length - 1 {
            result[i+1] = digits[i] + 1
        } else {
            if carry {
                result[i+1] = digits[i] + 1
                carry = false 
            } else {
                result[i+1] = digits[i]
            }
        }
        if result[i+1] > 9 {
            result[i+1] -= 10
            carry = true 
        }
	}

	if carry {
		result[0] = 1
		return result
	}
	return result[1:]
}

func main() {
	fmt.Println(plusOne([]int{1, 2, 3}))
	fmt.Println("--------------")
	fmt.Println(plusOne([]int{4, 3, 2, 1}))
	fmt.Println("--------------")
	fmt.Println(plusOne([]int{9}))
	fmt.Println("--------------")
	fmt.Println(plusOne([]int{8, 9, 9, 9}))
}