class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('evacuationWarningMessage method must be implemented in the subclass');
  }
}

export default Building;
