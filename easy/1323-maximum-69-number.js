/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
  let numstring = num.toString()
  let newstring = numstring.replace('6', '9')
  return parseInt(newstring)
};

console.log(maximum69Number(9669)) // 9969
console.log(maximum69Number(9996)) // 9999
console.log(maximum69Number(9999)) // 9999
