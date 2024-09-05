package main

import (
	"fmt"
	"strings"
)

func wordPattern(pattern string, s string) bool {
    dict := make(map[rune]string)
    reversedDict := make(map[string]rune)

    splittedStr := strings.Split(s, " ")
	converted := make([]string, 0)

	for i, ch := range pattern {
		_, ok := dict[ch]
        _, hasValue := reversedDict[splittedStr[i]]
		
        if !ok && !hasValue {
			dict[ch] = splittedStr[i]
            reversedDict[splittedStr[i]] = ch
		} else if !ok && hasValue {
            return false 
        }

		converted = append(converted, dict[ch])
	}

	return strings.Join(converted, " ") == s
}

func main() {
	fmt.Println(wordPattern("abba", "dog cat cat dog"))
	fmt.Println("--------------------------------------")
	fmt.Println(wordPattern("abba", "dog cat cat fish"))
	fmt.Println("--------------------------------------")
	fmt.Println(wordPattern("aaaa", "dog cat cat dog"))
	// fmt.Println("--------------------------------------")
	// fmt.Println(wordPattern("abba", "dog cat cat dog"))
}