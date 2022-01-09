/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0
  let right = height.length - 1
  let ans = (right - left) * Math.min(height[left], height[right])
  let prevLeftVal = height[left]
  let prevRightVal = height[right]
  while (left !== right) {
    if (height[left] <= height[right]) {
      ++left
      if (height[left] > prevLeftVal) {
        prevLeftVal = height[left]
        ans = Math.max(ans, (right - left) * Math.min(height[left], height[right]))
      }
    } else {
      --right
      if (height[right] > prevRightVal) {
        prevRightVal = height[right]
        ans = Math.max(ans, (right - left) * Math.min(height[left], height[right]))
      }
    }
  }
  return ans
}
// @lc code=end
