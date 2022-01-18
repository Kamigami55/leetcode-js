/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
36/36 cases passed (84 ms)
Your runtime beats 91.82 % of javascript submissions
Your memory usage beats 43.08 % of javascript submissions (41.7 MB)
*/
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  const chars = new Array(26).fill(0)
  for (let char of s) {
    ++chars[char.charCodeAt(0) - 'a'.charCodeAt(0)]
  }
  for (let char of t) {
    if (--chars[char.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
      return false
    }
  }
  return true
}
// @lc code=end
