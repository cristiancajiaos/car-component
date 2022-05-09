import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CarComponent } from './car/car.component';
import { Car, Engine, Tires } from './car/car';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Car, Engine, Tires],
  bootstrap: [AppComponent]
})
export class AppModule { }
