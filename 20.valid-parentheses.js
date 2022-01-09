/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = []
  for (const letter of s) {
    if ('([{'.includes(letter)) {
      stack.push(letter)
    } else {
      const last = stack.pop()
      if (letter === ')' && last !== '(') return false
      if (letter === ']' && last !== '[') return false
      if (letter === '}' && last !== '{') return false
    }
  }
  if (stack.length === 0) return true
  return false
}
// @lc code=end
