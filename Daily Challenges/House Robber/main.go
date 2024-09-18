package main

import "fmt"

func rob(nums []int) int {
	length := len(nums)
    
    if length == 1 {
        return nums[0]
    }

	backpack := make([]int, length)

	backpack[0] = nums[0]

	if nums[1] > backpack[0] {
		backpack[1] = nums[1]
	} else {
		backpack[1] = backpack[0]
	}

	for i := 2; i < length; i++ {
		first := backpack[i-2] + nums[i]
		second := backpack[i-1]
		if first > second {
			backpack[i] = first
		} else {
			backpack[i] = second
		}
	}

	return backpack[length-1]
}

func main() {
	fmt.Println(rob([]int{5, 3, 10, 10, 15, 7, 20}))
	fmt.Println("----------------------")
}
