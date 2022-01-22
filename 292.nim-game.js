/*
 * @lc app=leetcode id=292 lang=javascript
 *
 * [292] Nim Game
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
/*
60/60 cases passed (68 ms)
Your runtime beats 90.04 % of javascript submissions
Your memory usage beats 5.39 % of javascript submissions (39 MB)
*/
var canWinNim = function (n) {
  return n % 4 !== 0
}
// @lc code=end
