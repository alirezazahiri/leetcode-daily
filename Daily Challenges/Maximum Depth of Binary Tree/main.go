package main

import (
	"fmt"
	"math"
)

type TreeNode struct {
	Val int
	Left *TreeNode
	Right *TreeNode
}

func maxDepth(root *TreeNode) int {
	d := root

	if d == nil {
		return 0
	}

	lMax := getDepth(d.Left, 1)
	rMax := getDepth(d.Right, 1)

	return int(math.Max(float64(lMax), float64(rMax)))
}

func getDepth(node *TreeNode, d int) int {
	if node == nil {
		return d
	}

	l := getDepth(node.Left, d+1)
	r := getDepth(node.Right, d+1)

	return int(math.Max(float64(l), float64(r)))
}

func main() {
	fmt.Println(maxDepth(
		&TreeNode{Val: 1,
			Left: &TreeNode{Val: 2,
				Left: &TreeNode{Val: 4},
				Right: &TreeNode{Val: 5},
			},
			Right: &TreeNode{Val: 3},
		},
	))
}