package main

import "fmt"

func getSumBit(a, b byte, carry bool) (string, bool) {
	switch {
	case carry && a == '1' && b == '1':
		return "1", true
	case !carry && a == '1' && b == '1':
		return "0", true
	case carry && (a == '1' || b == '1'):
		return "0", true
	case !carry && (a == '1' || b == '1'):
		return "1", false
	case carry && (a == '0' && b == '0'):
		return "1", false
	case !carry && (a == '0' && b == '0'):
		return "0", false
	}
	return "", false
}

func addBinary(a, b string) string {
	res := ""
	carry := false

	if len(a) > len(b) {
		a, b = b, a
	}

	bLen, aLen := len(b)-1, len(a)-1

	bit := ""
	for aLen >= 0 {
		bit, carry = getSumBit(a[aLen], b[bLen], carry)
		res = bit + res
		aLen--
		bLen--
	}

	for bLen >= 0 {
		bit, carry = getSumBit('0', b[bLen], carry)
		res = bit + res
		aLen--
		bLen--
	}

	if carry {
		res = "1" + res
	}

	if bLen > 0 {
		res = b[:bLen] + res
	}

	return res
}

func main() {
	fmt.Println(addBinary("11", "1"))
	fmt.Println("-------------------")
	fmt.Println(addBinary("1010", "1011"))
}
