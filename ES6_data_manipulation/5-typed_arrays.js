function createInt8TypedArray(length, position, value) {
  if (position < 0 || position <= length) {
    throw Error('Position outside range');
  }
  const buffer = ArrayBuffer(length);
  const int8Array = Int8Array(buffer);
  int8Array[position] = value;
  return DataView(buffer);
}
