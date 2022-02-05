/*
 * @lc app=leetcode id=1101 lang=javascript
 *
 * [1101] The Earliest Moment When Everyone Become Friends
 */

// @lc code=start
/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
/*
67/67 cases passed (166 ms)
Your runtime beats 8.91 % of javascript submissions
Your memory usage beats 47.77 % of javascript submissions (44.7 MB)
*/
var earliestAcq = function (logs, n) {
  const belong = new Array(n)
  for (let i = 0; i < n; ++i) {
    belong[i] = i
  }

  const findRoot = (target) => {
    while (belong[target] !== target) {
      target = belong[target]
    }
    return target
  }

  logs = logs.sort((a, b) => a[0] - b[0])

  for (let log of logs) {
    const [time, a, b] = log

    const belongA = findRoot(a)
    const belongB = findRoot(b)
    if (belongA !== belongB) {
      // TODO can be optimized
      belong[belongA] = belongB
      --n
    }
    if (n === 1) return time
  }
  return -1
}
// @lc code=end
