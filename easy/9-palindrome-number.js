const isPalindrome = (num) => {
  const stringNum = String(num)
  const stringLength = stringNum.length % 2 === 0 ? stringNum.length : stringNum.length - 1
  let isSame = true

  for (let i = 0; i < stringLength; i++) {
    if (stringNum[i] !== stringNum[stringNum.length - 1 - i]) {
      isSame = false
    }
  }

  return isSame
}

console.log(isPalindrome(121))
console.log(isPalindrome(12))
console.log(isPalindrome(-121))