package main

import (
	"fmt"
	"strconv"
	"strings"
)

type Queue struct {
	items []*TreeNode
	left  int
	right int
}

func NewQueue(initialItems ...*TreeNode) *Queue {
	return &Queue{
		items: []*TreeNode{},
		left:  0,
		right: 0,
	}
}

func (q *Queue) enqueue(item *TreeNode) {
	q.items = append(q.items, item)
	q.right++
}

func (q *Queue) dequeue() (*TreeNode, bool) {
	if q.left == q.right {
		fmt.Println("empty queue")
		return nil, false
	}
	q.left++
	return q.items[q.left-1], true
}

func (q *Queue) size() int {
	return q.right - q.left
}

func (q *Queue) String() string {
	mappedToStringQueue := []string{}
	for _, item := range q.items[q.left:q.right] {
		mappedToStringQueue = append(mappedToStringQueue, strconv.Itoa(item.Val))
	}
	return "<Size: " + strconv.Itoa(q.size()) + "> [ " + strings.Join(mappedToStringQueue, ", ") + " ]"
}

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func averageOfLevels(root *TreeNode) []float64 {
	if root == nil {
		return nil 
	}

	q := NewQueue()
	q.enqueue(root)

	averageList := []float64{}

	for q.size() > 0 {
		numOfNodesInCurrentLevel := q.size()
		currentLevelSum := 0
		for i:=0; i< numOfNodesInCurrentLevel; i++ {
			node, _ := q.dequeue()
			if node.Left != nil {
				q.enqueue(node.Left)
			}
			if node.Right != nil {
				q.enqueue(node.Right)
			}
			currentLevelSum += node.Val
		}
		averageList = append(averageList, float64(currentLevelSum)/float64(numOfNodesInCurrentLevel))
	}

	return averageList
}

func main() {
	fmt.Println(averageOfLevels(
		&TreeNode{
			Val: 3,
			Left: &TreeNode{
				Val: 9,
			},
			Right: &TreeNode{
				Val: 20,
				Left: &TreeNode{
					Val: 15,
				},
				Right: &TreeNode{
					Val: 7,
				},
			},
		},
	))
}
