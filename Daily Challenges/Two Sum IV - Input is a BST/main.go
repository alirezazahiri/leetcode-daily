package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func findTarget(root *TreeNode, k int) bool {
	visited := make(map[int]bool)

	var dfs func(node *TreeNode) bool
	dfs = func(node *TreeNode) bool {
		if node == nil {
			return false
		}
		if _, ok := visited[k-node.Val]; ok {
			return true
		}
		visited[node.Val] = true
		return dfs(node.Left) || dfs(node.Right)
	}

	return dfs(root)
}

func main() {
	root := &TreeNode{Val: 5, Left: &TreeNode{Val: 3, Left: &TreeNode{Val: 2}, Right: &TreeNode{Val: 4}}, Right: &TreeNode{Val: 6, Right: &TreeNode{Val: 7}}}
	fmt.Println(findTarget(root, 9))
}
