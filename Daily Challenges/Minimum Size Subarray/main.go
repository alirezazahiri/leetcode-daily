package main

import "fmt"

func minSubArrayLen(target int, nums []int) int {
	n := len(nums)
	length := n

	startIndex, endIndex := 0, 0
	sum := 0

	found := false

	sum += nums[startIndex]
	
	for i := 0; i < n; i++ {
		startIndex = i
		for endIndex < n-1 && sum < target {
			endIndex++
			sum += nums[endIndex]
		}
		if sum >= target {
			newLength := endIndex - startIndex + 1
			if newLength < length {
				length = newLength
			}
			found = true
			sum -= nums[startIndex]
		}
	}

	if !found {
		return 0
	}
	return length
}

func main() {
	fmt.Println(minSubArrayLen(7, []int{2, 3, 1, 2, 4, 3}))
	fmt.Println(minSubArrayLen(4, []int{1, 4, 4}))
	fmt.Println(minSubArrayLen(11, []int{1, 1, 1, 1, 1, 1, 1, 1}))
	fmt.Println(minSubArrayLen(11, []int{1, 2, 3, 4, 5}))
}
