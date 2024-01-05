export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateAndSetString(name, 'Name');
    this._length = this.validateAndSetNumber(length, 'Length');
    this._students = this.validateAndSetStudentsArray(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateAndSetString(newName, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateAndSetNumber(newLength, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateAndSetStudentsArray(newStudents);
  }

  validateAndSetString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string`);
    }
    return value;
  }

  validateAndSetNumber(value, attribute) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${attribute} must be a number`);
    }
    return value;
  }

  validateAndSetStudentsArray(students) {
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }
}
