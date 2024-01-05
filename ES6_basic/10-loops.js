export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value.push(appendString + value);
  }
  return array;
}
