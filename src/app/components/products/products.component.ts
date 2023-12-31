import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductDataSource } from './productDataSource';
import { MatTable } from '@angular/material/table';
import { IProduct } from 'src/app/model/product.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DataSourceService } from './productDataSource';
import { productsList } from './productsList';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @ViewChild(MatTable) myTable!: MatTable<IProduct>;

  produtos = productsList;

  displayedColumns: string[] = [
    'description',
    'price',
    'inventory',
    'measure',
    'provider',
    'active',
  ];

  ngOnInit(): void {
    this.produtos = productsList;
  }

  refreshTable(): void {
    console.log('refreshTable() - Executado');
    this.myTable.renderRows();
  }
}
