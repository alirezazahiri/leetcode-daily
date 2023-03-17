// URL: https://leetcode.com/problems/implement-trie-prefix-tree/

class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new TrieNode());
      }
      currentNode = currentNode.children.get(char);
    }

    currentNode.isEndOfWord = true;
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let currentNode = this.root;

    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return currentNode.isEndOfWord;
  }

  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let currentNode = this.root;

    for (let i = 0; i < prefix.length; i++) {
      let char = prefix[i];
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
