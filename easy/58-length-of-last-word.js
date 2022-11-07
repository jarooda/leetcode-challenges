/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const words = s.split(' ')
  let lastWord = ''
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word) {
      lastWord = word
    }
  }
  return lastWord.length
};

console.log(lengthOfLastWord("Hello World")) // 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4
console.log(lengthOfLastWord("luffy is still joyboy")) // 6
