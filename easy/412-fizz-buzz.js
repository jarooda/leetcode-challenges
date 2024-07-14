/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const results = []
    for (let i = 1; i <= n; i++) {
      let element = i
      if (i % 3 === 0) {
        if (typeof element === 'number') {
          element = ''
        }
        element += 'Fizz'
      }
      if (i % 5 === 0) {
        if (typeof element === 'number') {
          element = ''
        }
        element += 'Buzz'
      }
      results.push(String(element))
    }
    return results
};

console.log(fizzBuzz(3)) // ["1","2","Fizz"]
console.log(fizzBuzz(5)) // ["1","2","Fizz","4","Buzz"]
console.log(fizzBuzz(15)) // ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]