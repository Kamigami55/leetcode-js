/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/*
126/126 cases passed (80 ms)
Your runtime beats 97.67 % of javascript submissions
Your memory usage beats 43.65 % of javascript submissions (42.1 MB)
*/
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false
  const chars = new Array(26).fill(0)
  for (let char of magazine) {
    ++chars[char.charCodeAt(0) - 'a'.charCodeAt(0)]
  }
  for (let char of ransomNote) {
    if (--chars[char.charCodeAt(0) - 'a'.charCodeAt(0)] < 0) {
      return false
    }
  }
  return true
}
// @lc code=end
