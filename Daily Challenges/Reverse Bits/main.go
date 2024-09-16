package main

import (
	"fmt"
)

func reverseBits(num uint32) uint32 {
	var result uint32 = 0

	for i := 0; i < 32; i++ {
		// check if the LSB (Least Significant Bit) is 1 or not 
		if (num & 1) == 1 {
			// if it is 1, then add 2^(31-i) to the result 
			// * here I used bitwise operations to calculate the result 
			result |= (1 << (31 - i))
		}
		// get rid of the last bit and move on to the next LSB
		num >>= 1
	}

	return result
}

func main() {
	fmt.Println(reverseBits(43261596)) // 00000010100101000001111010011100
}
