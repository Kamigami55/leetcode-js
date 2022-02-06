/*
 * @lc app=leetcode id=80 lang=javascript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
164/164 cases passed (97 ms)
Your runtime beats 57.28 % of javascript submissions
Your memory usage beats 5.44 % of javascript submissions (44.4 MB)
*/
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length
  let pt = 0
  let curNum = -999999
  let curCount = 0
  for (let num of nums) {
    if (num !== curNum) {
      curNum = num
      curCount = 1
    } else {
      ++curCount
    }
    if (curCount <= 2) {
      nums[pt++] = num
    }
  }
  return pt
}
// @lc code=end
