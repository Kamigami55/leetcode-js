/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/*
  29/29 cases passed (131 ms)
  Your runtime beats 20.67 % of javascript submissions
  Your memory usage beats 94.38 % of javascript submissions (44.7 MB)
*/
var reverseWords = function (s) {
  return s
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ')
}
// @lc code=end
