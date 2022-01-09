/*
 * @lc app=leetcode id=975 lang=javascript
 *
 * [975] Odd Even Jump
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var oddEvenJumps = function (arr) {
  const oddJumpTargets = new Array(arr.length).fill(null)
  const evenJumpTargets = new Array(arr.length).fill(null)
  let goodCount = 0
  for (let startingIndex = 0; startingIndex < arr.length; ++startingIndex) {
    let isOdd = true
    let currentIndex = startingIndex
    while (currentIndex < arr.length - 1) {
      if (isOdd) {
        if (oddJumpTargets[currentIndex] === null) {
          oddJumpTargets[currentIndex] = findJumpTargetIndex(arr, currentIndex, true)
        }
        if (oddJumpTargets[currentIndex] === -1) break
        currentIndex = oddJumpTargets[currentIndex]
      } else {
        if (evenJumpTargets[currentIndex] === null) {
          evenJumpTargets[currentIndex] = findJumpTargetIndex(arr, currentIndex, false)
        }
        if (evenJumpTargets[currentIndex] === -1) break
        currentIndex = evenJumpTargets[currentIndex]
      }
      isOdd = !isOdd
    }
    if (currentIndex === arr.length - 1) ++goodCount
  }
  return goodCount

  // let goodCount = 0;
  // for (let startingIndex = 0; startingIndex < arr.length; ++startingIndex) {
  //   let isOdd = true;
  //   let indexFrom = startingIndex;
  //   // let numberFrom = arr[indexFrom];
  //   let indexTarget = indexFrom + 1;
  //   let numberTarget = null;
  //   // for (let fromIndex = startingIndex + 1; j < arr.length; ++j) {
  //   while (indexTarget < arr.length - 1)  {
  //     if (arr[indexTarget] === arr[indexFrom]) {
  //       indexFrom = indexTarget;
  //       indexTarget = indexFrom + 1;
  //       continue;
  //     }
  //     if (isOdd) {
  //       // jump to smallest larger or equal value
  //       if (arr[indexTarget] < arr[indexFrom]) {
  //         ++indexTarget;
  //         continue;
  //       }
  //       if (numberTarget === null) {
  //         numberTarget = arr[indexTarget];
  //         ++indexTarget;
  //         continue;
  //       }
  //       if (arr[indexTarget])
  //     } else {
  //       // jump to largest smaller or equal value
  //     }
  //   }
  //   if (indexFrom === arr.length - 1) {
  //     goodCount++;
  //   }
  // }
}

function findJumpTargetIndex(arr, start, isOdd) {
  const length = arr.length
  let candidateIndex = -1
  for (let i = start + 1; i < length; ++i) {
    if (arr[i] === arr[start]) return i
    if (isOdd && arr[i] < arr[start]) continue
    if (!isOdd && arr[i] > arr[start]) continue
    if (candidateIndex === -1) {
      candidateIndex = i
      continue
    }
    if (isOdd && arr[i] >= arr[candidateIndex]) continue
    if (!isOdd && arr[i] <= arr[candidateIndex]) continue
    candidateIndex = i
  }
  return candidateIndex
}
// @lc code=end
