/**
 * @param {number} length
 * @param {number} width
 * @param {number} height
 * @param {number} mass
 * @return {string}
 */
var categorizeBox = function(length, width, height, mass) {
    const l = BigInt(length)
    const w = BigInt(width)
    const h = BigInt(height)
    const m = BigInt(mass)
    const volume = l * w * h
    const maxDimension = 10n ** 4n
    const maxVolume = 10n ** 9n
    const isOverVolume = volume >= maxVolume
    const isHeavy = m >= 100n
    let isOverDimension = false

    if (l >= maxDimension || w >= maxDimension || h >= maxDimension) {
      isOverDimension = true
    }

    if ((isOverDimension || isOverVolume) && isHeavy) {
      return 'Both'
    }
    if (isOverDimension || isOverVolume) {
      return 'Bulky'
    }
    if (isHeavy) {
      return 'Heavy'
    }
    return 'Neither'
};

console.log(categorizeBox(1000, 35, 700, 300) === "Heavy")
console.log(categorizeBox(200, 50, 800, 50) === "Neither")