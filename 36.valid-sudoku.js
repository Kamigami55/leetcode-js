/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
/*
507/507 cases passed (88 ms)
Your runtime beats 87.81 % of javascript submissions
Your memory usage beats 95.18 % of javascript submissions (41 MB)
*/
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; ++i) {
    let setForRow = new Set()
    let setForCol = new Set()
    let setForBox = new Set()
    for (let j = 0; j < 9; ++j) {
      let valRow = board[i][j]
      if (valRow !== '.' && setForRow.has(valRow)) return false
      setForRow.add(valRow)

      let valCol = board[j][i]
      if (valCol !== '.' && setForCol.has(valCol)) return false
      setForCol.add(valCol)

      let valBox = board[Math.floor(i / 3) * 3 + Math.floor(j / 3)][(i % 3) * 3 + (j % 3)]
      if (valBox !== '.' && setForBox.has(valBox)) return false
      setForBox.add(valBox)
    }
  }
  return true
}
// @lc code=end
