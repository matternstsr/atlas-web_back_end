
class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clonedCar = new this.constructor();
    Object.keys(this).forEach((key) => {
      clonedCar[key] = this[key];
    });
    return clonedCar;
  }
}

export default Car;