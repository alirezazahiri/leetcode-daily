package main

import "fmt"

// O(n) time and space complexity 
func productExceptSelf(nums []int) []int {
	n := len(nums)
	leftProducts := make([]int, n)
	rightProducts := make([]int, n)
	
	leftProducts[0] = 1
	rightProducts[n-1] = 1
	
	lp := 1
	for i := 1; i < n; i++ {
		lp *= nums[i-1]
		leftProducts[i] = lp
	}
	rp := 1
	for i := n - 2; i >= 0; i-- {
		rp *= nums[i+1]
		rightProducts[i] = rp
	}
	
	answer := make([]int, n)
	for i := range answer {
		answer[i] = leftProducts[i] * rightProducts[i]
	}

	return answer
}

// O(n) time and space complexity 
func productExceptSelf2(nums []int) []int {
    n := len(nums)
    leftProducts := make([]int, n)
    rightProducts := make([]int, n)

    leftProducts[0] = 1
    rightProducts[n-1] = 1

    lp := 1
    rp := 1
    for i := 1; i < n; i++ {
        lp *= nums[i-1]
        rp *= nums[n-i]

        leftProducts[i] = lp
        rightProducts[n-i-1] = rp
    }
    
    answer := make([]int, n)

    for i := range answer {
        answer[i] = leftProducts[i] * rightProducts[i]
    }

    return answer
}

func main() {
	nums := []int{1, 2, 3, 4}
	fmt.Println(productExceptSelf2(nums))
	nums2 := []int{-1, 1, 0, -3, 3}
	fmt.Println(productExceptSelf2(nums2))
}
