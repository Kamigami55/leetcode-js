/*
 * @lc app=leetcode id=941 lang=javascript
 *
 * [941] Valid Mountain Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
/*
53/53 cases passed (106 ms)
Your runtime beats 37.92 % of javascript submissions
Your memory usage beats 76.26 % of javascript submissions (41.6 MB)
*/
var validMountainArray = function (arr) {
  if (arr.length < 3) return false
  if (arr[0] >= arr[1]) return false
  let increasing = true
  for (let i = 2; i < arr.length; ++i) {
    if (arr[i - 1] === arr[i]) return false
    if (increasing) {
      if (arr[i] < arr[i - 1]) increasing = false
    } else {
      if (arr[i] > arr[i - 1]) return false
    }
  }
  return !increasing
}
// @lc code=end
