package main


func majorityElement(nums []int) int {
    candidate := nums[0]
    votes := 1

    for i:=1; i < len(nums); i++ {
        if votes == 0 {
            candidate = nums[i]
        }
        if candidate == nums[i] {
            votes++
        } else {
            votes--
        }
    }

    return candidate
}

func majorityElement2(nums []int) int {
	hashMap := make(map[int]int)
	maxCount, maxNum := 0, 0
	newCount := 0
	for i := 0; i < len(nums); i++ {
		_, ok := hashMap[nums[i]]

		if ok {
			hashMap[nums[i]]++
		} else {
			hashMap[nums[i]] = 1
		}

		newCount = hashMap[nums[i]]

		if maxCount < newCount {
			maxCount = newCount
			maxNum = nums[i]
		}
	}

	return maxNum
}

func main() {

}