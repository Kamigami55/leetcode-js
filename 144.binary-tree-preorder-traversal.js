/*
 * @lc app=leetcode id=144 lang=javascript
 *
 * [144] Binary Tree Preorder Traversal
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
 * @return {number[]}
 */
/*
69/69 cases passed (104 ms)
Your runtime beats 29.95 % of javascript submissions
Your memory usage beats 15.99 % of javascript submissions (39.3 MB)
*/
var preorderTraversal = function (root) {
  if (!root) return []
  let ans = []
  ans.push(root.val)
  ans = ans.concat(preorderTraversal(root.left))
  ans = ans.concat(preorderTraversal(root.right))
  return ans
}
// @lc code=end
