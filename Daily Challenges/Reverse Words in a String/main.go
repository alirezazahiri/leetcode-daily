package main

import "fmt"

func reverseWords(s string) string {
	curr := ""
	reversed := ""
	for _, ch := range s {
		if ch == ' ' {
			if curr != "" {
				reversed = " " + curr + reversed
				curr = ""
			}
		} else {
			curr += string(ch)
		}
	}
	if curr != "" {
		reversed = curr + reversed
	}

	if reversed[0] == ' ' {
		return reversed[1:]
	}
	return reversed
}

func main() {
	fmt.Println(reverseWords("the sky is blue"))
}