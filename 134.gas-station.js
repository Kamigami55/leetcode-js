/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
/*
35/35 cases passed (108 ms)
Your runtime beats 47.54 % of javascript submissions
Your memory usage beats 60.87 % of javascript submissions (45.8 MB)
*/
var canCompleteCircuit = function (gas, cost) {
  let tank = 0
  let start = 0
  for (let i = 0; i < gas.length; ++i) {
    if (tank < 0) {
      tank = 0
      start = i
    }
    tank = tank + gas[i] - cost[i]
  }
  for (let i = 0; i <= start; ++i) {
    if (tank < 0) {
      return -1
    }
    tank = tank + gas[i] - cost[i]
  }
  return start
}
// @lc code=end
