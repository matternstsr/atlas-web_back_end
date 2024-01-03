export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // Using let to create a block-scoped variable
    let task2 = false; // Using let to create a block-scoped variable
  }

  return [task, task2];
}

