package main

import "fmt"

func readBinaryWatch(turnedOn int) []string {
	result := make([]string, 0)

	for i := range 12 {
		rt := turnedOn - computeOnes(i)
		if rt > 0 {
			for j := 1; j < 60; j++ {
				rb := rt - computeOnes(j)
				if rb == 0 {
					result = append(result, fmt.Sprintf("%d:%02d", i, j))
				}
			}
		} else if rt == 0 {
			result = append(result, fmt.Sprintf("%d:%02d", i, 0))
		}
	}
	return result
}

func computeOnes(value int) (count int) {
	if value == 0 {
		return
	}

	for i := 5; i >= 0; i-- {
		r := value - (1 << i)
		if r >= 0 {
			count++
			value = r
		}
	}
	return
}

func main() {
	for i := range 11 {
		fmt.Printf("%#v\n\n", readBinaryWatch(i))
	}
}
