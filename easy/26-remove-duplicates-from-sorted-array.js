/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let unique = {}
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    if (!unique[element]) {
      unique[element] = true
    } else {
      nums.splice(i, 1)
      i--
    }
  }
  return Object.keys(unique).length
}

console.log(removeDuplicates([1,1,2])) // 2, nums = [1,2,_]
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5, nums = [0,1,2,3,4,_,_,_,_,_]