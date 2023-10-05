import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement } from 'src/app/model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  displayedColumns: string[] = [
    'position',
    'description',
    'price',
    'inventory',
    'measure',
    'provider',
    'active',
  ];
  productSaved: PeriodicElement | null = null;
}
