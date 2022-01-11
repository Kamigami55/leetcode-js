/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/*
  19/19 cases passed (150 ms)
  Your runtime beats 23.2 % of javascript submissions
  Your memory usage beats 74.09 % of javascript submissions (39.1 MB)
*/
var twoSum = function (numbers, target) {
  let left = 0
  let right = numbers.length - 1
  while (true) {
    const sum = numbers[left] + numbers[right]
    if (sum === target) {
      return [left + 1, right + 1]
    } else if (sum > target) {
      --right
    } else {
      ++left
    }
  }
}
// @lc code=end
