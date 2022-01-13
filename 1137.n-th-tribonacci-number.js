/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start

const mem = new Map()

/**
 * @param {number} n
 * @return {number}
 */
/*
  39/39 cases passed (68 ms)
  Your runtime beats 87.23 % of javascript submissions
  Your memory usage beats 45.11 % of javascript submissions (38.7 MB)
*/
var tribonacci = function (n) {
  if (n === 0) return 0
  if (n <= 2) return 1
  if (mem.has(n)) return mem.get(n)
  const ans = tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
  mem.set(n, ans)
  return ans
}
// @lc code=end
