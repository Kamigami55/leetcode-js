/*
 * @lc app=leetcode id=191 lang=javascript
 *
 * [191] Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/*
601/601 cases passed (111 ms)
Your runtime beats 31.98 % of javascript submissions
Your memory usage beats 98.1 % of javascript submissions (39.7 MB)
*/
var hammingWeight = function (n) {
  let ans = 0
  while (n !== 0) {
    if (n & 1) ++ans
    n = n >>> 1
  }
  return ans
}
// @lc code=end
