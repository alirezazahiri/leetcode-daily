package main

import (
	"fmt"
	"sort"
	"strings"
)

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

func longestCommonPrefixWithSorting(strs []string) string {
	length := len(strs) 
	sort.Strings(strs)
	
	first, last := strs[0], strs[length - 1]

	var res strings.Builder

	for i := 0; i < len(first); i++ {
		if first[i] != last[i] {
			break
		}
		res.WriteRune(rune(first[i]))
	}

	return res.String()
}

func main() {
	fmt.Println(longestCommonPrefixWithSorting([]string{"flower", "flow", "flight"}))
	fmt.Println(longestCommonPrefixWithSorting([]string{"dog", "racecar", "car"}))
}
