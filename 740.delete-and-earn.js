/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=740 lang=javascript
 *
 * [740] Delete and Earn
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
48/48 cases passed (183 ms)
Your runtime beats 5.01 % of javascript submissions
Your memory usage beats 18.79 % of javascript submissions (43.1 MB)
*/
var deleteAndEarn = function (nums) {
  let hm = new Map()
  for (let num of nums) {
    if (hm.has(num)) {
      hm.set(num, hm.get(num) + num)
    } else {
      hm.set(num, num)
    }
  }

  let arr = [...hm].sort(([key1, val1], [key2, val2]) => key1 - key2)

  if (arr.length === 0) return arr[0][1]

  let prev = 0
  let curr = arr[0][1]
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i][0] - arr[i - 1][0] === 1) {
      // adjacent to the previous key
      ;[prev, curr] = [curr, Math.max(curr, prev + arr[i][1])]
    } else {
      ;[prev, curr] = [curr, curr + arr[i][1]]
    }
  }
  return curr
}
// @lc code=end
