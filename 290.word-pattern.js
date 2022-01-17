/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
/*
36/36 cases passed (68 ms)
Your runtime beats 90.74 % of javascript submissions
Your memory usage beats 24.3 % of javascript submissions (38.8 MB)
*/
var wordPattern = function (pattern, s) {
  const words = s.split(' ')
  if (pattern.length !== words.length) return false
  const wordToChar = new Map()
  const charToWord = new Map()
  for (let i = 0; i < pattern.length; ++i) {
    if (!charToWord.has(pattern[i]) && !wordToChar.has(words[i])) {
      charToWord.set(pattern[i], words[i])
      wordToChar.set(words[i], pattern[i])
      continue
    } else if (wordToChar.get(words[i]) === pattern[i]) {
      continue
    }
    return false
  }
  return true
}
// @lc code=end
