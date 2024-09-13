package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSameTree(p *TreeNode, q *TreeNode) bool {
	if (p == nil && q != nil) || (p != nil && q == nil) {
		return false
	} else if p == nil && q == nil {
		return true
	} else if p.Val != q.Val {
		return false
	}

	left := isSameTree(p.Left, q.Left)
	right := isSameTree(p.Right, q.Right)

	return left && right
}

func main() {
	fmt.Println(isSameTree(
		&TreeNode{Val: 1,
			Left:  &TreeNode{Val: 2},
			Right: &TreeNode{Val: 3},
		},
		&TreeNode{Val: 1,
			Left:  &TreeNode{Val: 2},
			Right: &TreeNode{Val: 3},
		},
	))
}
