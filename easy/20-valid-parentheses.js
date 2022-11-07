/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) return false
  const openBrackets = ['(', '[', '{']
  const closeBrackets = [')', ']', '}']
  const bracket = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  const pairs = []
  let isBracketValid = true
  for (let i = 0; i < s.length; i++) {
    const e = s[i]
    if (openBrackets.includes(e)) {
      pairs.push(e)
    }
    if (closeBrackets.includes(e)) {
      const last = pairs.pop()
      if (last !== bracket[e]) {
        isBracketValid = false
      }
    }
  }
  if (pairs.length > 0) {
    isBracketValid = false
  }
  return isBracketValid
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("{[]}")); // true