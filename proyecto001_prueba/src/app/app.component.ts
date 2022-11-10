import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'David Alarcón';
  edad = 29;
  email = 'da@gmail.com';
  sueldos = [1000, 2000, 3000];
  activo = true;

  esActivo() {
    if(this.activo)
      return 'Trabajador Activo';
    else 
    return 'trabajador Inactivo';
  }

  ultimos3Sueldos() {
    let suma =0;
    for(let x=0; x<this.sueldos.length; x++)
      suma+= this.sueldos[x];
    return suma;
  }
}
