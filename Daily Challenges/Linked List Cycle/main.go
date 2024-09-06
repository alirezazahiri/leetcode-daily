package main

import "fmt"

type ListNode struct {
	Val     int
	Next    *ListNode
}

// using hash-map 
func hasCycle(head *ListNode) bool {
	if head == nil {
		return false
	}

	visited := make(map[string]bool)
	key := ""
	node := head

	for {
		if node == nil || node.Next == nil {
			return false
		}

		key = fmt.Sprintf("%p", node.Next)

		if seen, ok := visited[key]; ok && seen {
			return true
		}

		visited[key] = true
		
		node = node.Next
	}
}

// using floyd's cycle algorithm
func hasCycle2(head *ListNode) bool {
	if head == nil || head.Next == nil {
		return false
	}

	slow, fast := head, head.Next

	for fast != nil && fast.Next != nil {
		if slow == fast {
			return true
		}
		slow = slow.Next
		fast = fast.Next.Next
	}

	return false 
}

func main() {
	fmt.Println(hasCycle(
		&ListNode{Val: 1,
			Next: &ListNode{Val: 2,
				Next: &ListNode{Val: 3,
					Next: &ListNode{Val: 4,
						Next: &ListNode{Val: 5,
							Next: nil}}}}}))
	fmt.Println("--------------------------------")
	fmt.Println(hasCycle(
		&ListNode{Val: 1,
			Next: &ListNode{Val: 2,
				Next: &ListNode{Val: 3,
					Next: &ListNode{Val: 4,
						Next: &ListNode{Val: 5,
							Next: &ListNode{Val: 6,
								Next: nil}}}}}}))
	fmt.Println("--------------------------------")
	cycleNode := &ListNode{Val: 2}
	head := &ListNode{Val: 3, Next: cycleNode}
	cycleNode.Next = &ListNode{Val: 0, Next: &ListNode{Val: -4, Next: cycleNode}}
	fmt.Println(hasCycle(head))
}
