/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
306/306 cases passed (131 ms)
Your runtime beats 28.65 % of javascript submissions
Your memory usage beats 91.4 % of javascript submissions (40.9 MB)
*/
var orangesRotting = function (grid) {
  let freshCount = 0
  let rottenCount = 0
  let queue = []
  const M = grid.length
  const N = grid[0].length

  for (let row = 0; row < M; ++row) {
    for (let col = 0; col < N; ++col) {
      if (grid[row][col] === 1) {
        ++freshCount
      } else if (grid[row][col] === 2) {
        ++rottenCount
        queue.push([row, col])
      }
    }
  }

  if (freshCount === 0) return 0
  if (rottenCount === 0) return -1

  let day = 1
  const DAY_FLAG = 999
  queue.push(DAY_FLAG)
  let prevFreshCount = freshCount

  while (true) {
    const next = queue.shift()
    if (next === DAY_FLAG) {
      if (prevFreshCount === freshCount) {
        return -1
      } else {
        prevFreshCount = freshCount
        ++day
        queue.push(DAY_FLAG)
      }
    } else {
      const [row, col] = next
      if (row > 0 && grid[row - 1][col] === 1) {
        if (--freshCount === 0) return day
        queue.push([row - 1, col])
        grid[row - 1][col] = 2
      }
      if (col > 0 && grid[row][col - 1] === 1) {
        if (--freshCount === 0) return day
        queue.push([row, col - 1])
        grid[row][col - 1] = 2
      }
      if (row < M - 1 && grid[row + 1][col] === 1) {
        if (--freshCount === 0) return day
        queue.push([row + 1, col])
        grid[row + 1][col] = 2
      }
      if (col < N - 1 && grid[row][col + 1] === 1) {
        if (--freshCount === 0) return day
        queue.push([row, col + 1])
        grid[row][col + 1] = 2
      }
    }
  }
}
// @lc code=end
