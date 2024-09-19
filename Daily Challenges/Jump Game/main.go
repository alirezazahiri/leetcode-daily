package main

import "fmt"

func canJump(nums []int) bool {
	length := len(nums)
	canReach := make(map[int]bool)

	goal := length - 1
	canReach[goal] = true
	for i := length - 2; i >= 0; i-- {
		if goal-i <= nums[i] {
			canReach[i] = true
			goal = i
		} else {
			canReach[i] = false
		}
	}

	return canReach[0]
}

func canJumpRecursive(nums []int) bool {
	length := len(nums)

	var canReach func(int) bool
	canReach = func(idx int) bool {
		if idx == length-1 {
			return true
		}
		if idx >= length || nums[idx] == 0 {
			return false
		}
		for jump:=nums[idx]; jump >= 1; jump-- {
			if canReach(idx + jump) {
				return true 
			}
		}
		return false 
	}

	return canReach(0)
}

func canJumpRecursiveWithMemo(nums []int) bool {
	length := len(nums)
	memo := make(map[int]bool)

	var canReach func(int) bool
	canReach = func(idx int) bool {
		if possible, ok := memo[idx]; ok {
			return possible
		}

		if idx == length-1 {
			return true
		}
		if idx >= length || nums[idx] == 0 {
			return false
		}
		for jump:=nums[idx]; jump >= 1; jump-- {
			if canReach(idx + jump) {
				return true 
			}
		}
		return false 
	}

	return canReach(0)
}

func main() {
	// fmt.Println(canJumpRecursive([]int{2, 3, 1, 1, 4}))
	// fmt.Println(canJumpRecursive([]int{3, 2, 1, 0, 4}))
	// fmt.Println(canJumpRecursive([]int{1,2, 3}))
	fmt.Println(canJumpRecursiveWithMemo([]int{2, 3, 1, 1, 4}))
	fmt.Println(canJumpRecursiveWithMemo([]int{3, 2, 1, 0, 4}))
	fmt.Println(canJumpRecursiveWithMemo([]int{1,2, 3}))
}