/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/*
  Your runtime beats 21.42 % of javascript submissions
  Your memory usage beats 24.94 % of javascript submissions (41.3 MB)
 */
var addBinary = function (a, b) {
  let pa = a.length - 1
  let pb = b.length - 1
  let carry = 0
  let ans = []
  while (pa >= 0 || pb >= 0) {
    const na = pa >= 0 ? parseInt(a[pa--]) : 0
    const nb = pb >= 0 ? parseInt(b[pb--]) : 0
    ans.push((na + nb + carry) % 2)
    carry = Math.floor((na + nb + carry) / 2)
  }
  if (carry) ans.push(1)
  return ans.reverse().join('')
}
// @lc code=end
