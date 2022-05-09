import { CarNoDi } from './car-no-di';
import { Component, OnInit } from '@angular/core';
import { Car, Engine, Tires } from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {

  noDiCar = new CarNoDi;
  
  constructor(
    public car: Car
  ) { }

  ngOnInit(): void {
  }

}
