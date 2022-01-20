/*
 * @lc app=leetcode id=232 lang=javascript
 *
 * [232] Implement Queue using Stacks
 */

// @lc code=start

/*
21/21 cases passed (60 ms)
Your runtime beats 99.53 % of javascript submissions
Your memory usage beats 50.43 % of javascript submissions (38.4 MB)
*/

var MyQueue = function () {
  this.queueForPush = []
  this.queueForPop = []
}

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  while (this.queueForPop.length) {
    this.queueForPush.push(this.queueForPop.pop())
  }
  this.queueForPush.push(x)
}

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while (this.queueForPush.length) {
    this.queueForPop.push(this.queueForPush.pop())
  }
  return this.queueForPop.pop()
}

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  while (this.queueForPush.length) {
    this.queueForPop.push(this.queueForPush.pop())
  }
  return this.queueForPop.length ? this.queueForPop[this.queueForPop.length - 1] : null
}

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return !(this.queueForPop.length || this.queueForPush.length)
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
