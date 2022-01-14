/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
const MAX = 2 ** 31 - 1
const MIN = -(2 ** 31)
/**
 * @param {string} s
 * @return {number}
 */
/*
1082/1082 cases passed (203 ms)
Your runtime beats 5.13 % of javascript submissions
Your memory usage beats 54.05 % of javascript submissions (41.1 MB)
*/
var myAtoi = function (s) {
  let ans = 0
  let isPositive = true
  let isFirst = true
  for (let i = 0; i < s.length; ++i) {
    if (isFirst && s[i] === ' ') continue
    if (isFirst && s[i] === '-') {
      isFirst = false
      isPositive = false
      continue
    }
    if (isFirst && s[i] === '+') {
      isFirst = false
      continue
    }
    if (s[i] >= '0' && s[i] <= '9') {
      isFirst = false
      ans = ans * 10 + (s[i] - '0')
      if (isPositive && ans >= MAX) return MAX
      if (!isPositive && -ans <= MIN) return MIN
      continue
    }
    // other chars
    return isPositive ? ans : -ans
  }
  return isPositive ? ans : -ans
}
// @lc code=end
