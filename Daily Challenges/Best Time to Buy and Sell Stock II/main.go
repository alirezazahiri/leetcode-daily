package main

import "fmt"

func maxProfit(prices []int) int {
	i := 0
	profit := 0
	for i < len(prices)-1 {
		if prices[i] < prices[i+1] {
			buy := i
			i++
			for i < len(prices) && prices[i] >= prices[i-1] {
				i++
			}
			sell := i - 1
			profit += prices[sell] - prices[buy]
		} else {
			i++
		}
	}
	return profit
}

func main() {
	fmt.Println(maxProfit([]int{7, 6, 4, 1, 5, 8, 3, 6, 4}))
}
