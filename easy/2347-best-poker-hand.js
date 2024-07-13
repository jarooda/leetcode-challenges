/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function (ranks, suits) {
  const combi = {
    rank: {},
    suit: {}
  }

  let mostRankCount = 1
  for (let i = 0; i < ranks.length; i++) {
    const rank = ranks[i]
    const suit = suits[i]

    if (combi.rank[rank]) {
      combi.rank[rank] = combi.rank[rank] + 1

      if (combi.rank[rank] > mostRankCount) {
        mostRankCount = combi.rank[rank]
      }
    } else {
      combi.rank[rank] = 1
    }

    if (combi.suit[suit]) {
      combi.suit[suit] = combi.suit[suit] + 1
    } else {
      combi.suit[suit] = 1
    }
  }

  if (
    combi.suit.a === 5 ||
    combi.suit.b === 5 ||
    combi.suit.c === 5 ||
    combi.suit.d === 5
  ) {
    return "Flush"
  }

  if (mostRankCount >= 3) {
    return "Three of a Kind"
  }

  if (mostRankCount === 2) {
    return "Pair"
  }

  return "High Card"
}

console.log(bestHand([13, 2, 3, 1, 9], ["a", "a", "a", "a", "a"]) === "Flush")
console.log(
  bestHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"]) === "Three of a Kind"
)
console.log(bestHand([10, 10, 2, 12, 9], ["a", "b", "c", "a", "d"]) === "Pair")
