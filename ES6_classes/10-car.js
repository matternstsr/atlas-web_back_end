const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  cloneCar() {
    const cloneCar = new this.constructor(this[_brand], this[_motor], this[_color]);
    return cloneCar;
  }
}

export default Car;
