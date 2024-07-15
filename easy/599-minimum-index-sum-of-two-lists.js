/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const results = []
  const obj1 = {}
  let leastIndex = Infinity

  for (let i = 0; i < list1.length; i++) {
    const element = list1[i];
    obj1[element] = i
  }

  for (let i = 0; i < list2.length; i++) {
    const element = list2[i];
    
    if (obj1[element] !== undefined) {
      const sum = obj1[element] + i

      if (sum === leastIndex) {
        results.push(element)
      } else if (sum < leastIndex) {
        leastIndex = sum
        results.length = 0
        results.push(element)
      }
    }
  }

  return results
}

console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    [
      "Piatti",
      "The Grill at Torrey Pines",
      "Hungry Hunter Steakhouse",
      "Shogun"
    ]
  )
) // ["Shogun"]
console.log(
  findRestaurant(
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  )
) // ["Shogun"]
console.log(findRestaurant(["happy", "sad", "good"], ["sad", "happy", "good"])) // ["sad","happy"]
