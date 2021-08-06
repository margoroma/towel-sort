module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length  == 0) return [];
  
  else {
    for (i = 1; i < matrix.length; i += 2) {
      matrix[i] = matrix[i].reverse();
    }
  }
  return matrix.flat();
}