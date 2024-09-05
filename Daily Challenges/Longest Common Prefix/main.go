package main

import "fmt"

func longestCommonPrefix(strs []string) string {
	minLen := len(strs[0])
	for _, word := range strs {
		if len(word) < minLen {
			minLen = len(word)
		}
	}

	prefix := strs[0][:minLen]

	for _, word := range strs[1:] {
		l := 0
		for _, ch := range word[:minLen] {
			if rune(prefix[l]) == ch {
				l++
			} else {
				minLen = l
				break
			}
		}
	}

	return prefix[:minLen]
}

func main() {
	fmt.Println(longestCommonPrefix([]string{"flower", "flow", "flight"}))
	fmt.Println(longestCommonPrefix([]string{"dog", "racecar", "car"}))
}
