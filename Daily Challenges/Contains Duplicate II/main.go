package main

import (
	"fmt"
)

func containsNearbyDuplicate(nums []int, k int) bool {
	numMap := make(map[int]int)

	for i, num := range nums {
		if lastIndex, exists := numMap[num]; exists && i-lastIndex <= k {
			return true
		}
		numMap[num] = i
	}

	return false
}

func main() {
	fmt.Println(containsNearbyDuplicate([]int{1, 2, 3, 1}, 3)) // true
	fmt.Println("--------------------")
	fmt.Println(containsNearbyDuplicate([]int{1, 0, 1, 1}, 1)) // true
	fmt.Println("--------------------")
	fmt.Println(containsNearbyDuplicate([]int{1, 2, 3, 1, 2, 3}, 2)) // false
	fmt.Println("--------------------")
	fmt.Println(containsNearbyDuplicate([]int{1, 2, 3, 4, 5, 6, 7, 8, 9, 9}, 3)) // true
	fmt.Println("--------------------")
	fmt.Println(containsNearbyDuplicate([]int{1, 2, 2, 3}, 3)) // true

}
