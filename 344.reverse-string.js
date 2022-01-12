/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/*
  477/477 cases passed (96 ms)
  Your runtime beats 96.21 % of javascript submissions
  Your memory usage beats 21.73 % of javascript submissions (46.3 MB)
*/
var reverseString = function (s) {
  let left = 0
  while (left < s.length / 2) {
    ;[s[left], s[s.length - left - 1]] = [s[s.length - left - 1], s[left]]
    ++left
  }
}
// @lc code=end
