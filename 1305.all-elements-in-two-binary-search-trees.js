/*
 * @lc app=leetcode id=1305 lang=javascript
 *
 * [1305] All Elements in Two Binary Search Trees
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
/*
48/48 cases passed (336 ms)
Your runtime beats 13.79 % of javascript submissions
Your memory usage beats 24.71 % of javascript submissions (56.9 MB)
*/
var getAllElements = function (root1, root2) {
  const nums1 = []
  const nums2 = []
  const dfs = (node, arr) => {
    if (!node) return
    dfs(node.left, arr)
    arr.push(node.val)
    dfs(node.right, arr)
  }
  dfs(root1, nums1)
  dfs(root2, nums2)

  const ans = []
  let i1 = 0
  let i2 = 0
  while (i1 < nums1.length && i2 < nums2.length) {
    if (nums1[i1] < nums2[i2]) {
      ans.push(nums1[i1++])
    } else {
      ans.push(nums2[i2++])
    }
  }
  while (i1 < nums1.length) {
    ans.push(nums1[i1++])
  }
  while (i2 < nums2.length) {
    ans.push(nums2[i2++])
  }
  return ans
}
// @lc code=end
