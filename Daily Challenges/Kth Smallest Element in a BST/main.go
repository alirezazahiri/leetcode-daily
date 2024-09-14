package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func inorderTraversal(node *TreeNode, list *[]int) {
	if node == nil {
		return
	}
	inorderTraversal(node.Left, list)
	*list = append(*list, node.Val)
	inorderTraversal(node.Right, list)
}

func kthSmallest(root *TreeNode, k int) int {
	var nodeList []int
	inorderTraversal(root, &nodeList)

	return nodeList[k-1]
}

func main() {
	fmt.Println(kthSmallest(
		&TreeNode{
			Val: 3,
			Left: &TreeNode{
				Val: 1,
			},
		},
		1,
	))
}
