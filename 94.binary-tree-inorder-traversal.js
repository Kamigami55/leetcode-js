/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
70/70 cases passed (128 ms)
Your runtime beats 8.1 % of javascript submissions
Your memory usage beats 88.52 % of javascript submissions (38.5 MB)
*/
var inorderTraversal = function (root) {
  const ans = []
  const visit = (node) => {
    if (!node) return
    visit(node.left)
    ans.push(node.val)
    visit(node.right)
  }
  visit(root)
  return ans
}
// @lc code=end
