package main

import "fmt"

func reverse(nums *[]int, left, right int) {
	for left < right {
		(*nums)[left], (*nums)[right] = (*nums)[right], (*nums)[left]
		left++
		right--
	}
}

// in-place solution 
func rotateWithHelper(nums []int, k int) {
	length := len(nums)
	k = k % length

	if length == 1 || k == 0 {
		return
	}
	
	left, right := 0, length-1
	reverse(&nums, left, right)

	left, right = 0, k-1
	reverse(&nums, left, right)
	
	left, right = k, length-1
	reverse(&nums, left, right)
}

// in-place solution 
func rotate(nums []int, k int) {
	length := len(nums)
	if length == 1 {
		return
	}

	k = k % length
	
	for i := 0; i < length/2; i++ {
		nums[length - i - 1], nums[i] = nums[i], nums[length - i - 1]
	}
	
	for i := 0; i < k/2; i++ {
		nums[k - i - 1], nums[i] = nums[i], nums[k - i - 1]
	}
	
	for i := 0; i < (length - k) / 2; i++ {
		nums[length - i - 1], nums[k + i] = nums[k + i], nums[length - i - 1]
	}
}

// extra memory 
func rotate2(nums []int, k int) []int {
	length := len(nums)
	if length == 1 {
		return nums
 	}

	k = k % length
	memo := make([]int, length)

	for i:=0; i < length; i++ {
		memo[(i+k)%length] = nums[i]
	}

	return memo
}

func main() {
	nums := []int{1, 2, 3, 4, 5, 6, 7}
	rotateWithHelper(nums, 3)
	// rotate(nums, 3)
	fmt.Println(nums)
	// fmt.Println(rotate2(nums, 3))

	nums = []int{-1,-100,3,99}
	rotateWithHelper(nums, 3)
	// rotate(nums, 3)
	fmt.Println(nums)
	// fmt.Println(rotate2(nums, 2))
	
}