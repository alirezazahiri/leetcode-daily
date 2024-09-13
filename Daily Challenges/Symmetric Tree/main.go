package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSymmetric(root *TreeNode) bool {
	return isEqual(root.Left, root.Right)
}

func isEqual(left *TreeNode, right *TreeNode) bool {
	if left == nil && right == nil {
		return true
	} else if left == nil || right == nil {
		return false
	} else if left.Val != right.Val {
		return false
	}

	lr := isEqual(left.Left, right.Right)
	rl := isEqual(left.Right, right.Left)

	return lr && rl
}

func main() {
	fmt.Println(isSymmetric(
		&TreeNode{Val: 1,
			Left:  &TreeNode{Val: 2},
			Right: &TreeNode{Val: 3},
		},
	))
}
