/*
 * @lc app=leetcode id=1064 lang=javascript
 *
 * [1064] Fixed Point
 */

// @lc code=start

/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function (arr) {
  let i = 0
  while (i < arr.length) {
    if (arr[i] === i) return i
    i = Math.max(i + 1, arr[i] + 1)
  }
  return -1
}
// @lc code=end
