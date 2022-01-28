/*
 * @lc app=leetcode id=211 lang=javascript
 *
 * [211] Design Add and Search Words Data Structure
 */

// @lc code=start
/*
13/13 cases passed (241 ms)
Your runtime beats 57.67 % of javascript submissions
Your memory usage beats 12.14 % of javascript submissions (76 MB)
*/
var WordDictionary = function () {
  this.kids = new Map()
  this.isEnd = false
}

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (!word) {
    this.isEnd = true
    return
  }
  if (!this.kids.has(word[0])) {
    this.kids.set(word[0], new WordDictionary())
  }
  this.kids.get(word[0]).addWord(word.slice(1))
}

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (!word) {
    return this.isEnd
  }
  if (word[0] === '.') {
    for (let kid of this.kids.values()) {
      if (kid.search(word.slice(1))) {
        return true
      }
    }
    return false
  } else if (this.kids.has(word[0])) {
    return this.kids.get(word[0]).search(word.slice(1))
  } else {
    return false
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end
