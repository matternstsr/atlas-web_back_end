class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[${this._code}] { _name: '${this._name}', _code: '${this._code}' }`;
  }

  // eslint-disable-next-line class-methods-use-this
  get [Symbol.toStringTag]() {
    return 'Airport';
  }
}

export default Airport;
