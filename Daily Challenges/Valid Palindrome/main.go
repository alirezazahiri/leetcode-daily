package main

import (
	"fmt"
	"strings"
	"unicode"
)

func isPalindrome(s string) bool {
	str := ""
	for _, ch := range strings.ToLower(s) {
		if unicode.IsLetter(ch) || unicode.IsDigit(ch) {
			str += string(ch)
		}
	}
	
	left, right := 0, len(str)-1

	for left <= right {
		if str[left] != str[right] {
			return false 
		}
		left++
		right--
	}

	return true
}


func main() {
	fmt.Println(isPalindrome("A man, a plan, a canal: Panama"))
	fmt.Println("_______________________________")
	fmt.Println(isPalindrome("race car"))
	fmt.Println("_______________________________")
	fmt.Println(isPalindrome("race a car"))
}