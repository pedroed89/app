import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {
  categorias = [
    {
      nombre:"Zapatos",
      cantidad: 4,
      imagen:""
    },
    {
      nombre:"Remeras",
      cantidad: 6,
      imagen:""
    },
    {
      nombre:"Camisas",
      cantidad: 1,
      imagen:""
    },
    {
      nombre:"Pantalones",
      cantidad: 40,
      imagen:""
    },
    {
      nombre:"Gafas",
      cantidad: 4,
      imagen:""
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
