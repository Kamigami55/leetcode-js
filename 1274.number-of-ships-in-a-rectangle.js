/*
 * @lc app=leetcode id=1274 lang=javascript
 *
 * [1274] Number of Ships in a Rectangle
 */

// @lc code=start
/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
/*
59/59 cases passed (117 ms)
Your runtime beats 50 % of javascript submissions
Your memory usage beats 15.63 % of javascript submissions (45.1 MB)
*/
var countShips = function (sea, topRight, bottomLeft) {
  if (topRight[0] < bottomLeft[0] || topRight[1] < bottomLeft[1]) {
    return 0
  }
  if (topRight[0] === bottomLeft[0] && topRight[1] === bottomLeft[1]) {
    return sea.hasShips(topRight, bottomLeft) ? 1 : 0
  }
  if (!sea.hasShips(topRight, bottomLeft)) {
    return 0
  }
  const xMid = Math.floor((topRight[0] + bottomLeft[0]) / 2)
  const yMid = Math.floor((topRight[1] + bottomLeft[1]) / 2)
  const subRecs = [
    // 1st quadrant
    [topRight, [xMid + 1, yMid + 1]],
    // 2nd quadrant
    [
      [xMid, topRight[1]],
      [bottomLeft[0], yMid + 1],
    ],
    // 3rd quadrant
    [[xMid, yMid], bottomLeft],
    // 4th quadrant
    [
      [topRight[0], yMid],
      [xMid + 1, bottomLeft[1]],
    ],
  ]
  return (
    countShips(sea, subRecs[0][0], subRecs[0][1]) +
    countShips(sea, subRecs[1][0], subRecs[1][1]) +
    countShips(sea, subRecs[2][0], subRecs[2][1]) +
    countShips(sea, subRecs[3][0], subRecs[3][1])
  )
}
// @lc code=end
