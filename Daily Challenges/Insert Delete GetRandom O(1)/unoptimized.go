// package main 

// import (
// 	"math/rand"
// 	"time"
// )

// type RandomizedSet struct {
// 	set map[int]bool
//     invalidate bool 
//     nums []int
//     size int 
//     r *rand.Rand
// }

// func Constructor() RandomizedSet {
// 	return RandomizedSet{
// 		set: make(map[int]bool),
//         invalidate: false,
//         nums: make([]int, 0),
//         size: 0,
//         r: rand.New(rand.NewSource(time.Now().UnixNano())),
// 	}
// }

// func (this *RandomizedSet) Insert(val int) bool {
// 	exists, ok := this.set[val]
// 	if ok && exists {
// 		return false
// 	}
//     this.size++
// 	this.set[val] = true
//     this.invalidate = true 
// 	return true
// }

// func (this *RandomizedSet) Remove(val int) bool {
// 	exists, ok := this.set[val]
// 	if ok && exists {
//         this.size--
// 		this.set[val] = false
//         this.invalidate = true 
// 		return true
// 	}
// 	return false
// }

// func (this *RandomizedSet) GetRandom() int {
// 	min := 0
// 	i:= 0

//     if this.invalidate {
// 	    length := len(this.set)
//         nums := make([]int, length)

//         for k, v := range this.set {
//             if v {
//                 nums[i] = k
//                 i++
//             }
//         }
//         this.size = i 
//         this.invalidate = false 
//         this.nums = nums
//     }

//     randNum := this.r.Intn((this.size - 1) - min + 1) + min
// 	num := this.nums[randNum]

// 	return num 
// }