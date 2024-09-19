package main

func removeDuplicates(nums []int) int {
	iw := 1 

	for i := 1; i< len(nums); i++ {
		if nums[i] != nums[i-1] {
			nums[iw] = nums[i]
			iw++
		}
	}

	return iw 
}

func main() {

}