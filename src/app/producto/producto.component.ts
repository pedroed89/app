import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  numero = 5;
  @Input() nombre:string;
  @Input() imagen:string;
  @Input() precio:string;
  constructor() { }

  ngOnInit(): void {
  }

}
