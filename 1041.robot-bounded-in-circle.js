/*
 * @lc app=leetcode id=1041 lang=javascript
 *
 * [1041] Robot Bounded In Circle
 */

// @lc code=start

/*
  116/116 cases passed (112 ms)
  Your runtime beats 16.84 % of javascript submissions
  Your memory usage beats 79.53 % of javascript submissions (38.9 MB)
 */

/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
  let x = 0
  let y = 0
  let direction = 'n' // nesw
  instructions.split('').forEach((ins) => {
    switch (ins) {
      case 'G':
        switch (direction) {
          case 'n':
            ++y
            break
          case 'e':
            ++x
            break
          case 's':
            --y
            break
          case 'w':
            --x
            break
        }
        break
      case 'L':
        switch (direction) {
          case 'n':
            direction = 'w'
            break
          case 'e':
            direction = 'n'
            break
          case 's':
            direction = 'e'
            break
          case 'w':
            direction = 's'
            break
        }
        break
      case 'R':
        switch (direction) {
          case 'n':
            direction = 'e'
            break
          case 'e':
            direction = 's'
            break
          case 's':
            direction = 'w'
            break
          case 'w':
            direction = 'n'
            break
        }
        break
    }
  })

  if (direction === 'n' && (x !== 0 || y !== 0)) return false
  return true
}
// @lc code=end
