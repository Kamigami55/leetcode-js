/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
/*
277/277 cases passed (126 ms)
Your runtime beats 27.7 % of javascript submissions
Your memory usage beats 88.17 % of javascript submissions (40.9 MB)
*/
var floodFill = function (image, sr, sc, newColor) {
  const oldColor = image[sr][sc]
  if (oldColor === newColor) return image
  const lenRow = image.length
  const lenCol = image[0].length
  const DIR = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]
  const queue = []
  let pixel = [sr, sc]
  image[sr][sc] = newColor
  while (pixel) {
    DIR.forEach((dir) => {
      const row = pixel[0] + dir[0]
      const col = pixel[1] + dir[1]
      if (row < 0 || row >= lenRow || col < 0 || col >= lenCol) return
      if (image[row][col] === oldColor) {
        queue.push([row, col])
        image[row][col] = newColor
      }
    })
    pixel = queue.pop()
  }
  return image
}
// @lc code=end
