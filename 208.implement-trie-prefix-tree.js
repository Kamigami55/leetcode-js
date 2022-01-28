/*
 * @lc app=leetcode id=208 lang=javascript
 *
 * [208] Implement Trie (Prefix Tree)
 */

// @lc code=start
/*
15/15 cases passed (270 ms)
Your runtime beats 50.62 % of javascript submissions
Your memory usage beats 5.89 % of javascript submissions (76 MB)
*/
var Trie = function () {
  this.kids = new Map()
  this.isEnd = false
}

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  if (!word) {
    this.isEnd = true
    return
  }
  if (!this.kids.has(word[0])) {
    this.kids.set(word[0], new Trie())
  }
  this.kids.get(word[0]).insert(word.slice(1))
}

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  if (!word) {
    return this.isEnd
  }
  if (this.kids.has(word[0])) {
    return this.kids.get(word[0]).search(word.slice(1))
  }
  return false
}

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  if (!prefix) {
    return true
  }
  if (this.kids.has(prefix[0])) {
    return this.kids.get(prefix[0]).startsWith(prefix.slice(1))
  }
  return false
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
