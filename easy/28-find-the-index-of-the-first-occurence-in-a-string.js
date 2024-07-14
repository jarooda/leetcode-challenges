/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const nLength = needle.length

  if (haystack.length === nLength) {
    return haystack === needle ? 0 : -1
  }

  for (let i = 0; i < haystack.length - nLength + 1; i++) {
    if (haystack.slice(i, i+nLength) === needle) {
      return i
    }    
  }

  return -1
};

console.log(strStr("sadbutsad", "sad") === 0)
console.log(strStr("leetcode", "leeto") === -1)
console.log(strStr("a", "a") === 0)
console.log(strStr("asd", "asd") === 0)
console.log(strStr("abc", "c") === 2)