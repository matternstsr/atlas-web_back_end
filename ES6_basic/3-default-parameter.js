export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
// export default function getSumOfHoods(initialNumber, expansion1989, expansion2019) {
// used the nullish coalescing operator (??) along with default parameter values.
// ?? for parameters are null or undefined
// expansion1989 = expansion1989 ?? 89;
// expansion2019 = expansion2019 ?? 19;
// return initialNumber + expansion1989 + expansion2019;
// }