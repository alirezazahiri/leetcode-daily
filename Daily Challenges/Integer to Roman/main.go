package main

import "fmt"

func intToRoman(num int) string {
	roman := ""
	values := []int{1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1}
	symbols := []string{"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"}

	for i, value := range values {
		for num >= value {
			num -= value
			roman += symbols[i]
		}
	}
	return roman
}

func main() {
	fmt.Println(intToRoman(3749))
	fmt.Println(intToRoman(1994))
}
