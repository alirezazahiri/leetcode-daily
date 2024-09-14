package main

import (
	"fmt"
	"math"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func absDiff(a, b int) int {
	if b > a {
		return b - a
	}
	return a - b
}

func inorderTraversal(node *TreeNode, nodesList *[]int) {
	if node == nil {
		return
	}
	inorderTraversal(node.Left, nodesList)
	*nodesList = append(*nodesList, node.Val)
	inorderTraversal(node.Right, nodesList)
}

func getMinimumDifference(root *TreeNode) int {
	var nodesList []int
	inorderTraversal(root, &nodesList)
	fmt.Println(nodesList)
	minAbsDiff := math.MaxInt32
	for i := 1; i < len(nodesList); i++ {
		absDiff := absDiff(nodesList[i], nodesList[i-1])
		if absDiff < minAbsDiff {
			minAbsDiff = absDiff
		}
	}
	return minAbsDiff
}

func main() {
	fmt.Println(getMinimumDifference(
		&TreeNode{
			Val: 4,
			Left: &TreeNode{
				Val: 2,
				Left: &TreeNode{
					Val: 1,
				},
				Right: &TreeNode{
					Val: 3,
				},
			},
			Right: &TreeNode{
				Val: 6,
			},
		},
	))
	fmt.Println(getMinimumDifference(
		&TreeNode{
			Val: 1,
			Left: &TreeNode{
				Val: 0,
				
			},
			Right: &TreeNode{
				Val: 48,
				Left: &TreeNode{
					Val: 12,
				},
				Right: &TreeNode{
					Val: 49,
				},
			},
		},
	))
}
