package main

import (
	"fmt"
	"sort"
)

func threeSum(nums []int) [][]int {
	sort.Ints(nums) // O(n.log(n))

	length := len(nums)
	i, low, high := 0, 1, length-1

	prevOffset := nums[i]
	prevLow, prevHigh := nums[low], nums[high]
	result := make([][]int, 0)

	// O(n^2)
	for i < length {
		if nums[i] > 0 {
			break
		}
		for low < high {
			s := nums[i] + nums[low] + nums[high]
			if s == 0 {
				result = append(result, []int{nums[i], nums[low], nums[high]})
				prevLow, prevHigh = nums[low], nums[high]
				low++
				high--
				for low < high && nums[low] == prevLow {
					low++
				}
				for low < high && nums[high] == prevHigh {
					high--
				}
			} else if s > 0 {
				high--
			} else {
				low++
			}
		}
		prevOffset = nums[i]

		i++
		for i < length && nums[i] == prevOffset {
			i++
		}
		low = i + 1
		high = length - 1
	}

	return result
}

func main() {
	nums := []int{-1, 0, 1, 2, -1, -4}
	fmt.Println(threeSum(nums))
}
