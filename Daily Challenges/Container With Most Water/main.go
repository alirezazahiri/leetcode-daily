package main

import "fmt"

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func maxArea(height []int) int {
	length := len(height)
	left, right := 0, length-1
	curr, max := 0, 0
	for left < right {
		curr = min(height[left], height[right]) * (right - left)
		if curr >= max {
			max = curr
		}
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return max
}

func main() {
	height := []int{1, 8, 6, 2, 5, 4, 8, 3, 7}
	fmt.Println(maxArea(height))
}
