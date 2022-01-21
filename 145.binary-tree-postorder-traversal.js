/*
 * @lc app=leetcode id=145 lang=javascript
 *
 * [145] Binary Tree Postorder Traversal
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
68/68 cases passed (110 ms)
Your runtime beats 21.13 % of javascript submissions
Your memory usage beats 64.52 % of javascript submissions (38.8 MB)
*/
var postorderTraversal = function (root) {
  const ans = []
  const visit = (node) => {
    if (!node) return
    visit(node.left)
    visit(node.right)
    ans.push(node.val)
  }
  visit(root)
  return ans
}
// @lc code=end
