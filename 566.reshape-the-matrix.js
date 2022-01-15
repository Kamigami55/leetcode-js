/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
/*
57/57 cases passed (140 ms)
Your runtime beats 26.5 % of javascript submissions
Your memory usage beats 54.03 % of javascript submissions (42.4 MB)
*/
var matrixReshape = function (mat, r, c) {
  const m = mat.length
  const n = mat[0].length
  if (m * n !== r * c) return mat
  let newMat = []
  for (let i = 0; i < m * n; ++i) {
    let oldR = Math.floor(i / n)
    let oldC = i % n
    let newR = Math.floor(i / c)
    let newC = i % c
    if (newC === 0) newMat.push([])
    newMat[newR].push(mat[oldR][oldC])
  }
  return newMat
}
// @lc code=end
