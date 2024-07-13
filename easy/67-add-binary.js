/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const binToDec = (bin) => {
  let result = 0n
  const bins = bin.split("").reverse()
  for (let i = 0; i < bins.length; i++) {
    const e = BigInt(bins[i])

    if (e !== 0n) {
      const x = 2n ** BigInt(i)
      result += x
    }
  }
  return result
}

const decToBin = (dec) => {
  if (dec === 0n) return "0"
  let result = ""
  let copyDec = dec
  while (copyDec >= 1) {
    if (copyDec % 2n === 0n) {
      result = `${0}${result}`
    } else {
      result = `${1}${result}`
    }

    copyDec = copyDec = copyDec / 2n
  }

  return result
}

var addBinary = function (a, b) {
  const first = binToDec(a)
  // const first = parseInt(a, 2)
  const second = binToDec(b)
  // const second = parseInt(b, 2)

  const total = BigInt(first + second)

  return decToBin(total)
}

console.log(addBinary("11", "1") === "100")
console.log(addBinary("1010", "1011") === "10101")
console.log(
  addBinary(
    "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
    "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  ) ===
    "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
)
