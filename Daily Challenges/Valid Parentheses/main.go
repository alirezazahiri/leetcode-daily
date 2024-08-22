package validparentheses

type Stack struct {
	items []rune
	head  uint32
	tail  uint32
}

func NewStack() *Stack {
	return &Stack{
		items: make([]rune, 0),
		head:  0,
		tail:  0,
	}
}

func (s *Stack) push(ch rune) {
	s.items = append(s.items[:s.tail], ch)
	s.tail++
}

func (s *Stack) pop() rune {
	if s.tail <= 0 {
		return '-'
	}
	value := s.items[s.tail-1]
	s.tail--
	return value
}

func isOpening(ch rune) bool {
	return ch == '(' || ch == '[' || ch == '{'
}

func isClosing(ch rune) bool {
	return ch == ')' || ch == ']' || ch == '}'
}

func getCorresponding(ch rune) rune {
	switch ch {
	case ')':
		return '('
	case '}':
		return '{'
	case ']':
		return '['
	default:
		return '0'
	}
}

func isValid(s string) bool {
	if len(s) == 1 {
		return false
	}

	stack := NewStack()

	for _, ch := range s {
		if isOpening(ch) {
			stack.push(ch)
		} else if isClosing(ch) {
			if stack.pop() != getCorresponding(ch) {
				return false
			}
		}
	}

	return stack.tail == 0
}
