package main 

func sumOfSquaredDigits(n int) int {
    res := 0
    
    for n > 0 {
        r := n % 10
        res += r*r
        n /= 10
    }

    return res 
}

func isHappy(n int) bool {
    slow, fast := n, sumOfSquaredDigits(n)

    cond: 
    if fast != 1 && slow != fast {
        slow, fast = sumOfSquaredDigits(slow), sumOfSquaredDigits(sumOfSquaredDigits(fast))
        goto cond
    }

    return fast == 1 
}

func main() {
	
}