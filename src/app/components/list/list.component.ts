<<<<<<< HEAD
import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductDataSource } from 'src/app/components/products/productDataSource';

import { productsList } from '../products/productsList';
interface Unit {
  value: string;
  viewValue: string;
}
=======
import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
>>>>>>> bbcfef2ad4eb0c4ce7973b71ffafa8a069b11beb

interface Unit {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
<<<<<<< HEAD
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
=======

export class ListComponent {
  units: Unit[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
>>>>>>> bbcfef2ad4eb0c4ce7973b71ffafa8a069b11beb
}
