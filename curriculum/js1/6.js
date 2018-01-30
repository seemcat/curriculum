/**
 * getDivisors - takes in a number and returns sum
 *   of all the divisors (except 1 or itself)
 * @param {number} a
 * @returns {number}
 */

const solution = (num, sum = 0, i = 2) => {
  if (num == i) return sum;
  if (num == 1) return 0;
  if (num % i == 0) sum = i + sum;
  return solution(num, sum, i + 1);
};

module.exports = {
  solution,
};
