package main

func removeDuplicates(nums []int) int {
	j := 1
    count := 1
    // for i := 1; i < len(nums); i++ {
    //     if nums[i] == nums[i-1] {
    //         count++
    //         if count <= 2 {
    //             nums[j] = nums[i]
    //             j++
    //         }
    //     } else {
    //         nums[j] = nums[i]
    //         count = 1
    //         j++
    //     }
    // }
    for i := 1; i < len(nums); i++ {
        if nums[i] == nums[i-1] {
            count++
        } else {
            count = 1
        }
        if count <= 2 {
            nums[j] = nums[i]
            j++
        }
    }

    return j
}

func main() {
	
}