import { Injectable } from "@angular/core";

export class Engine {
  public cylinders = 4;
}

export class Tires {
  public make = 'Flintstone';
  public model = 'Square';
}

@Injectable({
  providedIn: 'root'
})
export class Car {
  public description = 'DI';

  constructor(public engine: Engine, public tires: Tires) {

  }

  drive() {
    return `${this.description} car with ${this.engine.cylinders} and ${this.tires.make} tires`;
  }
}