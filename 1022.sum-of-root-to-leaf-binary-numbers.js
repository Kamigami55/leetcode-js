/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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
/*
  63/63 cases passed (144 ms)
  Your runtime beats 6.83 % of javascript submissions
  Your memory usage beats 75.12 % of javascript submissions (40.7 MB)
*/
var sumRootToLeaf = function (root) {
  return calcSum(root, 0)
}

function calcSum(node, prefix) {
  if (!node.left && !node.right) {
    return (prefix << 1) + node.val
  }
  let sum = 0
  if (node.left) sum += calcSum(node.left, (prefix << 1) + node.val)
  if (node.right) sum += calcSum(node.right, (prefix << 1) + node.val)
  return sum
}
// @lc code=end
