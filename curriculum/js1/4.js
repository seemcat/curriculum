/**
 * Print String - takes in a number n and string,
 *     return the string repeated n number of times.
 * @param {number} a
 * @param {string} b
 * @returns {string}
 */

const solution = (num, str, finalStr = '', i = 0) => {
  if (i == num) return finalStr;
  return solution(num, str, finalStr = str + finalStr, i + 1);
};

module.exports = {
  solution,
};
