package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}

	invertedRoot := root

	invert(invertedRoot)

	return invertedRoot
}

func invert(node *TreeNode) {
	if node == nil {
		return
	}

	node.Left, node.Right = node.Right, node.Left

	invert(node.Left)
	invert(node.Right)
}

func main() {
	fmt.Println(invertTree(
		&TreeNode{Val: 1,
			Left:  &TreeNode{Val: 2},
			Right: &TreeNode{Val: 3},
		},
	))
}
