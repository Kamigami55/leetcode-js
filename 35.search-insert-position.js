/*
 * @lc app=leetcode id=35 lang=javascript
 *
 * [35] Search Insert Position
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*
  64/64 cases passed (147 ms)
  Your runtime beats 5.2 % of javascript submissions
  Your memory usage beats 45.47 % of javascript submissions (39.8 MB)
 */
var searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      return mid
    }
  }
  if (nums[left] >= target) {
    return left
  }
  return left + 1
}
// @lc code=end
