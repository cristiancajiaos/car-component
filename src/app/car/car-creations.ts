import { Car, Engine, Tires } from './car';

/* Ejemplo 1: simpleCar() */
export function simpleCar() {
  let car = new Car(new Engine(), new Tires());
  car.description = 'Simple';
  return car;
}

/* Ejemplo 2: superCar() */

class Engine2 {
  constructor(public cylinders: number) {}
}

export function superCar() {
  let bigCylinders = 12;
  let car = new Car(new Engine2(bigCylinders), new Tires());
  car.description = 'Super';
  return car;
}

/* Ejemplo 3: testCar() */
class MockEngine extends Engine {
  public override cylinders: number = 8;
}

class MockTires extends Tires {
  public override make: string = 'YokoGoodStone';
}

export function testCar() {
  let car = new Car(new MockEngine(), new MockTires());
  car.description = 'Test';
  return car;
}
