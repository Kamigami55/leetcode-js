/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
  137/137 cases passed (193 ms)
  Your runtime beats 17.92 % of javascript submissions
  Your memory usage beats 81.76 % of javascript submissions (45.7 MB)
*/

var sortedSquares = function (nums) {
  const ans = []
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      ans.push(nums[left++] ** 2)
    } else {
      ans.push(nums[right--] ** 2)
    }
  }
  return ans.reverse()
}
/*
  137/137 cases passed (178 ms)
  Your runtime beats 22.78 % of javascript submissions
  Your memory usage beats 8.02 % of javascript submissions (46.5 MB)
 */
// var sortedSquares = function (nums) {
//   nums = nums.map((num) => num ** 2)
//   const ans = []
//   let left = 0
//   let right = nums.length - 1
//   while (left <= right) {
//     if (nums[left] > nums[right]) {
//       ans.push(nums[left++])
//     } else {
//       ans.push(nums[right--])
//     }
//   }
//   return ans.reverse()
// }
// @lc code=end
