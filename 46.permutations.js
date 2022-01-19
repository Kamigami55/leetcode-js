/*
 * @lc app=leetcode id=46 lang=javascript
 *
 * [46] Permutations
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/*
26/26 cases passed (123 ms)
Your runtime beats 35.78 % of javascript submissions
Your memory usage beats 11.93 % of javascript submissions (43.6 MB)
*/
var permute = function (nums) {
  let ans = []
  function backtrack(curr, remain) {
    if (remain.length === 0) {
      ans.push(curr)
    } else {
      for (let num of remain) {
        backtrack(
          [...curr, num],
          remain.filter((val) => val !== num)
        )
      }
    }
  }
  backtrack([], nums)
  return ans
}
// @lc code=end
