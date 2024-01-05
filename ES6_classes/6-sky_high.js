class SkyHighBuilding extends require('./5-building.js').default {
    constructor(sqft, floors) {
      super(sqft);
      this._floors = floors;
    }
  
    get floors() {
      return this._floors;
    }
  
    evacuationWarningMessage() {
      return `Evacuate slowly the ${this._floors} floors.`;
    }
  }
  
  export default SkyHighBuilding;
  