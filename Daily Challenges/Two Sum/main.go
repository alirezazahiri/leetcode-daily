package main

import (
	"fmt"
	"sort"
)

func twoSum(nums []int, target int) []int {
	numsWithIndices := make([][2]int, len(nums))
	for i, num := range nums {
		numsWithIndices[i] = [2]int{num, i}
	}

	sort.Slice(numsWithIndices, func(i, j int) bool {
		return numsWithIndices[i][0] < numsWithIndices[j][0]
	})

	left, right := 0, len(numsWithIndices)-1
	for left < right {
		if target-numsWithIndices[right][0] == numsWithIndices[left][0] {
			return []int{numsWithIndices[left][1], numsWithIndices[right][1]}
		} else if target-numsWithIndices[right][0] > numsWithIndices[left][0] {
			left++
		} else if target-numsWithIndices[right][0] < numsWithIndices[left][0] {
			right--
		}
	}

	return []int{left, right}
}

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
	fmt.Println("--------------------")
	fmt.Println(twoSum([]int{3, 2, 4}, 6))
	fmt.Println("--------------------")
	fmt.Println(twoSum([]int{3, 3}, 6))
}
