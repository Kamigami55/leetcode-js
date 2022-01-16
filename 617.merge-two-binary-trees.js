/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @return {TreeNode}
 */
/*
182/182 cases passed (265 ms)
Your runtime beats 5.04 % of javascript submissions
Your memory usage beats 49.24 % of javascript submissions (46.7 MB)
*/
var mergeTrees = function (root1, root2) {
  if (root2) {
    if (!root1) return root2 // only for [],[1] case
    root1.val += root2.val
    if (root2.left && !root1.left) {
      root1.left = new TreeNode()
    }
    mergeTrees(root1.left, root2.left)
    if (root2.right && !root1.right) {
      root1.right = new TreeNode()
    }
    mergeTrees(root1.right, root2.right)
  }
  return root1
}
// @lc code=end
