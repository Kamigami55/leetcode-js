/*
 * @lc app=leetcode id=662 lang=javascript
 *
 * [662] Maximum Width of Binary Tree
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
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  const LEVEL = 999
  const queue = []
  if (!root) return 0
  let ans = 1
  let leftMost = null
  let rightMost = null
  root.val = '1'
  queue.push(root)
  queue.push(LEVEL)
  while (queue.length) {
    const node = queue.shift()
    if (node === LEVEL) {
      if (queue.length) {
        queue.push(LEVEL)
        const length = Number(BigInt('0b' + rightMost) - BigInt('0b' + leftMost) + 1n)
        ans = Math.max(ans, length)
        leftMost = null
        rightMost = null
      }
    } else {
      if (node.left) {
        const val = node.val + '0'
        node.left.val = val
        if (!leftMost || leftMost > val) {
          leftMost = val
        }
        if (!rightMost || rightMost < val) {
          rightMost = val
        }
        queue.push(node.left)
      }
      if (node.right) {
        const val = node.val + '1'
        node.right.val = val
        if (!leftMost || leftMost > val) {
          leftMost = val
        }
        if (!rightMost || rightMost < val) {
          rightMost = val
        }
        queue.push(node.right)
      }
    }
  }
  return ans
}
// @lc code=end
