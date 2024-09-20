package main

// O(n^2)
func hIndex__O_n2(citations []int) int {
    n := len(citations)
    h := 0
    for i := 0; i < n; i++ {
        h++
        flag := false 
        count := 0
        for j := 0; j < n; j++ {
            if citations[j] >= h {
                count++
            }
            if count == h {
                flag = true 
                break 
            }
        }
        if !flag {
            return h-1
        }
    }

    return h
}

// O(n) using countingSort
func hIndex(citations []int) int {
	length := len(citations)
    sorted := countingSort(citations)

	countOfPapers := 0

	for i := length; i >= 0; i-- {
		countOfPapers += sorted[i]	
		if countOfPapers >= i {
			return i 
		}
	}
	
    return 0
}

func countingSort(nums []int) []int {
	length := len(nums)
	sortedSlice := make([]int, length + 1)

	for i := length-1; i >= 0; i-- {
		if nums[i] >= length {
			sortedSlice[length]++
		} else {
			sortedSlice[nums[i]]++
		}
	}

	return sortedSlice
}


func main() {
}
