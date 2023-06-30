/**
 * @param {array} array - array of strings.
 * @param {string} appendString - string to append to each item
 *                              in array.
 * @return {array} array with appendString append to each item
 *                              in the original array.
 */
export default function appendToEachArrayValue(array, appendString) {
  const ar = [];
  for (const idx of array) {
    const value = idx;
    ar.push(appendString + value);
  }

  return ar;
}
