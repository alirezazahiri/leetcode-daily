package main

import (
	"fmt"
)

func summaryRanges(nums []int) []string {
	ranges := make([]string, 0)
	i := 0
	for i < len(nums) {
		start := i
		for i < len(nums)-1 && nums[i+1]-nums[i] == 1 {
			i++
		}
		if nums[i] > nums[start] {
			ranges = append(ranges, fmt.Sprintf("%d->%d", nums[start], nums[i]))
		} else {
			ranges = append(ranges, fmt.Sprintf("%d", nums[start]))
		}
		i++
	}

	return ranges
}

func main() {
	fmt.Println(summaryRanges([]int{0, 1, 2, 4, 5, 7}))
	fmt.Println("-------------------------------")
	fmt.Println(summaryRanges([]int{0, 2, 3, 4, 6, 8, 9}))
}
