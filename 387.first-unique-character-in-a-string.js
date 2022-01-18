/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/*
104/104 cases passed (88 ms)
Your runtime beats 97.64 % of javascript submissions
Your memory usage beats 55.43 % of javascript submissions (42.3 MB)
*/
var firstUniqChar = function (s) {
  const INITIAL = 200000
  const REPEATED = 300000
  const chars = new Array(26).fill(INITIAL)
  for (let i = 0; i < s.length; ++i) {
    const index = s.charCodeAt(i) - 'a'.charCodeAt(0)
    if (chars[index] === INITIAL) {
      chars[index] = i
    } else {
      chars[index] = REPEATED
    }
  }
  const ans = Math.min(...chars)
  return ans > 100000 ? -1 : ans
}
// @lc code=end
