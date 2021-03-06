/*
 * @lc app=leetcode id=849 lang=javascript
 *
 * [849] Maximize Distance to Closest Person
 */

// @lc code=start
/**
 * @param {number[]} seats
 * @return {number}
 */
/*
81/81 cases passed (109 ms)
Your runtime beats 36.22 % of javascript submissions
Your memory usage beats 65.31 % of javascript submissions (40.2 MB)
*/
var maxDistToClosest = function (seats) {
  // [1,0,0,0,1,0,1]
  let ans = 0
  let lastPerson = -1
  for (let i = 0; i < seats.length; ++i) {
    if (seats[i] === 0) continue
    if (lastPerson === -1) {
      // got first person from left
      lastPerson = i
      ans = i
      continue
    }
    ans = Math.max(Math.floor((i - lastPerson) / 2), ans)
    lastPerson = i
  }
  ans = Math.max(ans, seats.length - lastPerson - 1)
  return ans
}
// @lc code=end
