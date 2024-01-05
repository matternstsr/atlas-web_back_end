import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    super(sqft);
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}

export default SkyHighBuilding;
