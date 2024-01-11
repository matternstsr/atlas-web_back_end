export default function divideFunction(numerator, denominator) {
  return denominator === 0 ? 
    (() => { throw Error('cannot divide by 0'); })() : 
    numerator / denominator;
}