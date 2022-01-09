/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const filteredEmails = emails.map((email) => {
    const [localName, domainName] = email.split('@')
    const transformedLocalName = localName.split('+')[0].replace(/\./g, '')
    return transformedLocalName + '@' + domainName
  })
  const uniqueEmailSet = new Set(filteredEmails)
  return uniqueEmailSet.size
}
// @lc code=end
