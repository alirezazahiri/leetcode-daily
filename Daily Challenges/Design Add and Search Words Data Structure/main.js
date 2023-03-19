class WordDictionary {
  constructor() {
    this.words = [];
  }
  /**
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    if (!this.words.includes(word)) this.words.push(word);
  }
  /**
   * @param {string} word
   * @return {boolean}
   */
  search(criteria) {
    return !!this.words.find((word) => {
      if (criteria.length !== word.length) return false;

      for (let i = 0; i < word.length; i++)
        if (criteria[i] !== "." && word[i] !== criteria[i]) return false;

      return true;
    });
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let wordDictionary = new WordDictionary();
console.log(wordDictionary.addWord("at"));
console.log(wordDictionary.addWord("and"));
console.log(wordDictionary.addWord("an"));
console.log(wordDictionary.addWord("add"));
console.log(wordDictionary.words);
console.log(wordDictionary.search("a"));
console.log(wordDictionary.search(".at"));
console.log(wordDictionary.addWord("bat"));
console.log(wordDictionary.words);
console.log(wordDictionary.search(".at"));
console.log(wordDictionary.search("an."));
console.log(wordDictionary.search("a.d."));
console.log(wordDictionary.search("b."));
console.log(wordDictionary.search("a.d"));
console.log(wordDictionary.search("."));
