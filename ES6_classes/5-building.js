export default class Building {
  constructor(sqft) {
    if (!(this.constructor instanceof Building) || typeof !this.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
