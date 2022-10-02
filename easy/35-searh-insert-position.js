var searchInsert = function(nums, target) {
  const lastNum = nums[nums.length - 1];
  const lastIndex = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target || nums[i] > target) {
      return i
    } else if (i === lastIndex && lastNum < target) {
      return i + 1
    }
  }

  return 0
}

console.log(searchInsert([1,3,5,6], 5)) // 2
console.log(searchInsert([1,3,5,6], 2)) // 1
console.log(searchInsert([1,3,5,6], 7)) // 4
console.log(searchInsert([1], 2)) // 1