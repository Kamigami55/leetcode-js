/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) return s.length
  const chars = new Set()
  let left = 0
  let right = 0
  let isMovingRight = true
  let ans = 1
  chars.add(s[left])
  while (right < s.length - 1) {
    if (isMovingRight) {
      ++right
      if (chars.has(s[right])) {
        ans = Math.max(ans, chars.size)
        isMovingRight = false
      } else {
        chars.add(s[right])
        if (right < s.length) {
          ans = Math.max(ans, chars.size)
        }
      }
    } else {
      if (s[left] === s[right]) {
        isMovingRight = true
      } else {
        chars.delete(s[left])
      }
      ++left
    }
  }
  return ans
}
// @lc code=end
