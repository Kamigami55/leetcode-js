/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
  38/38 cases passed (179 ms)
  Your runtime beats 14.33 % of javascript submissions
  Your memory usage beats 41.56 % of javascript submissions (49.1 MB)
*/

var rotate = function (nums, k) {
  const len = nums.length
  k = k % len
  if (k === len) return nums
  let swapTime = len
  let pivot = 0
  let iter = 0
  let nextIter
  while (swapTime--) {
    nextIter = (iter - k + len) % len
    if (nextIter === pivot) {
      ++pivot
      iter = pivot
      continue
    }
    ;[nums[iter], nums[nextIter]] = [nums[nextIter], nums[iter]]
    iter = nextIter
  }
}
// @lc code=end
