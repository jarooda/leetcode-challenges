/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i]

    for (let j = i; j < element.length; j++) {
      const a = matrix[i][j]
      const b = matrix[j][i]

      matrix[i][j] = b
      matrix[j][i] = a
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    const element = matrix[i]

    for (let j = 0; j < Math.ceil(element.length / 2); j++) {
      const a = matrix[i][j]
      const b = matrix[i][element.length - 1 - j]

      matrix[i][j] = b
      matrix[i][element.length - 1 - j] = a
    }
  }

  console.log(matrix);
}

rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
]) // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]) // [[7,4,1],[8,5,2],[9,6,3]]
