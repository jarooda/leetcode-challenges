/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let result = 0
  for (let i = 0; i < s.length; i++) {
    if (dictionary[s[i]] < dictionary[s[i + 1]]) {
      result -= dictionary[s[i]]
    } else {
      result += dictionary[s[i]]
    }
  }
  return result
}

console.log(romanToInt("III")) // 3
console.log(romanToInt("IV")) // 4
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 1994
