/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
/*
61/61 cases passed (193 ms)
Your runtime beats 42.44 % of javascript submissions
Your memory usage beats 9.9 % of javascript submissions (48.9 MB)
*/
var findAnagrams = function (s, p) {
  if (p.length > s.length) return []

  const ht = new Map()
  for (let letter of p) {
    if (ht.has(letter)) {
      ht.set(letter, ht.get(letter) + 1)
    } else {
      ht.set(letter, 1)
    }
  }

  for (let i = 0; i < p.length; ++i) {
    const letter = s[i]
    if (ht.has(letter)) {
      ht.set(letter, ht.get(letter) - 1)
    } else {
      ht.set(letter, -1)
    }
  }

  const ans = []
  for (let i = 0; i <= s.length - p.length; ++i) {
    if ([...ht.values()].every((count) => count === 0)) {
      ans.push(i)
    }

    if (i === s.length - p.length) break

    const letterL = s[i]
    ht.set(letterL, ht.get(letterL) + 1)

    const letterR = s[i + p.length]
    if (ht.has(letterR)) {
      ht.set(letterR, ht.get(letterR) - 1)
    } else {
      ht.set(letterR, -1)
    }
  }

  return ans
}
// @lc code=end
