/*
 * @lc app=leetcode id=695 lang=javascript
 *
 * [695] Max Area of Island
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
/*
728/728 cases passed (109 ms)
Your runtime beats 50.5 % of javascript submissions
Your memory usage beats 80.38 % of javascript submissions (40.9 MB)
*/
var maxAreaOfIsland = function (grid) {
  let maxArea = 0
  let area = 0

  const dfs = (row, col) => {
    if (grid[row][col] === 1) {
      grid[row][col] = 0
      ++area
      if (row + 1 < grid.length) dfs(row + 1, col)
      if (col + 1 < grid[0].length) dfs(row, col + 1)
      if (row - 1 >= 0) dfs(row - 1, col)
      if (col - 1 >= 0) dfs(row, col - 1)
    }
  }

  for (let r = 0; r < grid.length; ++r) {
    for (let c = 0; c < grid[0].length; ++c) {
      if (grid[r][c] === 1) {
        dfs(r, c)
        maxArea = Math.max(maxArea, area)
        area = 0
      }
    }
  }
  return maxArea
}
// @lc code=end
