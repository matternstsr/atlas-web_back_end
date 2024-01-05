export default class HolbertonCourse {
  constructor(name, length, students) {
    this.validateAndSetString(name, 'Name');
    this.validateAndSetNumber(length, 'Length');
    this.validateAndSetStudentsArray(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this.validateAndSetString(newName, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this.validateAndSetNumber(newLength, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this.validateAndSetStudentsArray(newStudents);
  }

  validateAndSetString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    this[`_${attribute.toLowerCase()}`] = value;
  }

  validateAndSetNumber(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    this[`_${attribute.toLowerCase()}`] = value;
  }

  validateAndSetStudentsArray(students) {
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }
}
