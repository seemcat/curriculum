/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, num = a + 1) => {
  if (num % 7 === 0) return num;
  return solution(a, num + 1);
};

module.exports = {
  solution,
};
