export default function taskBlock(trueOrFalse) {
  // eslint-disable-next-line no-unused-vars
  const task = false; // cant use let
  const task2 = true; // cant use let

  if (trueOrFalse) {
    // eslint-disable-next-line no-unused-vars
    const task = true; // cant use let
    const task2 = false; // cant use let
  }

  return [task, task2];
}
