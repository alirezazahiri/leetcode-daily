package main

import "fmt"

func strStr(haystack string, needle string) int {
	nlen := len(needle)
	hlen := len(haystack)

	if hlen < nlen {
		return -1
	}

	if hlen == nlen {
		if haystack == needle {
			return 0
		}
		return -1
	}

	i, idx := 0, 0
	foundAt := -1

	for i < hlen {
		if haystack[i] == needle[idx] {
			if foundAt == -1 {
				foundAt = i
			}
			idx++
			if idx == nlen {
				return foundAt
			}
		} else {
			idx = 0
			if foundAt != -1 {
				i = foundAt
			}
			foundAt = -1
		}
		i++
	}

	if idx == nlen {
		return foundAt
	} 
	return -1
}

func main() {
	fmt.Println(strStr("sadbutsad", "sad"))
	fmt.Println("--------------------------------")
	fmt.Println(strStr("leetcode", "leeto"))
	fmt.Println("--------------------------------")
	fmt.Println(strStr("mississippi", "issipi"))
}
