/*
 * @lc app=leetcode id=258 lang=javascript
 *
 * [258] Add Digits
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
/*
1101/1101 cases passed (73 ms)
Your runtime beats 95.49 % of javascript submissions
Your memory usage beats 16.93 % of javascript submissions (43.8 MB)
*/
var addDigits = function (num) {
  return ((num - 1) % 9) + 1
}
// @lc code=end
