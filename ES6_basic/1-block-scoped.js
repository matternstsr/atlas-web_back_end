export default function taskBlock(trueOrFalse) {
  const task = false; // cant use let
  const task2 = true; // cant use let

  if (trueOrFalse) {
    const task = true; // cant use let
    const task2 = false; // cant use let
  }

  return [task, task2];
}
