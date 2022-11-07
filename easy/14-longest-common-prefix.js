/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let prefix = ''
  if (strs.length === 0) return prefix
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    if (i === 0) {
      prefix = str
    }
    if (!str.startsWith(prefix)) {
      while (prefix && !str.startsWith(prefix)) {
        prefix = prefix.slice(0, -1)
      }
    }
  }

  return prefix
}

console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
console.log(longestCommonPrefix(["c","acc","ccc"])) // ""
