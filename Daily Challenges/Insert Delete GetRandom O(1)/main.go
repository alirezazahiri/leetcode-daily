package main

import (
	"fmt"
	"math/rand"
	"time"
)

type RandomizedSet struct {
	items  []int
	size int
	set  map[int]int
	r *rand.Rand
}

func Constructor() RandomizedSet {
	return RandomizedSet{
		items:  make([]int, 0),
		size: 0,
		set:  make(map[int]int),
		r: rand.New(rand.NewSource(time.Now().UnixNano())),
	}
}

func (this *RandomizedSet) Insert(val int) bool {
	_, ok := this.set[val]
	if ok {
		return false
	}

	this.items = append(this.items, val)
	this.set[val] = this.size
	this.size++
	return true
}

func (this *RandomizedSet) Remove(val int) bool {
	index, ok := this.set[val]
	if !ok {
		return false
	}

	// swap the element to remove with the last element of the array
	lastElement := this.items[this.size-1]
	this.items[index] = lastElement
	// update the index of the last element
	this.set[lastElement] = index
	// pop 
	this.items = this.items[:this.size-1]
	
	delete(this.set, val)
	
    this.size--
	return true
}

func (this *RandomizedSet) GetRandom() int {
	index := this.r.Intn(this.size)
	return this.items[index]
}

func main() {
	obj := Constructor()
	commands := []string{"RandomizedSet","insert","insert","remove","insert","remove","getRandom"}
	args := [][]int{{}, {0}, {1}, {0}, {2}, {1}, {}}

	for i, command := range commands {
		switch command {
		case "RandomizedSet":
			obj = Constructor()
		case "insert":
			fmt.Println("insert:", obj.Insert(args[i][0]))
		case "remove":
			fmt.Println("remove:", obj.Remove(args[i][0]))
		case "getRandom":
			fmt.Println("getRandom:", obj.GetRandom())
		}
	}
}
