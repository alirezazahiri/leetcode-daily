package main

import (
	"fmt"
)


type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func countNodes(root *TreeNode) int {
	if root == nil {
		return 0
	}

	leftDepth := getLeftDepth(root.Left)
	rightDepth := getRightDepth(root.Right)

	if leftDepth == rightDepth {
		return (1 << leftDepth) - 1
	} else {
		return 1 + countNodes(root.Left) + countNodes(root.Right)
	}
}

func getLeftDepth(node *TreeNode) int {
	depth := 0
	for node != nil {
		depth++
		node = node.Left
	}
	return depth
}

func getRightDepth(node *TreeNode) int {
	depth := 0
	for node != nil {
		depth++
		node = node.Right
	}
	return depth
}

func main() {
	fmt.Println(countNodes(
		&TreeNode{Val: 1,
			Left: &TreeNode{Val: 2},
		},
	))
}
