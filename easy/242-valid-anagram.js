const isAnagram = (s, t) => {
  const wordList = {}
  const targetList = {}

  for (let i = 0; i < s.length; i++) {
    const word = s[i]
    if (!wordList[word]) {
      wordList[word] = 1
    } else {
      wordList[word]++
    }
  }
  
  for (let i = 0; i < t.length; i++) {
    const target = t[i];
    if (!targetList[target]) {
      targetList[target] = 1
    } else {
      targetList[target]++
    }
  }

  if (Object.entries(wordList).length !== Object.entries(targetList).length) {
    return false
  }

  for (const alphabet in wordList) {
    if (wordList[alphabet] !== targetList[alphabet]) {
      return false
    }
  }
  return true
}

console.log(isAnagram('anagram', 'nagaram'))
console.log(isAnagram('rat', 'car'))