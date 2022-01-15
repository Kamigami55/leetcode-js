/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=1345 lang=javascript
 *
 * [1345] Jump Game IV
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
/*
32/32 cases passed (476 ms)
Your runtime beats 45.95 % of javascript submissions
Your memory usage beats 81.08 % of javascript submissions (66.5 MB)
*/
var minJumps = function (arr) {
  if (arr.length === 1) return 0

  const ADD_DEPTH = 1000000000
  const VISITED = 1000000001
  const hm = new Map()
  for (let i = 0; i < arr.length; ++i) {
    if (hm.has(arr[i])) {
      hm.get(arr[i]).push(i)
    } else {
      hm.set(arr[i], [i])
    }
  }

  let ans = 1
  let queue = [0, ADD_DEPTH, arr.length - 1, ADD_DEPTH]
  let visited = new Array(arr.length)
  let mark = 1 // for begin marker, -1 for end marker
  visited[0] = mark
  visited[visited.length - 1] = -mark
  while (queue.length) {
    const idx = queue.shift()
    if (idx === ADD_DEPTH) {
      ++ans
      queue.push(ADD_DEPTH)
      mark = -mark
    } else {
      let nexts = []
      if (hm.has(arr[idx])) {
        nexts = hm.get(arr[idx])
        hm.delete(arr[idx])
      }
      if (idx < arr.length - 1) nexts.push(idx + 1)
      if (idx > 0) {
        nexts.push(idx - 1)
      }
      for (let next of nexts) {
        if (visited[next] === -mark) return ans
        if (visited[next] !== mark) {
          queue.push(next)
          visited[next] = mark
        }
      }
    }
  }
  return ans // should not goes here
}
// @lc code=end
