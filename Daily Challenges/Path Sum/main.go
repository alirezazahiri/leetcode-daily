package main

import "fmt"

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func hasPathSum(root *TreeNode, targetSum int) bool {
	if root == nil {
		return false
	}

	// leaf node must be equal to targetSum
	if root.Left == nil && root.Right == nil {
		return targetSum-root.Val == 0
	}

	targetSum -= root.Val
	return hasPathSum(root.Left, targetSum) || hasPathSum(root.Right, targetSum)
}

func main() {
	fmt.Println(hasPathSum(
		&TreeNode{Val: -2,
			Left:  nil,
			Right: &TreeNode{Val: -3},
		},
		-5,
	))
}
