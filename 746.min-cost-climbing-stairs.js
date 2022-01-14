/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
/*
283/283 cases passed (113 ms)
Your runtime beats 26.29 % of javascript submissions
Your memory usage beats 79.91 % of javascript submissions (40.1 MB)
*/
var minCostClimbingStairs = function (cost) {
  let minCost = new Array(cost.length)
  minCost[0] = cost[0]
  minCost[1] = cost[1]
  for (let i = 2; i < cost.length; ++i) {
    minCost[i] = Math.min(minCost[i - 1], minCost[i - 2]) + cost[i]
  }
  return Math.min(minCost[minCost.length - 1], minCost[minCost.length - 2])
}
// @lc code=end
