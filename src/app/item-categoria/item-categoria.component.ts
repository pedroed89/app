import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-categoria',
  templateUrl: './item-categoria.component.html',
  styleUrls: ['./item-categoria.component.css']
})
export class ItemCategoriaComponent implements OnInit {

  @Input() nombre:string;
  @Input() cantidad:number;
  constructor() { }

  ngOnInit(): void {
  }

}
