package main

import "fmt"

func isIsomorphic(s string, t string) bool {
	dict := make(map[rune]rune)
    reversedDict := make(map[rune]rune)

	converted := ""

	for i, ch := range s {
		_, ok := dict[ch]
        _, hasValue := reversedDict[rune(t[i])]
		
        if !ok && !hasValue {
			dict[ch] = rune(t[i])
            reversedDict[rune(t[i])] = ch
		} else if !ok && hasValue {
            return false 
        }

		converted += string(dict[ch])
	}

	return converted == t
}

func main() {
	fmt.Println(isIsomorphic("egg", "add"))
	fmt.Println("-------------------------")
	fmt.Println(isIsomorphic("foo", "bar"))
	fmt.Println("-------------------------")
	fmt.Println(isIsomorphic("paper", "title"))
	fmt.Println("-------------------------")
	fmt.Println(isIsomorphic("badc", "baba"))
}
