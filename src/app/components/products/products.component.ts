import { Component } from '@angular/core';

export interface PeriodicElement {
  description: string;
  position: number;
  price: number;
  inventory: string;
  measure: string;
  provider: string;
  active: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    description: 'Hydrogen',
    price: 1.0079,
    inventory: 'H',
    measure: 'L',
    provider: 'AWS',
    active: 'YES',
  },
  {
    position: 2,
    description: 'Helium',
    price: 4.0026,
    inventory: 'He',
    measure: 'L',
    provider: 'AWS',
    active: 'YES',
  },
  {
    position: 3,
    description: 'Lithium',
    price: 6.941,
    inventory: 'Li',
    measure: 'L',
    provider: 'AWS',
    active: 'YES',
  },
  {
    position: 4,
    description: 'Beryllium',
    price: 9.0122,
    inventory: 'Be',
    measure: 'L',
    provider: 'AWS',
    active: 'YES',
  },
  {
    position: 5,
    description: 'Boron',
    price: 10.811,
    inventory: 'B',
    measure: 'L',
    provider: 'AWS',
    active: 'YES',
  },
  {
    position: 6,
    description: 'Carbon',
    price: 12.0107,
    inventory: 'C',
    measure: 'L',
    provider: 'AWS',
    active: 'YES',
  },
  {
    position: 7,
    description: 'Nitrogen',
    price: 14.0067,
    inventory: 'N',
    measure: 'L',
    provider: 'AWS',
    active: 'YES',
  },
  {
    position: 8,
    description: 'Oxygen',
    price: 15.9994,
    inventory: 'O',
    measure: 'L',
    provider: 'AWS',
    active: 'YES',
  },
  {
    position: 9,
    description: 'Fluorine',
    price: 18.9984,
    inventory: 'F',
    measure: 'L',
    provider: 'AWS',
    active: 'YES',
  },
  {
    position: 10,
    description: 'Neon',
    price: 20.1797,
    inventory: 'Ne',
    measure: 'L',
    provider: 'AWS',
    active: 'YES',
  },
];
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
  dataSource = ELEMENT_DATA;
}
