import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre="hola mundo";
  data = [
    {
      nombre:"Inicio",
      href:""
    },
    {
      nombre:"Contacto",
      href:"/contacto"
    },
    {
      nombre:"Carrito",
      href:"/carrito"
    }
  ];

  constructor(){

  }
}
