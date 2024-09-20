package main

import "fmt"

func max(a, b int) int {
	if a < b {
		return b
	}
	return a
}

func jump(nums []int) int {
	length := len(nums)
	i := 0
	coverage, lastJumpIndex := 0, 0 
	jumps := 0
	for i < length {
		coverage = max(coverage, i+nums[i])

		if i == lastJumpIndex {
			lastJumpIndex = coverage
			jumps++
			if coverage >= length - 1 {
				return jumps 
			}
		}
		

		i++
	}

	return jumps
}

func main() {
	fmt.Println(jump([]int{2, 3, 1, 1, 4}))
	fmt.Println(jump([]int{3, 2, 1, 0, 4}))
	fmt.Println(jump([]int{1, 2, 3}))
}