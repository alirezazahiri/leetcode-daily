package main

import (
	"fmt"
	"strings"
)

func convert(s string, numRows int) string {
	result := make([][]string, numRows)

	j := 0

	sign := 1 
	for _, ch := range s {
		result[j] = append(result[j], string(ch))

		
		if j == 0 {
			sign = 1
		}
		if j == numRows-1 {
			sign = -1
		}

		j += sign
	}

	z := ""
	for i := 0; i < len(result); i++ {
		z += strings.Join(result[i], "")
	}

	return z
}

func main() {
	fmt.Println(convert("PAYPALISHIRING", 3))
}