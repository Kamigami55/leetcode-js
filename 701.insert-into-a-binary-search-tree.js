/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=701 lang=javascript
 *
 * [701] Insert into a Binary Search Tree
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
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
/*
  35/35 cases passed (130 ms)
  Your runtime beats 49.02 % of javascript submissions
  Your memory usage beats 30.02 % of javascript submissions (50.3 MB)
 */
var insertIntoBST = function (root, val) {
  if (!root) {
    root = new TreeNode(val)
    return root
  }
  let node = root
  while (true) {
    if (val > node.val) {
      if (node.right) {
        node = node.right
      } else {
        node.right = new TreeNode(val)
        return root
      }
    } else {
      if (node.left) {
        node = node.left
      } else {
        node.left = new TreeNode(val)
        return root
      }
    }
  }
}
// @lc code=end
