import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConsultarClimaComponent } from './components/consultar-clima/consultar-clima.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AgregarClimaComponent } from './components/agregar-clima/agregar-clima.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultarClimaComponent,
    AgregarClimaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
