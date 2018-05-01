/**
 * Given an array, return array of the same length where
 *   all elements <= 5 is changed to 0
 * @param {array} a
 * @returns {array}
 */

const solution = (arr, newArr = [], i = 0) => {
  if (arr.length === i) return newArr;
  if (arr[i] <= 5) newArr.push(0);
  else newArr.push(arr[i]);
  return solution(arr, newArr, i + 1);
};

module.exports = {
  solution,
};
