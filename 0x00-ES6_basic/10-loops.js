/**
 * @param {array} array - array of strings.
 * @param {string} appendString - string to append to each item
 *                              in array.
 * @return {array} array with appendString append to each item
 *                              in the original array.
 */
export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    let i = 0;
    const value = idx;
    array[i] = appendString + value;
    i++;
  }

  return array;
}
