export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
	let i = 0;
    let value = idx;
    array[i] = appendString + value;
	i++;
  }

  return array;
}
