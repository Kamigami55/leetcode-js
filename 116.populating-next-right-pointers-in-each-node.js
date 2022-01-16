/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
/*
58/58 cases passed (125 ms)
Your runtime beats 37.31 % of javascript submissions
Your memory usage beats 92.78 % of javascript submissions (44.7 MB)
*/
var connect = function (root) {
  if (root && root.left) {
    let start = root.left
    let end = root.right
    while (start) {
      start.next = end
      start = start.right
      end = end.left
    }
    connect(root.left)
    connect(root.right)
  }
  return root
}
// @lc code=end
