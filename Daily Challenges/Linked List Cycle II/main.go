package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func detectCycle(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return nil
	}

	slow, fast := head, head

	for fast != nil && fast.Next != nil {
		slow = slow.Next
		fast = fast.Next.Next

		if slow == fast {
			slow = head
			for slow != fast {
				slow = slow.Next
				fast = fast.Next
			}
			return slow
		}
	}

	return nil
}

func main() {
	fmt.Println(detectCycle(
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
	fmt.Println(detectCycle(head))
}