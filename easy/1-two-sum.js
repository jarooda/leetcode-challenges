const twosum = (nums, target) => {
  let index = 0
  let sum = null
  let values = []
  while (target !== sum) {
    const firstNum = nums[index]
    for (let i = index + 1; i < nums.length; i++) {
      const element = nums[i]
      if (firstNum + element === target) {
        sum = firstNum + element
        values.push(index, i)
      }
    }
    index++
  }
  return values
}

console.log(twosum([3,2,4], 6))
console.log(twosum([3,3], 6))