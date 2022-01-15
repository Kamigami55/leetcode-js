/*
 * @lc app=leetcode id=213 lang=javascript
 *
 * [213] House Robber II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
  75/75 cases passed (100 ms)
  Your runtime beats 24.95 % of javascript submissions
  Your memory usage beats 73.32 % of javascript submissions (38.5 MB)
*/
var rob = function (nums) {
  if (nums.length <= 3) return Math.max(...nums)

  const solve = (arr) => {
    const len = arr.length
    let profit = new Array(len)
    profit[0] = arr[0]
    profit[1] = Math.max(arr[0], arr[1])
    for (let i = 2; i < len; ++i) {
      profit[i] = Math.max(profit[i - 1], profit[i - 2] + arr[i])
    }
    return profit[len - 1]
  }

  const ans1 = solve(nums.slice(0, -1))
  const ans2 = solve(nums.slice(1))
  return Math.max(ans1, ans2)
}
// @lc code=end
