import { Component, OnInit } from '@angular/core';
import { Car, Engine, Tires } from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {

  constructor(
    public car: Car
  ) { }

  ngOnInit(): void {
  }

}
