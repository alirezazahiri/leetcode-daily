package main

import "fmt"

func twoSum(numbers []int, target int) []int {
	length := len(numbers)
	left, right := 0, length-1
	for left < right {
		if numbers[right]+numbers[left] == target {
			return []int{left + 1, right + 1}
		}
		if numbers[right]+numbers[left] > target {
			right--
		} else {
			left++
		}
	}
	return nil
}

func main() {
	numbers := []int{2, 7, 11, 15}
	target := 9
	fmt.Println(twoSum(numbers, target))
}
