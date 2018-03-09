/**
 * Greatest Common Divisor - returns greatest common divisor 
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */

const solution = (a, b, counter = 1, gcd) => {
  if (a < counter || b < counter) return gcd;
  if (a % counter === 0 && b % counter === 0) gcd = counter;
  return solution(a, b, counter + 1, gcd);
};

module.exports = {
  solution,
};
