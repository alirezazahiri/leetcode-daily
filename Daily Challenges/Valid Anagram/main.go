package main

import "fmt"

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	wordCount := make(map[rune]int)

	for _, ch := range s {
		_, ok := wordCount[ch]
		if !ok {
			wordCount[ch] = 1
		} else {
			wordCount[ch] += 1
		}
	}

	for _, ch := range t {
		count, ok := wordCount[ch]

		if count <= 0 {
			return false
		}

		if !ok {
			return false
		} else {
			wordCount[ch] -= 1
		}
	}

	return true
}

func main() {
	fmt.Println(isAnagram("anagram", "nagaram"))
	fmt.Println("-----------------------------")
	fmt.Println(isAnagram("rat", "car"))
}