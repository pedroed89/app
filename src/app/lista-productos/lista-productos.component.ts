import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
  productos = [{
    id: 1,
    imagen: "https://www.zapatos.uy/storage/10748/conversions/146.W19491000_1920-1200_1555077789_557-thumb.jpg",
    nombre: "Card 1",
    descripcion: "",
    precio: "150",
    categoria: "",
    cantidad: 0
},
{
    id: 2,
    imagen: "https://s.fenicio.app/f2/alliuy/catalogo/articulos/521201703201-002-01_2000-2000_1620327701_5b8.jpg",
    nombre: "Card 2",
    descripcion: "",
    precio: "320",
    categoria: "",
    cantidad: 0
},
{
    id: 3,
    imagen: "https://ep01.epimg.net/verne/imagenes/2015/09/11/articulo/1441988783_165642_1442161238_sumario_normal.jpg",
    nombre: "Card 3",
    descripcion: "",
    precio: "50",
    categoria: "",
    cantidad: 0
},
{
    id: 4,
    imagen: "https://ep01.epimg.net/verne/imagenes/2015/09/11/articulo/1441988783_165642_1442161238_sumario_normal.jpg",
    nombre: "Card 4",
    descripcion: "",
    precio: "50",
    categoria: "",
    cantidad: 0
}
  ];

  backup:any = this.productos;

  constructor() { }

  ngOnInit(): void {
  }

  handler(e){
    if(e.target.value.length === 0) {
      this.productos = this.backup;
    }
    else{
      let newProductos = this.backup.filter(producto => {
        return producto.nombre.toLowerCase().includes(e.target.value.toLowerCase()) === true;
      });
      this.productos = newProductos;
    }
  }

}
