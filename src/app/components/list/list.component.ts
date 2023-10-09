import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductDataSource } from 'src/app/components/products/productDataSource';

import { productsList } from '../products/productsList';
interface Unit {
  value: string;
  viewValue: string;
}

interface Unit {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  constructor() {}

  addItem = new FormGroup({
    description: new FormControl(''),
    price: new FormControl(''),
    inventory: new FormControl(''),
    measure: new FormControl(''),
    provider: new FormControl(''),
    active: new FormControl(''),
  });

  ngOnInit(): void {
    console.log('ListComponent Inicialized');
  }

  saveData() {
    productsList.push({
      description: this.addItem.value.description ?? '',
      price: Number.parseInt(this.addItem.value.price ?? '0'),
      inventory: Number.parseInt(this.addItem.value.inventory ?? '0'),
      measure: this.addItem.value.measure ?? '',
      provider: this.addItem.value.provider ?? '',
      active: this.addItem.value.active ?? '',
    });

    productsList;
  }
}
