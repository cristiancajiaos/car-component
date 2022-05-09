import { Car, Engine, Tires } from './car';

/* Ejemplo 1: simpleCar() */
export function simpleCar() {
  let car = new Car(new Engine(), new Tires());
  car.description = 'Simple';
  return car;
}
