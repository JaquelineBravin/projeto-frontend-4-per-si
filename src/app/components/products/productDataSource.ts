import { IProduct } from 'src/app/model/product.model';
import { Observable, of } from 'rxjs';

export class DataSourceService {
  products = [
    {
      description: 'desc',
      price: 12,
      inventory: 15,
      measure: 'miliGrama',
      provider: 'prov',
      active: 'Active',
    },
  ];

  constructor() {}

  getProduct(): Observable<any[]> {
    return of(this.products);
  }

  addProduct(product: IProduct) {
    this.products.push(product);
  }
}

export const ProductDataSource: IProduct[] = [
  {
    description: 'desc',
    price: 12,
    inventory: 15,
    measure: 'miliGrama',
    provider: 'prov',
    active: 'Active',
  },
];
