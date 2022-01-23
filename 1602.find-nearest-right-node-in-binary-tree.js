/*
 * @lc app=leetcode id=1602 lang=javascript
 *
 * [1602] Find Nearest Right Node in Binary Tree
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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
/*
76/76 cases passed (264 ms)
Your runtime beats 55.26 % of javascript submissions
Your memory usage beats 28.95 % of javascript submissions (83.5 MB)
*/
var findNearestRightNode = function (root, u) {
  const queue = []
  let found = false
  const LEVEL = 9999
  queue.push(root)
  queue.push(LEVEL)
  while (queue.length) {
    const node = queue.shift()
    if (found) {
      return node === LEVEL ? null : node
    } else if (node === LEVEL) {
      queue.push(LEVEL)
    } else if (node === u) {
      found = true
    } else {
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return null
}
// @lc code=end
