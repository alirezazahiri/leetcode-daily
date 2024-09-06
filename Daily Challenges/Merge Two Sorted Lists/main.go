package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	if list1 == nil {
		return list2
	} else if list2 == nil {
		return list1
	}

	head := &ListNode{}
	mergedList := head

	for list1 != nil && list2 != nil {
		if list1.Val <= list2.Val {
			mergedList.Next = list1
			list1 = list1.Next
		} else {
			mergedList.Next = list2
			list2 = list2.Next
		}
		mergedList = mergedList.Next
	}

	if list1 != nil {
		mergedList.Next = list1
	} else if list2 != nil {
		mergedList.Next = list2
	}

	return head.Next
}

func main() {
	res1 := mergeTwoLists(
		&ListNode{Val: 1, Next: &ListNode{Val: 2, Next: &ListNode{Val: 4}}},
		&ListNode{Val: 1, Next: &ListNode{Val: 3, Next: &ListNode{Val: 4}}})
	fmt.Println(res1)
	fmt.Println(res1.Next)
	fmt.Println(res1.Next.Next)
	fmt.Println(res1.Next.Next.Next)
	fmt.Println(res1.Next.Next.Next.Next)
	fmt.Println(res1.Next.Next.Next.Next.Next)
	fmt.Println("------------------------------------")
	fmt.Println(mergeTwoLists(
		nil,
		&ListNode{Val: 1, Next: nil}))
}
