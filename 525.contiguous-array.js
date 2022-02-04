/*
 * @lc app=leetcode id=525 lang=javascript
 *
 * [525] Contiguous Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
564/564 cases passed (142 ms)
Your runtime beats 76.97 % of javascript submissions
Your memory usage beats 25 % of javascript submissions (50 MB)
*/
var findMaxLength = function (nums) {
  const hm = new Map()
  hm.set(0, -1)
  let max = 0
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1
    if (hm.has(sum)) {
      max = Math.max(max, i - hm.get(sum))
    } else {
      hm.set(sum, i)
    }
  }
  return max
}
// @lc code=end
