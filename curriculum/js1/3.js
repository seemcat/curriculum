/**
 * Say Hello - takes in a number x
 *     return string with “hello” repeated x times.
 * @param {number} a
 * @returns {string}
 */

const solution = (num, str = '', i = 0) => {
  if (i == num) return str;
  return solution(num, str = 'hello' + str, i + 1);
};

module.exports = {
  solution,
};
