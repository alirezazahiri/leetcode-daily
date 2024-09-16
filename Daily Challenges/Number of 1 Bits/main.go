package main

import "fmt"

func hammingWeight(n int) int {
	c := 0
	for n > 0 {
		if n&1 == 1 {
			c++
		}
		n >>= 1
	}
	return c
}

func main() {
	fmt.Println(hammingWeight(11))
	fmt.Println("-----------------------")
	fmt.Println(hammingWeight(128))
}