import { CarFactory } from './car-factory';
import { CarNoDi } from './car-no-di';
import { Component, OnInit } from '@angular/core';
import { Car, Engine, Tires } from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {

  /* Clase sin inyección de dependencia */
  noDiCar = new CarNoDi;

  /* Clase FactoryCar */
  factoryCar = (new CarFactory).createCar();

  constructor(
    public car: Car
  ) { }

  ngOnInit(): void {
  }

}
