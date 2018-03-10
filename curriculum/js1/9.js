/**
 * Find next multiple of 7: returns the next number that is divisible by 7
 * @param {number} a
 * @returns {number}
 */

const solution = (a, multipleOf7 = a + 1) => {
  if (multipleOf7 % 7 === 0) return multipleOf7;
  return solution(a, multipleOf7 + 1);
};

module.exports = {
  solution,
};
