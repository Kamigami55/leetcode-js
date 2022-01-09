/*
 * @lc app=leetcode id=1041 lang=javascript
 *
 * [1041] Robot Bounded In Circle
 */

// @lc code=start

/**
 * @param {string} instructions
 * @return {boolean}
 */

/*
  116/116 cases passed (75 ms)
  Your runtime beats 65.03 % of javascript submissions
  Your memory usage beats 89.12 % of javascript submissions (38.7 MB)
  */

var isRobotBounded = function (instructions) {
  const directions = [
    [0, 1], // N (x,y) replacement
    [1, 0], // E (x,y) replacement
    [0, -1], // S (x,y) replacement
    [-1, 0], // W (x,y) replacement
  ]
  let x = 0
  let y = 0
  let direction = 0 // N:0, E:1, S:2, W:3
  instructions.split('').forEach((ins) => {
    switch (ins) {
      case 'G':
        x += directions[direction][0]
        y += directions[direction][1]
        break
      case 'L':
        direction = (direction + 3) % 4
        break
      case 'R':
        direction = (direction + 1) % 4
        break
    }
  })

  if (direction === 0 && (x !== 0 || y !== 0)) return false
  return true
}

/*
  My Initial solution
  116/116 cases passed (112 ms)
  Your runtime beats 16.84 % of javascript submissions
  Your memory usage beats 79.53 % of javascript submissions (38.9 MB)
 */
// var isRobotBounded = function (instructions) {
//   let x = 0
//   let y = 0
//   let direction = 'n' // nesw
//   instructions.split('').forEach((ins) => {
//     switch (ins) {
//       case 'G':
//         switch (direction) {
//           case 'n':
//             ++y
//             break
//           case 'e':
//             ++x
//             break
//           case 's':
//             --y
//             break
//           case 'w':
//             --x
//             break
//         }
//         break
//       case 'L':
//         switch (direction) {
//           case 'n':
//             direction = 'w'
//             break
//           case 'e':
//             direction = 'n'
//             break
//           case 's':
//             direction = 'e'
//             break
//           case 'w':
//             direction = 's'
//             break
//         }
//         break
//       case 'R':
//         switch (direction) {
//           case 'n':
//             direction = 'e'
//             break
//           case 'e':
//             direction = 's'
//             break
//           case 's':
//             direction = 'w'
//             break
//           case 'w':
//             direction = 'n'
//             break
//         }
//         break
//     }
//   })

//   if (direction === 'n' && (x !== 0 || y !== 0)) return false
//   return true
// }
// @lc code=end
