/*
 * @lc app=leetcode id=231 lang=javascript
 *
 * [231] Power of Two
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
/*
1108/1108 cases passed (108 ms)
Your runtime beats 24.12 % of javascript submissions
Your memory usage beats 98.98 % of javascript submissions (39.5 MB)
*/
var isPowerOfTwo = function (n) {
  if (n <= 0) return false
  return (n & -n) === n
}
// @lc code=end
