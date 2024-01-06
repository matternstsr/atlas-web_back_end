export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    } else if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    } else {
      this._name = name;
      this._code = code;
    }
  }

  toString() {
    return `[object ${this._code}]`;
  }
}