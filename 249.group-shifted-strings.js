/*
 * @lc app=leetcode id=249 lang=javascript
 *
 * [249] Group Shifted Strings
 */

// @lc code=start
/**
 * @param {string[]} strings
 * @return {string[][]}
 */
/*
23/23 cases passed (60 ms)
Your runtime beats 100 % of javascript submissions
Your memory usage beats 14.65 % of javascript submissions (44.1 MB)
*/
var groupStrings = function (strings) {
  const hm = new Map()
  for (let str of strings) {
    const dist = str.charCodeAt(0) - 'a'.charCodeAt(0)
    const unifiedStr = String.fromCharCode(
      ...str
        .split('')
        .map(
          (char) => ((char.charCodeAt(0) - 'a'.charCodeAt(0) - dist + 26) % 26) + 'a'.charCodeAt(0)
        )
    )
    if (hm.has(unifiedStr)) {
      hm.get(unifiedStr).push(str)
    } else {
      hm.set(unifiedStr, [str])
    }
  }
  return [...hm.values()]
}

// @lc code=end
