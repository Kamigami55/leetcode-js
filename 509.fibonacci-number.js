/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/*
  31/31 cases passed (91 ms)
  Your runtime beats 47.62 % of javascript submissions
  Your memory usage beats 82.57 % of javascript submissions (38.2 MB)
*/
var fib = function (n) {
  if (n === 0) return 0
  if (n <= 2) return 1
  let a = 0
  let b = 1
  while (--n) {
    ;[a, b] = [b, a + b]
  }
  return b
}
// @lc code=end
