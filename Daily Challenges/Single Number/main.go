package main

import "fmt"

func singleNumber(nums []int) int {
	xor := 0
	for _, num := range nums {
		fmt.Printf("%d XOR %d = ", xor, num)
		xor ^= num
		fmt.Println(xor)
	}

	return xor
}

func main() {
	fmt.Println(singleNumber([]int{2, 2, 1}))
	fmt.Println("----------------------")
	fmt.Println(singleNumber([]int{4, 1, 2, 1, 2}))
	fmt.Println("----------------------")
	fmt.Println(singleNumber([]int{1}))
	fmt.Println("----------------------")
}
